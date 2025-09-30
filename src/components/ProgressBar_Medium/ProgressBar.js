import React, {useEffect, useState} from 'react';
import './style.css';

function ProgressBar({progress}) {
    const [color, setColor] = useState("white");
    const [widthPercentage,setWidthPercentage]=useState(0)
    useEffect(() => {
        if (progress <= 5) {
            setColor("black")
        } else {
            setColor("white")
        }
        setTimeout(()=>{
            setWidthPercentage(progress)
        },100)
    }, [progress])

    return (
        <div className="outer" style={{
            backgroundColor: "lightgrey",
            borderRadius: 10, height: 20,
        }}>
            <div className="inner" id="testBgColor"
                 style={{
                     borderRadius: 10,
                     height: 20,
                     backgroundColor: "green",
                     color: `${color}`,
                     width:`${widthPercentage}%`
                 }}>
                <p> {progress}%</p>
            </div>
        </div>
    );
}

export default ProgressBar;

