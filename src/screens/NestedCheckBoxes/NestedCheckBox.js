import {useState} from "react";
import './styles.css'

const CheckboxesData = [
    {
        id: 1,
        label: "Fruits",
        isChecked: false,
        children: [
            {id: 2, label: "Apple", isChecked: false},
            {id: 3, label: "Banana", isChecked: false},
            {
                id: 4,
                label: "Citrus",
                isChecked: false,
                children: [
                    {id: 5, label: "Orange", isChecked: false},
                    {id: 6, label: "Lemon", isChecked: false},
                ],
            },
        ],
    },
    {
        id: 7,
        label: "Vegetables",
        isChecked: false,
        children: [
            {id: 8, label: "Carrot", isChecked: false},
            {id: 9, label: "Broccoli", isChecked: false},
        ],
    },
]
const updateRecursive = (item, isChecked, newData) => {
    // 1. Set the state for the current item
    newData[item.id] = isChecked;

    // 2. If it has children, recurse and update their state as well
    if (item.children && item.children.length > 0) {
        for (const child of item.children) {
            updateRecursive(child, isChecked, newData);
        }
    }
};

const checkIfAllChildren = (newData) => {

    const veriFyAllChild = (item) => {
        if (!item.children) {
            return newData[item.id] || false;
        }
        let isChecked = true;
        for (const child of item.children) {
            const childChecked = veriFyAllChild(child);
            if (!childChecked) isChecked = false;
        }
        newData[item.id] = isChecked
        return isChecked
    }
    CheckboxesData.forEach((item) => veriFyAllChild(item))
    return newData
}
const onClickHandler = (item, setData, data, isChecked) => {
    // 1. Create an immutable copy of the state object
    let newData = {...data};

    // 2. Perform the recursive update on the copy, starting with the clicked item
    updateRecursive(item, isChecked, newData);


    // 3. Set the new state

    newData = checkIfAllChildren(newData)
    setData(newData);


};
const Checkboxes = ({CheckboxesData, setData, data}) => {
    return (
        <div>
            {
                CheckboxesData.map((item) => {
                    return <div key={item.id}>
                        <label>
                        <input type="checkBox" checked={data[item.id]} onChange={(e) => {
                            onClickHandler(item, setData, data, e.target.checked)
                        }}/> {item.label}
                        </label>

                        {
                            item.children &&
                            <div style={{paddingLeft: 20}}>
                                <Checkboxes CheckboxesData={item.children} setData={setData} data={data}/>
                            </div>
                        }
                    </div>
                })
            }
        </div>
    );
};

export default function NestedCheckbox() {
    const [data, setData] = useState({1: true})
    return (
        <div>
            <h2>Nested Checkbox</h2>
            <Checkboxes
                CheckboxesData={CheckboxesData}
                setData={setData}
                data={data}
            />
        </div>
    );
}
