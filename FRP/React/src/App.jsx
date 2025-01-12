import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home, Blog, Singlepost, Pages, Contact } from "./components/Pages";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Singlepost" element={<Singlepost />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );

}

export default App
