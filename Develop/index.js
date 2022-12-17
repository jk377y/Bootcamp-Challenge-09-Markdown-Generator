// TODO: Include packages needed for this application
const inquirer = require('inquirer');  // npm library module
const fs = require('fs');  // file system, part of node?

const readmeTemplate = require('../generateMarkdown')  // linked to const value on generateMarkdown.js file
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Type a description for this project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Type any installation instructions for this project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can this project be used by a user?',
        },
        {
            type: 'input',
            name: 'demoImageDirectory',
            message: 'Type the directory of an image you would like to use to show a sample of your project:',
        },
        {
            type: 'input',
            name: 'demoImageAltText',
            message: 'Type an altText phrase that will be displayed if your image is not able to be displayed:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Would you like to include an MIT license/badege in this README file?',
            choices: ['Yes', 'No']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How may people contribute to your project?',
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
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'What is your email address?',
            default: 'jk377y@gmail.com',
        },
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