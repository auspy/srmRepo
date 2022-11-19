// import { Link } from "react-router-dom";

const Descrip = (props) => {
  return (
    <div >
      <span className="regu10 upper frc">{props.conference}</span>
      <div
        className="blueLine"
        style={{
          width: 30,
          marginTop: 5,
          marginBottom: 5,
        }}
      />
      <a className="semi16 frc bColor" href={props.href}>
        {props.name}
      </a>
      <span className="regu13 frc notSelectColor mt5">
        {props.authors?.join(", ")}
      </span>
      {props.date && (
        <div
          className="mt15 regu11 notSelectColor"
          style={{
            fontStyle: "italic",
          }}
        >
          {props.date}
        </div>
      )}
    </div>
  );
};
export default Descrip;

Descrip.defaultProps = {
  conference: "operating systm",
  name: "Alien Maps of an Ocean-Bearing World",
  author: ["Cowan", "Nicolas B.", "Agol", "Eric"],
  href:"/"
};
