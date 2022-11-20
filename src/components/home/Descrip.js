// import { Link } from "react-router-dom";

const Descrip = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <span className="regu10 frc">{props.conference}</span>
      <div
        className="blueLine"
        style={{
          width: 30,
          marginTop: 5,
          marginBottom: 5,
        }}
      />
      <div className="frcsb" style={{ gap: 60 }}>
        <a
          className="semi16 frc bColor"
          href={props.href}
          style={{ width: "100%" }}
        >
          {props.name}
        </a>
        {/* {props.date && ( */}
        <div className="frcsb" style={{width:130}}>
          <span
            className="regu13 hColor"
            style={{
              // fontStyle: "italic",
            }}
          >
            {props.date||" "}
          </span>
                {/* )} */}
          <span
            className="regu13 hColor"
            style={{
              // fontStyle: "italic",
            }}
          >
            {props.cited||"-"}
          </span>
        </div>

      </div>
      <span className="regu13 frc notSelectColor mt5">
        {props.authors?.join(", ")}
      </span>
    </div>
  );
};
export default Descrip;

Descrip.defaultProps = {
  conference: "operating systm",
  name: "Alien Maps of an Ocean-Bearing World",
  author: ["Cowan", "Nicolas B.", "Agol", "Eric"],
  href: "/",
};
