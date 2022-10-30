import { Route, Routes } from "react-router-dom";
import ScreenDeparts from "../screens/ScreenDeparts";
import Home from "../screens/ScreenHome";

const RootNavi = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Departments" element={<ScreenDeparts />} />
    </Routes>
  );
};

export default RootNavi;
