import { Link } from "react-router-dom";
import SearchBar from "../common/SearchBar";

const LeftMenu = () => {
  return (
    <div
      className="bgLightBg"
      style={{
        width: 489,
        boxShadow: "2px 0px 20px rgba(0, 0, 0, 0.07)",
        height: "100%",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1,
        boxSizing: "border-box",
      }}
    >
      {/* blue line */}
      <div
        className="bgSrmBlue gcc"
        style={{
          height: 2,
          width: "100%",
          position: "relative",
          top: 80,
        }}
      ></div>
      {/* left menu content */}
      <div
        style={{
          marginTop: 100,
          marginRight: 40,
          marginLeft: 120,
          paddingTop: 100,
        }}
      >
        {/* serachbar and heading */}
        <div>
          <h1 className="bColor caps">SRM repository</h1>
          <div className="mt30">
            <span className="regu12 caps mb5 frc">
              Explore research papers by srm university
            </span>
            <SearchBar />
          </div>
        </div>
        {/* top seached links */}
        <div
          style={{
            marginTop: 50,
          }}
        >
          {/* heading */}
          <span className="semi14">Top searched links</span>
          {/* blue line */}
          <div className="blueLine mt15" style={{width:331}} />
          {/* links */}
          <div className="fcfs">
            {topLinks?.map((item, i) => (
              <Link
                to={item.href}
                key={item + i}
                className={`mv10 hColor regu13 ml5`}
              >
                {"-> "} {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;

// 7 links
export const topLinks = [
  { name: "Departments", href: "/Departments" },
  { name: "Test1", href: "/Departments/Engineering%20Test1" },
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
];
