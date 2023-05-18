
# Generate SVG ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description 
Generate an SVG logo through prompts! You can choose up to 3 characters, the shape you want your logo, as well as the colours you want the text and shape! 
I used class constructors that extended from a 'parent' Shape constructor which had some parameters that I super'd into the 'children' class constructors. Also had to learn a little bit about the format of SVG files.
We also had to utilize testing for this, which was kind of confusing to get the hang of, and I found it to be more difficult than writing the actual code, but I got it! This weeks been challenging though, I've been so sorely lost... working through it! 

[Video Walkthrough](https://drive.google.com/file/d/1Rg4BGG1hZeZXzBruC8FIdyBMnqmi3MJV/view)

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Test](#test)
- [License](#license)

## Installation
Please install inquirer and jest!

## Usage
Just answer a few prompts and the code will do the work for you!

## Contributors
- [jaychan0125](https://github.com/jaychan0125)


## Test
under shapes.test.js in the lib folder. Tested Triangle as well as Circle and Square. 
Passes the given test: 
```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render4TEST()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
```

## License
Licensed under the [MIT License](https://opensource.org/licenses/MIT)

