const paths = {
  collections: (sort) => (sort ? "/Collections?sort=" + sort : "/Collections"),
  collectionList: (collection, type = "", departType = "departments") =>
    "/Collections/" +
    collection +
    (type
      ? "?type=" + type + (departType ? "&departType=" + departType : "")
      : departType
      ? "?departType=" + departType
      : ""),
  profile: (department, name, id) => {
    // console.log(department,name,id);
    if (department && name && id) {
      return `/Collections/${department}/${name}?id=${id}`;
    }
    return null;
  },
};
export default paths;
