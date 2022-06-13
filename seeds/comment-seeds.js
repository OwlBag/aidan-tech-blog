const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'test 1',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'test 2',
    user_id: 1,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;