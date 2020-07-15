// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}

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
  ## Usage
  ## License
  ## Contributing
  ## Tests
  ## Questions
  
  `
  ;

}

module.exports = generateMarkdown;
