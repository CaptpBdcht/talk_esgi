class BowlingGame {

    private _score = 0;

    roll(pins: number): void {
        this._score += pins;
    }

    score(): number {
        return this._score;
    }
}
