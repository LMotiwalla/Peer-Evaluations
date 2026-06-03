(async () => {
  // Fetch roster from server API
  const rosterResponse = await fetch("/api/roster");
  const rosterData = await rosterResponse.json();

  const members = rosterData.rosterData.map(member => ({
    Group: member.group,
    Email: member.email,
    First_Name: member.first_name,
    Last_Name: member.last_name,
    Class: member.class
  }));

  $("#studentEmail").on("input", () => {
    const activeMemberClasses = members.filter(member => (
      member.Email.toLowerCase() === document.getElementById("studentEmail").value.toLowerCase()
    ));

    if (activeMemberClasses.length > 0) {
      $("#studentClass").html(activeMemberClasses.map(entry => `<option>${entry["Class"]}</option>`));
      $("#req-form-class").show();
      $("#req-form-submit").show();
      $("#email-warn").hide();
    } else {
      $("#email-warn").show();
      $("#req-form-class").hide();
      $("#req-form-submit").hide();
    }
  });

  let activeMember;

  document.getElementById("req-form-submit").onclick = () => {
    activeMember = members.filter(member => (
      member.Email.toLowerCase() === document.getElementById("studentEmail").value.toLowerCase() &&
      member.Class.toLowerCase() === document.getElementById("studentClass").value.toLowerCase()
    ))[0];

    if (!activeMember) {
      document.getElementById("auth-fail").hidden = false;
      return;
    }

    document.getElementById("auth-fail").hidden = true;

    document.getElementById("member").innerText =
      `${activeMember.First_Name} ${activeMember.Last_Name} (${activeMember.Group.replace("_", " ")})`;

    const groupMembers = members.filter(member => (
      member.Class === activeMember.Class &&
      member.Group === activeMember.Group &&
      member.Email !== activeMember.Email
    ));

    document.getElementById("scoring-form-input").innerHTML = "<hr>";

    groupMembers.forEach(member => {
      document.getElementById("scoring-form-input").innerHTML +=
        `<div>
          <p>${member.First_Name} ${member.Last_Name}: </p>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-1" value="1">
            <label class="form-check-label" for="${btoa(member.Email)}-1">1</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-2" value="2">
            <label class="form-check-label" for="${btoa(member.Email)}-2">2</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-3" value="3">
            <label class="form-check-label" for="${btoa(member.Email)}-3">3</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-4" value="4">
            <label class="form-check-label" for="${btoa(member.Email)}-4">4</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-5" value="5">
            <label class="form-check-label" for="${btoa(member.Email)}-5">5</label>
          </div>
        </div><hr>`;
    });

    document.getElementById("request-form").hidden = true;
    document.getElementById("scoring-form").hidden = false;
  };

  document.getElementById("scoring-form-submit").onclick = async () => {
    document.getElementById("eval-succ").hidden = true;
    document.getElementById("eval-fail").hidden = true;

    const scoreSubmissions = Array.from(
      document.querySelectorAll("[type=radio]:checked")
    ).map(checked => ({
      student: atob(checked.name),
      score: Number(checked.value),
      reviewer: activeMember.Email,
      class: activeMember.Class,
      group: activeMember.Group
    }));

    const feedbackText = document.getElementById("feedbackTextbox").value;

    const comment = feedbackText && feedbackText.trim() !== ""
      ? {
        reviewer: activeMember.Email,
        class: activeMember.Class,
        group: activeMember.Group,
        comment: feedbackText
      }
      : null;

    try {
      const response = await fetch("/api/scores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          scores: scoreSubmissions,
          comment: comment
        })
      });

      const result = await response.json();

      if (!response.ok) {
        document.getElementById("eval-fail").innerText =
          result.error || "Submission Failed.";
        document.getElementById("eval-fail").hidden = false;
        return;
      }

      document.getElementById("scoring-form").hidden = true;
      document.getElementById("eval-succ").hidden = false;
    } catch (err) {
      console.error(err);
      document.getElementById("eval-fail").innerText = "Submission Failed.";
      document.getElementById("eval-fail").hidden = false;
    }
  };

  // Add roster upload functionality
  document.getElementById("upload-roster").onclick = async () => {
    const fileInput = document.getElementById("roster-file");
    const statusDiv = document.getElementById("upload-status");

    if (!fileInput.files.length) {
      statusDiv.className = "alert alert-danger";
      statusDiv.innerText = "Please select a CSV file.";
      statusDiv.hidden = false;
      return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const csvData = e.target.result;
        const response = await fetch("/api/roster/upload", {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: csvData
        });

        const result = await response.json();

        if (!response.ok) {
          statusDiv.className = "alert alert-danger";
          statusDiv.innerText = result.error || "Upload failed.";
        } else {
          statusDiv.className = "alert alert-success";
          statusDiv.innerText = `Successfully uploaded ${result.count} students.`;
          // Refresh page to load new roster
          setTimeout(() => location.reload(), 1500);
        }
        statusDiv.hidden = false;
      } catch (err) {
        console.error(err);
        statusDiv.className = "alert alert-danger";
        statusDiv.innerText = "Upload failed.";
        statusDiv.hidden = false;
      }
    };

    reader.readAsText(file);
  };
})();