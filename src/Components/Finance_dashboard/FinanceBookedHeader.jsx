import React from "react";
import { ArrowDropDown, Settings } from "@material-ui/icons";

const FinanceBookedHeader = () => {
  return (
    <div>
          <div className="d-flex justify-content-between px-2 text-white align-items-center">
              <div className="">
                  <span className="fs-6">Today</span>
                  <span className="mx-2">Week</span>
                  <span className="mx-2">Month</span>
                  <span className="mx-2">Year</span>
              </div>

              <div className="d-flex align-items-center">
                  <p className="m-0">All Branches</p>
                  <ArrowDropDown />
                  <Settings />
              </div>
          </div>

    </div>
  );
};

export default FinanceBookedHeader;
