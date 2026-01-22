import React, {useEffect, useState} from "react";

// create 5 div with diff colors(Yellow,Black,green) and when i click on any div then toggle color to grey

// once all the divs are in grey then after 1 second it will start restoring the previous color after each second

// order should be the same
// ex 2,4,1,3,5
// 1sec -> 2 restores
//1 sec -> 4 restores
//1 sec-> 1


const boxClickHandler = (color, index, toggledDivData, setToggledDivData) => {
    setToggledDivData([...toggledDivData, index]);
}
const isChecked = (index, toggledDivData) => {
    for (let i = 0; i < toggledDivData.length; i++) {
        if (toggledDivData[i] === index)
            return true;
    }
    return false;
}

const DivGame = () => {
    const imageData = ["yellow", "blue", "green", "red", "orange"];
    const [toggledDivData, setToggledDivData] = useState([]);
    console.log("!!!toggledDivData", toggledDivData)
    useEffect(() => {
        if (toggledDivData.length === 5) {
            let interval = setInterval(() => {
                let data = toggledDivData;
                data.shift();
                setToggledDivData([...data]);
                console.log("after removing first value toggledDivData", toggledDivData);
            }, 1000);
            if (toggledDivData.length === 0)
                return clearInterval(interval);
        }

    }, [toggledDivData])
    return (<>
        {
            <div style={{display: "flex", flexDirection: "row"}}>
                {imageData.map((item, index) => {
                    return (
                        <div onClick={() => boxClickHandler(item, index, toggledDivData, setToggledDivData)}
                             style={{
                                 backgroundColor: isChecked(index, toggledDivData) ? "grey" : item,
                                 heigh: "20%",
                                 width: "20%"
                             }}>
                        </div>
                    )
                })
                }
            </div>

        }
    </>)
};

export default DivGame;