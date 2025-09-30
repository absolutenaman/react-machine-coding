import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Search from "./screens/Search";
import ProgressBar from "./components/ProgressBar_Easy";

function App() {
  return (
    <BrowserRouter>
     <Routes>
         <Route path={"/"} element={<ProgressBar/>}/>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
