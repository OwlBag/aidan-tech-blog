const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'testuser1',
    password: 'password'
  },
  {
    username: 'testuser2',
    password: 'password'
  },
  {
    username: 'testuser3',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;