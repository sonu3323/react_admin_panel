import React from "react";
import { Accordion } from "react-bootstrap";
import { Menu } from "@material-ui/icons";
import "./Style/orderquote.css";

function QuoteBodyProductInternalF2() {
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
                  <h5 className="textUppercase text-black">Internal Financing</h5>
                  <p className="textCapitalize text-black">type</p>
                </div>
                <div className=" col">
                  <h5 className="textUppercase">ABC Lenders</h5>
                  <p className="textCapitalize">lender</p>
                </div>
              </Accordion.Header>
            </div>
            {/* <Accordion.Body>
              <div className="">
               text
              </div>
            </Accordion.Body> */}

          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default QuoteBodyProductInternalF2;

