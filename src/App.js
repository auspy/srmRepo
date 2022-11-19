import "./static/css/common.css";
import "./static/css/App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import RootNavi from "./navigation/RootNavi";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// test psuh
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {!pathname.includes("/Login") && (
        <>
          <Header />
          <SubHeader />
        </>
      )}

      {/* <SubHeader /> */}
      {/* SCREENS */}
      <RootNavi />
    </>
  );
}

export default App;
