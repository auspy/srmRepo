import Front from "../components/departs/front";
import Collection from "../components/departs/collection";
import { useLocation } from "react-router-dom";

const ScreenCollection = () => {
  const { pathname } = useLocation();
  const collectionName = pathname.split("/")[0];
  console.log(pathname, "name", pathname.split("/"));
  return (
    <>
      <Front heading={collectionName} pathname={pathname} />
      <Collection />
    </>
  );
};

export default ScreenCollection;
