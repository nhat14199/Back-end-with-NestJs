const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/users');

const products = new Schema(
  {
    produceName: String,
    price: Number,
    categoryId: String,
    id: String,
  },
  { collection: 'products' },
);

const user = new Schema(
  {
    name: String,
    age: Number,
  },
  { collection: 'users' },
);
const getDataFromSever = async () => {
  try {
    const mangaDB = mongoose.model('nestjs-mongodb', user);
    const data = await mangaDB.find({});
    console.log('mangaDB', data);
  } catch (error) {
    console.log(error);
  }
};

getDataFromSever();
