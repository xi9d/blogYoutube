import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Navbar from "./Navbar.components";


function App() {

  return (
    <div className="">
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/index" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<CreatePost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
