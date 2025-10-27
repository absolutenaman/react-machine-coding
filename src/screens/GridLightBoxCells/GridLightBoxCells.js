import "./App.css"
import Box from "./Box";
import {useState} from "react";

const GridLightBoxCells = () => {
    let data = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
    const [lightened, setLightened] = useState([[1,2]]);
    const isValid = (arr) => {
    }
    const onClickHandler = (row, col) => {
        const options = [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]];
        for (let i = 0; i < 4; i++) {
            if (isValid(options[i])) {

            }
        }
    }
    const contains=(row,col)=>{
        const bool= lightened.find((item)=>{return item[0]===row && col===item[1]})
        return bool;
    }
    console.log("!!!",contains(0,2))
    return (
        <div className="wrapper">
            {data.map((item, index1) => {
                return <div className="row">
                    {item.map((element, index2) => {
                            return <Box onClickHandler={onClickHandler} lightened={lightened} />
                        }
                    )
                    }
                </div>
            })}
        </div>
    )

}
export default GridLightBoxCells;
