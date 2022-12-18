// const inquirer = require('inquirer');  // npm library module
// const fs = require('fs');  // file system, part of node?
// const index = require('./index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	let licenseBadge = '';
	if (license === 'MIT') {
		licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
	} else if (license === 'Apache 2.0') {
		licenseBadge = '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
	} else if (license === 'GNU GPL v3') {
		licenseBadge = '![License: GNU GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
	} else if (license === 'BSD 3-Clause') {
		licenseBadge = '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
	} else if (license === 'Unlicense') {
		licenseBadge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
	} else {
		licenseBadge = ''
	}
	return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	let licenseLink = '';
	if (license === 'MIT') {
		licenseLink = '(https://opensource.org/licenses/MIT)'
	} else if (license === 'Apache 2.0') {
		licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
	} else if (license === 'GNU GPL v3') {
		licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)'
	} else if (license === 'BSD 3-Clause') {
		licenseLink = '(https://opensource.org/licenses/BSD-3-Clause)'
	} else if (license === 'Unlicense') {
		licenseLink = '(http://unlicense.org/)'
	} else {
		licenseLink = 'No License'
	}
	return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	let licenseSection = '';
	if (license === 'None') {
		licenseSection = ''
	} else {
		licenseSection = `License: $(license)` 
	}
	return licenseSection;
}

// TODO: Create a function to generate markdown for README
const readmeTemplate = ({ year, firstLastName, title, description, installation, usage, demoImageDirectory, demoImageAltText, license, contributing, tests, questionsGithub, questionsEmail }) =>
`
# ${title}
<br>${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}
<br>![${demoImageAltText}](${demoImageDirectory})

## License
License: ${license}
<br>${renderLicenseBadge(license)}
<br>Information on this license can be found at: ${renderLicenseLink(license)}
<br>Copyright (c) ${year} ${firstLastName}

## Contributing
Cash App me @ ${contributing}

## Tests
${tests}

## Questions
For Questions, I can be reached at the following:
<br>GitHub:  https://github.com/${questionsGithub}
<br>OR
<br>Email:  ${questionsEmail}

`;
module.exports = readmeTemplate;
