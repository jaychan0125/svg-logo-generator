const inquirer = require("inquirer");
const fs = require("fs");

const questions = inquirer 
    .prompt([
        {
            type: "input",
            message: "Please enter up to 3 characters for your logo.",
            name: "char", 
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
            choices: ["circle", "triangle", "square"]
        }, 
        {
            type: "input", 
            message: "What background colour would you like the shape to be (keyword or hexadecimal number)?", 
            name: "shapeColour"
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });