import styles from "../../static/css/front.module.css";

export const Front = () => {
  return (
    <div className={styles.maintag}>
      <div className={styles.info}>
        <div className={styles.infocontainer}>
          <h1 className={styles.heading}>Departments</h1>
          <div className={styles.infomaterial}>
             The library at SRM University is stocked with a large
            numbers of books, magazines, Indian & International Journals, online
            Journals and other online resources supporting all aspects of
            studies and research. There are multiple institutional libraries
            apart from a large Central Library with acts as a learning resource
            hub for the students & faculty members.<br></br>
             The library at SRM
            University is stocked with a large numbers of books, magazines,
            Indian & International Journals, online Journals and other online
            resources supporting all aspects of studies and research. There are
            multiple institutional libraries apart from.
          </div>
        </div>
      </div>

      <div className={styles.img}>
          
        <img className={styles.image} src="https://i.pinimg.com/564x/ac/96/b2/ac96b26be485f8a63d9ffae54a3b9596.jpg" alt="ERROR"/> 
      </div>
    </div>
  );
};

export default Front;
