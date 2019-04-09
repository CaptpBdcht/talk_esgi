const coconutsCount = 42;

enum BirdType { EUROPEAN, AFRICAN, NORWEGIAN }

class Bird {
    private type: BirdType;
    private baseSpeed: number;
    private loadFactor: number;
    private nailed: boolean;

    getSpeed(): number {
        switch (this.type) {
            case BirdType.EUROPEAN:
                return this.getBaseSpeed();
            case BirdType.AFRICAN:
                return this.getBaseSpeed() - this.getLoadFactor() * coconutsCount;
            case BirdType.NORWEGIAN:
                return this.isNailed() ? 0 : this.getBaseSpeed()
        }
        // Shouldn't reach here
    }

    getBaseSpeed() { return this.baseSpeed; }

    getLoadFactor() { return this.loadFactor }

    isNailed() { return this.nailed; }
}
