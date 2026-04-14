import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import EditPost from "./Components/EditPost";
import Home from "./Pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<CreatePost/>}></Route>
        <Route path="/edit:id" element={<EditPost/>}></Route>
      </Routes>
    </BrowserRouter>
  

  )

}

export default App