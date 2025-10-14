import {useState, useEffect} from "react";
import "./styles.css";

const TrafficLight = () => {
    const timeObj = {
        "red": {colorTo: "yellow", changeAfter: 3000},
        "yellow": {colorTo: "green", changeAfter: 1000},
        "green": {colorTo: "red", changeAfter: 2000}
    };
    const [currLight, setCurrLight] = useState("red");
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrLight(timeObj[currLight]?.colorTo)
        }, timeObj[currLight]?.changeAfter)
        return () => clearTimeout(timer)
    }, [currLight])

    return (
        <div>
            <h2 data-testid="title">Traffic Lights</h2>
            <div
                className="traffic-light"
                id="traffic-light"
                data-testid="traffic-light"
            >
                <div
                    id="red-light"
                    data-testid="red-light"
                    className={`circle red-${currLight === "red" ? "on" : "off"}`}
                ></div>
                <div
                    id="yellow-light"
                    data-testid="yellow-light"
                    className={`circle yellow-${currLight === "yellow" ? "on" : "off"}`}
                ></div>
                <div
                    id="green-light"
                    data-testid="green-light"
                    className={`circle green-${currLight === "green" ? "on" : "off"}`}
                ></div>
            </div>
        </div>
    );
};

export default TrafficLight;
