import { useLocation } from "react-router-dom";

const SubHeader = () => {
  const { pathname } = useLocation();
  // CONDITIONS
  const pages = ["Departments"]
  const pathArr =  pathname?.split("/")
  const headerColorCond =pages.some((item)=>pathArr?.includes(item))
  return (
    <div
      className={`aPosi frc container`}
      style={{
        top: 75,
        height: 45,
        left: 0,
        zIndex:2,
        backgroundColor:headerColorCond?"#11304A":"var(--srmBlue)",
      }}
    >
      <div style={{overflow: "hidden" }} className={"frc w100"}>
        {items?.map((item, i) => (
          <a
            key={item + i}
            className={`medi12 frc upper`}
            style={{
              color: "white",
              marginRight: i !== items?.length - 1 ? 40 : 0,
              minWidth: "max-content",
            }}
            href={item.link}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;

const items = [
  {
    name: "BTech",
    link: "/",
  },
  {
    name: "law",
    link: "/",
  },
  {
    name: "hotel management",
    link: "/",
  },
  {
    name: "latest updates",
    link: "/",
  },
  {
    name: "srm repository",
    link: "/",
  },
  {
    name: "BTech",
    link: "/",
  },
  {
    name: "law",
    link: "/",
  },
  {
    name: "hotel management",
    link: "/",
  },
  {
    name: "latest updates",
    link: "/",
  },
  {
    name: "last",
    link: "/",
  },
  {
    name: "srm repository",
    link: "/",
  },
];