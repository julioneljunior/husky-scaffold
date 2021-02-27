# husky-scaffold
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/afonsopacifer/open-source-boilerplate/blob/master/LICENSE.md)

> A scaffold project organized by branches [for the time being] - change this when it is no longer true)
## steps:

<details>
  <summary> 
    1. Create a basic index.js (back-end) [branch: feat-node-express-cors]
  </summary>
  > Added to test the lint-staged and confirm that code is still running. 
  ### steps:
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
</details>

<details>
  <summary> 
    2. Add husky [branch: feat-husky]
  </summary>

  > Add husky to configure hooks. 
  ### steps
  #### Add dependency
  Husky - https://github.com/typicode/husky
  ```javascript
  npm i --save-dev husky@4;
  ```
  > I'm using v4 because v5 is in early access (on the date this file was created) 
  #### Add .huskyrc.json file to configure hooks
  ```json
  {
    "hooks": {
      "pre-commit": "echo \"[Husky] pre-commit example message\"",
      "commit-msg": "echo \"[Husky] commit-msg example message\"",
      "prepare-commit-msg": "echo \"[Husky] prepare-commit-msg example message\""
    }
  }
  ```
  #### Stage husky configuration file
  ```javascript
  git add .huskyrc.json
  ```
  #### Test husky hooks execution using git commit action

  ```javascript
  git commit -m "feat: add husky configs"

    husky > pre-commit (node v12.18.3)
    [Husky] pre-commit example message
    husky > prepare-commit-msg (node v12.18.3)
    [Husky] prepare-commit-msg example message
    husky > commit-msg (node v12.18.3)
    [Husky] commit-msg example message
    [feat-husky dfd1f8d] feat: add husky configs
    1 file changed, 7 insertions(+)
    create mode 100644 .huskyrc.json
  ```
  > If you see a log like the one above, you have successfully configured husky in your project!
</details>