import React from "react";
import { GameContainer, GridContainer, PageContainer } from "./BoxSeeker.styles";
import { useGrid } from "../utils/useGrid";
import { DrawBox } from "../components/DrawBox";
import { Sidebar } from "../components/Sidebar";
import { InfoBar } from "../components/InfoBar";

export const BoxSeeker = () => {
    const { init, grid, gameOver, flagMode, handleFlagMode, getGuessesRemaining, handleClick } = useGrid(2);

    return (
        <>
            <PageContainer>
                <Sidebar gameInit={init}/>
                {grid.length > 0 &&
                    <GameContainer>
                        <InfoBar flagMode={flagMode} handleFlagMode={handleFlagMode} guessesRemaining={getGuessesRemaining} gameOver={gameOver}/>
                        <GridContainer>
                            <DrawBox grid={grid} gameOver={gameOver} handleClick={handleClick} flagMode={flagMode} />
                        </GridContainer>
                    </GameContainer>
                }
            </PageContainer>
        </>
    );
}

