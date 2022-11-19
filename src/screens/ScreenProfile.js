import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SideBox from "../components/common/SideBox";
import Descrip from "../components/home/Descrip";
import ProfileHero from "../components/Profile/ProfileHero";
import { papers } from "./ScreenLists";

const ScreenProfile = () => {
  const { pathname } = useLocation();
  // const [profile, setprofile] = useState([]);
  const [papers, setPapers] = useState();
  const [searchParams] = useSearchParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const callaboutPage = async () => {
      try {
        const url =
          "http://127.0.0.1:7780" +
          `/authordetail?id=${searchParams.get("id")}`;

        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          redirect: "follow",
        });
        await res.json().then((data) => {
          console.log(data.paper);
          console.log(data.message, "data.messageaa");
          const edu = {
            BTech: "IIT Mumbai",
            MTech: "IIT Delhi",
          };
          const detials = {
            department: data.message?.department || "cse",
            papers: data.paper?.length || 56,
            grade: "ultra pro max",
            education: edu,
          };
          const sendData = {
            name: data.message?.name,
            post: data.message?.post,
            img: data.message?.profilepic,
            details: { ...detials },
          };
          // return sendData
          // console.log(sendData,"dserde");
          setPapers(data.paper);
          setUserData(sendData);
        });
        if (!res.status === 200) {
          console.log("Errr");
        }
      } catch (e) {}
    };
    return () => {
      callaboutPage();
    };
  }, []);

  const elements = {
    "Research Papers": <ProfileResearchPapers data={papers} />,
    About: <About />,
  };
  const tabs = Object.keys(elements);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      <div className="mb20">
        <ProfileHero
          pathname={pathname}
          // profile={profile}
          user={userData}
        />
      </div>
      <ProfileTabs active={activeTab} setActive={setActiveTab} tabs={tabs} />
      <ProfileBelowHero active={activeTab} element={elements[activeTab]} />
    </>
  );
};

export default ScreenProfile;

const ProfileBelowHero = (props) => {
  return (
    <>
      <div className="container">
        <div
          style={{
            width: "100%",
            gap: 30,
            marginBottom: 80,
          }}
          className="frfssb mt30"
        >
          {/* LIST */}
          {props.element}
          {/* RIGHT SIDE */}
          <SideBox />
        </div>
      </div>
    </>
  );
};

const ProfileResearchPapers = (props) => {
  // const data = papers
  // console.log(props.data, "data");
  const [data, setData] = useState(papers);

  useEffect(() => {
    const paper = [];
    props.data?.forEach((item) => {
      paper.push({
        date: item?.publishyear,
        name: item?.tittle,
        conference: item?.publication,
        authors: item?.author,
        href: item?.link,
      });
    });
    setData(paper);
  }, [props.data]);

  return (
    <div
      className={`${"fcfs"}`}
      style={{
        gap: 30,
        flexWrap: "unset",
      }}
    >
      {data?.map((item, i) => [
        <Descrip
          key={item.name + i}
          date={item.date}
          name={item.name}
          conference={item.conference}
          authors={item.authors}
          href={item.href || "/"}
        />,
        <div
          key={item.name + new Date().getMilliseconds()}
          className="lightLine"
        />,
      ])}
    </div>
  );
};

const ProfileTabs = (props) => {
  const activeStyle = {
    paddingBottom: 18,
    borderBottom: "1px solid var(--lightBlue)",
  };
  return (
    <div className="container">
      <div
        className="frc"
        style={{
          gap: 45,
          width: "70%",
        }}
      >
        {props.tabs &&
          props.tabs.map((item, i) => (
            <button
              key={item + i}
              onClick={() => {
                props.setActive(item);
              }}
              className={`${
                props.active === item ? "lBColor" : "notSelectColor"
              } medi14 popi`}
              style={
                props.active === item ? activeStyle : { paddingBottom: 18 }
              }
            >
              {item}
            </button>
          ))}
      </div>
      <div className="lightLine" style={{ width: "73.5%" }} />
    </div>
  );
};

const About = () => {
  return (
    <div className="w100">
      <div className="regu12 popi upper notSelectColor">Description</div>
      <div className="paraColor regu14 lineHeight15" style={{ marginTop: 25 }}>
        The library at SRM University is stocked with a large numbers of books,
        magazines, Indian & International Journals, online Journals and other
        online resources supporting all aspects of studies and research. There
        are multiple institutional libraries apart from a large Central Library
        with acts as a learning resource hub for the students & faculty members.
        The library at SRM University is stocked with a large numbers of books,
        magazines, Indian & International Journals, online Journals and other
        online resources supporting all aspects of studies and research.
      </div>
      <div className="lightLine mt40" style={{ width: 80 }} />
    </div>
  );
};
