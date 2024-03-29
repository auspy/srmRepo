import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { urlAws } from "../common";
import Descrip from "../components/home/Descrip";
import LeftMenu from "../components/home/LeftMenu";
import paths from "../paths";

const Home = () => {
  return (
    <div
      id="home"
      className="rPosi fcc"
      style={{
        width: "100vw",
        // zIndex: 3,
        paddingInlineStart: 489,
        boxSizing: "border-box",
      }}
    >
      <LeftMenu />
      {/* RIGHT SIDE */}
      <div
        style={{
          width: "100%",
        }}
      >
        {/* PDF VIEW */}
        <PdfView />
        {/* TOP CONTRIBUTORS */}
        <TopContri />
        {/* DEPARTMENTS */}
        <Departments />
      </div>
    </div>
  );
};

export default Home;

// DEPARTMENT ELEMENTS
// 6 items only

const departments = [
  {
    img: "",
    name: "Maths",
    docs: 109,
    href: paths.collectionList("Maths", "Research Papers"),
  },
  {
    img: "",
    name: "Chemistry",
    docs: 109,
    href: paths.collectionList("Chemistry", "Research Papers"),
  },
  {
    img: "",
    name: "Civil",
    docs: 109,
    href: paths.collectionList("Civil", "Research Papers"),
  },
  {
    img: "",
    name: "Electrical",
    docs: 109,
    href: paths.collectionList("Electrical", "Research Papers"),
  },
  {
    img: "",
    name: "Hotel Management",
    docs: 109,
    href: paths.collectionList("Hotel Management", "Research Papers"),
  },
  {
    img: "",
    name: "Physics",
    docs: 109,
    href: paths.collectionList("Physics", "Research Papers"),
  },
];

const Departments = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--srmBlue)",
          height: 850,
        }}
        className="gcc"
      >
        {/* CONTENT */}
        <div
          style={{
            ...contentSpacing,
            marginTop: 100,
          }}
          className="fcc"
        >
          {/* HEADING */}
          <HomeHeading
            h1={"Find researches from"}
            h2={"departments"}
            subHeading={"srm departments"}
            subColor={"white"}
            h1Color={"white"}
            h2Color={"var(--lightBlue)"}
          />
          {/* ITEMS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "30px 28px",
            }}
            className={"mt40"}
          >
            {departments?.map((item, i) => (
              <DepartItem
                key={item + i}
                info={{ ...item, href: paths.collectionList(item.name) }}
              />
            ))}
          </div>
          {/* BUTTON */}
          <div className="mt40">
            <ViewMoreBtn href={paths.collections()} />
          </div>
        </div>
      </div>
    </>
  );
};

const ViewMoreBtn = (props) => {
  return (
    <Link to={props.href || "/"}>
      <button
        className=""
        style={{
          backgroundColor: "white",
          border: " 1px solid var(--srmBlue)",
          borderRadius: 20,
        }}
      >
        <span
          className="semi16 bColor caps"
          style={{ color: props.textColor || null, padding: "7px 18px" }}
        >
          View More
        </span>
      </button>
    </Link>
  );
};

