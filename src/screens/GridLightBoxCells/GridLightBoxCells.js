import "./App.css"
import Box from "./Box";
import {useState} from "react";

const GridLightBoxCells = ({data}) => {

    const [lightened, setLightened] = useState(new Set());
    const isValid = (arr) => {
        return (arr[0] >= 0 && arr[0] <= 3) && (arr[1] >= 0 && arr[1] <= 3);
    }
    const onClickHandler = (row, col) => {
        const options = [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1],[row,col]];
        let dummyMap =new Set(lightened);
        for (let i = 0; i < 5; i++) {
            if (isValid(options[i])) {
                if (lightened.has(`${options[i][0]},${options[i][1]}`)) {
                    dummyMap.delete(`${options[i][0]},${options[i][1]}`);
                    setLightened(dummyMap)
                } else {
                    setLightened(dummyMap.add(`${options[i][0]},${options[i][1]}`))
                }
            }
        }
        setLightened(dummyMap);
    }


    return (
        <div className="wrapper">
            {data.map((item, index1) => {
                return <div className="row">
                    {item.map((element, index2) => {
                            return <Box onClickHandler={() => onClickHandler(index1, index2)}
                                        shouldShowGreen={lightened.has(`${index1},${index2}`)}/>
                        }
                    )
                    }
                </div>
            })}
        </div>
    )

}
export default GridLightBoxCells;
