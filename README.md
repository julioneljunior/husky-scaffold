# husky-scaffold
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/afonsopacifer/open-source-boilerplate/blob/master/LICENSE.md)

> A scaffold project organized by branches [for the time being] - change this when it is no longer true)

<details>
  <summary> 
    1. Create a basic index.js (back-end)
  </summary>

> Added to test the lint-staged and confirm that code is still running. 
### steps
#### Add dependencies
Express - https://github.com/expressjs/express

Cors - https://github.com/expressjs/cors
 ```javascript
npm i --save express cors;
```

#### Add index.js file with a GET route
something like:
 ```javascript
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

```


#### Run npm start
```javascript
npm start

> husky-scaffold@1.0.0 start D:\dev\personal\projects\study\guides\husky-scaffold
> node index.js

Running on 3000!
```
#### Test using a browser
Open localhost:3000 in a browser and check the console message
```javascript
$ npm start

> husky-scaffold@1.0.0 start D:\dev\personal\projects\study\guides\husky-scaffold
> node index.js

Running on 3000!
GET / called!
```
<details>