import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Search from "./screens/Search";
import ProgressBar from "./components/ProgressBar_Easy";
import ProgressBarMedium from "./components/ProgressBar_Medium/ProgressBar_Medium";


function App() {
  return (
    <BrowserRouter>
     <Routes>
         <Route path={"/Search"} element={<Search/>}/>
         <Route path={"/ProgressBarEasy"} element={<ProgressBar/>}/>
         <Route path={"/ProgressBarMedium"} element={<ProgressBarMedium/>}/>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
