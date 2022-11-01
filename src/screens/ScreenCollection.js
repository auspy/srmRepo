import Front from "../components/departs/front";
import Collection from "../components/departs/collection";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ScreenCollection = () => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const collectionName = pathname.split("/")[0];
  // console.log(pathname, "name", pathname.split("/"));
  const [type, setType] = useState(
    searchParams.get("type") || "Research Papers"
  );
  const [sort, setSort] = useState(searchParams.get("sort") || "Departments");

  return (
    <>
      <Front
        heading={collectionName}
        pathname={pathname}
        sort={sort}
        type={type}
        setType={setType}
        setSort={setSort}
      />
      <Collection sort={sort} type={type} />
    </>
  );
};

export default ScreenCollection;
