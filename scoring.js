(async () => {
    const app = new Realm.App({
        id: "application-0-tcpbe"
    });
    await app.logIn(Realm.Credentials.anonymous());

    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const forms = mongodb.db("peer-evaluations").collection("scores");

    const tallyValues = await forms.aggregate([
        { 
            "$group": {
                "_id": {
                    "student": "$student",
                    "class": "$class",
                    "group": "$group"
                },
                "numReviews": { "$sum": 1 },
                "netScores": { "$sum": "$score" }
            }
        },
        { 
            "$addFields": {
                "score": {
                    "$divide": ["$netScores", "$numReviews"]
                }
            }
        },
        {
            "$sort": {
                "_id.class": -1,
                "_id.group": -1,
                "_id.student": -1
            }
        }
    ]);
    tallyValues.reverse().forEach(tallyValue => {
        document.getElementById("tally").innerHTML += `
            <tr>\
            <td>${tallyValue._id.class}</td>\
            <td>${tallyValue._id.group}</td>\
            <td>${tallyValue._id.student}</td>\
            <td>${tallyValue.score}</td>\
            <td>${tallyValue.numReviews}</td>\
            </tr>`;
    });

    const rawValues = await forms.find({},{});
    rawValues.reverse().forEach(rawValue => {
        document.getElementById("raw").innerHTML += `
            <tr>\
            <td>${rawValue.class}</td>\
            <td>${rawValue.group}</td>\
            <td>${rawValue.student}</td>\
            <td>${rawValue.reviewer}</td>\
            <td>${rawValue.score}</td>\
            </tr>`;
    });
})();