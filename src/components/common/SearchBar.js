import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import IconSearch from "../../static/icons/IconSearch";

const SearchBar = (props) => {
  const [searchParams] = useSearchParams();
  const commonStyle = {
    padding: "0px 15px",
    border: "1px solid #EAEAEA",
    height: "inherit",
    boxSizing: "border-box",
  };
  const [search, setSearch] = useState("");
  const navigation = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className="frc"
      style={{
        height: props.height || 60,
        borderRadius: 5,
        width: "fit-content",
        filter: "drop-shadow(0px 6px 20px rgba(51, 51, 51, 0.12))",
      }}
    >
      <input
        type={"text"}
        style={{
          ...commonStyle,
          width: props.width || 277,
          borderRadius: "5px 0px 0px 5px",
          color: "var(--heading)",
        }}
        placeholder={"Enter first few letters"}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        // to={`/SearchResults?p=${search}`}
        style={{
          ...commonStyle,
          width: 55,
          borderLeft: "none",
          borderRadius: "0px 5px 5px 0px",
        }}
        className="bgNone bgLightBlue"
        onClick={() => {
          navigation(
            `${pathname}${pathname.match("SearchResults")?"":"/SearchResults"}?search=${search}&departType=${searchParams.get(
              "departType"
            )}`
          );
        }}
      >
        <IconSearch color={"white"} />
      </button>
    </div>
  );
};

export default SearchBar;
