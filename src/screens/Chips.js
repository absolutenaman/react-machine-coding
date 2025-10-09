import React, {useState} from "react";

function ChipsInput() {
    const [arr, setArr] = useState([]);
    const [currInput, setCurrInput] = useState('')
    const addElement = (e) => {
        if(currInput.trim().length>0)
        if (e.key === "Enter") {
            setArr([...arr, currInput.trim()]);
            setCurrInput('');
        }
    }
    const removeElement = (item) => {
        console.log(item)
        const updatedArr = arr.filter((element) => {
            return element !== item
        })
        console.log(updatedArr)
        setArr(updatedArr)
    }
    const Tag = ({item}) => {
        return <div style={{padding: 5, display: "flex", margin: 5, borderRadius: 5, backgroundColor: "grey"}}>
            {item}
            <button style={{color: "red"}} type="submit" onClick={()=>{removeElement(item)}}>X
            </button>
        </div>
    }
    return (
        <div className='main-container'>
            <h2>Chips Input</h2>
            <input
                type="text"
                placeholder="Type a chip and press tag"
                className="input"
                value={currInput}
                onKeyDown={(e) => addElement(e)}
                onChange={(e) => setCurrInput(e.target.value)}
            />
            <div style={{display: "flex", padding: 50}}>
                {
                    arr.map((item) => {
                        return <Tag item={item}/>
                    })
                }
            </div>
        </div>)
}

export default ChipsInput;