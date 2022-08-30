import { TileData } from "../data/TileData";
import { GridButton, GridIcon } from "./DrawBox.styles";
import flag from "../assets/flag.png";

type DrawBoxProps = {
    grid: TileData[][];
    gameOver: number;
    handleClick: (l: number[], f: boolean) => void;
    flagMode: boolean;
};

export const DrawBox = (props: DrawBoxProps) => {
    console.log(props.grid);
    return (
        <table>
            <tbody>
                {props.grid.map((row, i) => {
                    return <tr key={i}>
                        {row.map((item, j) => {
                            return (
                                <th key={item.key}>
                                    <GridButton 
                                        rowLength={row.length} 
                                        tileValue={item.status} 
                                        open={item.revealed} 
                                        onClick={() => props.handleClick([i, j], props.flagMode)} 
                                        gameOver={props.gameOver} 
                                        disabled={props.gameOver !== 0 ? true : false}
                                        guessed={item.guessed}
                                        gridSize={props.grid.length}
                                    >
                                        <DrawInterior status={item.status} revealed={item.revealed} guessed={item.guessed} />
                                    </GridButton>
                                </th>
                            );
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    );
}

const DrawInterior = (props: { status: number, revealed: boolean, guessed: boolean }) => {
    let component = <div />;
    if (props.revealed) {
        component = <div>{props.status > 0 ? props.status : ""}</div>
    } else if (props.guessed) {
        component = <GridIcon src={flag} />
    }
    return (
        <>
            {component}
        </>
    )
}