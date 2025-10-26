import "./App.css"
import Box from "./Box";
import {useState} from "react";

const GridLightBoxCells = () => {
    let data = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
    const [lightened, setLightened] = useState([]);
    const isValid = () => {

    }
    const onClickHandler = (row, col) => {
        const options = [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]];
        for (let i = 0; i < 4; i++) {
            if (isValid(options[i])) {

            }
        }
    }
    return (
        <div className="wrapper">
            {data.map((item, index1) => {
                return <div className="row">
                    {item.map((element, index2) => {
                            return <Box onClickHandler={onClickHandler}/>
                        }
                    )
                    }
                </div>
            })}
        </div>
    )

}
export default GridLightBoxCells;
