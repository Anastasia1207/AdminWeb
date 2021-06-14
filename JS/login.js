const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
 
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
 
inquirer.prompt([
  {
    type: 'maxlength-input',
    name: 'title',
    message: 'Enter a title',
    maxLength: 15
  }
]).then(console.log)