import clientPromise from '../../lib/mongodb'

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const todos = await db
    .collection("todos")
    .find({})
    .limit(20)
    .toArray();
  res.json({ todos });
};