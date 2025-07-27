import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mb-5 text-muted fs-1">Charges for account opening</h1>
        <table class="table border text-start">
          <thead>
            <tr>
              <th scope="col">Type of account</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
