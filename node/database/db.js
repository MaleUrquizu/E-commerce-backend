/*import mongoose from 'mongoose'

const url = 'mongodb://127.0.0.1:27017/ecommerce'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=> { console.log("Conectado a MongoDB!!!")})
db.on('error', ()=> { console.log("Error al conectar a MongoDB!")})

export default db*/

import mongoose from 'mongoose';

const url = `mongodb://127.0.0.1:27017/ecommerce`;

const connect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB!!");
  } catch (error) {
    console.error(error);
  }
};

export default connect;
