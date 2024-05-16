const fs = require('fs');

const data = [
  {
    userName: 'userName 1',
    address: 'Lynwood',
    userId: 'userId 1',
    Identification: 22,
    status: false,
    id: '1',
  },
  {
    userName: 'userName 2',
    address: 'Providence',
    userId: 'userId 2',
    Identification: 77,
    status: false,
    id: '2',
  },
  {
    userName: 'userName 3',
    address: 'Everett',
    userId: 'userId 3',
    Identification: 25,
    status: false,
    id: '3',
  },
  {
    userName: 'userName 4',
    address: 'Levittown',
    userId: 'userId 4',
    Identification: 2,
    status: false,
    id: '4',
  },
  {
    userName: 'userName 5',
    address: 'Rock Hill',
    userId: 'userId 5',
    Identification: 78,
    status: false,
    id: '5',
  },
  {
    userName: 'userName 6',
    address: 'Pomona',
    userId: 'userId 6',
    Identification: 63,
    status: false,
    id: '6',
  },
  {
    userName: 'userName 7',
    address: 'Fort Wayne',
    userId: 'userId 7',
    Identification: 79,
    status: false,
    id: '7',
  },
  {
    userName: 'userName 8',
    address: 'Providence',
    userId: 'userId 8',
    Identification: 93,
    status: false,
    id: '8',
  },
  {
    userName: 'userName 9',
    address: 'Delano',
    userId: 'userId 9',
    Identification: 29,
    status: false,
    id: '9',
  },
  {
    userName: 'userName 10',
    address: 'North Little Rock',
    userId: 'userId 10',
    Identification: 22,
    status: false,
    id: '10',
  },
];

const newJson = JSON.stringify(data);
fs.writeFileSync('dataJson.txt', newJson);