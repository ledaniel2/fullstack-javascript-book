import mongoose from 'mongoose';

// replace with your MongoDB connection string
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected successfully to MongoDB using Mongoose');
});
