import "./static/css/common.css";
import "./static/css/App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import RootNavi from "./navigation/RootNavi";

function App() {
  return (
    <>
      <div
        style={
          {
            // paddingBottom:115
          }
        }
      >
        <Header />
        <SubHeader />
      </div>
      {/* SCREENS */}
      <RootNavi />
    </>
  );
}

export default App;
