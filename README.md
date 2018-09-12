# Hinglish

'HINGLISH' helps you learn Hindi. Hindi is, as of now, the third highest spoken language in the world after Mandarin and English.  Some people want to learn Hindi, but they don’t have a friend to teach them, and they don’t know how to read written Hindi. Now they can use Hinglish, which leverages a spaced repetition algorithm to present questions based on whether they were correct or not.

The spaced repetition algorithm can be described as: 

* Given a list of questions with corresponding "memory values", M, starting at 1:
  - Take the first question in the list
  - Ask the question
  - If the answer was correct:
    * Double the value of M
  - If the answer was wrong:
    * Reset M to 1
* Move the question back M places in the list

The app is deployed [here](https://radiant-woodland-22159.herokuapp.com/)

Information on the server being called can be found [here](https://github.com/thinkful-ei21/suman-harley-spaced-server)

## How to launch application locally:

Clone the repo and cd into the directory where it was cloned (the project directory).

In the project directory (requires Node.js), run:

### `npm install`

Once the node modules are finished installing, run:

### `npm start`

Your default web browser should launch on port 3000, at the landing page.  Alternatively, navigate to the deployed app, linked above.

## How to use:

* The landing page is where users can see a description of the app and log in to learn more, or alternatively click register to make a new account.

![landing-page](./src/images/screenshots/1.png?raw=true "Landing Page")

* The user can use the registration form to make a new account

![registration-page](./src/images/screenshots/2.png?raw=true "Registration Page")

* Once logged in, the user is greeted and can press start to begin

![welcome-page](./src/images/screenshots/3.png?raw=true "Welcome Page")

* The user can see how many attempts s/he has made for the current word, as well as how many times s/he got it correct.  The user can submit an answer

![question-prompt](./src/images/screenshots/4.png?raw=true "Question Prompt")

* Upon submission, the user will be given feedback.  In this case, their answer was wrong, so the correct answer is displayed.

![wrong-answer](./src/images/screenshots/5.png?raw=true "Wrong Answer")

* If the answer was correct, the user is simply told so and presented the button for going to the next question

![correct-answer](./src/images/screenshots/6.png?raw=true "Correct Answer")

## Folder Structure

The app is organized as follows:

```
client/
  .gitignore
  README.md
  package.json
  package-lock.json
  static.json
  public/
    index.html
    favicon.ico
  src/
    config.js
    index.css
    index.js
    local-storage.js
    logo.svg
    registerServiceWorker.js
    services.js
    store.js
    validators.js
    actions/
    components/
    images/
    reducers/
```

The app uses Redux, so the store is where the states are kept, with React components manipulating the state through actions - kept in the actions folder - and actions are used to update the state in reducers - kept in the reducers folder.  All React components are kept in the components folder.

## Built With

* [React.js](https://reactjs.org/) - The web framework used
* [Node.js](https://nodejs.org/en/) - The server framework used
* [MongoDB](https://www.mongodb.com/) - The database used

## Authors

* **Suman Bandita Samantaray** - *Initial work* - [sumanbandita15](https://github.com/sumanbandita15)
* **Harley Jackson** - *Initial work* - [harleyjj](https://github.com/harleyjj)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* ReadMe Template by [PurpleBooth](https://github.com/PurpleBooth)
