// CAPITALISE
export const toCapitalise = (item) => {
    return item
      ?.split(" ")
      .map((item) => {
        return item[0].toUpperCase() + item.substring(1).toLowerCase();
      })
      .join(" ");
  };