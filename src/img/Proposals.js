import React from "react";

/// How's the data going to look like?

const cities = { city: ["London", "Lyon", "Berlin"] }; /// where is the data here?1
const cities2 = {
  city: [{ London: "data" }, { Lyon: "data" }, { Berlin: "" }]
};
const cities3 = [{ London: "data" }, { Lyon: "data" }, { Paris: "data" }];

// we could even have this on state like so
const cities4 = { London: "data", Lyon: "data", Paris: "data" };

const Proposals = ({ city, data }) => {
  // assign the data to a var
  switch (city) {
    case "Lyon":
      return "Lyon";
      break;

    default:
      return "London";
      break;
  }

  return "something";
};

export default Proposals;
