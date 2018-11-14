const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const postSchema = new Schema({
  title: { type: String, required: false, unique: true },
  content: { type: String, required: true },
  name: { type: String }
}, { collection : 'posts' });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
