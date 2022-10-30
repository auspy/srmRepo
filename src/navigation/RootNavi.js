import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";

const RootNavi = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    );
}

export default RootNavi;