// import styles from "../../static/css/department.module.css";
import { createRef, useEffect, useRef, useState } from "react";
import { DepartItem } from "../../screens/ScreenHome";

export const Collection = (props) => {
  // TO GO TO TARGET HEADING
  const testRef = useRef([]);
  const whiteBarRef = useRef([]);
  testRef.current =
    departItems &&
    Object.keys(departItems).map((ele, i) => testRef.current[i] ?? createRef());
  whiteBarRef.current =
    departItems &&
    Object.keys(departItems).map(
      (ele, i) => whiteBarRef.current[i] ?? createRef()
    );

  // VARIABLES
  const [distFromTop, setDistFromTop] = useState(null);

  useEffect(() => {
    // TO CHECK ELEMENT IN VIEWPORT
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    // TO HIGHLIGHT WHITEBAR ELEMENT IN VIEW
    const checkHeadingInViewport = () => {
      testRef.current.forEach((e, i) => {
        if (isInViewport(e.current)) {
          whiteBarRef.current[i].current?.classList.add("whiteBarItem");
        } else {
          whiteBarRef.current[i].current?.classList.remove("whiteBarItem");
        }
      });
    };
    if (distFromTop < -470) {
      checkHeadingInViewport();
    }

    // FOR STICKY WHITE BAR
    const whiteBar = document.getElementById("whiteBar");
    const header = document.getElementById("header");
    const makeWhiteBarSticky = () => {
      // console.log(distFromTop, "dis");
      if (distFromTop < -470) {
        whiteBar?.classList.add("whiteBarSticky");
        // checkHeadingInViewport();
      } else {
        whiteBar?.classList.remove("whiteBarSticky");
        // reset whitebar colors
        // whiteBarRef.current.forEach((e) => {
        //   e.current?.classList.remove("whiteBarItem");
        // });
      }
    };
    const handleEvent = () => {
      setDistFromTop(header?.getBoundingClientRect().top);
      makeWhiteBarSticky();
    };
    window.addEventListener("scroll", handleEvent);
    return () => {
      window.removeEventListener("scroll", handleEvent);
    };
  }, [distFromTop]);
  return (
    <>
      <WhiteBar whiteBarRef={whiteBarRef} reff={testRef} sort={props.sort} />
      <div
        className="fcc"
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
            <div
              key={key + index + new Date().getSeconds()}
              className={"w100 container"}
            >
              <div className={""}>
                {/* <h2 className={``}>{key}</h2> */}
                <span
                  className={`regu16 mediP`}
                  style={{
                    fontSize: 20,
                  }}
                  ref={testRef.current[index]}
                  onClick={() => {
                    // console.log(testRef);
                  }}
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
            <div
              key={key + new Date().getMilliseconds()}
              className="lightLine"
            />,
          ])}
      </div>
    </>
  );
};

export default Collection;

const WhiteBar = (props) => {
  // console.log(props);
  const arrType = {
    Departments: departItems && Object.keys(departItems),
    Date: [
      "1940-50",
      "1950-60",
      "1960-70",
      "1970-80",
      "1980-90",
      "1990-2000",
      "2000-10",
      "2010-20",
      "2020-30",
    ],
    Subjects: [
      "Maths",
      "Operating System",
      "Computer Applications",
      "Environmental Studies",
      "Compiler Design",
    ],
  };
  return (
    <>
      <div id="whiteBar" className="fcc container whiteBar">
        {/* content */}
        <div
          className="frcsb regu14"
          style={{
            width: "100%",
            height: "inherit",
          }}
        >
          {arrType[props.sort]?.map(
            (item, i) => (
              // departItems[key]?.map((item, i) => (
              <button
                ref={props.whiteBarRef.current[i]}
                key={new Date().getMilliseconds() + i}
                className="regu14 popi caps"
                onClick={() => {
                  // console.log(props.reff.current[i].current);
                  props.reff.current[i].current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                  });
                }}
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
