import React from "react";
import { Accordion } from "react-bootstrap";
import { Menu } from "@material-ui/icons";
import "./Style/orderquote.css";

function QuoteBodyProductTaxFeeBreakdown() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <div className="bg-success">
              <Accordion.Header>
                <div className="me-2">
                  <Menu />
                </div>
                TAX & FEE BREAKDOWN
              </Accordion.Header>
            </div>
            <Accordion.Body>
              <div className="container-fluid d-flex justify-content-between">
                <div className="">
                  <h6 className="item textUppercase">Tax & Fee Breakdown</h6>
                  <p className="item textUppercase">Sales Tax</p>
                  <p className="item textUppercase">fet</p>
                  <p className="item textUppercase">ELT Fee</p>
                  <p className="item textUppercase">out of state delivery fee</p>
                </div>
                <div className="">
                  <h6 className="item textUppercase">Per Unit</h6>
                  <p className="item">$100.00</p>
                  <p className="item">$15.00</p>
                  <p className="item">$30.00</p>
                  <p className="item">$50.00</p>
                </div>
                <div className="">
                  <h6 className="item textUppercase">Subtotal</h6>
                  <p className="item">$1000.00</p>
                  <p className="item">$150.00</p>
                  <p className="item">$300.00</p>
                  <p className="item">$500.00</p>
                </div>
              </div>
              <div className="d-flex justify-content-between mx-3 fw-bold border-top border-2">
                <div className="textUppercase mt-3">
                  <p>Total Taxes & Fee's</p>
                </div>
                <div className="mt-3 me-4">
                  <p>$1950.00</p>

                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default QuoteBodyProductTaxFeeBreakdown;
