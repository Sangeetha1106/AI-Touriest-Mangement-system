const User = require('../../modules/user/user.model');
const Admin = require('../../modules/admin/admin.model');

const setupAssociations = () => {
  // User - Admin Association
  User.hasOne(Admin, { foreignKey: 'userId' });
  Admin.belongsTo(User, { foreignKey: 'userId' });

  // Add other associations here as needed
};

module.exports = setupAssociations;
