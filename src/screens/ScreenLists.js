import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../components/common/SearchBar";
import SideBox from "../components/common/SideBox";
import Descrip from "../components/home/Descrip";
import IconArrowDown from "../static/icons/IconArrowDown";
import { useSearchParams } from "react-router-dom";
import ProfileBox from "../components/departs/ProfileBox";
import { toCapitalise } from "../common";

const ScreenLists = () => {
  const [searchParams] = useSearchParams();
  const [type, setType] = useState(
    searchParams.get("type") || "Research Papers"
  );

  const { pathname } = useLocation();
  const pathArr = pathname.split("/");
  const [departName, setDepartName] = useState(
    pathArr[pathArr.length - 1].replaceAll("%20", " ")
  ); //getting department name from path

  const [paperData, setPapersData] = useState([]);
  const [paperData2, setPapersData2] = useState([]);
  const [resultCount, setResultCount] = useState({
    "Research Papers": null,
    Authors: null,
  });

  const [filter, setFilter] = useState(null);

  //  get research papers based on departName/collection

  const callaboutPage = async () => {
    try {
      // console.log(type, departName, "inside");
      // const url = "http://127.0.0.1:7780" + `/department?id=${departName}&type=${type}`;
      const url =
        "http://127.0.0.1:7780" +
        `/department?id=${departName}&departType=${
          searchParams.get("departType") || "nice"
        }`;

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
      const papers = data.allpaper;
      console.log(data, "wowo");

      setPapersData(papers || []); //research appers
      setPapersData2(msg); //authors
      // total count of items
      setResultCount({
        "Research Papers": papers?.length,
        Authors: msg?.length,
      });
      if (!res.status === 200) {
        console.log("Errr");
      }
    } catch (e) {}
  };
  useEffect(() => {
    // console.log(type, "type");
    callaboutPage(type);
  }, []);
  // data recieved
  // send to belowhero
  // console.log(
  //   "run",
  //   pathname,
  //   departName,
  //   pathArr[pathArr.length - 1].replaceAll("%20", " "),
  //   pathArr,
  //   type,
  //   "get",
  //   searchParams.get("type")
  // );

  // useEffect(() => {
  //   setDepartName(pathArr[pathArr.length - 1].replaceAll("%20", " "));
  //   setType(searchParams.get("type") || "Research Papers");
  // }, [pathArr]);
  return (
    <>
      <Hero
        type={type}
        setType={setType}
        departName={departName}
        setDepartName={setDepartName}
        pathname={pathname}
        resultCount={resultCount}
        filter={filter}
        setFilter={setFilter}
      />
      <BelowHero
        type={type}
        departName={departName}
        papers={[paperData, paperData2]}
        filter={filter}
      />
    </>
  );
};

export default ScreenLists;

