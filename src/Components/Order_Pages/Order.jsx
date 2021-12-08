import React,{ useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { FilterList } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../redux/orders/orderAction";
import { GET_ORDERS } from "../../redux/orders/orderTypes";
import { fetchMethods, rootapi } from "../../utlis/api";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  // {
  //   field: "order",
  //   headerName: "Order #",
  //   width: 200,
  //   editable: true,
  // },
  {
    field: "customer",
    headerName: "Customer",
    width: 200,
    editable: true,
  },
  {
    field: "orderStatus",
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
    field: "salesManager",
    headerName: "Sale Manager",
    sortable: false,
    width: 200,
  },
  {
    field: "orderDate",
    headerName: "Date",
    sortable: false,
    width: 200,
  },
];

// const rows = [
//   {
//     id: 1,
//     lastName: "Costco Fleet",
//     firstName: "Jon",
//     age: 35,
//     order: 10000202002,
//     status: "Active",
//     salesRep: "Wendy S.",
//     notes: "5 Units / 0 Trade",
//     date: "7/22/21",
//   },
//   {
//     id: 2,
//     lastName: "ABC Trucking",
//     firstName: "Cersei",
//     age: 42,
//     order: 10000202002,
//     status: "Active",
//     salesRep: "Jason R.",
//     notes: "Pending Financing",
//     date: "7/22/21",
//   },
// ];

const Order = () => {
  const orderState = useSelector((state) => state.orderState);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMethods
      .get(`${rootapi}/order`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          dispatch(getOrder(GET_ORDERS , res?.data))
        }
      })
      .catch((err) => console.log(err));
      // eslint-disable-next-line
  }, []);

  console.log("Orders",orderState)

  return (
    <>
      <Navbar title="My Orders" />
      <div className="mx-4 mt-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h3>Latest Orders</h3>
            <div className="mx-3">
              <Link to="quote" >
                <button
                  type="button"
                  class="btn btn-success btn-sm text-uppercase"
                >
                  Start New Order
                </button>
              </Link>
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
            rows={orderState?.orders}
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

export default Order;
