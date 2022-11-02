import { Route, Routes } from "react-router-dom";
import ScreenCollection from "../screens/ScreenCollection";
import Home from "../screens/ScreenHome";
import ScreenLists from "../screens/ScreenLists";
import ScreenLogin from "../screens/ScreenLogin";
import ScreenProfile from "../screens/ScreenProfile";

const RootNavi = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* collections */}
      {/* type = research paper,authors, default=research papers */}
      <Route path="/Collections" element={<ScreenCollection />} />
      {/* <Route path="/Collections?type=:type" element={<ScreenCollection />} /> */}
      {/* Research Papers */}
      <Route path="/Collections/:collection" element={<ScreenLists />} />
      {/* <Route path="/Collections/All" element={<ScreenLists />} /> */}
      <Route path="/Collections/:collection?type=:type" element={<ScreenLists />} />
      
      {/* type will change if list is of papers or author profiles of that department/collection */}
      <Route path="/Collections/:name?type=:type&sort=:sort" element={<ScreenLists />} />
      {/* Authors */}
      <Route path="/Collections/:collection?type=Authors" element={<ScreenLists />} />

      {/* Author profile */}
      <Route path="/Collections/:collection/:name" element={<ScreenProfile />} />


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
