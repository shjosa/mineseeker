import { TileData } from "../data/TileData";
import { GridButton } from "./DrawBox.styles";

type DrawBoxProps = {
    grid: TileData[][];
    gameOver: number;
    handleClick: (l: number[], f: boolean) => void;
    flagMode: boolean;
};

export const DrawBox = (props: DrawBoxProps) => {
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
                                    >
                                        {item.revealed && Boolean(item.status) && item.status}
                                        {!item.revealed && Boolean(item.status) && " "}
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