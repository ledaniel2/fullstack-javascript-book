import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
});

User.sync({ force: true })
  .then(() => console.log('User table has been created.'));
