import React from "react";
import { GameContainer, GridContainer, PageContainer } from "./BoxSeeker.styles";
import { useGrid } from "../utils/useGrid";
import { Switch } from "../components/Switch";
import { DrawBox } from "../components/DrawBox";
import { Sidebar } from "../components/Sidebar";
import { GameOverStatus } from "../components/GameOverStatus";

export const BoxSeeker = () => {
    const { init, grid, gameOver, flagMode, handleFlagMode, handleClick } = useGrid(2);

    return (
        <>
            <PageContainer>
                <Sidebar gameInit={init}/>
                {grid.length > 0 &&
                    <GameContainer>
                        <Switch flagMode={flagMode} handleFlagMode={handleFlagMode} />
                        <GridContainer>
                            <GameOverStatus gameOver={gameOver}></GameOverStatus>
                            <DrawBox grid={grid} gameOver={gameOver} handleClick={handleClick} flagMode={flagMode} />
                        </GridContainer>
                    </GameContainer>
                }
            </PageContainer>
        </>
    );
}

