export class Rectangle {

    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setWidth(width: number) {
        this.width = width;
    }

    getWidth() {
        return this.width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    getHeight() {
        return this.height;
    }

    getArea() {
        return this.width * this.height;
    }
}
