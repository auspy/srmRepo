import styles from "../../static/css/department.module.css";

import { DepartItem } from "../../screens/ScreenHome";

export const Department = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </nav>

      <div className={styles.container}>
        <div className={styles.innercontainer}>
          <div className={styles.heading}>Engineering</div>

          <div className={styles.info}>
            The information technology computer labs with more than 200
            computers connected with LAN using switches and two servers for the
            internet, academic work and for local network access. In addition to
            this, University has fully equipped R&D/Project Labs with Softwares
            and Development tools.
          </div>
        </div>
        <div className={styles.blocks}>
          <DepartItem />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.innercontainer}>
          <div className={styles.heading}>Engineering</div>

          <div className={styles.info}>
            The information technology computer labs with more than 200
            computers connected with LAN using switches and two servers for the
            internet, academic work and for local network access. In addition to
            this, University has fully equipped R&D/Project Labs with Softwares
            and Development tools.
          </div>
        </div>
        <div className={styles.blocks}>
          <DepartItem />
        </div>
      </div>
    </div>
  );
};

export default Department;
