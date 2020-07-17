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
  ## License
  * ${data.licence}

  ## Contributing
  ## Tests
  ## Questions
  If you have any questions, feel free to contact me via email: ${data.email}

  
  `
  ;

}

module.exports = generateMarkdown;
