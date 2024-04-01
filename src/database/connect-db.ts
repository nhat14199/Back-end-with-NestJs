const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/nestjs-mongodb');

const products = new Schema(
  {
    produceName: String,
    price: Number,
    categoryId: String,
    id: String,
  },
  { collection: 'products' },
);

// async function fetchData() {
//   try {
//     const productsDB = mongoose.model('nestjs-mongodb', products);
//     const data = await productsDB.find({});
//     console.log('data', data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();

const manga = new Schema(
  {
    comicId: String,
    title: String,
    shortTitle: String,
    description: String,
    scrapeUrl: String,
    contents: Array,
    mediaType: String,
    resource: String,
    createdAt: String,
    updatedAt: String,
    chapNumber: String,
  },
  { collection: 'db-manga' },
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
