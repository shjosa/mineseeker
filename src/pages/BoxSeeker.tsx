import React, { useEffect, useRef, useState } from "react";
import { TileData } from "../data/TileData";
import { GridButton, GridContainer } from "./BoxSeeker.styles";
import { useGrid } from "../utils/useGrid";
import { Switch } from "../components/Switch";


export const BoxSeeker = () => {
    const size = 10;
    const { grid, revealTile, gameOver, flagMode, handleFlagMode } = useGrid(size);

    return (
        <>
            <Switch flagMode={flagMode} handleFlagMode={handleFlagMode} />
            <GridContainer>
                <DrawBox grid={grid} revealTile={revealTile} gameOver={gameOver} />
            </GridContainer>
        </>
    );
}

const DrawBox = (props: { grid: TileData[][], revealTile: (a: Array<number>) => void, gameOver: number }) => {
    return (
        <table>
            <tbody>
                {props.grid.map((row, i) => {
                    return <tr key={i}>
                        {row.map((item, j) => {
                            return (
                                <th key={item.key}>
                                    <GridButton rowLength={row.length} tileValue={item.status} open={item.revealed} onClick={() => props.revealTile([i,j])} gameOver={props.gameOver} disabled={props.gameOver !== 0 ? true : false}>
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