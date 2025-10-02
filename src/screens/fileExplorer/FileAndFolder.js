import {MdExpandLess, MdExpandMore, MdDeleteOutline} from "react-icons/md";
import {FiFolderPlus} from "react-icons/fi";
import {AiOutlineFileAdd} from "react-icons/ai";
import {useState} from "react";

const FolderContainer = ({data, collapseHandler, setIsAddFolderTabVisible, index, setCurrIndex}) => {
    return <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", flexDirection: "row"}}>
            <MdExpandMore onClick={collapseHandler}/>
            <div>{data?.name}</div>
            <FiFolderPlus onClick={() => {
                setIsAddFolderTabVisible(true)
                setCurrIndex(index)
            }}/>
            <AiOutlineFileAdd/>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
            {
                data?.children?.length > 0 && data.children.map((item, index) => {
                    return <FileAndFolder data={item} index={index}/>
                })
            }
        </div>
    </div>
}

const FileAndFolder = ({data, state, setState, setIsAddFolderTabVisible, index, setCurrIndex}) => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const collapseHandler = () => {
        setIsCollapsed((prev) => !prev)
    }
    return (
        <div>
            <div className="row">
                {
                    data?.isFolder ? <div>
                        <div>
                            {isCollapsed ?
                                <FolderContainer state={state} setState={setState} data={data}
                                                 collapseHandler={collapseHandler}
                                                 setIsAddFolderTabVisible={setIsAddFolderTabVisible}
                                                 index={index}
                                                 setCurrIndex={setCurrIndex}
                                />
                                :
                                <div style={{display: "flex"}}>
                                    <MdExpandLess onClick={collapseHandler}/>
                                    <div>{data.name}</div>
                                    <FiFolderPlus onClick={() => {
                                        setCurrIndex(index)
                                        setIsAddFolderTabVisible(true)
                                    }}/>
                                    <AiOutlineFileAdd/>
                                </div>}
                        </div>
                    </div> : <div>
                        <div>{data?.name}</div>
                    </div>
                }
            </div>

        </div>

    )
        ;
};

export default FileAndFolder;
