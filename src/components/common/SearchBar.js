import IconSearch from "../../static/icons/IconSearch";

const SearchBar = () => {
  const commonStyle = {
    padding: "0px 15px",
    border: "1px solid #EAEAEA",
    height: "inherit",
    boxSizing:"border-box",
  };
  return (
    <div
      className="frc"
      style={{
        height: 60,
        borderRadius: 5,
        width:"fit-content",
        filter: "drop-shadow(0px 4px 12px rgba(51, 51, 51, 0.1))",
      }}
    >
      <input
        style={{
          ...commonStyle,
          width:277,
          borderRadius: "5px 0px 0px 5px",
          color: "var(--heading)",
        }}
        placeholder={"Enter first few letters"}
      />
      <button
        style={{
          ...commonStyle,
          width:55,
          borderLeft: "none",
          borderRadius: "0px 5px 5px 0px",
        }}
        className="bgNone bgLightBlue"
      >
        <IconSearch color={"white"} />
      </button>
    </div>
  );
};

export default SearchBar;
