import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NewVideo from "./pages/newVideo";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<NewVideo />} />
        </Routes>
    )
}

export default AppRoutes