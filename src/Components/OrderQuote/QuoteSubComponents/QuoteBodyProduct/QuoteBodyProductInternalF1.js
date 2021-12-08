import React from "react";
import { Accordion } from "react-bootstrap";
import { Menu } from "@material-ui/icons";
import "./Style/orderquote.css";

function QuoteBodyProductInternalF1() {
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

                <div className=" col textUppercase">
                  <h5 className="textUppercase">Internal Financing</h5>
                  <p className=" textCapitalize">type</p>
                  <h5>---</h5>
                  <p className="textCapitalize">Amount</p>
                </div>
                <div className=" col">
                  <h5 className="textUppercase">Wells fargo Photo</h5>
                  <p className=" textCapitalize">lender</p>
                  <h5>---</h5>
                  <p className=" textCapitalize">balance due</p>
                </div>
              </Accordion.Header>
            </div>
            {/* <Accordion.Body>
              <div className="container finance_text col-md-12">TEXT</div>
            </Accordion.Body> */}
                Internal Financing 1
          
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default QuoteBodyProductInternalF1;

