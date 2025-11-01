import "./styles.css";
import { useState } from "react";

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    isChecked: false,
    children: [
      { id: 2, label: "Apple", isChecked: false, children: [] },
      { id: 3, label: "Banana", isChecked: false, children: [] },
      {
        id: 4,
        label: "Citrus",
        isChecked: false,
        children: [
          { id: 5, label: "Orange", isChecked: false, children: [] },
          { id: 6, label: "Lemon", isChecked: false, children: [] },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    isChecked: false,
    children: [
      { id: 8, label: "Carrot", isChecked: false, children: [] },
      { id: 9, label: "Broccoli", isChecked: false, children: [] },
    ],
  },
];
const NestedCheckBox = () => {
  const [checkedData, setCheckedData] = useState(new Set());
  return CheckboxesData.map((item, index) => {
    return (
      <CheckBox
        item={item}
        key={index}
        checkedData={checkedData}
        setCheckedData={setCheckedData}
      />
    );
  });
};
const checkAllChildren = (newCheckedData, item, value) => {
  if (value) newCheckedData.add(item.id);
  else {
    newCheckedData.delete(item.id);
  }
  if (item?.children?.length > 0) {
    for (let i = 0; i < item.children.length; i++) {
      if (value) newCheckedData.add(item.children[i].id);
      else {
        newCheckedData.delete(item.children[i].id);
      }
      if (item.children[i]?.children?.length > 0) {
        checkAllChildren(newCheckedData, item.children[i], value);
      }
    }
  }
};
const verifyAllChild = (newCheckedData) => {
  const verify = (newCheckedData, item) => {
    if (item?.children?.length == 0) return newCheckedData.has(item.id);
    let flag=true;
    for (let i = 0; i < item?.children?.length; i++) {
        flag=flag * newCheckedData.has(item.children[i].id);
        if(item.children[i].children.length >0){
            flag=flag * verify(item.children[i])
        }
        if(flag)
            newCheckedData.add(item.id)
    }
  };
  for(let i=0;i<CheckboxesData.length;i++) verify(newCheckedData, CheckboxesData[i]);
};
const onClickHandler = (item, checkedData, setCheckedData, e) => {
  let newCheckedData = new Set(checkedData);
  checkAllChildren(newCheckedData, item, e.target.checked);
  verifyAllChild(newCheckedData);
  setCheckedData(newCheckedData);
};
const CheckBox = ({ item, checkedData, setCheckedData }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          onChange={(e) => onClickHandler(item, checkedData, setCheckedData, e)}
          type="checkBox"
          checked={checkedData.has(item.id)}
        />
        <div>{item.label}</div>
      </div>
      {item?.children?.length > 0 && (
        <div className="child">
          {item?.children.map((child, index) => {
            return (
              <CheckBox
                key={index}
                item={child}
                checkedData={checkedData}
                setCheckedData={setCheckedData}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default NestedCheckBox;
