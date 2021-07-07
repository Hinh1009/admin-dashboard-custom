import React from "react";

import Table from "../components/table/Table";

import customerList from "../assets/JSonData/customer-list.json";

const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

const renderHead = (item, i) => <th key={i}>{item}</th>;

const renderBody = (item, i) => (
  <tr key={i}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

function Customers() {
  return (
    <div>
      <h2 className="page-header">Customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="20"
                headData={customerTableHead}
                renderHead={(item, i) => renderHead(item, i)}
                bodyData={customerList}
                renderBody={(item, i) => renderBody(item, i)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
