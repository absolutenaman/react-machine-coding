import {useState} from "react";
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
const addArrayToChildren = (id, data, input, setState, isFolder,isDelete) => {
    const updateTree = (data) => {
        return data.map((item) => {
            if (item?.id === id) {
                if (isFolder) {
                    return {
                        ...item,
                        children: [...item.children, {
                            id: Date.now().toLocaleString(),
                            name: input,
                            isFolder: true,
                            children: []
                        }]
                    }
                } else if(isDelete){
                    return {}
                } else {
                    return {
                        ...item,
                        children: [...item.children, {
                            id: Date.now().toLocaleString(),
                            name: input,
                            isFolder: false,
                        }]
                    }
                }

            } else if (item.children) {
                return {...item, children: updateTree(item.children)}
            } else
                return item;
        })
    }
    setState(updateTree(data))

}

const AddNode = ({currIndex, data, setState, setIsAddFolderTabVisible, isFolder}) => {
    const [input, setInput] = useState("");
    return <div>
        <h2> Enter Folder Name</h2>
        <input type="text" value={input} onChange={(e) => {
            setInput(e.target.value)
        }}/>
        <button data-testid="add" onClick={() => {
            addArrayToChildren(currIndex, data, input, setState, isFolder);
            setIsAddFolderTabVisible(false)

        }}>Add
        </button>
        <button data-testid="cancel" onClick={() => {
            setIsAddFolderTabVisible(false)
        }}>Cancel
        </button>
    </div>
}
export default function FileExplorer() {
    const [state, setState] = useState(initialData);
    const [currIndex, setCurrIndex] = useState(null);
    const [isAddFolderTabVisible, setIsAddFolderTabVisible] = useState(false)
    const [isFolder, setIsFolder] = useState(false)
    return (
        <div className="wrapper">
            <h2>File Explorer</h2>
            {
                state?.map((item, index) => {
                    return <FileAndFolder key={item.id} state={state} setState={setState} data={item} index={index}
                                          isAddFolderTabVisible={isAddFolderTabVisible}
                                          setIsAddFolderTabVisible={setIsAddFolderTabVisible}
                                          setCurrIndex={setCurrIndex}
                                          setIsFolder={setIsFolder}
                    />
                })
            }
            {
                isAddFolderTabVisible &&
                <AddNode data={state} setIsAddFolderTabVisible={setIsAddFolderTabVisible} setState={setState}
                         currIndex={currIndex} isFolder={isFolder}  />
            }
        </div>
    );
}