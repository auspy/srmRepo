import styles from "../../static/css/department.module.css";

import { DepartItem } from "../../screens/ScreenHome";
import { useLocation } from "react-router-dom";

export const Department = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <nav className={styles.nav}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </nav>
      {departItems &&
        Object.keys(departItems).map((key, index) => (
          <div key={key + index} className={styles.container}>
            <div className={styles.innercontainer}>
              <div className={styles.heading}>{key}</div>

              <div className={styles.info}>
                The information technology computer labs with more than 200
                computers connected with LAN using switches and two servers for
                the internet, academic work and for local network access. In
                addition to this, University has fully equipped R&D/Project Labs
                with Softwares and Development tools.
              </div>
            </div>
            <div
              className={`${styles.blocks}`}
              style={{
                // flexWrap:"wrap",
                display: "grid",
                gridTemplateColumns: "auto auto auto auto",
                justifyContent: "space-between",
                rowGap: 40,
              }}
            >
              {departItems[key]?.map((item, i) => (
                <DepartItem
                  key={item + i}
                  info={{ ...item, href: `${key}%20${item.name}` }}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Department;

const departItems = {
  Engineering: [
    { name: "Test1" },
    { name: "Test2" },
    { name: "Test3" },
    { name: "Test4" },
  ],
  Law: [
    { name: "Test5" },
    { name: "Test6" },
    { name: "Test7" },
    { name: "Test8" },
    { name: "Test9" },
    { name: "Test0" },
  ],
};
