const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;
  //why is err in () for if, but then not after throw?

  console.log('Portfolio complete! Check out index.html to see the output!');
});
