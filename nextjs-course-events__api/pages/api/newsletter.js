import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://jmeanchoff:NeCgz4Z7mZMy@cluster0.w7gw7jx.mongodb.net/?retryWrites=true&w=majority"
    );
		const db = client.db();

		await db.collection('emails').insertOne({email: userEmail});

		client.close();

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
