import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Search from "./screens/Search";
import ProgressBar from "./components/ProgressBar_Easy";
import ProgressBarMedium from "./components/ProgressBar_Medium/ProgressBar_Medium";
import FileExplorer from "./screens/fileExplorer/FileExplorer";
import NestedCheckbox from "./screens/NestedCheckBoxes/NestedCheckBox";
import Chips from "./screens/Chips";
import ChattingAppWebsockets from "./screens/Websockets";
import TrafficLight from "./screens/TrafficLigths/TrafficLights";
import DataTable from "./screens/Data Table/DataTable";
import GridLightBoxCells from "./screens/GridLightBoxCells/GridLightBoxCells";

const sampleData = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 28 },
    { id: 5, name: "Eve", age: 27 },
    { id: 6, name: "Frank", age: 33 },
    { id: 7, name: "Grace", age: 24 },
    { id: 8, name: "Hank", age: 26 },
    { id: 9, name: "Ivy", age: 21 },
    { id: 10, name: "Jack", age: 29 }
];
function App() {
  return (
    <BrowserRouter>
     <Routes>
         <Route path={"/Search"} element={<Search/>}/>
         <Route path={"/ProgressBarEasy"} element={<ProgressBar/>}/>
         <Route path={"/ProgressBarMedium"} element={<ProgressBarMedium/>}/>
         <Route path={"/FileExplorer"} element={<FileExplorer/>}/>
         <Route path={"/"} element={<NestedCheckbox/>}/>
         <Route path={"/ChattingAppWebsockets"} element={<ChattingAppWebsockets/>}/>
         <Route path={"/Chips"} element={<Chips/>}/>
         <Route path={"/TrafficLight"} element={<TrafficLight/>}/>
         <Route path={"/DataTable"} element={<DataTable data={sampleData}/>}/>
         <Route path={"/GridLightBoxCells"} element={<GridLightBoxCells data={[[1, 2, 3], [1, 2, 3], [1, 2, 3]]}/>}/>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
