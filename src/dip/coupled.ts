class BackEndDeveloper {
    writeJava(): void {
    }
}

class FrontEndDeveloper {
    writeTypescript(): void {
    }
}

class Project {
    private backEndDeveloper: BackEndDeveloper = new BackEndDeveloper();
    private frontEndDeveloper: FrontEndDeveloper = new FrontEndDeveloper();

    implementProgram(): void {
        this.backEndDeveloper.writeJava();
        this.frontEndDeveloper.writeTypescript();
    }
}

const project = new Project();
project.implementProgram();
