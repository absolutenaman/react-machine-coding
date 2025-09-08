import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Search from "./screens/Search";

function App() {
  return (
      <Search/>
    // <BrowserRouter>
    //  <Routes>
    //      <Route path={"/"} element={Search}/>
    //      </Routes>
    // </BrowserRouter>
  );
}

export default App;
