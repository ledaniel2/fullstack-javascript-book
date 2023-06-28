import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
});

const authorSchema = new Schema({
  name: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
});

const Book = model('Book', bookSchema);
const Author = model('Author', authorSchema);

Author
  .findOne({ name: 'John Doe' })
  .populate('books')
  .then((author) => console.log('Author:', author))
  .catch((err) => console.log(err));
