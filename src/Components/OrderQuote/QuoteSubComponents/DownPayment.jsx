import { Menu } from "@material-ui/icons";
import React from "react";

const DownPayment = () => {
  return (
    <>
      <div className="shadow-sm">
        <div>
          <div className="p-3 d-flex justify-content-between  shadow-sm">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <Menu />
              </div>
              <div>
                <h5>$23,000</h5>
                <p className="mx-0">Amount</p>
              </div>
            </div>
            <div>
              <h5>Check</h5>
              <p className="mx-0">Payment Method</p>
            </div>
            <div>
              <h5>12344567</h5>
              <p className="mx-0">Document #</p>
            </div>
            <div>
              <h5>Cleard</h5>
              <p className="mx-0">Status</p>
            </div>
          </div>

          <div className="p-3 d-flex justify-content-between mt-2 shadow-sm">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <Menu />
              </div>
              <div>
                <h5>$23,000</h5>
                <p className="mx-0">Amount</p>
              </div>
            </div>
            <div>
              <h5>Check</h5>
              <p className="mx-0">Payment Method</p>
            </div>
            <div>
              <h5>12344567</h5>
              <p className="mx-0">Document #</p>
            </div>
            <div>
              <h5>Pending</h5>
              <p className="mx-0">Status</p>
            </div>
          </div>
        </div>

        <div className="p-2 d-flex justify-content-between border-top">
          <div>
            <h6>DOWN PAYMENT REQUIRED</h6>
            <h6 className="py-2">COLLECTED TO DATE</h6>
            <h6>DUE AT DELIVERY</h6>
          </div>

          <div>
            <h6>$10,000.00</h6>
            <h6 className="py-2">$7,000.00</h6>
            <h6>$3,000.00</h6>
          </div>
        </div>
      </div>

      <div className="shadow-sm border-start border-5 border-danger mt-3">
        <h5>TAX & FEE SUMMARY</h5>

        <div className="p-3">
          <div className="d-flex justify-content-between">
            <h6>ADMINISTRATION</h6>
            <h6>$ 00.00</h6>
          </div>
          <div className="row">
            <div className="col">
              <div className="">
                <h6>DOCUMENTATION FEES</h6>
              </div>
              <div className="">
                <h6>ELT FEES</h6>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-between">
                <h6>$ 00.00</h6>
                <h6>$ 00.00</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6>$ 00.00</h6>
                <h6>$ 00.00</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-5 border-start border-success mt-3">
        <h5>ORDER SUMMARY</h5>

        <div className="p-3">
          <div className="d-flex justify-content-between px-1 py-1">
            <h6>BALAANCE BEFORE TRADES</h6>
            <h6>$ 1,234,245.00</h6>
          </div>
          <div className="d-flex justify-content-between px-1 py-1">
            <h6>TRADE IN CREDIT</h6>
            <h6>$ 1,234,245.00</h6>
          </div>

          <div className="d-flex justify-content-between px-1 py-1">
            <h6>SUB TOTAL</h6>
            <h6>$ 1,234,245.00</h6>
          </div>

          <div className="d-flex justify-content-between px-1 py-1">
            <h6>DOWN PAYMENT</h6>
            <h6>$ 1,234,245.00</h6>
          </div>

          <div className="d-flex justify-content-between px-1 py-1">
            <h6>BALANCE DUE</h6>
            <h6>$ 1,234,245.00</h6>
          </div>
          <div className="d-flex justify-content-between px-1 py-2 bg-success py-1 text-white">
            <h6>TOTAL AMOUNT FINANCED</h6>
            <h6>$ 1,234,245.00</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownPayment;
