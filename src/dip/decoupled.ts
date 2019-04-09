interface Developer {
    develop(): void
}

class BackEndDev implements Developer {
    develop(): void {
        this.writeJava();
    }

    writeJava(): void {
        console.log('Writing Java!');
    }
}

class FrontEndDev implements Developer {
    develop(): void {
        this.writeTypescript();
    }

    writeTypescript(): void {
        console.log('Writing Typescript!');
    }
}

class Projecty {
    private developers: Developer[];

    constructor(developers: Developer[]) {
        this.developers = [ ...developers ];
    }

    implementProgram(): void {
        this.developers.forEach(dev => dev.develop());
    }
}

const developers = [ new BackEndDev(), new FrontEndDev() ];
const projecty = new Projecty(developers);
projecty.implementProgram();
