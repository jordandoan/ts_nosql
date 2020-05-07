import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  title: String
});

export default mongoose.model('Posts', PostSchema);