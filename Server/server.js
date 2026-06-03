const express = require("express");
const cors = require("cors");
const path = require("path");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const client = new MongoClient(process.env.MONGO_URI);

let scores;
let comments;
let roster;

// Get roster data
app.get("/api/roster", async (req, res) => {
  try {
    const rosterData = await roster.find({}).toArray();
    res.json({ rosterData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get roster data" });
  }
});

// Upload roster CSV
app.post("/api/roster/upload", express.text(), async (req, res) => {
  try {
    const csvData = req.body;
    const lines = csvData.split("\n").filter(line => line.trim() !== "");

    const rosterDocs = lines.map(line => {
      const fields = line.split(",").map(f => f.trim());
      return {
        class: fields[0],
        group: fields[1],
        email: fields[2],
        first_name: fields[3],
        last_name: fields[4],
        uploadedAt: new Date()
      };
    });

    await roster.deleteMany({});
    await roster.insertMany(rosterDocs);

    res.json({ success: true, count: rosterDocs.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Get scoring-page data
app.get("/api/scoring", async (req, res) => {
  try {
    const tallyValues = await scores.aggregate([
      {
        $group: {
          _id: {
            student: "$student",
            class: "$class",
            group: "$group"
          },
          score: { $avg: "$score" },
          scores: { $push: "$score" }
        }
      },
      {
        $sort: {
          "_id.class": -1,
          "_id.group": -1,
          "_id.student": -1
        }
      },
      {
        $lookup: {
          from: "comments",
          let: {
            student: "$_id.student",
            class: "$_id.class",
            group: "$_id.group"
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$reviewer", "$$student"] },
                    { $eq: ["$class", "$$class"] },
                    { $eq: ["$group", "$$group"] }
                  ]
                }
              }
            }
          ],
          as: "comments"
        }
      }
    ]).toArray();

    const commentValues = await comments.find({}).toArray();
    const rawValues = await scores.find({}).toArray();

    res.json({
      tallyValues,
      commentValues,
      rawValues
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get scoring data" });
  }
});

app.post("/api/scores", async (req, res) => {
  try {
    const { scores: scoreSubmissions, comment } = req.body;

    if (!Array.isArray(scoreSubmissions) || scoreSubmissions.length === 0) {
      return res.status(400).json({ error: "No scores submitted" });
    }

    await scores.insertMany(scoreSubmissions);

    if (comment && comment.comment && comment.comment.trim() !== "") {
      await comments.insertOne(comment);
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);

    if (err.message && err.message.includes("E11000")) {
      return res.status(409).json({
        error: "Submission failed due to pre-existing submission."
      });
    }

    res.status(500).json({ error: "Submission failed" });
  }
});

app.delete("/api/scoring", async (req, res) => {
  try {
    await scores.deleteMany({});
    await comments.deleteMany({});

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete scoring data" });
  }
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Server is working." });
});

async function startServer() {
  await client.connect();

  const db = client.db("peer-evaluations");
  scores = db.collection("scores");
  comments = db.collection("comments");
  roster = db.collection("roster");

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);