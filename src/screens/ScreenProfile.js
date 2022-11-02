import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBox from "../components/common/SideBox";
import Descrip from "../components/home/Descrip";
import ProfileHero from "../components/Profile/ProfileHero";
import { papers } from "./ScreenLists";

const ScreenProfile = () => {
  const { pathname } = useLocation();

  const elements={
    "Research Papers":<ProfileResearchPapers />,
    About:<About/>
  }
  const tabs = Object.keys(elements);
  
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      <div className="mb20">
        <ProfileHero pathname={pathname} />
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
  return (
    <div
      className={`${"fcfs" }`}
      style={{
        gap: 30 ,
        flexWrap: "unset",
      }}
    >
      {papers?.map((item, i) => [
        <Descrip
          key={item.name + i}
          date={item.date}
          name={item.name}
          conference={item.conference}
          authors={item.authors}
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
        class="frc"
        style={{
          gap: 45,
          width: "70%",
        }}
      >
        {props.tabs &&
          props.tabs.map((item, i) => (
            <button
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
      <div className="lightLine" style={{width:"73.5%"}} />
    </div>
  );
};

const About=()=>{
  return(<div className="w100">
    <div className="regu12 popi upper notSelectColor">Description</div>
    <div className="paraColor regu14 lineHeight15" style={{marginTop:25}}>The library at SRM University is stocked with a large numbers of books, magazines, Indian & International Journals, online Journals and other online resources supporting all aspects of studies and research. There are multiple institutional libraries apart from a large Central Library with acts as a learning resource hub for the students & faculty members.

The library at SRM University is stocked with a large numbers of books, magazines, Indian & International Journals, online Journals and other online resources supporting all aspects of studies and research.</div>
<div className="lightLine mt40" style={{width:80}}/>
  </div>)
}