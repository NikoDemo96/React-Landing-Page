import React from "react";
import Card from "./Card.jsx"


const Grid = () => {

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mx-5 my-5">
        <div className="col"><Card /></div>
        <div className="col"><Card /></div>
        <div className="col"><Card /></div>
        <div className="col"><Card /></div>
    </div>

  );


};

export default Grid;