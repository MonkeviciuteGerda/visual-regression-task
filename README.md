# visual-regression-task
Visual regression task with cypress image snapshot plugin

## Prerequisites: 
- Install node.js (version is not important)
- Set up Juice shop to run locally
  - git clone https://github.com/MonkeviciuteGerda/juice-shop.git (I prepared a slightly modified version of the system)
  - cd juice-shop
  - npm i
  - npm start
  - browse localhost:3000
OR
- You can use my juice shop version deployed on Heroku https://juice-shop-db.herokuapp.com/#

Note: you can set up Juice shop to run in Heroku (follow readme instructions), or use your old version of the system.

## Evironment setup
- Clone this github repository
  - On the main page click Code -> select HTTPS and copy the url
  - Go to the terminal in your selected directory
  - Type `git clone https://github.com/MonkeviciuteGerda/visual-regression-task.git` and click enter
  - Enter this repository in the terminal, type `npm i` and wait for everything to install
  - Open this project in your selected IDE
- To run tests not in headless mode type `npm run cypress:open` in your terminal and click enter
- To run tests in headless mode type `npm run cypress:run` in your terminal and click enter.

Note: tests on headless mode are run on different resolution, so they will fail compared with current baseTests

## Cypress image snapshot plugin
- Visit https://github.com/jaredpalmer/cypress-image-snapshot to learn more about plugin

## Tasks
1. Test About us page
2. Test home page on mobile Pixel 2 and tablet iPad pro resolutions
3. Write a test to Write a review for a product and then use visual regression to test it
4. Select your own 2 Test cases and implement them, use data mocking and different plugin configurations

Notes: try to really investigate the plugin and its capabilities.

## More
- An interesting blog post on visual regression https://medium.com/loftbr/visual-regression-testing-eb74050f3366

### Have fun!
