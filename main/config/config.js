const Sequelize = require('sequelize');
require('dotenv').config();

// Get database configuration from environment variables
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST || 'localhost';
const dbDialect = process.env.DB_DIALECT || 'mysql';
const dbPort = process.env.DB_PORT || 3306;

// Validate if the required environment variables are set
if (!dbName || !dbUser || !dbPassword) {
  throw new Error('Please provide DB_NAME, DB_USER, and DB_PASSWORD in the environment variables.');
}

// Create connection to our db
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
  port: dbPort,
});

// Test the connection to the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
