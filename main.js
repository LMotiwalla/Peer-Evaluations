const members = memberCSVData.split("\n").map((member) => {
    member = member.split(",").map(field => field.trim());
    return {
      "Group": member[0],
      "Email": member[1],
      "First_Name": member[2],
      "Last_Name": member[3],
      "Class": member[4]
    }
});

(async () => {
    const app = new Realm.App({
        id: "application-0-tcpbe"
    });
    await app.logIn(Realm.Credentials.anonymous());

    var activeMember;
    document.getElementById("req-form-submit").onclick = () => {
        activeMember = members.filter(member => (
            member.Email.toLowerCase() == document.getElementById("studentEmail").value.toLowerCase() &&
            member.Class.toLowerCase() == document.getElementById("studentClass").value.toLowerCase()
        ))[0];

        if(!activeMember) 
            document.getElementById("auth-fail").hidden = false;
        else
            document.getElementById("auth-fail").hidden = true;


        document.getElementById("member").innerText = `${activeMember.First_Name} ${activeMember.Last_Name} (${activeMember.Group.replace("_", " ")})`;

        const groupMembers = members.filter(member => (
            member.Class == activeMember.Class &&
            member.Group == activeMember.Group &&
            member.Email != activeMember.Email
        ));

        groupMembers.forEach(member =>{
            document.getElementById("scoring-form-input").innerHTML += 
                `<div> \
                    <p>${member.First_Name} ${member.Last_Name}: </p> \
                    <div class="form-check form-check-inline">\
                      <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-1" value="1">\
                      <label class="form-check-label" for="${btoa(member.Email)}">1</label>\
                    </div>\
                    <div class="form-check form-check-inline">\
                      <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-2" value="2">\
                      <label class="form-check-label" for="${btoa(member.Email)}">2</label>\
                    </div>\
                    <div class="form-check form-check-inline">\
                      <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-3" value="3">\
                      <label class="form-check-label" for="${btoa(member.Email)}">3</label>\
                    </div>\
                    <div class="form-check form-check-inline">\
                      <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-4" value="4">\
                      <label class="form-check-label" for="${btoa(member.Email)}">4</label>\
                    </div>\
                    <div class="form-check form-check-inline">\
                      <input class="form-check-input" type="radio" name="${btoa(member.Email)}" id="${btoa(member.Email)}-5" value="5">\
                      <label class="form-check-label" for="${btoa(member.Email)}">5</label>\
                    </div>\
                </div><hr>`;
        });

        document.getElementById("request-form").hidden = true;
        document.getElementById("scoring-form").hidden = false;
    };


    document.getElementById("scoring-form-submit").onclick = () => {
        document.getElementById("eval-succ").hidden = true;
        document.getElementById("eval-fail").hidden = true;

        const mongodb = app.currentUser.mongoClient("mongodb-atlas");
        const db = mongodb.db("peer-evaluations");
        
        db.collection("scores").insertMany(
            Array.from(document.querySelectorAll("[type=radio]:checked")).map(checked => ({
                student: atob(checked.name),
                score: Number(checked.value),
                reviewer: activeMember.Email,
                class: activeMember.Class,
                group: activeMember.Group
            }))
        ).then(() => {
            if(document.getElementById("feedbackTextbox").value && document.getElementById("feedbackTextbox") != "")
                db.collection('comments').insertOne({
                    reviewer: activeMember.Email,
                    class: activeMember.Class,
                    group: activeMember.Group,
                    comment: document.getElementById("feedbackTextbox").value
                }).then(() => {
                    document.getElementById("eval-succ").hidden = false;
                }).catch(() => {
                    console.log('Comment Submission Failed');
                    document.getElementById("eval-fail").hidden = false;
                });
            else
                document.getElementById("eval-succ").hidden = false;
        }).catch(() => {
            console.log('Score Submission Failed');
            document.getElementById("eval-fail").hidden = false;
        });
    };
})();