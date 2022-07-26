import { useState } from "react";


export class TileData {
    key: number;
    revealed: boolean;
    status: number;
    guessed: boolean;
    lastChecked: number;

    constructor(key: number) {
        this.key = key;
        this.revealed = false;
        this.status = 0;
        this.guessed = false;
        this.lastChecked = 0;
    }

    reveal() {
        this.revealed = true;
    }

    bombify() {
        this.status = -1;
    }
}