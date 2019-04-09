abstract class Birdy {
    // private type: BirdType; // <---- Not needed anymore
    private baseSpeed: number;
    private loadFactor: number;
    private nailed: boolean;

    getBaseSpeed() { return this.baseSpeed; }

    getLoadFactor() { return this.loadFactor }

    isNailed() { return this.nailed; }

    abstract getSpeed(): number;
}

class European extends Birdy {
    getSpeed(): number {
        return this.getBaseSpeed();
    }
}

class African extends Birdy {
    getSpeed(): number {
        return this.getBaseSpeed() - this.getLoadFactor() * coconutsCount;
    }
}

class Norwegian extends Birdy {
    getSpeed(): number {
        return this.isNailed ? 0 : this.getBaseSpeed()
    }
}
