import { GameStateMessage } from "./GameOverStatus.styles";

export const GameOverStatus = (props: { gameOver: number }) => {
    let gameString = "";
    if (props.gameOver === -1) {
        gameString = "You Lose!"
    }
    return (
        <>
            <GameStateMessage>{ gameString }</GameStateMessage>
        </>
    )
}