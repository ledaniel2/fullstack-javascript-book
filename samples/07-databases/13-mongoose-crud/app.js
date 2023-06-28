import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

const User = model('User', userSchema);

// replace with your MongoDB connection string
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected successfully to MongoDB using Mongoose');
});

const newUser = new User({
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
});

newUser.save((err, user) => {
  if (err) return console.error(err);
  console.log('User saved:', user);
});

User.find((err, users) => {
  if (err) return console.error(err);
  console.log('Users:', users);
});

User.findOne({ name: 'John Doe' }, (err, user) => {
  if (err) return console.error(err);
  console.log('User:', user);
});

const query = { name: 'John Doe' };
const update = { age: 31 };

User.updateOne(query, update, (err, res) => {
  if (err) return console.error(err);
  console.log('Update result:', res);
});

const query = { name: 'John Doe' };

User.deleteOne(query, (err, res) => {
  if (err) return console.error(err);
  console.log('Delete result:', res);
});

User.find({ age: { $gt: 20 } })
  .sort('name')
  .skip(10)
  .limit(10)
  .exec((err, users) => {
    if (err) return console.error(err);
    console.log('Users:', users);
  });
