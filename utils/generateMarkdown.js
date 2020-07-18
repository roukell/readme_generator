// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ![License](https://img.shields.io/github/license/${data.username}/${data.repoName})

  ## Description
  * ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  To install necessary dependencies, run the following command:

      ${data.installDepCommand}

  ## Usage
  ${data.repoUse}

  ## License
  * ${data.licence}

  ## Contributing
  ${data.repoContribute}

  ## Tests
  To eliminate bugs, type the following commend to test application:

      ${data.runTestCommand}

  ## Questions
  * If you have any questions, feel free to contact me via email: ${data.email}
  * My GitHub profile: https://github.com/${data.username}

  
  `
  ;

}

module.exports = generateMarkdown;
