import ProgressBar from "./ProgressBar";
export default function App() {
    const bars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    return (
        <div className="App">
            {
                bars.map((item,index)=>{
                    return <ProgressBar progress={item}  role="progressbar"/>
                })
            }
        </div>
    );
}