export const DepartItem = (props) => {
  return (
    <>
      <div
        style={{
          maxHeight: props.small ? 220 : 228,
          width: props.small ? 220 : 238,
          backgroundColor: "white",
          borderRadius: 10,
          border: props.small ? "1px solid var(--bg)" : null,
        }}
        className="fcc contHover"
      >
        {/* IMAGE */}
        {!props.small && (
          <div
            style={{
              width: props.small ? 218 : 238,
              height: props.small ? 120 : 145.02,
              borderRadius: props.small ? "10px 10px 0px 0px" : 10,
              overflow: "hidden",
            }}
          >
            <img
              width={"inherit"}
              alt={"dapartment"}
              src={props.info?.img || require("../static/images/depart.png")}
            />
          </div>
        )}
        {/* TEXT */}
        <div
          className="fcc"
          style={{
            height: 84,
            maxWidth: props.small ? 180 : 218,
            justifyContent: "center",
          }}
        >
          {/* <div className="fcc"> */}
          <Link
            className={` ${props.small ? "regu14 mediP" : "regu16 popi"}  caps`}
            style={{ textAlign: "center" }}
            to={props.info?.href}
            onClick={() => {
              console.log(props.info?.href);
            }}
          >
            {props.info?.name?.toLowerCase() || "Development Name"}
          </Link>
          {/* <span className="light13 caps notSelectColor mt10">
            {props.info?.docs || "99"} Researches
          </span> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
// export const DepartItem = (props) => {
//   return (
//     <>
//       <Link
//       to={props.info?.href}
//         style={{
//           maxHeight: props.small ? 220 : 228,
//           width: props.small ? 220 : 238,
//           backgroundColor: "white",
//           borderRadius: 10,
//           border: props.small ? "1px solid var(--bg)":null,
//         }}
//         className="fcc contHover"
//       >
//         {/* IMAGE */}
//         <div
//           style={{
//             width: props.small ? 218 : 238,
//             height: props.small ? 120 : 145.02,
//             borderRadius: props.small ? "10px 10px 0px 0px" : 10,
//             overflow: "hidden",
//           }}
//         >
//           <img
//             width={"inherit"}
//             alt={"dapartment"}
//             src={props.info?.img || require("../static/images/depart.png")}
//           />
//         </div>
//         {/* TEXT */}
//         <div
//           className="fcc"
//           style={{
//             height: 84,
//             maxWidth: props.small ? 180 : 218,
//             justifyContent: "center",
//           }}
//         >
//           {/* <div className="fcc"> */}
//           <Link
//             className={` ${props.small ?"regu14 mediP":"regu16 popi"}  caps`}
//             style={{ textAlign: "center" }}
//             to={props.info?.href}
//           >
//             {props.info?.name || "Development Name"}
//           </Link>
//           <span className="light13 caps notSelectColor mt10">
//             {props.info?.docs || "99"} Researches
//           </span>
//           {/* </div> */}
//         </div>
//       </Link>
//     </>
//   );
// };

// COMMON ELEMENTS

const contentSpacing = {
  // marginLeft: "8.2%",
  // marginRight: "8.2%",
  marginBottom: 100,
};

const HomeHeading = (props) => {
  return (
    <>
      <div className="fcc">
        <span
          className="regu12 popi upper frc"
          style={{
            letterSpacing: 1.8,
            color: props.subColor || "var(--notSelect)",
          }}
        >
          {props.subHeading}
        </span>
        <div
          className="blueLine mv10"
          style={{
            width: 50,
          }}
        />
        <span
          className={`mediP frc caps`}
          style={{
            color: props.h1Color || "var(--heading)",
            fontSize: 28,
          }}
        >
          {props.h1}{" "}
          <span
            className="ml5"
            style={{
              color: props.h2Color || "var(--srmBlue)",
            }}
          >
            {props.h2}
          </span>
        </span>
      </div>
    </>
  );
};

// TOP CONTRI ELEMENTS
// const topContr = [
//   {
//     name: "Anjali Mehta",
//     post: "assistant professor",
//     citations: 46,
//     href: "/",
//   },
//   {
//     name: "Anjali Mehta",
//     post: "assistant professor",
//     citations: 46,
//     href: "/",
//   },
//   {
//     name: "Anjali Mehta",
//     post: "assistant professor",
//     citations: 46,
//     href: "/",
//   },
//   {
//     name: "Anjali Mehta is here",
//     post: "assistant professor wow is she",
//     citations: 46123131231,
//     href: "/",
//   },
//   {
//     name: "Anjali Mehta",
//     post: "assistant professor",
//     citations: 46,
//     href: "/",
//   },
//   {
//     name: "Anjali Mehta",
//     post: "assistant professor",
//     citations: 46,
//     href: "/",
//   },
// ];

const TopContri = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [topContri, setTopCont] = useState([]);

  useEffect(() => {
    const test = async () => {
      const urlcitation = urlAws + "/citation";

      const res = await fetch(urlcitation, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        redirect: "follow",
      });

      const data = await res.json();

      // console.log(data.message);
      const author = data.message;
      console.log(author, data.message);
      const arr = [];
      author.forEach((item) => {
        // console.log(item,"item");
        arr.push({
          citations: item["citations"],
          name: item["author"]["name"],
          post: item["author"]["post"],
          href: `/Collections/${item["author"]["department"]}/${item["author"]["name"]}?id=${item["author"]["_id"]}`,
          img: item["author"]["profilepic"],
        });
      });
      setTopCont(arr);

      // return ""
    };
    return () => {
      test();
    };
  }, []);

  return (
    <>
      <div
        className="fcc"
        style={{
          backgroundColor: "white",
        }}
      >
        {/* CONTENT */}
        <div style={{ ...contentSpacing, marginTop: 100 }}>
          {/* HEADING */}
          <HomeHeading
            h1={"scholars having"}
            h2={"highest contribution"}
            subHeading={"Top Contributors"}
          />
          {/* ITEMS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "30px 60px",
            }}
            className={"mt40"}
          >
            {topContri?.map((item, i) => (
              <TopContriItem key={item + i} info={{ ...item }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const TopContriItem = (props) => {
  return (
    <>
      <div
        className="gcc"
        style={{
          background: "white",
          border: "1px solid var(--border)",
          borderRadius: 5,
          width: 355,
          height: 175,
          padding: 30,
          boxSizing: "border-box",
        }}
      >
        <div
          className="frc"
          style={{
            height: "100%",
            width: "100%",
            // borderRadius:100,
            // overflow:"hidden",
          }}
        >
          <div
            className="gcc"
            style={{
              width: 114,
              height: 114,
              borderRadius: 80,
              overflow: "hidden",
              alignContent: "center",
              // background: "#52BAD7",
              // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={props.info?.img || require("../static/images/contri.png")}
              // height={114}
              width={"100%"}
              alt="contributor"
            />
          </div>
          <div className="fcfssb ml30" style={{ height: "inherit" }}>
            <div className="fcfs">
              <Link
                className="regu16 caps mediP"
                style={{}}
                to={props.info?.href}
              >
                {props.info?.name || "Anjali"}
              </Link>
              <span className="light13 notSelectColor caps mt5" style={{}}>
                {props.info?.post || "Assistant"}
              </span>
            </div>
            <span className="light13 notSelectColor mt5">
              {props.info?.citations + " Citations"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

// PDF VIEW ELEMENTS

const PdfView = () => {
  const imgs = [
    require("../static/images/pdf.png"),
    require("../static/images/pdf2.png"),
    require("../static/images/pdf3.png"),
  ];
  const [pdf, setPdf] = useState([
    {
      name: "Non-preemptive Scheduling",
      img: require("../static/images/pdf.png"),
      conference: "operating systm",
      author: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    },
    {
      name: "Alien Maps of an Ocean-Bearing World",
      select: true,
      href: "/",
      img: require("../static/images/pdf2.png"),
      conference: "COA",
      author: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    },
    {
      name: "Integrals in mathematics",
      img: require("../static/images/pdf3.png"),
      conference: "Mathematics",
      author: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    },
  ]);
  const callaboutPage = async () => {
    try {
      // console.log(type, departName, "inside");
      // const url = urlAws + `/department?id=${departName}&type=${type}`;
      const url = urlAws + `/highpaper`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        redirect: "follow",
      });

      const data = await res.json();
      const dataa = data.message;
      console.log(dataa, "high papers");
      const arr = [];
      dataa?.forEach((item, i) => {
        arr.push({
          name: item.tittle,
          author: item.author,
          cited: item.cited,
          href: item.link,
          conference: item.publication,
          date: item.publishyear,
          img: imgs[i],
        });
      });
      setPdf(arr);

      if (!res.status === 200) {
        console.log("Errr");
      }
    } catch (e) {}
  };
  useEffect(() => {
    // console.log(type, "type");
    callaboutPage();
  }, []);

  const bgBoxesStyle = {
    position: "relative",
    width: 224,
    opacity: 0.4,
    height: 318,
    backgroundColor: "var(--border)",
    filter: "drop-shadow(0px 10px 30px rgba(51, 51, 51, 0.16))",
  };

  const [img, setImg] = useState(1);

  // to change in pdf with time
  const imgRef = useRef(img);
  useEffect(() => {
    const pdfChange = setInterval(() => {
      imgRef.current += 1;
      if (imgRef.current === pdf.length) {
        setImg(0);
        imgRef.current = img;
      } else {
        setImg(imgRef.current);
      }
    }, 2000);
    return () => clearInterval(pdfChange);
  }, [img, pdf.length]);

  return (
    <>
      <div
        style={{
          backgroundColor: "var(--lightBg)",
        }}
      >
        {/* 3 PAGES BOX */}
        <div
          style={{
            ...contentSpacing,
            paddingTop: 130,
          }}
          className="fcc"
        >
          <div className="frcc">
            {/* background page left */}
            <div
              style={{
                ...bgBoxesStyle,
                // overflow: "hidden",
                left: 15,
              }}
              className="frc"
            >
              <img
                src={pdf[img]?.img}
                style={{
                  width: "100%",
                }}
                alt="pdf"
              />
            </div>
            {/* main page */}
            <div
              className="frc"
              style={{
                position: "relative",
                bottom: 80,
                zIndex: 2,
                width: 326,
                height: 464,
                backgroundColor: "var(--border)",
                filter: "drop-shadow(0px 10px 30px rgba(51, 51, 51, 0.16))",
              }}
            >
              <img
                src={pdf[img]?.img}
                style={{
                  width: "100%",
                }}
                alt="pdf"
              />
            </div>
            {/* background page right */}
            <div
              className="frc"
              style={{
                ...bgBoxesStyle,
                // overflow: "hidden",
                right: 15,
              }}
            >
              <img
                src={pdf[img]?.img}
                style={{
                  width: "100%",
                }}
                alt="pdf"
              />
            </div>
          </div>
          {/* DESCRIPTION */}

          <div style={{ width: 775, alignSelf: "center" }}>
            {/* pages */}
            <Descrip
              conference={pdf[img]?.conference}
              name={pdf[img]?.name}
              author={pdf[img]?.author}
              href={pdf[img]?.href}
              date={pdf[img]?.date}
              cited={pdf[img]?.cited}
            />
          </div>
          {/* BULLETS */}
          <div className="gcc mt30">
            <div className="frc">
              {/* left arrow */}
              <button
                className="mr10"
                onClick={() => {
                  if (img === 0) {
                    setImg(pdf.length - 1);
                  } else {
                    setImg(img - 1);
                  }
                }}
              >
                {/* <IconArrowDown /> */}
                <div className="regu16 frc notSelectColor popi">{"<"}</div>
              </button>
              {/* bullets */}
              {pdf?.map((item, i) => (
                <button
                  onClick={() => {
                    setImg(i);
                  }}
                  key={item + i}
                  style={{
                    height: 8,
                    width: 8,
                    borderRadius: 10,
                    marginRight: i === pdf.length - 1 ? 0 : 14,
                    backgroundColor:
                      img === i ? "var(--srmBlue)" : "var(--border)",
                  }}
                />
              ))}
              {/* right arrow */}
              <button
                className="ml10"
                onClick={() => {
                  if (img === pdf.length - 1) {
                    setImg(0);
                  } else {
                    setImg(img + 1);
                  }
                }}
              >
                <div
                  className="regu16 frc notSelectColor popi"
                  // style={{ color: "var(--border)" }}
                >
                  {">"}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
