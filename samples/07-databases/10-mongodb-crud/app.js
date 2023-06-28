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

const doc = { name: 'John Doe', age: 30, email: 'john.doe@example.com' };

collection.insertOne(doc, (err, result) => {
  if (err) {
    console.error('Error inserting document:', err);
    return;
  }
  console.log('Document inserted:', result.insertedId);
});

const docs = [
  { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { name: 'Jane Doe', age: 28, email: 'jane.doe@example.com' },
];

collection.insertMany(docs, (err, result) => {
  if (err) {
    console.error('Error inserting documents:', err);
    return;
  }
  console.log('Documents inserted:', result.insertedIds);
});

collection.find({}).toArray((err, docs) => {
  if (err) {
    console.error('Error finding documents:', err);
    return;
  }
  console.log('Documents found:', docs);
});

const query = { name: 'John Doe' };

collection.findOne(query, (err, doc) => {
  if (err) {
    console.error('Error finding document:', err);
    return;
  }
  console.log('Document found:', doc);
});

const query = { name: 'John Doe' };
const update = { $set: { age: 31 } };

collection.updateOne(query, update, (err, result) => {
  if (err) {
    console.error('Error updating document:', err);
    return;
  }
  console.log('Document updated:', result.modifiedCount);
});

const query = { name: { $in: ['John Doe', 'Jane Doe'] } };
const update = { $inc: { age: 1 } };

collection.updateMany(query, update, (err, result) => {
  if (err) {
    console.error('Error updating documents:', err);
    return;
  }
  console.log('Documents updated:', result.modifiedCount);
});

const query = { name: 'John Doe' };

collection.deleteOne(query, (err, result) => {
  if (err) {
    console.error('Error deleting document:', err);
    return;
  }
  console.log('Document deleted:', result.deletedCount);
});

const query = { name: { $in: ['John Doe', 'Jane Doe'] } };

collection.deleteMany(query, (err, result) => {
  if (err) {
    console.error('Error deleting documents:', err);
    return;
  }
  console.log('Documents deleted:', result.deletedCount);
});
