
import LeftMenu from "../components/home/LeftMenu";

const Home = () => {
  return (
    <div
      className="rPosi fcc"
      style={{
        width: "100%",
        zIndex: 0,
      }}
    >
      <LeftMenu />
      {/* RIGHT SIDE */}
      <div
        style={{
          width: "65%",
          alignSelf: "flex-end",
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
  { img: "", name: "Computer Science is getting tested", docs: 109, href: "/" },
  { img: "", name: "Computer Science", docs: 109, href: "/" },
  { img: "", name: "Computer Science", docs: 109, href: "/" },
  { img: "", name: "Computer Science", docs: 109, href: "/" },
  { img: "", name: "Computer Science", docs: 109, href: "/" },
  { img: "", name: "Computer Science", docs: 109, href: "/" },
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
              <DepartItem key={item + i} info={item} />
            ))}
          </div>
          {/* BUTTON */}
          <div className="mt40">
            <ViewMoreBtn />
          </div>
        </div>
      </div>
    </>
  );
};

const ViewMoreBtn = (props) => {
  return (
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
  );
};

 export const DepartItem = (props) => {
  return (
    <>
      <div
        style={{
          maxHeight: 228,
          width: 238,
          backgroundColor: "white",
          borderRadius: 10,
        }}
        className="fcc"
      >
        {/* IMAGE */}
        <div
          style={{
            width: 238,
            height: 145.02,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <img
            width={"inherit"}
            alt={"dapartment"}
            src={props.info?.img || require("../static/images/depart.png")}
          />
        </div>
        {/* TEXT */}
        <div
          className="fcc"
          style={{
            height: 84,
            maxWidth: 218,
            justifyContent: "center",
          }}
        >
          {/* <div className="fcc"> */}
          <a
            className="regu16 mediP caps"
            style={{ textAlign: "center" }}
            href={props.info?.href}
          >
            {props.info?.name}
          </a>
          <span className="light13 caps notSelectColor mt10">
            {props.info?.docs} Researches
          </span>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};



// COMMON ELEMENTS

const contentSpacing = {
  marginLeft: "8.2%",
  marginRight: "8.2%",
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

const topContri = [
  { name: "Anjali Mehta", post: "assistant professor", docs: 46, href: "/" },
  { name: "Anjali Mehta", post: "assistant professor", docs: 46, href: "/" },
  { name: "Anjali Mehta", post: "assistant professor", docs: 46, href: "/" },
  {
    name: "Anjali Mehta is here",
    post: "assistant professor wow is she",
    docs: 46123131231,
    href: "/",
  },
  { name: "Anjali Mehta", post: "assistant professor", docs: 46, href: "/" },
  { name: "Anjali Mehta", post: "assistant professor", docs: 46, href: "/" },
];

const TopContri = () => {
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
              <TopContriItem key={item + i} info={item} />
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
          }}
        >
          <img
            src={props.info?.img || require("../static/images/contri.png")}
            height={114}
            alt="contributor"
          />
          <div className="fcfssb ml30" style={{ height: "inherit" }}>
            <div className="fcfs">
              <a className="regu16 caps mediP" style={{}} href={props.info?.href} >
                {props.info?.name || "Anjali"}
              </a>
              <span className="light13 notSelectColor caps mt5" style={{}}>
                {props.info?.post || "Assistant"}
              </span>
            </div>
            <span className="light13 notSelectColor mt5">
              {props.info?.docs + " Researches"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

// PDF VIEW ELEMENTS

const pdf = [
  { name: 1 },
  { name: 1, select: true,href:"/" },
  { name: 1 },
  { name: 1 },
  { name: 1 },
];
const PdfView = () => {
  const bgBoxesStyle = {
    position: "relative",
    width: 245,
    opacity: 0.4,
    height: 316,
    backgroundColor: "var(--border)",
    filter: "drop-shadow(0px 10px 30px rgba(51, 51, 51, 0.16))",
  };
  return (
    <>
      <div
        style={{
          ...contentSpacing,
        }}
      >
        {/* 3 PAGES BOX */}
        <div
          className="frcc"
          style={{
            paddingTop: 130,
          }}
        >
          {/* background page left */}
          <div
            style={{
              ...bgBoxesStyle,
              left: 15,
            }}
          ></div>
          {/* main page */}
          <div
            style={{
              position: "relative",
              bottom: 80,
              zIndex: 2,
              width: 353,
              height: 444,
              backgroundColor: "var(--border)",
              filter: "drop-shadow(0px 10px 30px rgba(51, 51, 51, 0.16))",
            }}
          ></div>
          {/* background page right */}
          <div
            style={{
              ...bgBoxesStyle,
              right: 15,
            }}
          ></div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <span className="regu10 upper frc">operating system</span>
          <div
            className="blueLine"
            style={{
              width: 30,
              marginTop: 5,
              marginBottom: 5,
            }}
          />
          <a className="semi16 frc bColor" href="/">
            Alien Maps of an Ocean-Bearing World
          </a>
          <span className="regu13 frc notSelectColor mt5">
            Cowan, Nicolas B.; Agol, Eric; Meadows, Victoria S.; Robinson,
            Tyler; Livengood, Timothy A.; e.a. (IOP Publishing, 2009-07)
          </span>
        </div>
        {/* BULLETS */}
        <div className="gcc mt30">
          <div className="frc">
            {pdf?.map((item, i) => (
              <div
                key={item + i}
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 10,
                  marginRight: i === pdf.length - 1 ? 0 : 14,
                  backgroundColor: item.select
                    ? "var(--srmBlue)"
                    : "var(--border)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
