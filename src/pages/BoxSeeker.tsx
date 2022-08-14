import React from "react";
import { GridContainer } from "./BoxSeeker.styles";
import { useGrid } from "../utils/useGrid";
import { Switch } from "../components/Switch";
import { DrawBox } from "../components/DrawBox";

export const BoxSeeker = () => {
    const size = 10;
    const { grid, gameOver, flagMode, handleFlagMode, handleClick } = useGrid(size);

    return (
        <>
            <Switch flagMode={flagMode} handleFlagMode={handleFlagMode} />
            <GridContainer>
                <DrawBox grid={grid} gameOver={gameOver} handleClick={handleClick} flagMode={flagMode} />
            </GridContainer>
        </>
    );
}

