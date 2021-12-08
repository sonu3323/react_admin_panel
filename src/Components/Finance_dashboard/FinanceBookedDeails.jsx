import { FormatListBulleted, Star } from "@material-ui/icons";
import React from "react";

const FinanceBookedDeails = () => {
  return (
    <div className="row mx-2 mt-2 text-white">
      {/* Booked Details Div */}
      <div className="col-8 ">
        <div className="d-flex">
          <FormatListBulleted />
          <p className="m-0 px-1 fw-bold">Booked Details</p>

        </div>
        <div className="p-2 bg-light text-dark rounded-3 mt-1">
          <div className="d-flex justify-content-evenly text-center">
            <div className="p-3">
              <p className="m-0">Total</p>
              <h1>26</h1>
            </div>
            <div className="p-3">
              <p className="m-0">Items Sold</p>
              <h1>102</h1>
            </div>
            <div className="p-3">
              <p className="m-0">Trade Ins</p>
              <h1>44</h1>
            </div>
            <div className="p-3">
              <p className="m-0">Financed</p>
              <h1>$33m</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Top Lenders Div */}


      <div className="col-4">
        <div className="d-flex">
          <Star />
          <p className="m-0 px-1">Top Lenders</p>
        </div>
        <div className="p-2 bg-light rounded text-dark mt-1">
          <div className="p-2">
            <div className="d-flex justify-content-between mt-2">
              <p className="m-0 fw-bold">Chase Bank</p>
              <p className="m-0 fw-bold">$112m</p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="m-0 fw-bold">Wells Fargo Bank</p>
              <p className="m-0 fw-bold">$9m</p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="m-0 fw-bold">On Point CU</p>
              <p className="m-0 fw-bold">$6m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceBookedDeails;
