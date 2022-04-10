// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!data.licenses) {
    return '';
  }

  if (data.licenses) {
    return``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!data.licenses) {
    return '';
  }

  if (data.licenses) {
    return``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!data.license) {
    return '';
  }
  
  return `## Licenses
            ${renderLicenseBadge(data.license)}
            ${renderLicenseLink(data.license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

          ## Description
          
          ${data.description}

          ## Table of Contents

          ## Installation

          ${data.installation}
          
          ## Usage

          ${data.usage}

          ## Contributions

          ${data.contributions}

          ## Questions

          Find me on [Github](https://github.com/${data.github} "Github")

          You can also reach out via [email](${data.email} "Email") for any additional questions.

          ${renderLicenseSection(data.license)};
`;

}

module.exports = generateMarkdown;
