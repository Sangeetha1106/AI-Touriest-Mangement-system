const bcrypt = require('bcryptjs');
const User = require('./modules/user/user.model');
const { sequelize } = require('./config/db');

const seedData = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // 1. Create default ADMIN user if not exists
    const adminExists = await User.findOne({ where: { email: 'admin@gmail.com' } });
    if (!adminExists) {
      const hashedAdminPassword = await bcrypt.hash('admin123', 10);
      await User.create({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: hashedAdminPassword,
        role: 'admin'
      });
      console.log('✅ Admin user created');
    } else {
      console.log('ℹ️ Admin user already exists');
    }

    // 2. Create sample USER if not exists
    const userExists = await User.findOne({ where: { email: 'user@gmail.com' } });
    if (!userExists) {
      const hashedUserPassword = await bcrypt.hash('user123', 10);
      await User.create({
        name: 'Test User',
        email: 'user@gmail.com',
        password: hashedUserPassword,
        role: 'user'
      });
      console.log('✅ Sample user created');
    } else {
      console.log('ℹ️ Sample user already exists');
    }

    console.log('🏁 Seeding completed');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  }
};

module.exports = seedData;
