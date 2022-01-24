## Script for Video Demonstration

- Hello and welcome to a brief video demonstration of my readme generator application, my name is Charles and I wrote this application, let's dive right in.

- In order to install and use this application you need to have Node.js installed on the device you're using. You must also install this application's dependencies, namely inquirer and the modules it requires. 

To install you simply open a cmd or terminal window in the root directory of the app like so, type "npm i" or "npm install" and let node package manager take care of the rest.

- We're ready to use Readme Generator, open a cmd or terminal window in the root directory of readme generator and type "node index" to begin.

- Now we have some prompts and questions to respond to. I'm going to enter the title of my project here.

- And now a description, done, these are the only two mandatory fields to fill in in order to generate a readme, leaving either of these blank will result in an error message and the prompt will return until valid input is entered.

- The following prompts are all optional and can be skipped by simply leaving them blank or selecting "None" where applicable.

- I'm now entering a relative file path to a screenshot of my project, this could also be a full web address.

- Here a brief overview of any installation steps.

- How to use the application.

- Any information relevant to testing out the app.

- And here we're asked if we have any collaborators to list on the page, selecting no will skip the following prompt but we'll say yes for the demonstration.

- Now we're to enter any collaborators seperated by a comma.

- We can select a license if we're listed under one here, None is available if applicable, we're going to select GNU GPL 3 for this demonstration.

- And lastly we can choose whether to display contact information on the readme, I'm going to select yes to demonstrate the proceeding questions, enter our github username, and finally our email address.

- We hit return one final time and our readme file is written to the dist folder in the application's directory.

- Before we end the demonstration, let's just copy our newly generated information from our readme into markdown live preview and here we have the finished product a table of contents is generated at the top, based on what fields we use and don't during creation, the rest is here, exactly as we entered.

- Thank you for watching and good bye for now.