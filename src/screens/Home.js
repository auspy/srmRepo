import LeftMenu from "../components/home/LeftMenu";

const contentSpacing = {
  marginLeft: "11%",
  marginRight: "11%",
  marginBottom: 80,
};
const Home = () => {
  return (
    <div
      className="rPosi fcc"
      style={{
        width: "100%",
        zIndex: -1,
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
      </div>
    </div>
  );
};

export default Home;

const topContri = [
  { name: "Anjali Mehta", post: "assistant professor", docs: 46 },
  { name: "Anjali Mehta", post: "assistant professor", docs: 46 },
  { name: "Anjali Mehta", post: "assistant professor", docs: 46 },
  { name: "Anjali Mehta", post: "assistant professor", docs: 46 },
  { name: "Anjali Mehta", post: "assistant professor", docs: 46 },
  { name: "Anjali Mehta", post: "assistant professor", docs: 46 },
];

const TopContri = () => {
  return (
    <>
      <div
        className="fcc"
        style={{
          backgroundColor: "white",
          height: 847,
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
              gap: "30px 90px",
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
        style={{
          background: "white",
          border: "1px solid var(--border)",
          borderRadius: 5,
          width: 340,
          height: 175,
        }}
      ></div>
    </>
  );
};

// const ViewMoreBtn = () => {
//   return <></>;
// };

const HomeHeading = (props) => {
  return (
    <>
      <div className="fcc">
        <span className="regu14 upper frc">{props.subHeading}</span>
        <div
          className="blueLine mv10"
          style={{
            width: 30,
          }}
        />
        <span
          className={`mediP frc hColor caps`}
          style={{
            color: props.color || null,
            fontSize: 28,
          }}
        >
          {props.h1} <span className="bColor ml5">{props.h2}</span>
        </span>
      </div>
    </>
  );
};

const pdf = [
  { name: 1 },
  { name: 1, select: true },
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
          <span className="semi16 frc bColor">
            Alien Maps of an Ocean-Bearing World
          </span>
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
