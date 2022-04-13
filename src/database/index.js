const mongoose = require('mongoose');
const URL_MONGO = ''

async function connect() {
  try {
    await mongoose.connect(URL_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.log('Erro ao conectar ao MongoDB');
  }
}

connect()