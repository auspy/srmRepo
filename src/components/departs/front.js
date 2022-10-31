import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AlphaFilter, Path } from "../../screens/ScreenLists";
import styles from "../../static/css/front.module.css";
import IconArrowDown from "../../static/icons/IconArrowDown";
import SearchBar from "../common/SearchBar";

export const Front2 = (props) => {
  return (
    <div className={styles.maintag}>
      <div className={styles.info}>
        <div className={styles.infocontainer}>
          <h1 className={styles.heading}>{props.heading}</h1>
          <div className={styles.infomaterial}>
            The library at SRM University is stocked with a large numbers of
            books, magazines, Indian & International Journals, online Journals
            and other online resources supporting all aspects of studies and
            research. There are multiple institutional libraries apart from a
            large Central Library with acts as a learning resource hub for the
            students & faculty members.<br></br>
            The library at SRM University is stocked with a large numbers of
            books, magazines, Indian & International Journals, online Journals
            and other online resources supporting all aspects of studies and
            research. There are multiple institutional libraries apart from.
          </div>
        </div>
      </div>

      <div className={styles.img}>
        <img
          className={styles.image}
          src="https://i.pinimg.com/564x/ac/96/b2/ac96b26be485f8a63d9ffae54a3b9596.jpg"
          alt="ERROR"
        />
      </div>
    </div>
  );
};

const Front = (props) => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("type"),searchParams.get("sort"), "search params");

  const [filter, setFilter] = useState(null);
  const [type, setType] = useState(
    searchParams.get("type") || "Research Papers"
  );
  const typeOpts = ["Research Papers", "Authors"];
  const sortOpts = ["Departments", "Date"];
  const [sort, setSort] = useState(searchParams.get("sort") || "Departments");
  return (
    <>
      <div
        className="bgSrmBlue fcc container"
        style={{
          height: 397,
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
            <div className="frc mt60" style={{ gap: 15 }}>
              <h3>Discover</h3>
              <UnderlinedText
                value={type}
                setValue={setType}
                options={typeOpts}
              />
              <h3>based on</h3>
              <UnderlinedText
                value={sort}
                setValue={setSort}
                options={sortOpts}
              />
            </div>
            {/* SEARCH BAR */}
            <div className="mt40">
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
              type === "Authors" ? "authors.png" : "researchPaper.png"
            }`)}
          />
        </div>
      </div>
    </>
  );
};

export default Front;

const UnderlinedText = (props) => {
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid white",
          paddingBottom: 5,
          gap: 8,
        }}
        className="frc"
      >
        <select
          className="caps inter oColor regu selectHover"
          style={{ fontSize: 30, background: "none", outline: "none" }}
          value={props.value}
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
        >
          {props.options?.map((item, i) => (
            <option key={item + i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <IconArrowDown />
      </div>
    </>
  );
};