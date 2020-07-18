const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "project"
  },
  {
    type: "input",
    message: "What is your repository's name?",
    name: "repoName"
  },
  {
    type: "input",
    message: "Please write a short description of your project?",
    name: "description"
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "licence",
    choices: [
        "MIT", 
        "GPLv3", 
        "Apache",
        "BSD 3"
      ] 
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installDepCommand"
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "runTestCommand"
  },{
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "repoUse"
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "repoContribute"
  }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
        console.log("Successful");
      });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function({
      username, 
      email, 
      project,
      repoName, 
      description, 
      licence, 
      installDepCommand, 
      runTestCommand, 
      repoUse, 
      repoContribute}) {
        if (
        username !== "" && 
        email !== "" && 
        project !=="" &&
        repoName !=="" && 
        description !=="" && 
        licence !=="" && 
        installDepCommand !=="" && 
        runTestCommand !=="" &&
        repoUse !=="" &&
        repoContribute !=="") {
            // console.log(generateMarkdown({
            //   username, 
            //   email, 
            //   project,
            //   repoName, 
            //   description, 
            //   licence, 
            //   installDepCommand, 
            //   runTestCommand, 
            //   repoUse, 
            //   repoContribute}));

            writeToFile("README.md", generateMarkdown({
              username, 
              email, 
              project,
              repoName, 
              description, 
              licence, 
              installDepCommand, 
              runTestCommand, 
              repoUse, 
              repoContribute}));
        }
        else {
            console.log("Please enter all information");
            init();
        }
    })
}

// function call to initialize program
init();
