import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

let user

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
});

await User.sync({ force: true })
  .then(() => console.log('User table has been created.'));

user = await User.create({ firstName: 'John', lastName: 'Doe' })
  .then(user => console.log(user.toJSON()))
  .catch(error => console.error(error));

// Fetch all users
const users = await User.findAll()
  .then(users => console.log(users))
  .catch(error => console.error(error));

// Fetch a user by primary key
user = await User.findByPk(1)
  .then(user => console.log(user.toJSON()))
  .catch(error => console.error(error));

// Fetch a user with a certain first name
user = await User.findOne({ where: { firstName: 'John' } })
  .then(user => console.log(user.toJSON()))
  .catch(error => console.error(error));

// Update a user's last name
await User.findByPk(1)
  .then(user => {
    user.lastName = 'Smith';
    return user.save();
  })
  .then(user => console.log(user.toJSON()))
  .catch(error => console.error(error));

// Update all users with first name 'John' to have the last name 'Smith'
await User.update({ lastName: 'Smith' }, { where: { firstName: 'John' } })
  .then(() => console.log('Updated successfully'))
  .catch(error => console.error(error));

// Delete a user
await User.findByPk(1)
  .then(user => user.destroy())
  .then(() => console.log('Deleted successfully'))
  .catch(error => console.error(error));

// Delete all users with first name 'John'
await User.destroy({ where: { firstName: 'John' } })
  .then(() => console.log('Deleted successfully'))
  .catch(error => console.error(error));
