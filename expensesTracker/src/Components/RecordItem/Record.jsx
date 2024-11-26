import React from "react";
import "./Record.css";

const Record = ({ item = [] }) => {
  return (
    <>
      <div className="Record-container">
        {item.map((d) => {
          const amount1 = parseFloat(d.amount1) || 0;
          const amount2 = parseFloat(d.amount2) || 0;

          // Ensure a unique key
          const uniqueKey = d.id || `${d.fill1}-${d.fill2}`;

          return (
            <table key={uniqueKey} className="record-table">
              <thead className="record-table-head">
                <tr>
                  <th>Items</th>
                </tr>
                <tr>
                  <th>Amount in Rs.</th>
                </tr>
              </thead>
              <tbody className="record-table-body">
                <tr>
                  <td>{d.fill1}</td>
                  <td>Rs.{d.amount1}</td>
                </tr>
                <tr>
                  <td>{d.fill2}</td>
                  <td>Rs.{d.amount2}</td>
                </tr>
                <tr id="total-amount">
                  <td>Total</td>
                  <td>Rs.{amount1 + amount2}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
};

export default Record;