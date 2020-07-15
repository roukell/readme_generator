const inquirer = require("inquirer");
const fs = require("fs");


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
    message: "Please write a short description of your project?",
    name: "description"
  },
  {
    type: "input",
    message: "What kind of license should your project have?",
    name: "license"
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "commandDep"
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "commandRun"
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

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function({username, email, project}) {
    
        if (username !== "" && email !== "" && project !=="") {
            console.log(generateMarkdown({username, email, project}));
            
        }
        else {
            console.log("Please enter all information");
            init();
        }
}

// function call to initialize program
init();


