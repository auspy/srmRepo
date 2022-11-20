const paths = {
  collections: (sort) => (sort ? "/Collections?sort=" + sort : "/Collections"),
  collectionList: (collection, type="", departType = "departments") =>
    "/Collections/" +
    collection +
    (type
      ? "?type=" + type + (departType ? "&departType=" + departType : "")
      : departType
      ? "?departType=" + departType
      : ""),
  profile: (collection, name, id) => {
    // console.log(collection,name,id);
    return `/Collections/${collection}/${id}`;
  },
};
export default paths;
