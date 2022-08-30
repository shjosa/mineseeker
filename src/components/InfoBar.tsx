import { Switch } from "./Switch";
import flag from "../assets/flag.png";
import { GuessContainer, InfoBarContainer } from "./InfoBar.styles";

type InfoBarProps = {
    flagMode: boolean,
    handleFlagMode: () => void;
    guessesRemaining: () => number;
}

export const InfoBar = ({ flagMode, handleFlagMode, guessesRemaining }: InfoBarProps) => {
    return (
        <InfoBarContainer>
            <Switch flagMode={flagMode} handleFlagMode={handleFlagMode} />
            <GuessContainer>
                <img src={flag} width={64} />
                <p>{guessesRemaining()} remaining</p>
            </GuessContainer>
        </InfoBarContainer>
    )
}