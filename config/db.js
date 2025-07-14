const mongoose = require('mongoose');

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión establecida con MongoDB');
  } catch (error) {
    console.error('Error al conectar con MongoDB', error.message);
  }
}

module.exports = dbConection;