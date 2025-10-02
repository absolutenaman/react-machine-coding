import { useState} from "react";
import FileAndFolder from "./FileAndFolder";
import './style.css'

const initialData = [
    {
        id: 1,
        name: "public",
        isFolder: true,
        children: [{id: 2, name: "index.html", isFolder: false}],
    },
    {
        id: 3,
        name: "src",
        isFolder: true,
        children: [
            {id: 4, name: "App.js", isFolder: false},
            {id: 5, name: "index.js", isFolder: false},
        ],
    },
    {id: 6, name: "package.json", isFolder: false},
];
const AddFolderName = ({currIndex, data, setData,setIsAddFolderTabVisible}) => {
    const [input, setInput] = useState("");
    return <div>
        <h2> Enter Folder Name</h2>
        <input type="text" value={input} onChange={(e) => {
            setInput(e.target.value)
        }}/>
        <button onClick={() => {
            let child = [...data];
            child[currIndex].children.push({
                id: data[currIndex].id,
                name: input,
                isFolder: true,
                children:[]
            })
            setData(child)
            console.log(data)
            setIsAddFolderTabVisible(false)
        }}>Add
        </button>
        <button onClick={() => {
            setIsAddFolderTabVisible(false)
        }}>Cancel
        </button>
    </div>
}
export default function FileExplorer() {
    const [state, setState] = useState(initialData);
    const [currIndex, setCurrIndex] = useState(null);
    const [isAddFolderTabVisible, setIsAddFolderTabVisible] = useState(false)

    return (
        <div className="wrapper">
            <h2>File Explorer</h2>
            {
                state?.map((item, index) => {
                    return <FileAndFolder state={state} setState={setState} data={item} index={index}
                                          isAddFolderTabVisible={isAddFolderTabVisible}
                                          setIsAddFolderTabVisible={setIsAddFolderTabVisible}
                                          setCurrIndex={setCurrIndex}
                    />
                })
            }
            {
                isAddFolderTabVisible && <AddFolderName data={state} setIsAddFolderTabVisible={setIsAddFolderTabVisible} setData={setState} currIndex={currIndex}/>
            }
        </div>
    );
}
