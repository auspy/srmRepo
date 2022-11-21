import React from "react";
import { toCapitalise } from "../../common";
import { Path } from "../../screens/ScreenLists";

const ProfileHero = (props) => {
  // console.log(props.user,"data is here");
  const user = props.user || {};
  // const user = {
  //   img: require("../../static/images/contri.png"),
  //   name: "Tarak Mehta",
  //   post: "Assistant Professor",
  //   details: {
  //     department: "cse",
  //     papers: 56,
  //     grade: "ultra pro max",
  //     education: {
  //       BTech: "IIT Mumbai",
  //       MTech: "IIT Delhi",
  //     },
  //   },
  // };
  return (
    <>
      <div
        className=" fcfs container"
        style={{
          height: 272,
          backgroundColor: "white",
          boxShadow: " 0px 1px 15px rgba(51, 51, 51, 0.08)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Path textColor={"var(--notSelect)"} headColor={"var(--lightText)"} pathname={props.pathname} />
        {/* CONTENT */}
        <div
          className="frc mt30"
          style={{
            width: "100%",
            gap: 50,
          }}
        >
          {/* IMAGE */}
          <div
            className="gcc"
            style={{
              width: 144,
              height: 144,
              borderRadius: 80,
              overflow: "hidden",
              background: "#52BAD7",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              alignContent: "center",
            }}
          >
            <img
              src={user.img}
              alt="profile"
              width={"100%"}
              // style={{
              //   justifySelf:"center"
              // }}
            />
          </div>
          {/* DESCRIPTION */}
          <div className="" style={{width:"fit-content"}}>
            {/* HEADING */}
            <div className="frc">
              <h2>{toCapitalise(user?.name)}</h2>
              <a
                href={user.scholarUrl||"https://scholar.google.co.in/citations?user=vE66xpgAAAAJ&hl=en"}
                className="bColor ml15 regu12"
                style={{
                  fontStyle: null,
                  color: "var(--lightBlue)",
                  opacity: 1,
                  textDecoration: "underline",
                  fontWeight: 500,
                }}
              >
                Visit Google Scholar
              </a>
            </div>
            {/* POST */}
            <div className="regu13 paraColor mt5">{toCapitalise(user?.post)}</div>
            {/* BLUE LINE */}
            <div
              className="blueLine mb20"
              style={{ width: 30, marginTop: 20 }}
            />
            {/* DETAILS */}
            <div className="frfs caps">
              {user.details &&
                Object.keys(user.details).map((item, i) => (
                  <div
                    key={item + i}
                    className="fcfs"
                    style={{ marginRight: i=== Object.keys(user.details).length-1?0:40,width:"max-content",maxWidth:488 }}
                  >
                    <span
                      className="regu12 popi"
                      style={{ color: "var(--lightText)" }}
                    >
                      {item}
                    </span>
                    {typeof user.details[item] !== "object" ? (
                      <span className="medi14 inter hColor mt10">
                        {String(user.details[item]).toLowerCase()}
                      </span>
                    ) : (
                      <div className="frc">
                        {Object.keys(user.details[item]) &&
                          Object.keys(user.details[item]).map((key, ind) => (
                            <span
                              key={key + ind}
                              className="medi14 inter hColor mt10 mr10"
                            >
                              {key}-{user.details[item][key]}
                              {ind !==
                                Object.keys(user.details[item]).length - 1 &&
                                ","}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHero;
