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

function App() {
  return (
    <BrowserRouter>
     <Routes>
         <Route path={"/Search"} element={<Search/>}/>
         <Route path={"/ProgressBarEasy"} element={<ProgressBar/>}/>
         <Route path={"/ProgressBarMedium"} element={<ProgressBarMedium/>}/>
         <Route path={"/FileExplorer"} element={<FileExplorer/>}/>
         <Route path={"/NestedCheckbox"} element={<NestedCheckbox/>}/>
         <Route path={"/ChattingAppWebsockets"} element={<ChattingAppWebsockets/>}/>
         <Route path={"/Chips"} element={<Chips/>}/>
         <Route path={"/"} element={<TrafficLight/>}/>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
