import React, {useState} from "react";
import "./style.css"
// Sample tab data
const tabs = [
    {id: "home", label: "Home", content: "Welcome to the Home tab!"},
    {id: "profile", label: "Profile", content: "This is your Profile."},
    {id: "settings", label: "Settings", content: "Adjust your Settings here."},
];

export default function TabSwitcher() {
    // TODO: Set up state to track the active tab
    const [currTab, setCurrTab] = useState('home');

    return (
        <div className="tab-switcher">
            <h1>Tab Switcher</h1>

            {/* Tab buttons */}
            <div className="tab-buttons" >
                {
                    tabs.map((data) => {
                        return <button className={currTab === data.id ? "active" : ""} data-testid={`tab-button-${data.id}`}   onClick={() => {
                            setCurrTab(data.id)
                        }}>{data.label}</button>
                    })
                }
                {/* TODO: Render buttons for each tab */}
                {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
            </div>

            {/* Content */}
            <div className="tab-content" data-testid="tab-content">
                {
                    tabs.map((data) => {
                        return currTab === data.id && <div>{data.content}</div>
                    })
                }
                {/* TODO: Show content of the currently active tab */}
            </div>
        </div>
    );
}