const WhiteBar = (props) => {
  return (
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
      }}
    >
      {/* CONTENT */}
      <div
        className="frc regu14"
        style={{
          width: "100%",
          height: "inherit",
        }}
      >
        <span className="notSelectColor">
          Now showing {props.resultCount[props.type] || ""} {props.type} in{" "}
          {props.departName?.toLowerCase()}
        </span>
        {props.filter && (
          <span
            className="ml5 medi"
            style={{ color: "var(--lightText)", fontStyle: "italic" }}
          >
            {" "}
            starting with {props.filter.toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
};

const Hero = (props) => {
  return (
    <>
      <div
        className="bgSrmBlue fcc container"
        style={{
          height: 368,
        }}
      >
        {/* CONTENT */}
        <div
          className=""
          style={{
            width: "100%",
          }}
        >
          {/* PATH */}
          <Path pathname={props.pathname} />
          {/* HEADING */}
          <div className="frc" style={{ gap: 15, marginTop: 60 }}>
            <h3 className="caps" style={{}}>
              Find
            </h3>
            <UnderlinedText
              options={["Research Papers", "Authors"]}
              value={props.type}
              setValue={props.setType}
            />
            <h3 className="caps" style={{}}>
              in {props.departName?.toLowerCase()}
            </h3>
            {/* <UnderlinedText
              options={["Department","Year"]}
              value={props.departName}
              setValue={props.setDepartName}
            /> */}
          </div>
          {/* SEARCH BAR */}
          <div className="mt30">
            <SearchBar height={50} width={489} />
          </div>
          {/* FILTER SHORTCUTS */}
          <AlphaFilter filter={props.filter} setFilter={props.setFilter} />
        </div>
      </div>
      <WhiteBar
        filter={props.filter}
        setFilter={props.setFilter}
        departName={props.departName}
        type={props.type}
        resultCount={props.resultCount}
      />
    </>
  );
};

export const AlphaFilter = (props) => {
  const filterArr = [
    // "0-9",
    "A",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="mt10 frc  " style={{ color: "white",gap:13.5 }}>
      {filterArr?.map((item, i) => (
        <button
          key={item + i}
          className={`upper regu12 popi ${
            props.filter === item ? "lBColor semi" : "wColor"
          } filter`}
          style={{
            // marginLeft: i !== 0 && 12,
            opacity: props.filter === item ? 1 : 0.7,
          }}
          onClick={() => {
            if (props.filter === item) {
              props.setFilter("");
            } else {
              props.setFilter(item);
            }
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export const Path = (props) => {
  let to = "";
  const arr = ("Home" + props.pathname).replaceAll("%20", " ").split("/");
  const pathArr = arr.map((item, i) => {
    to = to + (item === "Home" ? "" : "/" + item);
    to = to.replace(" ", "%20");
    return { name: item, href: to || "/" };
  });
  // STYLE
  const lastEleStyle = (i) =>
    i === pathArr.length - 1
      ? {
          fontStyle: null,
          color: props.headColor || "white",
          opacity: 1,
          fontWeight: 500,
        }
      : {
          fontStyle: "italic",
          color: props.textColor || "white",
          opacity: 0.7,
          textDecoration: null,
          fontWeight: null,
        };
  return (
    <div className="regu12 frc mt40">
      {pathArr?.map((item, i) => [
        <Link
          to={item.href}
          key={item + i}
          className="ml5"
          onClick={() => {
            // console.log(to);
          }}
          style={lastEleStyle(i)}
        >
          <span
            className="wColor mr5"
            style={{
              ...lastEleStyle(99),
              opacity: i === pathArr.length - 1 ? 0.7 : null,
            }}
          >
            /
          </span>
          {toCapitalise(item.name)}
        </Link>,
      ])}
    </div>
  );
};

const BelowHero = (props) => {
  // get research papers based on
  console.log(props.papers, "here");
  const data = {
    "Research Papers": props.papers[0],
    Authors: props.papers[1],
  };
  // console.log(data[props.type][0]?.tittle?.split("")[0], props.filter, "inf");

  return (
    <div className="fcc container">
      {/* CONTENT */}
      <div
        style={{
          width: "100%",
          gap: 30,
          marginBottom: 80,
        }}
        className="frfssb mt60"
      >
        {/* RESEARCH PAPERS */}
        <div
          className={`${props.type === "Research Papers" ? "fcfs" : "frc"}`}
          style={{
            gap: props.type === "Research Papers" ? 30 : 10,
            flexWrap: props.type === "Research Papers" ? "unset" : "wrap",
          }}
        >
          {/* HEADING */}
          {props.type === "Research Papers" && (
            <div
              className="frcsb w100  upper regu11 popi"
              style={{ color: "var(--notSelect)" }}
            >
              {/* paper */}
              <div
                style={{
                  width: "85%",
                }}
              >
                Title
              </div>
              {/* year */}
              <div>Year</div>
              {/* cited */}
              <div>Cited By</div>
            </div>
          )}
          {/* PAPERS */}
          {data &&
            data[props.type]?.map((item, i) => [
              props.type === "Research Papers" ? (
                props.filter ? (
                  item.tittle?.split("")[0].toUpperCase() ===
                    props.filter.toUpperCase() && (
                    <Descrip
                      key={item.tittle + i}
                      date={item.publishyear}
                      name={item.tittle}
                      conference={item.publication}
                      authors={item.author}
                      cited={item.cited}
                      href={item.link}
                    />
                  )
                ) : props.filter ? (
                  item.tittle?.split("")[0].toUpperCase() ===
                    props.filter.toUpperCase() && (
                    <Descrip
                      key={item.tittle + i}
                      date={item.publishyear}
                      name={item.tittle}
                      conference={item.publication}
                      authors={item.author}
                      cited={item.cited}
                      href={item.link}
                    />
                  )
                ) : (
                  <Descrip
                    key={item.tittle + i}
                    date={item.publishyear}
                    name={item.tittle}
                    conference={item.publication}
                    authors={item.author}
                    cited={item.cited}
                    href={item.link}
                  />
                )
              ) : props.filter ? (
                item.name?.split("")[0].toUpperCase() ===
                  props.filter.toUpperCase() && (
                  <ProfileBox
                    key={i + item.name}
                    info={{
                      name: item.name,
                      post: item.post,
                      docs: item.totalpaper || "-",
                      href: `/Collections/${item["department"]}/${item["name"]}?id=${item["_id"]}`,
                      img: item.profilepic,
                    }}
                  />
                )
              ) : (
                <ProfileBox
                  key={i + item.name}
                  info={{
                    name: item.name,
                    post: item.post,
                    docs: item.totalpaper || "-",
                    href: `/Collections/${item["department"]}/${item["name"]}?id=${item["_id"]}`,
                    img: item.profilepic,
                  }}
                />
              ),
              props.type === "Research Papers" &&
                (props.filter ? (
                  item.tittle?.split("")[0].toUpperCase() ===
                    props.filter.toUpperCase() && (
                    <div
                      key={item.tittle + new Date().getMilliseconds()}
                      className="lightLine"
                    />
                  )
                ) : (
                  <div
                    key={item.tittle + new Date().getMilliseconds()}
                    className="lightLine"
                  />
                )),
            ])}
        </div>

        {/* SIDE BOX */}
        <SideBox />
      </div>
    </div>
  );
};

const UnderlinedText = (props) => {
  // console.log(props.value,"val");
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid white",
          paddingBottom: 5,
          gap: 8,
        }}
        className="frc"
      >
        <select
          className="caps inter oColor regu selectHover"
          style={{ fontSize: 30, background: "none", outline: "none" }}
          value={props.value}
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
        >
          {props.options?.map((item, i) => (
            <option key={item + i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <IconArrowDown />
      </div>
    </>
  );
};

UnderlinedText.defaultProps = {
  options: [],
  value: "", //current selected option
  setValue: () => {},
};

export const papers = [
  {
    name: "Alien Maps of an Ocean-Bearing World ﻿",
    date: "11 October 2019",
    authors: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    href: "/",
    conference: "operating systm",
  },

  {
    name: "Alien Maps of an Ocean-Bearing World ﻿",
    date: "11 October 2019",
    authors: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    href: "/",
    conference: "operating systm",
  },
  {
    name: `Cowan, Nicolas B.; Agol, Eric; Meadows, Victoria S.; Robinson, Tyler; Livengood, Timothy A.; e.a. (IOP Publishing, 2009-07)Cowan, Nicolas B.; Agol, Eric; Meadows, Victoria S.; Robinson, Tyler; Livengood, Timothy A.; e.a. (IOP Publishing, 2009-07)`,
    date: "11 October 2019",
    authors: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    href: "/",
    conference: "operating systm",
  },
  {
    name: "Alien Maps of an Ocean-Bearing World ﻿",
    date: "11 October 2019",
    authors: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    href: "/",
    conference: "operating systm",
  },
  {
    name: "Alien Maps of an Ocean-Bearing World ﻿",
    date: "11 October 2019",
    authors: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    href: "/",
    conference: "operating systm",
  },
  {
    name: `Cowan, Nicolas B.; Agol, Eric; Meadows, Victoria S.; Robinson, Tyler; Livengood, Timothy A.; e.a. (IOP Publishing, 2009-07)Cowan, Nicolas B.; Agol, Eric; Meadows, Victoria S.; Robinson, Tyler; Livengood, Timothy A.; e.a. (IOP Publishing, 2009-07)`,
    date: "11 October 2019",
    authors: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    href: "/",
    conference: "operating systm",
  },
  {
    name: `Cowan, Nicolas B.; Agol, Eric; Meadows, Victoria S.; Robinson, Tyler; Livengood, Timothy A.; e.a. (IOP Publishing, 2009-07)Cowan, Nicolas B.; Agol, Eric; Meadows, Victoria S.; Robinson, Tyler; Livengood, Timothy A.; e.a. (IOP Publishing, 2009-07)`,
    date: "11 October 2019",
    authors: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    href: "/",
    conference: "operating systm",
  },
  {
    name: `Cowan, Nicolas B.; Agol, Eric; Meadows, Victoria S.; Robinson, Tyler; Livengood, Timothy A.; e.a. (IOP Publishing, 2009-07)Cowan, Nicolas B.; Agol, Eric; Meadows, Victoria S.; Robinson, Tyler; Livengood, Timothy A.; e.a. (IOP Publishing, 2009-07)`,
    date: "11 October 2019",
    authors: ["Cowan", "Nicolas B.", "Agol", "Eric"],
    href: "/",
    conference: "operating systm",
  },
];
