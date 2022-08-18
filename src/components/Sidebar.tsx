import { useState } from "react"
import { SidebarContainer } from "./Sidebar.styles"


export const Sidebar = (props: { gameInit: (a: number) => void }) => {
    const [size, changeSize] = useState(0);
    return (
        <SidebarContainer>
            <input type="number" value={size} onChange={(e) => changeSize(Number(e.target.value))}></input>
            <button onClick={() => props.gameInit(size)}>start</button>

        </SidebarContainer>
    )
}