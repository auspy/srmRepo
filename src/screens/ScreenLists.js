import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../components/common/SearchBar";
import SideBox from "../components/common/SideBox";
import Descrip from "../components/home/Descrip";

const ScreenLists = () => {
  return (
    <>
      <Hero />
      <BelowHero />
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
          Now showing Computer Science documents
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

const Hero = () => {
  const [filter, setFilter] = useState(null);
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
            // maxWidth: 1200,
          }}
        >
          {/* PATH */}
          <Path />
          {/* HEADING */}
          <h1
            className=""
            style={{
              marginTop: 60,
            }}
          >
            Computer Science
          </h1>
          {/* SEARCH BAR */}
          <div className="mt30">
            <SearchBar height={50} width={489} />
          </div>
          {/* FILTER SHORTCUTS */}
          <AlphaFilter filter={filter} setFilter={setFilter} />
        </div>
      </div>
      <WhiteBar filter={filter} setFilter={setFilter} />
    </>
  );
};

const AlphaFilter = (props) => {
  const filterArr = [
    "0-9",
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
    <div className="mt10 frc  " style={{ color: "white" }}>
      {filterArr?.map((item, i) => (
        <button
          key={item + i}
          className={`upper regu12 popi ${
            props.filter === item ? "lBColor semi" : "wColor"
          } filter`}
          style={{
            marginLeft: i !== 0 && 12,
            opacity: props.filter === item ? 1 : 0.7,
          }}
          onClick={() => {
            props.setFilter(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export const Path = () => {
  const { pathname } = useLocation();
  let to = "";
  const arr = ("Home" + pathname).replaceAll("%20", " ").split("/");
  const pathArr = arr.map((item, i) => {
    to = to + (item === "Home" ? "" : "/" + item);
    to = to.replace(" ", "%20");
    return { name: item, href: to || "/" };
  });
  const lastEleCond = (i) => i === pathArr.length - 1;
  return (
    <div className="regu12 frc mt40">
      {pathArr?.map((item, i) => [
        <Link
          to={item.href}
          key={item + i}
          onClick={() => {
            console.log(to);
          }}
          style={{
            fontStyle: lastEleCond(i) ? null : "italic",
            color: lastEleCond(i) ? "var(--lightBlue)" : "white",
            opacity: lastEleCond(i) ? 1 : 0.7,
            textDecoration: lastEleCond(i) ? "underline" : null,
          }}
        >
          {"/" + item.name}
        </Link>,
      ])}
    </div>
  );
};

const BelowHero = () => {
  return (
    <div className="fcc container">
      {/* CONTENT */}
      <div
        style={{
          width: "100%",
          gap: 30,
        }}
        className="frfssb mt60"
      >
        {/* RESEARCH PAPERS */}
        <div className="fcfs" style={{ gap: 30 }}>
          {papers?.map((item, i) => [
            <Descrip
              key={item + i}
              date={item.date}
              name={item.name}
              conference={item.conference}
              authors={item.authors}
            />,
            <div className="lightLine" />,
          ])}
        </div>

        {/* SIDE BOX */}
        <SideBox />
      </div>
    </div>
  );
};

const papers = [
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
