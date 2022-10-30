import { Link } from "react-router-dom";

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
      <Link className="semi16 frc bColor" to={props.href}>
        {props.name}
      </Link>
      <span className="regu13 frc notSelectColor mt5">
        {props.author?.join(", ")}
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
