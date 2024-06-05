import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";

export default function App() {
  return ( 
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/signin" element={<Signin />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/about" element={<About />}/>
  </Routes>
  </BrowserRouter>
  );
}
