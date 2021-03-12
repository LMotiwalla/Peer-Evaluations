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
        const forms = mongodb.db("peer-evaluations").collection("scores");

        forms.insertMany(
            Array.from(document.querySelectorAll("[type=radio]:checked")).map(checked => ({
                student: atob(checked.name),
                score: Number(checked.value),
                reviewer: activeMember.Email,
                class: activeMember.Class,
                group: activeMember.Group
            }))
        ).then(() => {
            document.getElementById("eval-succ").hidden = false;
        }).catch(() => {
            document.getElementById("eval-fail").hidden = false;
        });
    };

    // const loginEmailPassword = async (Email, password) => {
    //     const credentials = Realm.Credentials.EmailPassword(Email, password);

    //     const user = await app.logIn(credentials);
    //     return (user.id === app.currentUser.id) ? user : undefined;
    // }

    // const registerEmailPassword = async (Email, password) => {
    //     await app.EmailPasswordAuth.registerUser(Email, password);
    // }

    // const logout = async () => {
    //     await app.currentUser.logOut();
    // };

    // const urlParams = new URLSearchParams(window.location.hash.split("#")[1]);
    // switch (urlParams.get('action')) {
    //     case "EmailConfirmation":
    //         const token = urlParams.get('token');
    //         const tokenId = urlParams.get('tokenId');
    //         await app.EmailPasswordAuth.confirmUser(token, tokenId);
    //         break;
    //     case "resetPassword":
    //         // TODO: Handle Password Reset
    //         break;
    // }

    // // TODO: Registration Form
    // const Email = "roshan_ravi@student.uml.edu";
    // const password = "MyRealmPassword";
    // // registerEmailPassword(Email, password);

    // // TODO: Login Form
    // await loginEmailPassword(Email, password);
    // console.log(app.currentUser.customData);
})();