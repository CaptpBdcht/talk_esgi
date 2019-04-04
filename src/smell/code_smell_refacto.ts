class BowlingGameRefacto {

    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    score(): number {
        const sum = (acc: number, val: number) => {
            acc += val;
            return acc;
        };
        return this.rolls.reduce(sum, 0);
    }
}
