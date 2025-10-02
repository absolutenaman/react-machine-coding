import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Search from "./screens/Search";
import ProgressBar from "./components/ProgressBar_Easy";
import ProgressBarMedium from "./components/ProgressBar_Medium/ProgressBar_Medium";
import FileExplorer from "./screens/fileExplorer/FileExplorer";


function App() {
  return (
    <BrowserRouter>
     <Routes>
         <Route path={"/Search"} element={<Search/>}/>
         <Route path={"/ProgressBarEasy"} element={<ProgressBar/>}/>
         <Route path={"/ProgressBarMedium"} element={<ProgressBarMedium/>}/>
         <Route path={"/"} element={<FileExplorer/>}/>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
