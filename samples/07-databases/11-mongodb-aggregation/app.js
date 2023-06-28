import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';  // replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected successfully to MongoDB');

  // perform operations on the collection
  const collection = client.db("test").collection("devices");

  client.close();
});

collection.aggregate([
  { $group: { _id: "$age", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]).toArray((err, results) => {
  if (err) {
    console.error('Error aggregating documents:', err);
    return;
  }
  console.log('Aggregation results:', results);
});
