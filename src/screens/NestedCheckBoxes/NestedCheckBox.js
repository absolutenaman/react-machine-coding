import "./styles.css"
import {useState} from "react";

const data = [{
    id: 0,
    title: "Fruits",
    isChecked: false,
    children: [{
        id: 1,
        isChecked: false,
        title: "Berreys",
        children: []
    }]
},
    {
        id: 2,
        title: "Vegetables",
        isChecked: false,
        children: [
            {
                id: 3,
                title: "Lady finger",
                isChecked: false,
                children: []
            }
        ]
    },
    {
        id: 4,
        title: "Canes",
        isChecked: false,
        children: []
    }
]
const NestedCheckBox = () => {
    const [filterData, setFilteredData] = useState(data);
    return filterData.map((item, index) => {
        return <CheckBox key={item.id} item={item}/>
    })
}
const clickHandler = (id) => {

}
const CheckBox = ({item}) => {
    console.log("!!! item", item)
    return <div>
        <div style={{display: "flex", flexDirection: "row"}}>
            <input onClick={() => clickHandler(item.id)} type="checkBox" value={item.isChecked}/>
            <div>{item.title}</div>
        </div>
        {
            item?.children?.length > 0 &&
            <div className="child">
                {item?.children.map((child) => {
                    return <CheckBox item={child}/>
                })
                }
            </div>
        }
    </div>
}
export default NestedCheckBox;