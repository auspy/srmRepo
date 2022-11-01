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
      <div
        className="fcc"
        style={{
        }}
      >
        <img
          src={props.info?.img || require("../../static/images/contri.png")}
          height={88}
          alt="contributor"
        />
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