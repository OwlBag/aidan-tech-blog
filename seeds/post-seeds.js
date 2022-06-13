const { Post } = require('../models');

const postData = [
  {
    title: "Test Post 1",
    post_content: 'cool post',
    user_id: 1,
  },
  {
    title: 'Test Post 2',
    post_content: 'Another cool post',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;