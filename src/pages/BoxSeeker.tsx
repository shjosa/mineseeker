import React from "react";
import { GameContainer, GridContainer, PageContainer } from "./BoxSeeker.styles";
import { useGrid } from "../utils/useGrid";
import { Switch } from "../components/Switch";
import { DrawBox } from "../components/DrawBox";
import { Sidebar } from "../components/Sidebar";

export const BoxSeeker = () => {
    const size = 10;
    const { grid, gameOver, flagMode, handleFlagMode, handleClick } = useGrid(size);

    return (
        <>
            <PageContainer>
                <Sidebar />
                <GameContainer>
                    <Switch flagMode={flagMode} handleFlagMode={handleFlagMode} />
                    <GridContainer>
                        <DrawBox grid={grid} gameOver={gameOver} handleClick={handleClick} flagMode={flagMode} />
                    </GridContainer>
                </GameContainer>
            </PageContainer>
            
        </>
    );
}

