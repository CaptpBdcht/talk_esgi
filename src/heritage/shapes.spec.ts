import { should } from 'chai';

should();

import { Rectangle } from "./rectangle";
import { Square } from "./square";

describe('Shapes', () => {

    let r: Rectangle;
    let s: Square;

    beforeEach(() => {
        r = new Rectangle(10, 2);
        s = new Square(7)
    });

    it('should get rectangle area', () => {
        r.getArea().should.equal(20);
    });

    it('should get square area', () => {
        s.getArea().should.equal(49);
    });












/*
    it('should still get rectangle area after width modification', () => {
        r.setWidth(7);
        r.getArea().should.equal(14);
    });

    it('should still get square area after width modification', () => {
        s.setWidth(5);
        s.getArea().should.equal(25);
    });
*/
});
