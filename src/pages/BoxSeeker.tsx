import React, { useEffect, useState } from "react";
import { TileData } from "../TileData";
import { GridButton, GridContainer } from "./BoxSeeker.styles";

export const BoxSeeker = () => {
    const size = 10;
    const [refresh, setRefresh] = useState(false);
    const [grid, setGrid] = useState<TileData[][]>(Array.from(Array(size), () => new Array(size)));
    const [currBombCount, setCurrBombCount] = useState(0);

    function revealTile(location: Array<number>) {
        const tempGrid = [...grid]; 
        if (currBombCount === 0) {
            genBombs(tempGrid, location);
        }
        revealTiles(tempGrid, location);
        setGrid(tempGrid);
    }
    
    function revealTiles(tempGrid: TileData[][], location: Array<number>) {
        if (location[0] < 0 || location[0] > tempGrid.length-1 || location[1] < 0 || location[1] > tempGrid[0].length-1) {
            return;
        }
        if (grid[location[0]][location[1]].revealed === true) {
            return;
        }
        tempGrid[location[0]][location[1]].revealed = true;
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

    function genBombs(tempGrid: TileData[][], location: Array<number>) {
        let curBC = currBombCount;
        while (curBC < 25) {
            let row = Math.floor(Math.random() * (tempGrid.length))
            let col = Math.floor(Math.random() * (tempGrid[row].length))
            if (tempGrid[row][col].status !== -1 && (row != location[0] || col != location[1])) {
                tempGrid[row][col].bombify();
                genHints(tempGrid, [row, col]);
                curBC += 1;
            }
        }
        setCurrBombCount(curBC);
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
        let x = 0;
        const tempGrid: TileData[][] = Array.from(Array(size), () => new Array(size));
        for(let i = 0; i < tempGrid.length; i++) {
            for(let j = 0; j < tempGrid[i].length; j++) {
                tempGrid[i][j] = new TileData(parseInt((i + 1) + "" + (j + 1)));
                x += 1;
            }
        }
        setGrid(tempGrid);
    }, []);

    return (
        <>
            <button onClick={() => setRefresh(value => !value)}>Test</button>
            <GridContainer>
                <DrawBox grid={grid} revealTile={revealTile} />
            </GridContainer>
        </>
    );
}

const DrawBox = (props: { grid: TileData[][], revealTile: (a: Array<number>) => void }) => {
    console.log(props.grid);
    return (
        <table>
            <tbody>
                {props.grid.map((row, i) => {
                    return <tr key={i}>
                        {row.map((item, j) => {
                            return (
                                <th key={item.key}>
                                    <GridButton rowLength={row.length} open={item.revealed} onClick={() => props.revealTile([i,j])}>
                                        {item.revealed && Boolean(item.status) && item.status}
                                        {!item.revealed && Boolean(item.status) && " "}
                                    </GridButton>
                                </th>
                            );
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    );
}