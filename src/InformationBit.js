import { React } from 'react';


// Data objecct is an object with this structure
// arr = [{col1: "A very fragile life"}, {col2}]
const InformationBit = (title, subtitle, numberOfColumns, dataObject) => {
  const colSize = 12 / (numberOfColumns ? numberOfColumns <= 6 : 1); // this returns true but should return a number
  genColumns = () => {
    numberOfColumns.map(col => {
      {
        <div class=`column-${col}`> </div>;
      }
    });
  };

  return (
    <div class="section">
      <h2> {title} </h2>
      <h4> {subtitle} </h4>
      <div class="row">{genColumns}</div>
    </div>
  );
};
