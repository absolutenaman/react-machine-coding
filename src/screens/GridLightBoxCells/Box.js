import "./App.css";
const Box = ({onClickHandler,shouldShowGreen}) => {
    return <div onClick={onClickHandler} className={shouldShowGreen ? "green-boxes":"boxes"}/>
}
export default Box;