import { useState } from "react";
import { AlphaFilter, Path } from "../../screens/ScreenLists";
// import styles from "../../static/css/front.module.css";
import SearchBar from "../common/SearchBar";

// export const Front2 = (props) => {
//   return (
//     <div className={styles.maintag}>
//       <div className={styles.info}>
//         <div className={styles.infocontainer}>
//           <h1 className={styles.heading}>{props.heading}</h1>
//           <div className={styles.infomaterial}>
//             The library at SRM University is stocked with a large numbers of
//             books, magazines, Indian & International Journals, online Journals
//             and other online resources supporting all aspects of studies and
//             research. There are multiple institutional libraries apart from a
//             large Central Library with acts as a learning resource hub for the
//             students & faculty members.<br></br>
//             The library at SRM University is stocked with a large numbers of
//             books, magazines, Indian & International Journals, online Journals
//             and other online resources supporting all aspects of studies and
//             research. There are multiple institutional libraries apart from.
//           </div>
//         </div>
//       </div>

//       <div className={styles.img}>
//         <img
//           className={styles.image}
//           src="https://i.pinimg.com/564x/ac/96/b2/ac96b26be485f8a63d9ffae54a3b9596.jpg"
//           alt="ERROR"
//         />
//       </div>
//     </div>
//   );
// };

const Front = (props) => {
  // console.log(searchParams.get("props.type"),searchParams.get("sort"), "search params");
  const [filter, setFilter] = useState(null);
  // const typeOpts = ["Research Papers", "Authors"];
  // console.log(props.sort);
  return (
    <>
      <div
        className="bgSrmBlue fcc container"
        style={{
          height:389,
        }}
      >
        {/* CONTENT */}
        <div
          className="frcsb"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              height: "100%",
            }}
          >
            {/* PATH */}
            <Path pathname={props.pathname} />
            {/* HEADING */}
            <div className="frc mt60 caps" style={{ gap: 15 }}>
              <h1>Discover</h1>
            </div>
            {/* SEARCH BAR */}
            <div className="mt30">
              <SearchBar height={50} width={489} />
            </div>
            {/* FILTER SHORTCUTS */}
            <AlphaFilter filter={filter} setFilter={setFilter} />
          </div>
          {/* RIGHT SIDE */}
          {/* IMAGE */}
          <img
            height={264}
            alt={"illustration"}
            src={require(`../../static/images/${
              props.type === "Authors" ? "authors.png" : "researchPaper.png"
            }`)}
          />
        </div>
      </div>
    </>
  );
};

export default Front;

