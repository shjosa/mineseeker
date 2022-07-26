import React, { useEffect, useState } from "react";
import { TileData } from "../TileData";
import { GridButton, GridContainer } from "./BoxSeeker.styles";

export const BoxSeeker = () => {
    const size = 10;
    const [refresh, setRefresh] = useState(false);
    const [grid, setGrid] = useState<TileData[][]>(Array.from(Array(size), () => new Array(size)));

    function RevealTile(location: Array<number>) {
        const tempGrid = [...grid];
        tempGrid[location[0]][location[1]].revealed = true;
        setGrid(tempGrid);
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
                <DrawBox grid={grid} RevealTile={RevealTile} />
            </GridContainer>
        </>
    );
}

const DrawBox = (props: { grid: TileData[][], RevealTile: (a: Array<number>) => void }) => {
    console.log(props.grid);
    return (
        <table>
            <tbody>
                {props.grid.map((row, i) => {
                    return <tr key={i}>
                        {row.map((item, j) => {
                            return (
                                <th key={item.key}>
                                    <GridButton rowLength={row.length} onClick={() => props.RevealTile([i,j])}>
                                        {item.revealed && item.key}
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