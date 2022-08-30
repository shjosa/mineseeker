import { useState } from "react";


export class TileData {
    key: number;
    revealed: boolean;
    status: number;
    guessed: boolean;

    constructor(key: number) {
        this.key = key;
        this.revealed = false;
        this.status = 0;
        this.guessed = false;
    }

    reveal() {
        this.revealed = true;
    }

    bombify() {
        this.status = -1;
    }

    guess() {
        this.guessed = !this.guessed;
        return this.guessed;
    }
}