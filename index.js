// TODO: Include packages needed for this application
const inquirer = require('inquirer');  // npm library module
const fs = require('fs');  // file system, part of node?
const readmeTemplate = require('./generateMarkdown');  // linked to const value on generateMarkdown.js file

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'A title is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'firstLastName',
            message: 'Type your FIRST AND LAST name.',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'Your first and last name is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'year',
            message: 'Type the current year',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'The current year is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'description',
            message: 'Type a description for this project:',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'A description is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Type any installation instructions for this project:',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'An installation method or lack of installation needed should be defined for this project'
                }},
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can this project be used by a user?',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'A picture or instructions for how to use this application is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'demoImageDirectory',
            message: 'Type the directory of an image you would like to use to show a sample of your project:',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'A directory for a demo image is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'demoImageAltText',
            message: 'Type an altText phrase that will be displayed if your image is not able to be displayed:',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'An alt text phrase for the demo image is required for this project'
                }},
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'What license would you like to include in your project?',
            choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'BSD 3-Clause', 'Unlicense', 'No License'],
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'Picking a license option is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How may people contribute to your project?',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'Some form of contribution input is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What methods can be used to test your project?',
            default: 'Testing on humans is not approved at this time.',
        },
        {
            type: 'input',
            name: 'questionsGithub',
            message: 'What is your GitHub user name?',
            default: 'jk377y',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'A GitHub username is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'What is your email address?',
            default: 'jk377y@gmail.com',
            validate: (value) => {   // this will force the user to input a value
                if(value) {         // if there is an input (truthy), no problems
                    return true
                } else {            // if there is no input (falsey), get message
                    return 'An email address is required for this project'
                }},
        }
    ])


// TODO: Create a function to write README file
.then((myInputs) => {    // after my choices are made .then
    const generatedMarkdown = readmeTemplate(myInputs);   //  new const = readmeTemplate from the generateMarkdown.js file with the responses from my inquirer inputted into the ${} assignments
    fs.writeFile('README.md', generatedMarkdown, (error) =>  // will create the readme file from generatedMarkdown, with an (error) failsafe
        error ? console.log(error) : console.log('Congratulations! You have created a README.md file.')  // if there is an error, it will appear in the console log, else the console log gives a successful message
    );
    
});

// TODO: Create a function to initialize app
// not sure how to add this since the app works already using node index.js in the command line