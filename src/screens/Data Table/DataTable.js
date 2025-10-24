import React, { useState } from "react";
import "./styles.css";

function DataTable({ data }) {
  const [currPage, setCurrPage] = useState(1);
  const [dataShown, setDataShown] = useState(data.slice(0, 5));
  const [rowsLimit, setRowsLimit] = useState(5);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="cell">id</div>
          {dataShown.map((item) => {
            return (
              <div className="row">
                <div className="cell">{item.id}</div>
              </div>
            );
          })}
          <div className="cell">name</div>
          {dataShown.map((item) => {
            return (
              <div className="row">
                <div className="cell">{item.name}</div>
              </div>
            );
          })}
          <div className="cell">
            age
            {dataShown.map((item) => {
              return (
                <div className="row">
                  <div className="cell">{item.age}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
