import { useLocation } from "react-router-dom";

const SubHeader = () => {
  const { pathname } = useLocation();
  // CONDITIONS
  const pages = ["Collections"];
  const pathArr = pathname?.split("/");
  const headerColorCond = pages.some((item) => pathArr?.includes(item)&&pathArr.length<4);
  return (
    <div
      className={`aPosi frc container`}
      style={{
        top: 75,
        height: 45,
        left: 0,
        zIndex: 2,
        backgroundColor: headerColorCond ? "#11304A" : "var(--srmBlue)",
  // overflow: "hidden",
// paddingInlineStart:240
      }}
    >
      <div
        style={{ overflow: "hidden", color: "white",gap:30 }}
        className={"frc w100"}
      >
        {/* {departItems?.map((item, i) => (
          <a
            key={item + i}
            className={`medi12 frc upper`}
            style={{
              color: "white",
              marginRight: i !== departItems?.length - 1 ? 40 : 0,
              minWidth: "max-content",
            }}
            href={item.link}
          >
            {item.name}
          </a>
        ))} */}
        <span className="regu12 frc upper wColor mr20" style={{width:120}}>Latest Update </span>
        <div id="scrollText" className="regu12 frc wColor w100" style={{ opacity: 0.8 }}>
          Any new research paper added or any announcement will be shown here! 📢
        </div>
      </div>
    </div>
  );
};

export default SubHeader;

// const departItems = [
//   {
//     name: "BTech",
//     link: "/",
//   },
//   {
//     name: "law",
//     link: "/",
//   },
//   {
//     name: "hotel management",
//     link: "/",
//   },
//   {
//     name: "latest updates",
//     link: "/",
//   },
//   {
//     name: "srm repository",
//     link: "/",
//   },
//   {
//     name: "BTech",
//     link: "/",
//   },
//   {
//     name: "law",
//     link: "/",
//   },
//   {
//     name: "hotel management",
//     link: "/",
//   },
//   {
//     name: "latest updates",
//     link: "/",
//   },
//   {
//     name: "last",
//     link: "/",
//   },
//   {
//     name: "srm repository",
//     link: "/",
//   },
// ];
