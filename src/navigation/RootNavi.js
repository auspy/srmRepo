import { Route, Routes } from "react-router-dom";
import ScreenDeparts from "../screens/ScreenDeparts";
import Home from "../screens/ScreenHome";
import ScreenLists from "../screens/ScreenLists";
import ScreenLogin from "../screens/ScreenLogin";

const RootNavi = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Departments" element={<ScreenDeparts />} />
      <Route path="/Departments/:department%20:name" element={<ScreenLists />} />
      <Route
        path="*"
        element={
          <>
            <h2>404 error: No page found</h2>
          </>
        }
      />
      <Route path="Login" element={<ScreenLogin />} />
    </Routes>
  );
};

export default RootNavi;
