import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ['user', 'editor', 'admin'], default: 'user' }
});

export default mongoose.model('User', UserSchema);
