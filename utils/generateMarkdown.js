// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  [![${renderLicenseBadge(license)}](${renderLicenseLink(license)})

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
  const { screenshotPath, installDescription, usageDescription, collabEntry, licenseSelect, contributionDescription, ...req } = data;
  return `# ${req.title}

  ## Description
  ${req.projectDescription} ${renderLicenseSection(licenseSelect)} ${generateSsPath(screenshotPath)} ${generateOptionalSect('Installation', installDescription)} ${generateOptionalSect('How to Use', usageDescription)} ${generateCollabSect(collabEntry)}
  `;
};
