// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {   
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please provide a description of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: "Please provide your project's installation instructions. (Required)"
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution information.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Required)',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Please select a license',
        choices: ['ISC', 'MIT', 'Mozilla', ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./readme.md', data, err => {
            if (err) {
                reject (err);
                return;
            }

            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(data => {
        return generateMarkdown(data);
    })
    .then(fileMarkdown => {
        return writeToFile(fileMarkdown)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}
// Function call to initialize app
init();


