class Shape {
    constructor(shapeColour, text, textColour) {
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
    }    
    setColor(color) {
        this.shapeColour = color;
        return this.shapeColour;
    }
};

class Triangle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour);
    }
    render() {
        return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}" />    
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
      
      </svg>`
    }
    render4TEST() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}" />`
    }
};

class Circle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)
    }
    render() {
        return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColour}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
      
      </svg>`
    }
    render4TEST() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColour}" />`
    }
};

class Square extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)
    }
    render() {
        return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="200" height="200" fill="${this.shapeColour}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>

      </svg>
      `
    }
    render4TEST() {
        return `<rect width="200" height="200" fill="${this.shapeColour}" />`
    }
};


function generateLogo(data) {
    const { text, textColour, shape, shapeColour } = data;

    switch (shape) {
        case 'circle':
            const circleLogo = new Circle(shapeColour, text, textColour)
            console.log(circleLogo.render());
            console.log(circleLogo.render4TEST())
            return circleLogo.render();
        case 'triangle': 
            const triangleLogo = new Triangle(shapeColour, text, textColour)
            console.log(triangleLogo.render());
            console.log(triangleLogo.render4TEST())
            return triangleLogo.render();
        case 'square':
            const squareLogo = new Circle(shapeColour, text, textColour)
            console.log(squareLogo.render());
            console.log(squareLogo.render4TEST())
            return squareLogo.render();
        default: 
            return console.log(`invalid choice, how did you do that?`)
    }
};

module.exports = { generateLogo, Triangle, Square, Circle };
