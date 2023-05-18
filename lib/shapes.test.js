const { Triangle, Square, Circle } = require('./shapes.js')


describe('Shapes', () => {
    describe('Triangle', () => {
        it('should take the colour, and set it in the fill:"".', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render4TEST()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    });
    describe('Square', () => {
        it('should take the colour, and set it in the fill:"".', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render4TEST()).toEqual('<rect width="200" height="200" fill="blue" />');
        })
    });
    describe('Circle', () => {
        it('should take the colour, and set it in the fill:"".', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render4TEST()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        })
    });
});






