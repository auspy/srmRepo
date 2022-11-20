// import styles from "../../static/css/department.module.css";
import { createRef, useEffect, useRef, useState } from "react";
import paths from "../../paths";
import { DepartItem } from "../../screens/ScreenHome";

export const Collection = () => {
  const [interest, setInterest] = useState({ items: [], id: {} });
  collectionData["Area Of Interest"] = {
    items: interest.items,
    desc: "",
    id: interest.id,
  };
  const callaboutPage = async () => {
    try {
      const url = "http://127.0.0.1:7780" + `/interest`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        redirect: "follow",
      });

      const data = await res.json();
      const msg = data.message;
      console.log(msg);
      const arr = [];
      const ids = {};
      msg.forEach((item) => {
        arr.push(item.tittle);
        ids[item.tittle] = item._id;
      });
      setInterest({ items: arr, id: ids });
      if (!res.status === 200) {
        console.log("Errr");
      }
    } catch (e) {}
  };
  useEffect(() => {
    // console.log(type, "type");
    callaboutPage();
  }, []);

  // TO GO TO TARGET HEADING
  const testRef = useRef([]);
  const whiteBarRef = useRef([]);
  testRef.current =
    collectionData &&
    Object.keys(collectionData).map(
      (ele, i) => testRef.current[i] ?? createRef()
    );
  whiteBarRef.current =
    collectionData &&
    Object.keys(collectionData).map(
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
      } else {
        whiteBar?.classList.remove("whiteBarSticky");
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
      <WhiteBar
        whiteBarRef={whiteBarRef}
        reff={testRef}
        sortHeadings={Object.keys(collectionData)}
      />
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
        {collectionData &&
          Object.keys(collectionData).map((key, index) => [
            <div
              key={key + index + new Date().getSeconds()}
              className={"w100 container"}
            >
              <div className={""}>
                {/* <h2 className={``}>{key}</h2> */}
                <span
                  className={`regu16 mediP`}
                  style={{
                    fontSize: 24,
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
                  {collectionData[key].desc}
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
                {collectionData[key].items?.map((item, i) => (
                  <DepartItem
                    key={item + i}
                    info={{
                      ...item,
                      href: paths.collectionList(item, "", key),
                      // + item === "Area Of Interest" ?
                      // `?id=${collectionData[item].id[item]}`:"",
                      name: item,
                    }}
                    small={true}
                    // ref
                  />
                ))}
              </div>
            </div>,
            <div
              key={index + key + new Date().getMilliseconds()}
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
          {props.sortHeadings?.map(
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
  Chemistry: {
    items: [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" },
      { name: "Test4" },
      { name: "Test14" },
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
  Maths: {
    items: [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" },
      { name: "Test4" },
      { name: "Test24" },
    ],
    desc: `The information technology computer labs with more than 200
computers connected with LAN using switches and two servers for
the internet, academic work and for local network access. In
addition to this, University has fully equipped R&D/Project Labs
with Softwares and Development tools.`,
  },
  Physics: {
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
  Commerce: {
    items: [{ name: "Test1" }, { name: "Test2" }, { name: "Test3" }],
    desc: `The information technology computer labs with more than 200
computers connected with LAN using switches and two servers for
the internet, academic work and for local network access. In
addition to this, University has fully equipped R&D/Project Labs
with Softwares and Development tools.`,
  },
  "Hotel Management": {
    items: [
      { name: "Test1" },
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

// DATA
const collectionData = {
  Engineering: {
    items: ["Mechanical", "Civil", "Electrical", "Computer Science"],
    desc: `The information technology computer labs with more than 200
      computers connected with LAN using switches and two servers for
      the internet, academic work and for local network access. In
      addition to this, University has fully equipped R&D/Project Labs
      with Softwares and Development tools.`,
  },
  "Other Departments": {
    items: departItems && Object.keys(departItems),
    desc: "",
  },
  // Author: { items: departItems && Object.keys(departItems), desc: "" },
  // Teacher: { items: departItems && Object.keys(departItems), desc: "" },
  // Student: { items: departItems && Object.keys(departItems), desc: "" },
  Year: {
    items: [
      "1940-1949",
      "1950-1959",
      "1960-1969",
      "1970-1979",
      "1980-1989",
      "1990-2099",
      "2000-2009",
      "2010-2019",
      "2020-2029",
    ],
    desc: "",
  },
  "Area Of Interest": {
    items: [
      "Maths",
      "Operating System",
      "Computer Applications",
      "Environmental Studies",
      "Compiler Design",
    ],
    desc: "",
    id: {},
  },
};
export const collections = Object.keys(collectionData);
