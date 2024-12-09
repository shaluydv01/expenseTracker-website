import { useState } from "react";
import "./UserForm.css";

const UserForm = ({ item, setItem }) => {
  const [date1, setDate1] = useState("");
  const [fill1, setFill1] = useState("");
  const [amount1, setAmount1] = useState(""); // Store as string initially
  const [fill2, setFill2] = useState("");
  const [amount2, setAmount2] = useState(""); // Store as string initially

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      id: Math.random(),
      date1: date1,
      fill1: fill1,
      amount1: amount1,
      fill2: fill2,
      amount2: amount2,
    };

    setItem([...item, obj]);
  };

  // Parse amounts as numbers
  const totalAmount = (parseFloat(amount1) || 0) + (parseFloat(amount2) || 0);

  return (
    <>
      <div className="main-userForm-container">
        <div className="userForm-content-container-1">
          <form onSubmit={handleSubmit}>
            <div className="ucc-1 box-1">
            <legend style={{fontSize: "18px", fontWeight:"700"}}>Choose Date:</legend>
              <input 
              type="date"
              value={date1}
              name="date"
              id="date1"
              onChange={(e) => setDate1(e.target.value)}
              required
              />
            </div>

            <div className="ucc-1 box-2">
              <div className="item-box-input">
                <legend>Item 1</legend>
                <input
                  value={fill1}
                  type="text"
                  name="data1"
                  id="item1"
                  placeholder="Fill data"
                  onChange={(e) => setFill1(e.target.value)}
                  required
                />
              </div>

              <div className="item-box-input">
                <legend>Amount Spend</legend>
                <input
                  value={amount1}
                  type="number"
                  name="amount1"
                  id="amount1"
                  placeholder="Amount in Rs."
                  onChange={(e) => setAmount1(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="ucc-1 box-3">
              <div className="item-box-input">
                <legend>Item 2</legend>
                <input
                  value={fill2}
                  type="text"
                  name="data2"
                  id="item2"
                  placeholder="Fill data"
                  onChange={(e) => setFill2(e.target.value)}
                />
              </div>
              <div className="item-box-input">
                <legend>Amount Spend</legend>
                <input
                  value={amount2}
                  type="number"
                  name="amount2"
                  id="amount2"
                  placeholder="Amount in Rs."
                  onChange={(e) => setAmount2(e.target.value)}
                />
              </div>
            </div>

            <div className="ucc-1 box-4">
              <div className="item-box-input">
                <p id="total-legend">Total amount spend in Rs.</p>
              </div>
              <div className="item-box-input">
                <p id="total-legend">Rs.{totalAmount}</p>
              </div>
            </div>

            <div className="ucc-1 box-5">
              <button className="btnn btn-done">Done</button>
            </div>
          </form>
          <button className="btnn btn-add-more">Add More</button>
        </div>

        <div className="userForm-content-container-2">
          <table className="userForm-right-table">
            <thead className="urt-head">
              <tr className="uth-row">
                <th>Month</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="urt-body">
              <tr className="utb-row">
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserForm;
