import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "../components/Login";
import Profile from "../components/Profile";
import UserContextProvider from "../components/context/UserContextProvider";
const App = () => {
  return(
<UserContextProvider>
<BrowserRouter>
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
   </Routes>
</BrowserRouter>
</UserContextProvider>
);
};

export default App;
