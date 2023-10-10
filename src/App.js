import Home from "./components/Home.js";
import About from "./components/About.js";
import Blogs  from "./components/Blog.js";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Detail from "./components/Detail.js";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/home" element={<Navigate to="/"/>}></Route>
        <Route path="/info" element={<Navigate to="/about"/>}></Route>
        <Route path="/blog/:id" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
