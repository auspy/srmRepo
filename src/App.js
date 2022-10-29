import "./static/css/common.css";
import "./static/css/App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./screens/Home";
import Front from "./components/home/front";
import Department from "./components/home/department";

function App() {
  return (
    <>
      <Header />
      <Front />
      <Department />
      {/* <SubHeader /> */}
      {/* SCREENS */}
      {/* <Home /> */}
    </>
  );
}

export default App;
