// CAPITALISE
export const toCapitalise = (item) => {
    return item
      ?.split(" ")
      .map((item) => {
        return item[0].toUpperCase() + item.substring(1).toLowerCase();
      })
      .join(" ");
  };

// VARAIBLES
const url = "http://localhost:7780"
const aws = "http://3.113.25.64:7780"
export const urlAws = aws