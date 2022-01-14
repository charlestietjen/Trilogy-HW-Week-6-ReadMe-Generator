// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  return `[License](https://img.shields.io/badge/License-${license}-blue.svg`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let url;
  if (license === 'None') {
    return ``;
  }
    if (license === 'Apache_2.0'){
      url = 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'Boost_1.0'){
      url = 'https://opensource.org/licenses/BSL-1.0';
    } else if (license === 'BSD_3'){
      url = 'https://opensource.org/licenses/BSD-3-Clause';
    } else if (license === 'CC_BY_4.0'){
      url = 'https://creativecommons.org/licenses/by/4.0/';
    } else if (license === 'GNU_GPL_v3'){
      url = 'https://opensource.org/licenses/GPL-3.0';
    } else if (license === 'MIT'){
      url = 'https://opensource.org/licenses/MIT';
    };
    return url;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  }
  return `
  ## License
  Available under [!${renderLicenseBadge(license)}](${renderLicenseLink(license)})

  `
};

function generateSsPath(path){
  if (!path){
    return '';
  };

  // section with image markdown and a seperator below
  return `
  ## Screenshot
  ![Project Screenshot](${path}?raw=true)

  `;
};

// function to generate a section for use with optional inputs
// we can use this for install instructions,usage, collab instructions
function generateOptionalSect(sTitle, desc) {
  if (!desc) {
    return '';
  };

  // generic section with seperator below
  return `
  ## ${sTitle}
  ${desc}

  `;
};

function generateContactSection(github, email){
  if (!github){
    return '';
  };

  return `
  ## Contact Me
  Find me at [GitHub](https://github.com/${github})
  Reach me by [email](mailto: ${email})
  `
};

function generateCollabSect(collabs) {
  if (!collabs){
    return '';
  };

  //split collaborators by commas and create a mini section for each
  const collabArr = collabs.split(","); 
  return `
  ## Collaborators
  ${collabArr.map(collab => collab).join(',')}

  `
};


// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(data) {
  const { screenshotPath, installDescription, usageDescription, collabEntry, licenseSelect, contributionDescription, testInstructions, gitHub, email, ...req } = data;
  return `# ${req.title}

  ## Description
  ${req.projectDescription} ${renderLicenseSection(licenseSelect)} ${generateSsPath(screenshotPath)} ${generateOptionalSect('Installation', installDescription)} ${generateOptionalSect('How to Use', usageDescription)} ${generateOptionalSect('Test Instructions', testInstructions)} ${generateContactSection(gitHub, email)} ${generateCollabSect(collabEntry)}
  `;
};
