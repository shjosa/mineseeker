import { url } from "inspector";
import styled from "styled-components";
import flag from "../assets/flag.png";
import hand from "../assets/hand.png"

export const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`

export const SwitchButton = styled.div<{ flagMode: boolean }>`
    position: relative;
    width: 128px;
    height: 64px;
    background: #b3b3b3;
    border-radius: 5px;
    padding: 4px;

    &:before {
        transition: 300ms transform;
        content: "";
        position: absolute;
        width: 56px;
        height: 56px;
        border-radius: 5px;
        top: 50%;
        left: 8px;
        background: white;
        background-image: url(${props => props.flagMode ? flag : hand});
        background-size: cover;
        transform: translate(0, -50%);
    }
`

export const SwitchInput = styled.input`
    display: none;
    &:checked + ${SwitchButton} {
        background: orange;

        &:before {
            transform: translate(64px, -50%);
        }
    }
`;