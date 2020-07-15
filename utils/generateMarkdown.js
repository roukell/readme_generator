// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.username}
  ## ${data.project}
  `
  ;

}

module.exports = generateMarkdown;
