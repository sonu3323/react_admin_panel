import { DataGrid } from "@material-ui/data-grid";
import { FilterList } from "@material-ui/icons";

import React from "react";
import Navbar from "../Navbar/Navbar";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "order",
    headerName: "Order #",
    width: 200,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Customer",
    width: 200,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",

    width: 200,
    editable: true,
  },
  {
    field: "salesRep",
    headerName: "Sales Rep.",
    sortable: false,
    width: 200,
  },
  {
    field: "notes",
    headerName: "Notes",
    sortable: false,
    width: 200,
  },
  {
    field: "date",
    headerName: "Date",
    sortable: false,
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Costco Fleet",
    firstName: "Jon",
    age: 35,
    order: 10000202002,
    status: "Active",
    salesRep: "Wendy S.",
    notes: "5 Units / 0 Trade",
    date: "7/22/21",
  },
  {
    id: 2,
    lastName: "ABC Trucking",
    firstName: "Cersei",
    age: 42,
    order: 10000202002,
    status: "Active",
    salesRep: "Jason R.",
    notes: "Pending Financing",
    date: "7/22/21",
  },
];

const Sale = () => {
  return (
    <>
      <Navbar title="Sales" />
      <div className="mx-4 mt-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h3>Latest Sales</h3>
            <div className="mx-3">
            </div>
            <FilterList />
          </div>

          <div>
            <input
              type="email"
              class="form-control rounded-3 text-uppercase"
              id="exampleFormControlInput1"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      <div className="mx-4">
        <div style={{ height: 480, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </div>

    </>
  );
};

export default Sale;
