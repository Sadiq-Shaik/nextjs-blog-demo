//  /api/contact route

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.wbu0y.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectString);
    } catch (error) {
      res.status(500).json({ message: "Coudnt connect to DB" });
      return;
    }

    const db = client.db();

    try {
      const result = db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertdId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message", msg: newMessage });
  }
}

export default handler;
