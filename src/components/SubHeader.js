const SubHeader = () => {
  return (
    <div
      className="aPosi bgSrmBlue frc"
      style={{
        top: 80,
        height: 40,
        width: "100%",
        left: 0,
        justifyContent: "center",
      }}
    >
      <div style={{ width: "85%", overflow: "hidden" }} className={"frc"}>
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