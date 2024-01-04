const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const saveDataToDatabase = async (data) => {
  try {
    // 實際的資料庫保存邏輯...
    console.log('Data saved to database successfully.');
  } catch (error) {
    console.error('Error saving data to database:', error);
    throw error;
  }
};

module.exports = { saveDataToDatabase };