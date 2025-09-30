import React, {useEffect, useState} from 'react';

function ProgressBar() {
    const [percentageCompleted, setPercentageCompleted] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState("yellow")
    useEffect(() => {
        if (percentageCompleted < 40) {
            setBackgroundColor("red")
        } else if (percentageCompleted >= 40 && percentageCompleted < 80) {
            setBackgroundColor("orange")
        } else {
            setBackgroundColor("green")
        }
    }, [percentageCompleted])
    const onIncreaseHandler=()=>{
        if(percentageCompleted +10<=100){
            setPercentageCompleted((prev)=>prev+10)
        }
    }
    const onDecreaseHandler=()=>{
        if(percentageCompleted -10>=0){
            setPercentageCompleted((prev)=>prev-10)
        }
    }
    return (
        <div style={{
            textAlign: "center", backgroundColor: "lightgrey",
            borderRadius: 10, height: 20, width: "100%"
        }}>
            <div id="testBgColor"
                 style={{backgroundColor: `${backgroundColor}`, borderRadius: 10, height: 20, width: `${percentageCompleted}%`}}>
                <p> {percentageCompleted}%</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <button type="submit" onClick={onIncreaseHandler} >+10%</button>
                <button  onClick={onDecreaseHandler}>-10%</button>

            </div>
        </div>
    );
}

export default ProgressBar;

