import Front from "../components/departs/front";
import Collection from "../components/departs/collection";
import { useLocation } from "react-router-dom";

const ScreenCollection = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Front
        pathname={pathname}
      />
      <Collection />
    </>
  );
};

export default ScreenCollection;
