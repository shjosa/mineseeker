import { GameStateMessage } from "./GameOverStatus.styles";

export const GameOverStatus = (props: { gameOver: number }) => {
    let gameString = "";
    if (props.gameOver === -1) {
        gameString = "You Lose!";
    }
    if (props.gameOver === 1) {
        gameString = "You Win!";
    }
    return (
        <>
            <GameStateMessage>{ gameString }</GameStateMessage>
        </>
    )
}