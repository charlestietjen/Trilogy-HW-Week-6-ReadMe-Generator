// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('A title is required.');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter a description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('A project description is required.');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'screenshotPath',
        message: 'Enter the path and filename of your project screenshot:'
    },
    {
        type: 'input',
        name: 'installDescription',
        message: 'Enter any installation instructions, if applicable:'
    },
    {
        type: 'input',
        name: 'usageDescription',
        message: 'Enter any additional usage directions, if applicable:'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Enter test instructions, if applicable:'
    },
    {
        type: 'confirm',
        name: 'collabConfirm',
        message: 'Do you have any collaborators to list?',
        default: false 
    },
    {
        type: 'input',
        name: 'collabEntry',
        message: 'Enter all collaborators seperated by commas:',
        when: ({ collabConfirm }) => collabConfirm,
        validate: collabInput => {
            if (collabInput) {
                return true;
            } else {
                console.log('Please enter your collaborators.');
                return false;
            };
        }
    },
    {
        type: 'list',
        name: 'licenseSelect',
        message: 'Select the license for your project:',
        choices: ['None', 'Apache 2.0', 'Boost 1.0', 'BSD 3', 'CC BY 4.0', 'GNU GPL v3', 'MIT'],
        filter(val) {
            if (val === 'GNU GPL v3'){
                val = 'GPLv3'
            };
            return val = val.replaceAll(" ", "_")
        },
        default: 0
    },
    {
        type: 'confirm',
        name: 'contactConfirm',
        message: 'Would you like to add a contact section?',
        default: true
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub username:',
        when: ({ contactConfirm }) => contactConfirm,
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Your Github username is required for the contact section.');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        when: ({ contactConfirm }) => contactConfirm,
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Your email address is required for the contact section.');
                return false;
            };
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Readme Created!'
            });
            console.log("/dist/Readme.md Created!");
        });
    });
};

// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('./dist/Readme.md', generateMarkdown(answers))});
    };

// Function call to initialize app
init();