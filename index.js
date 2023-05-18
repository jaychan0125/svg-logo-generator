const inquirer = require('inquirer');
const fs = require("fs");
const { generateLogo } = require('./lib/shapes.js')

const questions = inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter up to 3 characters for your logo.",
            name: "text",
            validate: (char) => {
                if (char.length > 3) {
                    return 'Please enter only up to 3 characeters.'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What colour would you like the text (keyword or hexadecimal number)?",
            name: "textColour"
        },
        {
            type: "list",
            message: "What shape would you like the logo to be?",
            name: "shape",
            choices: ["triangle", "circle", "square"]
        },
        {
            type: "input",
            message: "What background colour would you like the shape to be (keyword or hexadecimal number)?",
            name: "shapeColour"
        }
    ])

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) => {
        err ? console.error(err) : console.log(`Generated ${fileName}`)
    });
}

questions
    .then((response) => {
        // const { text, textColour, shape, shapeColour } = response;
        return generateLogo(response);
    })
    .then((logoData) => {
        writeToFile('logo.svg', logoData);
    })
    .catch((err) => {
        console.error(err)
      });




