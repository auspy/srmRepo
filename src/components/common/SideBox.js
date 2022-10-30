import { Link } from "react-router-dom";
import { topLinks } from "../home/LeftMenu";

const SideBox = (props) => {
  return (
    <>
      <div
        className="caps"
        style={{
          background: "white",
          boxShadow: "0px 1px 3px rgba(51, 51, 51, 0.1)",
          borderRadius: "5px",
        }}
      >
        {/* heading */}
        <div className="fcc">
            <div className="semi14" style={{
                padding:"17px 0"
            }} >
              {props.heading || "browse"}
            </div>
            {/* line */}
            <div className="blueLine" style={{
                width:250
            }} />
        </div>
        {/* items */}
        {topLinks.map((item, i) => (
          <Link
            to={item.href}
            key={item + i}
            className="regu13 frc paraColor"
            style={{
              boxSizing: "border-box",
              padding: "17px 20px",
              background: "white",
              borderBottom: "1px solid var(--bg)",
              width: 290,
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SideBox;
