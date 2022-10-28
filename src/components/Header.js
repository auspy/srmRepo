import IconProfile from "../static/icons/IconProfile";
import IconSearch from "../static/icons/IconSearch";

const menuItems = [
  { name: "Latest Updates", href: "/" },
  { name: "Ranking", href: "/" },
  { name: "Contact Us", href: "/" },
  { name: "About SRM", href: "/" },
  { name: "Visit SRM Website", href: "/" },
];
const icons = [<IconProfile />, <IconSearch />];

const Header = () => {
  return (
    <>
      <div className="frcsb pv10">
        {/* logo */}
        <img
          src={require("../static/images/logo.png")}
          height={58}
          alt="srm logo"
        />
        {/* navi */}
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
        {/* icons */}
        <div className="frc">
          {icons?.map((item, i) => (
            <button
              className={`bgNone ${i === icons.length - 1 && "ml30 frc"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
