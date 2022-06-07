// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var userLicense = '';

  if (!license) {
    return '';
  }

  if (license.includes('Apache')  ) {
    userLicense += '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } 
  if (license.includes('ISC')) {
    userLicense += '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
  } 
  if (license.includes('MIT')) {
    userLicense += '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } 
  if (license.includes('Mozilla')) {
    userLicense += '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  }
  return `${userLicense}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var userLicenseBadge = '';

  if (!license) {
    return '';
  }

  if (license.includes('Apache')) {
    userLicenseBadge += '(https://opensource.org/licenses/Apache-2.0)';
  } 
  if (license.includes('ISC')) {
    userLicenseBadge += '(https://opensource.org/licenses/ISC)';
  } 
  if (license.includes('MIT')) {
    userLicenseBadge += '(https://opensource.org/licenses/MIT)';
  } 
  if (license.includes('Mozilla')) {
    userLicenseBadge += '(https://opensource.org/licenses/MPL-2.0)';
  }
  return `${userLicenseBadge}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  
  return `## Licenses
            ${renderLicenseBadge(license)}${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 ${renderLicenseSection(data.licenses)}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing](#testing)
- [Questions](#questions)
          
## Description
          
${data.description}
          
## Installation

${data.install}
          
## Usage

${data.usage}

## Contributions

${data.contribution}

## Testing

${data.test}

## Questions

Find me on [Github](https://github.com/${data.github} "Github")

You can also reach out via [email](${data.email} "Email") for any additional questions.


`;

}

module.exports = generateMarkdown;
