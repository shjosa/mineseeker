import React, { useEffect, useState } from "react";
import { TileData } from "../TileData";

export const BoxSeeker = () => {
    const [refresh, setRefresh] = useState(false);
    const [grid, setGrid] = useState<TileData[][]>(Array.from(Array(5), () => new Array(5)));

    function RevealTile(location: Array<number>) {
        const tempGrid = [...grid];
        tempGrid[location[0]][location[1]].revealed = true;
        setGrid(tempGrid);
    }

    useEffect(() => {
        let x = 0;

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                grid[i][j] = new TileData(parseInt((i + 1) + "" + (j + 1)));
                x += 1;
            }
        }
    }, []);

    return (
        <>
            <button onClick={() => setRefresh(value => !value)}>Test</button>
            <DrawBox grid={grid} RevealTile={RevealTile} />
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
                                    <button onClick={() => props.RevealTile([i,j])}>
                                        {item.revealed && item.key}
                                        {!item.revealed && "?"}
                                    </button>
                                </th>
                            );
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    );
}