const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/weather_app')

const db = mongoose.connection;

// Log successful connection
db.on('connected', () => {
    console.log('Mongoose connected to the database successfully.');
});

// Log errors
db.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});

// Log disconnection
db.on('disconnected', () => {
    console.log('Mongoose disconnected from the database.');
});

module.exports = db;