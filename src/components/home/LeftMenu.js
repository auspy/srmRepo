import SearchBar from "../common/SearchBar";

const LeftMenu = () => {
  return (
    <div
      className="bgLightBg"
      style={{
        width: "35%",
        boxShadow: "2px 0px 20px rgba(0, 0, 0, 0.07)",
        height: "100%",
        position: "fixed",
        left: 0,
        boxSizing: "border-box",
      }}
    >
      {/* left menu content */}
      <div
        style={{
          marginTop: 100,
          marginRight: 40,
          marginLeft: "21.5%",
        }}
      >
        {/* serachbar and heading */}
        <div>
          <h1 className="bColor">SRM repository</h1>
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
          <div className="blueLine mt15" />
          {/* links */}
          <div className="fcfs">
            {topLinks?.map((item, i) => (
              <a
                href={item.href}
                key={item + i}
                className={`mv10 hColor regu13`}
              >
                - {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;

// 7 links
const topLinks = [
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
  { name: "Link name", href: "/" },
];