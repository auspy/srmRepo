import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import IconProfile from "../static/icons/IconProfile";
import IconSearch from "../static/icons/IconSearch";

const Header = () => {
  const { pathname } = useLocation();
  // CONDITIONS
  const homeCond = pathname === "/";

  // LOGO FIXED AND NORMAL
  useEffect(() => {
    if (homeCond) {
      document.getElementById("logo").classList.remove("dNone");
    } else {
      document.getElementById("logo").classList.add("dNone");
    }
  }, [homeCond]);
  return (
    <>
      <div
        id="header"
        className={`pv10 bgLightBg fcc container`}
        style={{
          marginBottom: 42,
          zIndex: 3,
          position: "relative",
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
            <Link to="/" className={`frc ${homeCond && "test"}`} id="logo">
              <img
                src={require("../static/images/logo.png")}
                height={58}
                alt="srm logo"
              />
            </Link>
            <Link to="/" className="frc" style={{ opacity: homeCond ? 0 : 1 }}>
              <img
                src={require("../static/images/logo.png")}
                height={58}
                alt="srm logo"
              />
            </Link>
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
const icons = [
  <IconSearch />,
  <Link to={"/Login"} className="frc">
    <IconProfile />
  </Link>,
];
