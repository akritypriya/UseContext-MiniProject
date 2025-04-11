import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "../components/Login";
import Profile from "../components/Profile";
import UserContextProvider from "../components/context/UserContextProvider";
import Cart from "../components/Cart";
import HomePage from "../components/HomePage";
const App = () => {
  return(
<UserContextProvider> 
<BrowserRouter>
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/cart" element={<Cart />} />
   </Routes>
</BrowserRouter>
</UserContextProvider>
);
};

export default App;
