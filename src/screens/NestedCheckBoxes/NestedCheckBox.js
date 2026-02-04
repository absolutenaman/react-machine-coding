import "./styles.css";
import {useState} from "react";

const CheckboxesData = [
    {
        id: 1,
        label: "Fruits",
        isChecked: false,
        children: [
            {id: 2, label: "Apple", isChecked: false, children: []},
            {id: 3, label: "Banana", isChecked: false, children: []},
            {
                id: 4,
                label: "Citrus",
                isChecked: false,
                children: [
                    {id: 5, label: "Orange", isChecked: false, children: []},
                    {id: 6, label: "Lemon", isChecked: false, children: []},
                ],
            },
        ],
    },
    {
        id: 7,
        label: "Vegetables",
        isChecked: false,
        children: [
            {id: 8, label: "Carrot", isChecked: false, children: []},
            {id: 9, label: "Broccoli", isChecked: false, children: []},
        ],
    },
];



const handleClickHandler = (isChecked, node, checkedData, setCheckedData) => {
    updateChildren(isChecked, node, checkedData, setCheckedData);
    setCheckedData(prev => {
        return {...prev, [node.id]: isChecked}
    })

}
const updateChildren = (isChecked, node, checkedData, setCheckedData) => {
    node.children.forEach((item) => {
        item?.children && updateChildren(isChecked, item, checkedData, setCheckedData)
        setCheckedData(prev => ({...prev, [item.id]: isChecked}))
    })
}

const RenderCheckBoxes = ({data, checkedData, setCheckedData}) => {
    return <>
        {
            data.map((item) => {
                return <div key={item.id}>
                    <input type="checkbox" checked={checkedData?.[item?.id] || false}
                           onChange={(e) => handleClickHandler(e.target.checked, item, checkedData, setCheckedData)}/>
                    <span>{item.label}</span>
                    <div style={{marginLeft: 10}}>
                        {item.children && <RenderCheckBoxes data={item.children} checkedData={checkedData}
                                                            setCheckedData={setCheckedData}/>}
                    </div>

                </div>
            })
        }
    </>
}

const NestedCheckBox = () => {
    const [checkedData, setCheckedData] = useState({1: true})
    return <>
        <RenderCheckBoxes data={CheckboxesData} checkedData={checkedData} setCheckedData={setCheckedData}/>
    </>

}
export default NestedCheckBox;
