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

<details>
  <summary> 
    3. Add semistandard and lint-staged [branch: feat-semistandard-lint-staged]
  </summary>

  > Add semistandard lint and lint-staged for lint automation. 
  ### steps
  #### Add dependency
  Semistandard - https://github.com/standard/semistandard
  
  Lint-Staged - https://github.com/okonet/lint-staged
  ```javascript
  npm i --save-dev semistandard lint-staged;
  ```
  #### Add .editorconfig file

  Editorconfig - https://editorconfig.org/

  > Below a example of .editorconfig file (check if your IDE have a plugin to generate automatically)

  ```json
    # https://editorconfig.org
    root = true

    [*]
    indent_style = space
    indent_size = 2
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    end_of_line = lf

    [*.md]
    trim_trailing_whitespace = false

    [*.js]
    quote_type = "single"

  ```
  #### Create a lint-staged configuration file (.lintstagedrc.json)

  > This configuration below is used to check all files with extension '.js' and check the style with semistandard rules 
  ```javascript
  {
    "*.js": [
      "./node_modules/.bin/semistandard --fix"
    ]
  }
  ```
  >If you want to use another lint, this is where you must change to which lint you want (and add it to the project via npm) 
  #### Update husky hook to use lint-staged on pre-commit step

  ```javascript
  {
    "hooks": {
      "hooks": {
        "pre-commit": "./node_modules/.bin/lint-staged",
        "commit-msg": "echo \"[Husky] commit-msg example message\"",
        "prepare-commit-msg": "echo \"[Husky] prepare-commit-msg example message\""
      }
    }
  ```
  #### Test lint-staged action with husky

  If you are using my file to create a backend with express (index.js), you should check the contents of this file. 
  
  There are two errors that the semistandard will not like:
  
  1. line 6
  ```javascript
  let thisWillGiveError = "" 
  ```
  >'thisWillGiveError' is assigned a value but never used. (no-unused-vars)semistandard(no-unused-vars)

  2. line 12
  ```javascript
  console.log('GET / called!')
  ```

  > Missing semicolon. (semi)semistandard(semi
  
  To test the lint-staged, resolve one of them and commit the index.js file
  For this documentation. I'll solve the second, add semicolon in line 12 and committing file:

  ```javascript
  elcio@DESKTOP-H3TVAF1 MINGW64 /d/dev/personal/projects/study/guides/husky-scaffold (feat-semistandard-lint-staged)
$ git add index.js 

elcio@DESKTOP-H3TVAF1 MINGW64 /d/dev/personal/projects/study/guides/husky-scaffold (feat-semistandard-lint-staged)
$ git commit -m "refactor: update index to test lint-staged"
husky > pre-commit (node v12.18.3)
[STARTED] Preparing...
[SUCCESS] Preparing...
[STARTED] Running tasks...      
[STARTED] Running tasks for *.js
[STARTED] ./node_modules/.bin/semistandard --fix
[FAILED] ./node_modules/.bin/semistandard --fix [FAILED]
[FAILED] ./node_modules/.bin/semistandard --fix [FAILED]
[SUCCESS] Running tasks...
[STARTED] Applying modifications...
[SKIPPED] Skipped because of errors from tasks.
[STARTED] Reverting to original state because of errors...
[SUCCESS] Reverting to original state because of errors...
[STARTED] Cleaning up...
[SUCCESS] Cleaning up...

✖ ./node_modules/.bin/semistandard --fix:
semistandard: Semicolons For All! (https://github.com/standard/semistandard)
  D:\dev\personal\projects\study\guides\husky-scaffold\index.js:6:7: 'thisWillGiveError' is assigned a value but never used.
husky > pre-commit hook failed (add --no-verify to bypass)
```
> If you see a log like the one above, you have successfully configured lint-staged and lint (semistandard) in your project!
</details>
