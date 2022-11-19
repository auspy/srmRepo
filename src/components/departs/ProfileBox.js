import { Link } from "react-router-dom";
import IconPapers from "../../static/icons/IconPapers";

const ProfileBox = (props) => {
  return (
    <div
      className="gcc"
      style={{
        background: "white",
        border: "1px solid var(--border)",
        borderRadius: 5,
        width: 212,
        height: 248,
        boxSizing: "border-box",
      }}
    >
      <div className="fcc" style={{}}>
        <div
          className="gcc"
          style={{
            width: 88,
            height: 88,
            borderRadius: 80,
            overflow: "hidden",
            // background: "#52BAD7",
            // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={props.info?.img || require("../../static/images/contri.png")}
            width={"100%"}
            alt="contributor"
          />
        </div>
        {/* <div className="fcfssb ml30" style={{ height: "inherit" }}> */}
        {/* <div className="fcfs"> */}
        <Link
          className="medi14 caps mediP"
          style={{ marginTop: 20 }}
          to={props.info?.href}
        >
          {props.info?.name || "Anjali"}
        </Link>
        <span className="light13 paraColor caps" style={{ marginTop: 7 }}>
          {props.info?.post || "Assistant"}
        </span>
        {/* </div> */}
        <div className="frc" style={{ marginTop: 20 }}>
          <IconPapers />
          <span className="light13 notSelectColor ml5">
            {props.info?.docs + " Papers"}
          </span>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

ProfileBox.defaultProps = {
  info: {
    img: "",
    name: "",
    docs: "",
    post: "",
    href: "",
  },
};
export default ProfileBox;
