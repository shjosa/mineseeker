import { useState } from "react"
import { SwitchButton, SwitchInput, SwitchLabel } from "./Switch.styles";

type SwitchProps = {
    flagMode: boolean;
    handleFlagMode: () => void;
};


export const Switch = ({ flagMode, handleFlagMode}: SwitchProps) => {
    return (
        <>
            <SwitchLabel>
                <SwitchInput type="checkbox" checked={flagMode} ></SwitchInput>
                <SwitchButton flagMode={flagMode} onClick={handleFlagMode} />
            </SwitchLabel>
        </>
    )
}