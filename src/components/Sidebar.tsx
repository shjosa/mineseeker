import { useState } from "react"
import { SidebarContainer } from "./Sidebar.styles"

export const Sidebar = (props: { gameInit: (a: number, b: number) => void }) => {
    const [size, changeSize] = useState(0);
    const [mines, changeMines] = useState(0);
    return (
        <SidebarContainer>
            <input type="number" value={size} onChange={(e) => changeSize(Number(e.target.value))}></input>
            <input type="number" value={mines} onChange={(e) => changeMines(Number(e.target.value))}></input>
            <button onClick={() => props.gameInit(size, mines)}>start</button>
        </SidebarContainer>
    )
}