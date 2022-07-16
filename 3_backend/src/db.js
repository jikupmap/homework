require('dotenv').config();
const mongoose = require('mongoose');

const { DB_URI } = process.env;

const connect = () => {
  db.connect(DB_URI)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
}

mongoose.connection.on('disconnected', connect);

module.exports = { connect };

//https://www.bezkoder.com/node-express-mongodb-crud-rest-api/
//https://www.zerocho.com/category/NodeJS/post/57924d1e8241b6f43951af1a
//https://poiemaweb.com/mongoose
