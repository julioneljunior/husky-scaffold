const cors = require('cors');
const express = require('express');

const app = express();
const port = 3000;
let thisWillGiveError = "";

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log('GET / called!')
  res.send('All configured!');
});

app.listen(port);
console.log(`Running on ${port}!`);
