import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://jmeanchoff:NeCgz4Z7mZMy@cluster0.w7gw7jx.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetups = db.collection("meetups");

    const result = await meetups.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup successfully added!" });
  }
}

export default handler;
