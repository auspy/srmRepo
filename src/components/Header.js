import { useLocation } from "react-router-dom";
import IconProfile from "../static/icons/IconProfile";
import IconSearch from "../static/icons/IconSearch";

const Header = () => {
  const { pathname } = useLocation();
  const homeCond = pathname === "/";
  return (
    <>
      <div
        id="header"
        className="pv10 bgLightBg fcc"
        style={{
          boxSizing: "border-box",
          width: "100vw",
          marginBottom:37,
          zIndex:3,
          position:"relative",
          paddingInlineStart:120,
          paddingInlineEnd:120,
        }}
      >
        {/* CONTENT */}
        <div
          className="frcsb"
          style={{
            width: "100%",
          }}
        >
          {/* LOGO */}
          <div>
            <a href="/" className={`frc ${homeCond&&"test"}`} id="logo">
              <img
                src={require("../static/images/logo.png")}
                height={58}
                alt="srm logo"
              />
            </a>
            <a href="/" className="frc" style={{opacity:0}}>
              <img
                src={require("../static/images/logo.png")}
                height={58}
                alt="srm logo"
              />
            </a>
          </div>
          {/* NAVI */}
          <div>
            {menuItems?.map((item, i) => (
              <a
                className={`regu16 ${i !== menuItems?.length - 1 && "mr30"}`}
                key={item + i}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* ICONS */}
          <div className="frc">
            {icons?.map((item, i) => (
              <button
                key={item + i}
                className={`bgNone ${i === icons.length - 1 && "ml30 frc"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

const menuItems = [
  { name: "Latest Updates", href: "/" },
  { name: "Ranking", href: "/" },
  { name: "Contact Us", href: "/" },
  { name: "About SRM", href: "/" },
  { name: "Visit SRM Website", href: "/" },
];
const icons = [<IconSearch />, <IconProfile />];
