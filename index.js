// TODO: Include packages needed for this application
const inquirer = require('inquirer');  // npm library module
const fs = require('fs');  // file system, used to access file writing
const readmeTemplate = require('./generateMarkdown');  // linked to const value on generateMarkdown.js file

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',    // the type of prompt given, input allows the user to type a custom message
            name: 'title',    // title is used in the readmeTemplate to enter a user's input to the title placeholder
            message: 'What is the title of this project?',     // this message will be displayed in the terminal when a user's input is expected
            default: 'README.md File Generator',            // default value gives a predefined answer, but this can be modified by typing a custom message
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
            default: 'James Kelly',
            validate: (value) => {  
                if(value) {      
                    return true
                } else {          
                    return 'Your first and last name are required for this project'
                }},
        },
        {
            type: 'input',
            name: 'year',
            message: 'Type the current year',
            default: '2022',
            validate: (value) => {  
                if(value) {        
                    return true
                } else {            
                    return 'The current year is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'description',
            message: 'Type a description for this project:',
            default: 'This project provides a blank README.md file template and populates it from questions that are answered by user inputs',
            validate: (value) => {  
                if(value) {       
                    return true
                } else {         
                    return 'A description is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Type any installation instructions for this project:',
            default: 'Make sure to run [npm install inquirer]. This will allow acces to the "Inquirer" package module which is necessary for this application to run. You must also have node.js installed on your system.',
            validate: (value) => {  
                if(value) {       
                    return true
                } else {           
                    return 'An installation method or lack of installation needed should be defined for this project'
                }},
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can this project be used by a user?',
            default: 'While using VSCode, use the integrated terminal feature while in the root directory where the index.js file is located, run the command [node index.js]. Answer the questions, or press [Enter] to select the default answer or leave blank.',
            validate: (value) => {  
                if(value) {        
                    return true
                } else {            
                    return 'A picture or instructions for how to use this application is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'demoImageDirectory',
            message: 'Type the directory of an image you would like to use to show a sample of your project:',
            default: './images/demo.JPG',
            validate: (value) => { 
                if(value) {       
                    return true
                } else {            
                    return 'A directory for a demo image is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'demoImageAltText',
            message: 'Type an altText phrase that will be displayed if your image is not able to be displayed:',
            default: 'demo screenshot',
            validate: (value) => {  
                if(value) {        
                    return true
                } else {           
                    return 'An alt text phrase for the demo image is required for this project'
                }},
        },
        {
            type: 'list',               // the list type allows the user to select from an array of choices
            name: 'license',
            message: 'What license would you like to include in your project?',
            choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'BSD 3-Clause', 'Unlicense', 'No License'],   // an array of choices that is available for the user to choose from when prompted for this question
            validate: (value) => { 
                if(value) {       
                    return true
                } else {           
                    return 'Picking a license option is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter your Cash App user name.',
            default: '$JK377Y',
            validate: (value) => { 
                if(value) {         
                    return true
                } else {          
                    return 'Some form of contribution input is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What methods can be used to test your project?',
            default: 'Open the integrated terminal in VS Code and navigate to the root directory where the index.js file is located.  You can start the application by typing [node index.js]',
        },
        {
            type: 'input',
            name: 'questionsGithub',
            message: 'What is your GitHub user name?',
            default: 'jk377y',
            validate: (value) => {   
                if(value) {       
                    return true
                } else {            
                    return 'A GitHub username is required for this project'
                }},
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'What is your email address?',
            default: 'jk377y@gmail.com',
            validate: (value) => {   
                if(value) {        
                    return true
                } else {            
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