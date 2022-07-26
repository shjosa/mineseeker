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
        tempGrid[location[0]][location[1]].revealed = true;
        if (currBombCount === 0) {
            genBombs(tempGrid);
        }
        setGrid(tempGrid);
    }

    function genBombs(tempGrid: TileData[][]) {
        let curBC = currBombCount;
        while (curBC < 5) {
            let row = Math.floor(Math.random() * (tempGrid.length))
            let col = Math.floor(Math.random() * (tempGrid[row].length))
            if (tempGrid[row][col].status !== -1) {
                tempGrid[row][col].bombify();
                curBC += 1;
            }
        }
        setCurrBombCount(curBC);
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
                                        {item.revealed && item.status}
                                        {!item.revealed && " "}
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