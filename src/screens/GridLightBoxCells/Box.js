import "./App.css";
const Box = ({onClickHandler,lightened}) => {
    return <div onClick={onClickHandler} className={"boxes"}/>
}
export default Box;