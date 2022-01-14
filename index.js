// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
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
        message: 'Enter a description of your project.',
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
        message: 'Enter the path and filename of your project screenshot.'
    },
    {
        type: 'input',
        name: 'installDescription',
        message: 'Enter any installation instructions, if applicable.'
    },
    {
        type: 'input',
        name: 'usageDescription',
        message: 'Enter any additional usage directions.'
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
        message: 'Enter all collaborators seperated by commas.',
        when: ({ collabConfirm }) => collabConfirm
    },
    {
        type: 'list',
        name: 'licenseSelect',
        message: 'Select the license for your project.',
        choices: ['Apache 2.0', 'Boost 1.0', 'BSD 3', 'CC BY 4.0', 'GNU GPL v3', 'MIT', 'PDDL', 'WTFPL']
    },
    {
        type: 'input',
        name: 'contributionDescription',
        message: 'Enter any instructions for future collaborators, if applicable.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('./dist/readme.md', generateMarkdown());
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile();
        // console.log(answers);
    });
};

// Function call to initialize app
init();
