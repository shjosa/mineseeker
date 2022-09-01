import { Switch } from "./Switch";
import flag from "../assets/flag.png";
import { GuessContainer, InfoBarContainer } from "./InfoBar.styles";
import { GameOverStatus } from "./GameOverStatus";

type InfoBarProps = {
    flagMode: boolean,
    handleFlagMode: () => void;
    guessesRemaining: () => number;
    gameOver: number;
}

export const InfoBar = ({ flagMode, handleFlagMode, guessesRemaining, gameOver }: InfoBarProps) => {
    return (
        <InfoBarContainer>
            <Switch flagMode={flagMode} handleFlagMode={handleFlagMode} />
            <GameOverStatus gameOver={gameOver} />
            <GuessContainer>
                <img src={flag} width={64} />
                <p>{guessesRemaining()} remaining</p>
            </GuessContainer>
        </InfoBarContainer>
    )
}