// import styles from "../../static/css/department.module.css";

// import { useRef } from "react";
import { DepartItem } from "../../screens/ScreenHome";

export const Collection = () => {
  // const testRef = useRef([])
  // console.log(testRef);
  return (
    <>
      <WhiteBar />
      <div
        className="fcc "
        style={{
          width: "100%",
          height: "100%",
          gap: 80,
          marginTop: 80,
        }}
      >
        {/* content */}
        {departItems &&
          Object.keys(departItems).map((key, index) => [
            <div key={key + index} className={"w100 container"}>
              <div className={""}>
                {/* <h2 className={``}>{key}</h2> */}
                <span
                  className={`regu16 mediP`}
                  style={{
                    fontSize: 20,
                  }}
                  // ref={ref=>testRef[index]=ref}
                >
                  {key}
                </span>
                <div
                  className="blueLine mt10"
                  style={{
                    width: 50,
                  }}
                />
                <div className={"mt10 regu13 notSelectColor lineHeight15"}>
                  {departItems[key].desc}
                </div>
              </div>
              <div
                className={`${"mt40 frc"}`}
                style={{
                  // flexWrap:"wrap",
                  // display: "grid",
                  // gridTemplateColumns: "repeat(auto-fit,220px)",
                  // justifyContent: "space-around",
                  // alignItems: "flex-start",
                  // rowGap: 40,

                  // flex style
                  flexWrap: "wrap",
                  gap: 22,
                }}
              >
                {departItems[key].items?.map((item, i) => (
                  <DepartItem
                    key={item.name + i}
                    info={{ ...item, href: item.name }}
                    small={true}
                    // ref
                  />
                ))}
              </div>
            </div>,
            <div className="lightLine" />,
          ])}
      </div>
    </>
  );
};

export default Collection;

const WhiteBar = () => {
  return (
    <>
      <div
        className="fcc container"
        style={{
          // position
          height: 50,
          backgroundColor: "white",
          // bottom border
          borderBottomWidth: 1,
          borderBottomColor: "var(--darkBg)",
          borderStyle: "solid",
          paddingInline: 30,
        }}
      >
        {/* content */}
        <div
          className="frcsb regu14"
          style={{
            width: "100%",
            height: "inherit",
          }}
        >
          {departItems &&
            Object.keys(departItems).map(
              (item, i) => (
                // departItems[key]?.map((item, i) => (
                <button
                  key={item + i}
                  className="regu14 popi notSelectColor caps whiteBarItem"
                >
                  {item}
                </button>
              )
              // ))
            )}
        </div>
      </div>
    </>
  );
};

// Collection.defaultProps={
// disc:`The information technology computer labs with more than 200
// computers connected with LAN using switches and two servers for
// the internet, academic work and for local network access. In
// addition to this, University has fully equipped R&D/Project Labs
// with Softwares and Development tools.`,

// }

export const departItems = {
  "Computer Science Engineering": {
    items: [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" },
      { name: "Test4" },
      { name: "Test14" },
      { name: "Test24" },
    ],
  },
  Law: {
    items: [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" },
      { name: "Test24" },
    ],
    desc: `The information technology computer labs with more than 200
computers connected with LAN using switches and two servers for
the internet, academic work and for local network access. In
addition to this, University has fully equipped R&D/Project Labs
with Softwares and Development tools.`,
  },
  Faculty: {
    items: [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" },
      { name: "Test4" },
    ],
    desc: `The information technology computer labs with more than 200
computers connected with LAN using switches and two servers for
the internet, academic work and for local network access. In
addition to this, University has fully equipped R&D/Project Labs
with Softwares and Development tools.`,
  },
  "Mechanical Engineering": {
    items: [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" },
      { name: "Test4" },
      { name: "Test14" },
      { name: "Test24" },
    ],
    desc: `The information technology computer labs with more than 200
computers connected with LAN using switches and two servers for
the internet, academic work and for local network access. In
addition to this, University has fully equipped R&D/Project Labs
with Softwares and Development tools.`,
  },
  "Civil Engineering": {
    items: [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" },
      { name: "Test4" },
      { name: "Test14" },
      { name: "Test24" },
    ],
    desc: `The information technology computer labs with more than 200
computers connected with LAN using switches and two servers for
the internet, academic work and for local network access. In
addition to this, University has fully equipped R&D/Project Labs
with Softwares and Development tools.`,
  },
  "Electrical Engineering": {
    items: [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" },
      { name: "Test4" },
      { name: "Test14" },
      { name: "Test24" },
    ],
    desc: `The information technology computer labs with more than 200
computers connected with LAN using switches and two servers for
the internet, academic work and for local network access. In
addition to this, University has fully equipped R&D/Project Labs
with Softwares and Development tools.`,
  },
  "Hotel Management": {
    items: [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" },
      { name: "Test4" },
      { name: "Test14" },
      { name: "Test24" },
    ],
    desc: `The information technology computer labs with more than 200
computers connected with LAN using switches and two servers for
the internet, academic work and for local network access. In
addition to this, University has fully equipped R&D/Project Labs
with Softwares and Development tools.`,
  },
};
