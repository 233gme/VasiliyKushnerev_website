import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: []
  },
  views: {
    type: Number,
    default: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  img: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
}, {
  timestamps: true
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
