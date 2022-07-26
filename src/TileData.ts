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
        if (this.status === -1) {
            // game over, reveal all bombs
        }
    }
}

/*
export const TileData = (key: number) => {
    const id = key;
    const [revealed, setRevealed] = useState(false);
    let status = "safe";
    let guessed = false;

    function reveal() {
        setRevealed(true);
    }
}
*/