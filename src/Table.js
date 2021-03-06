import React from "react";
import "./Table.css";
import numeral from "numeral";
function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{country}</td>
          <td>
            <string>{numeral(cases).format()}</string>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
