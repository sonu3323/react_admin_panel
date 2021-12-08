import React from "react";
import Navbar from "../Navbar/Navbar";
import FinanceBookedDeails from "./FinanceBookedDeails";
import FinanceBookedHeader from "./FinanceBookedHeader";
import FinanceCurrentOrders from "./FinanceCurrentOrders";
import FinanceRequest from "./FinanceRequest";

import "./Styles/financeDashboard.css";

const FinanceDashboard = () => {
  return (
    <>
      <Navbar title="Finance Dashboard" />

      <div className="bg-success ms-4 rounded-start py-2">
        <div className="p-2">
          <FinanceBookedHeader />
          <FinanceBookedDeails />
          <FinanceCurrentOrders />
        </div>
      </div>

      <div className="ms-4 ">
          <FinanceRequest />

      </div>
    </>
  );
};

export default FinanceDashboard;
