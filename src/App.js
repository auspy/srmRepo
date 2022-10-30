import "./static/css/common.css";
import "./static/css/App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import RootNavi from "./navigation/RootNavi";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <SubHeader/>

      {/* <SubHeader /> */}
      {/* SCREENS */}
      <RootNavi />
    </>
  );
}

export default App;
