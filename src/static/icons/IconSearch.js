const IconSearch = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 13L16.2 16.2"
        stroke={props.color||"#151515"}
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.80005 13.8C11.1138 13.8 13.8 11.1137 13.8 7.79999C13.8 4.48628 11.1138 1.79999 7.80005 1.79999C4.48634 1.79999 1.80005 4.48628 1.80005 7.79999C1.80005 11.1137 4.48634 13.8 7.80005 13.8Z"
        stroke={props.color||"#151515"}
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSearch;
