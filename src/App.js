import "./static/css/common.css";
import "./static/css/App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      {/* SCREENS */}
      <Home />
    </>
  );
}

export default App;
