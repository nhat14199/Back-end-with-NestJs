const fs = require('fs');

const data = [
  {
    produceName: 'produceName 1',
    price: 76,
    categoryId: 'categoryId 1',
    id: '1',
  },
  {
    produceName: 'produceName 2',
    price: 33,
    categoryId: 'categoryId 2',
    id: '2',
  },
  {
    produceName: 'produceName 3',
    price: 56,
    categoryId: 'categoryId 3',
    id: '3',
  },
  {
    produceName: 'produceName 4',
    price: 67,
    categoryId: 'categoryId 4',
    id: '4',
  },
  {
    produceName: 'produceName 5',
    price: 73,
    categoryId: 'categoryId 5',
    id: '5',
  },
  {
    produceName: 'produceName 6',
    price: 6,
    categoryId: 'categoryId 6',
    id: '6',
  },
  {
    produceName: 'produceName 7',
    price: 46,
    categoryId: 'categoryId 7',
    id: '7',
  },
  {
    produceName: 'produceName 8',
    price: 29,
    categoryId: 'categoryId 8',
    id: '8',
  },
  {
    produceName: 'produceName 9',
    price: 7,
    categoryId: 'categoryId 9',
    id: '9',
  },
  {
    produceName: 'produceName 10',
    price: 84,
    categoryId: 'categoryId 10',
    id: '10',
  },
  {
    produceName: 'produceName 11',
    price: 89,
    categoryId: 'categoryId 11',
    id: '11',
  },
  {
    produceName: 'produceName 12',
    price: 84,
    categoryId: 'categoryId 12',
    id: '12',
  },
  {
    produceName: 'produceName 13',
    price: 87,
    categoryId: 'categoryId 13',
    id: '13',
  },
];

const newJson = JSON.stringify(data);
fs.writeFileSync('dataJson.txt', newJson);
