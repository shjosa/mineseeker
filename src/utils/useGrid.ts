import { useState, useRef, useEffect } from "react";
import { TileData } from "../data/TileData";

export function useGrid(size: number) {
    const [grid, setGrid] = useState<TileData[][]>(Array.from(Array(size), () => new Array(size)));
    const [gameOver, setGameOver] = useState(0);
    const currMineCount = useRef(0);
    const mineLocations = useRef<number[][]>([]);
    const [flagMode, setFlagMode] = useState(false);

    function handleFlagMode() {
        setFlagMode(m => !m);
    }

    function revealTile(location: Array<number>) {
        const tempGrid = [...grid];
        if (tempGrid[location[0]][location[1]].revealed) {
            return;
        }
        if (tempGrid[location[0]][location[1]].status === -1) {
            setGameOver(-1);
            revealMines(tempGrid);
            setGrid(tempGrid);
            return;
        }
        if (currMineCount.current === 0) {
            genMines(tempGrid, location);
        }
        revealTiles(tempGrid, location);
        setGrid(tempGrid);
    }
    
    function revealMines(tempGrid: TileData[][]) {
        for (let i = 0; i < mineLocations.current.length; i++) {
            tempGrid[mineLocations.current[i][0]][mineLocations.current[i][1]].reveal();
        }
    }
    
    function revealTiles(tempGrid: TileData[][], location: Array<number>) {
        if (location[0] < 0 || location[0] > tempGrid.length-1 || location[1] < 0 || location[1] > tempGrid[0].length-1) {
            return;
        }
        if (grid[location[0]][location[1]].revealed === true) {
            return;
        }
        tempGrid[location[0]][location[1]].reveal();
        if (tempGrid[location[0]][location[1]].status > 0) {
            return;
        }
        revealTiles(tempGrid, [location[0]-1, location[1]-1]);
        revealTiles(tempGrid, [location[0], location[1]-1]);
        revealTiles(tempGrid, [location[0]+1, location[1]-1]);
        revealTiles(tempGrid, [location[0]+1, location[1]]);
        revealTiles(tempGrid, [location[0]+1, location[1]+1]);
        revealTiles(tempGrid, [location[0], location[1]+1]);
        revealTiles(tempGrid, [location[0]-1, location[1]+1]);
        revealTiles(tempGrid, [location[0]-1, location[1]]);
    }
    
    function genMines(tempGrid: TileData[][], location: Array<number>) {
        while (currMineCount.current < 20) {
            let row = Math.floor(Math.random() * (tempGrid.length))
            let col = Math.floor(Math.random() * (tempGrid[row].length))
            if (tempGrid[row][col].status !== -1 && notWithinRange([row, col], location)) {
                tempGrid[row][col].bombify();
                mineLocations.current.push([row, col]);
                genHints(tempGrid, [row, col]);
                currMineCount.current += 1;
            }
        }
    }
    
    function notWithinRange(attemptedMine: Array<number>, clickLocation: Array<number>) {
        return !((attemptedMine[0] <= clickLocation[0]+1 && attemptedMine[0] >= clickLocation[0]-1) && (attemptedMine[1] <= clickLocation[1]+1 && attemptedMine[1] >= clickLocation[1]-1))
    }
    
    function genHints(tempGrid: TileData[][], location: Array<number>) {
        // top left
        if (location[0] > 0 && location[1] > 0) {
            increaseHint(tempGrid, [location[0]-1, location[1]-1]);
        }
        // left
        if (location[1] > 0) {
            increaseHint(tempGrid, [location[0], location[1]-1]);
        }
        // bottom left
        if (location[0] < tempGrid.length - 1 && location[1] > 0) {
            increaseHint(tempGrid, [location[0]+1, location[1]-1]);
        }
        // bottom
        if (location[0] < tempGrid.length - 1) {
            increaseHint(tempGrid, [location[0]+1, location[1]]);
        }
        // bottom right
        if (location[0] < tempGrid.length - 1 && location[1] < tempGrid[location[0]].length - 1) {
            increaseHint(tempGrid, [location[0]+1, location[1]+1]);
        }
        // right
        if (location[1] < tempGrid[location[0]].length - 1) {
            increaseHint(tempGrid, [location[0], location[1]+1]);
        }
        // top right
        if (location[0] > 0 && location[1] < tempGrid[location[0]].length - 1) {
            increaseHint(tempGrid, [location[0]-1, location[1]+1]);
        }
        // top
        if (location[0] > 0) {
            increaseHint(tempGrid, [location[0]-1, location[1]]);
        }
    }
    
    function increaseHint(tempGrid: TileData[][], location:Array<number>) {
        if (tempGrid[location[0]][location[1]].status !== -1)
            tempGrid[location[0]][location[1]].status += 1;
    }
    
    useEffect(() => {
        const tempGrid: TileData[][] = Array.from(Array(size), () => new Array(size));
        for(let i = 0; i < tempGrid.length; i++) {
            for(let j = 0; j < tempGrid[i].length; j++) {
                tempGrid[i][j] = new TileData(parseInt((i + 1) + "" + (j + 1)));
            }
        }
        setGrid(tempGrid);
    }, []);

    return { grid, revealTile, gameOver, flagMode, handleFlagMode };
}