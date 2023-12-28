import React from "react";
import "./NewCollection.css";
import new_collection from "../Assets/new_collections";

const NewCollection = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">{new_collection.map}</div>
    </div>
  );
};

export default NewCollection;
