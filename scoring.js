var tallyScoreCSV = `Class,Group,Student Email,Student Score,Evaluation Submitted,Student Feedback (if provided)`;
(async () => {
    const app = new Realm.App({
        id: "application-0-tcpbe"
    });
    await app.logIn(Realm.Credentials.anonymous());

    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const scores = mongodb.db("peer-evaluations").collection("scores");
    const comments = mongodb.db("peer-evaluations").collection("comments");

    const tallyValues = await scores.aggregate([
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
        },
        {
            "$lookup": {
                "from": "comments",
                "let": { 
                    "student": "$_id.student",
                    "class": "$_id.class",
                    "group": "$_id.group"
                },
                "pipeline": [
                    { "$match":
                       { "$expr":
                          { "$and":
                             [
                                { "$eq": [ "$reviewer",  "$$student" ] },
                                { "$eq": [ "$class",  "$$class" ] },
                                { "$eq": [ "$group",  "$$group" ] }
                             ]
                          }
                       }
                    }
                ],
                as: "comments"
            }
        },
        {
            "$lookup": {
                "from": "scores",
                "let": { 
                    "student": "$_id.student",
                    "class": "$_id.class",
                    "group": "$_id.group"
                },
                "pipeline": [
                    { "$match":
                       { "$expr":
                          { "$and":
                             [
                                { "$eq": [ "$reviewer",  "$$student" ] },
                                { "$eq": [ "$class",  "$$class" ] },
                                { "$eq": [ "$group",  "$$group" ] }
                             ]
                          }
                       }
                    }
                ],
                as: "scores"
            }
        }
    ]);
    tallyValues.reverse().forEach(tallyValue => {
        tallyValue.comment = tallyValue.comments.length > 0 ?
            tallyValue.comments[0].comment.replaceAll('\n',' ').replaceAll( /\s\s+/g, ' ') : "N/A";
        tallyValue.submitted = tallyValue.scores.length > 0 ? "Y" : "N";

        document.getElementById("tally").innerHTML += `
            <tr>\
            <td>${tallyValue._id.class}</td>\
            <td>${tallyValue._id.group}</td>\
            <td>${tallyValue._id.student}</td>\
            <td>${tallyValue.score.toFixed(2)}</td>\
            <td>${tallyValue.submitted}</td>\
            <td>${tallyValue.comment}</td>\
            </tr>`;

        tallyScoreCSV += `\n"${tallyValue._id.class}","${tallyValue._id.group}","${tallyValue._id.student}",${tallyValue.score.toFixed(2)},"${tallyValue.submitted}","${tallyValue.comment}"`;
    });

    const commentValues = await comments.find({},{});
    commentValues.reverse().forEach(commentValue => {
        document.getElementById("feedback").innerHTML += `
            <tr>\
            <td>${commentValue.class}</td>\
            <td>${commentValue.group}</td>\
            <td>${commentValue.reviewer}</td>\
            <td>${commentValue.comment}</td>\
            </tr>`;
    });

    const rawValues = await scores.find({},{});
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

    const link = document.getElementById("req-scoring-overview");
    link.hidden = false;
    link.href = URL.createObjectURL(new Blob([tallyScoreCSV], {type: "text/csv"}));
    link.download = `PeerEvaluations-${(new Date()).toISOString()}.csv`;
})();