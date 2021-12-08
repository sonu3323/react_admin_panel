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
                <h5 className="text-uppercase">$25,000</h5>
                <p className="mx-0 text-capitalize">Amount</p>
              </div>
            </div>
            <div>
              <h5 className="text-uppercase">Check</h5>
              <p className="mx-0 text-capitalize">Payment Method</p>
            </div>
            <div>
              <h5 className="text-uppercase">12345678</h5>
              <p className="mx-0 text-capitalize">Document #</p>
            </div>
            <div>
              <h5 className="text-uppercase">Cleared</h5>
              <p className="mx-0 text-capitalize">Status</p>
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
            <h6 className="text-uppercase">ADMINISTRATION FEE</h6>
            <h6>$ 00.00</h6>
          </div>
          <div className="row">
            <div className="col">
              <div className="">
                <h6 className="text-uppercase">DOCUMENTATION FEES</h6>
              </div>
              <div className="">
                <h6 className="text-uppercase">ELT FEES</h6>
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
        <h5 className="text-uppercase">ORDER SUMMARY</h5>

        <div className="p-3">
          <div className="d-flex justify-content-between px-1 py-1">
            <h6 className="text-uppercase">BALAANCE BEFORE TRADES</h6>
            <h6>$ 1,213,100.00</h6>
          </div>
          <div className="d-flex justify-content-between px-1 py-1">
            <h6 className="text-uppercase">TRADE IN CREDIT</h6>
            <h6>$ 100,000.00</h6>
          </div>

          <div className="d-flex justify-content-between px-1 py-1">
            <h6 className="text-uppercase">SUB TOTAL</h6>
            <h6>$ 1,113,100.00</h6>
          </div>

          <div className="d-flex justify-content-between px-1 py-1">
            <h6 className="text-uppercase">DOWN PAYMENT</h6>
            <h6>$ 834,825.00</h6>
          </div>

          <div className="d-flex justify-content-between px-1 py-1">
            <h6 className="text-uppercase">BALANCE DUE</h6>
            <h6>$ 278,275.00</h6>
          </div>
          <div className="d-flex justify-content-between px-1 py-2 bg-success py-1 text-white">
            <h6 className="text-uppercase">TOTAL AMOUNT FINANCED</h6>
            <h6>$ 278,275.00</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownPayment;
