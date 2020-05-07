import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  trait: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Posts',
  }]
});

export default mongoose.model('Users', UserSchema);