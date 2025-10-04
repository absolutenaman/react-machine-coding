import {MdExpandLess, MdExpandMore, MdDeleteOutline} from "react-icons/md";
import {FiFolderPlus} from "react-icons/fi";
import {AiOutlineFileAdd} from "react-icons/ai";
import {useState} from "react";

const deleteNode = (id, state, setState) => {
    const updateTree = (data) => {
        const filteredData = data.filter((item) => item.id !== id);
        return filteredData.map((item) => {
            if (item.isFolder && item.children.length > 0) {
                return {
                    ...item,
                    children: updateTree(item.children)
                }
            } else return item
        });
    }
    setState(updateTree(state))
}

const FolderContainer = ({
                             data, collapseHandler, setIsAddFolderTabVisible, setIsFolder, setCurrIndex, state, setState
                         }) => {
    return <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", flexDirection: "row"}}>
            <MdExpandMore onClick={collapseHandler}/>
            <div>{data?.name}</div>
            <FiFolderPlus data-testid={`add-folder-${data.id}`} onClick={() => {
                setIsFolder(true)
                setIsAddFolderTabVisible(true)
                setCurrIndex(data.id)
            }}/>
            <AiOutlineFileAdd data-testid={`add-file-${data.id}`} onClick={() => {
                setIsFolder(false)
                setCurrIndex(data.id)
                setIsAddFolderTabVisible(true)
            }}/>
            <MdDeleteOutline data-testId="delete" onClick={() => {
                deleteNode(
                    data.id, state, setState
                )
            }}/>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
            {data?.children?.length > 0 && data.children.map((item, index) => {
                return <FileAndFolder state={state} setState={setState} data={item}
                                      setIsAddFolderTabVisible={setIsAddFolderTabVisible}
                                      index={index}
                                      setIsFolder={setIsFolder}
                                      setCurrIndex={setCurrIndex}
                                      key={item.id}
                />

            })}
        </div>
    </div>
}

const FileAndFolder = ({data, state, setState, setIsAddFolderTabVisible, setCurrIndex, setIsFolder}) => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const collapseHandler = () => {
        setIsCollapsed((prev) => !prev)
    }
    // data, collapseHandler, setIsAddFolderTabVisible, setIsFolder, setCurrIndex, state, setState
    return (<div>
            <div className="row">
                {data?.isFolder ? <div>
                    {isCollapsed ? <FolderContainer state={state} setState={setState} data={data}
                                                    collapseHandler={collapseHandler}
                                                    setIsAddFolderTabVisible={setIsAddFolderTabVisible}
                                                    setCurrIndex={setCurrIndex}
                                                    setIsFolder={setIsFolder}
                                                    key={data.id}
                    /> : <div style={{display: "flex"}}>
                        <MdExpandLess onClick={collapseHandler}/>
                        <div>{data.name}</div>
                        <FiFolderPlus data-testid={`add-folder-${data.id}`} onClick={() => {
                            setIsFolder(true)
                            setCurrIndex(data.id)
                            setIsAddFolderTabVisible(true)
                        }}/>
                        <AiOutlineFileAdd data-testid={`add-file-${data.id}`} onClick={() => {
                            setIsFolder(false)
                            setCurrIndex(data.id)
                            setIsAddFolderTabVisible(true)
                        }}/>
                        <MdDeleteOutline data-testId="delete" onClick={() => {
                            deleteNode(
                                data.id, state, setState
                            )
                        }}/>
                    </div>}
                </div> : <div>
                    <div>{data?.name} <MdDeleteOutline data-testId="delete" onClick={() => {
                        deleteNode(
                            data.id, state, setState
                        )
                    }}/></div>

                </div>}
            </div>

        </div>

    );
};

export default FileAndFolder;
