import React from "react";

import { Menu } from "@material-ui/icons";
import { Accordion } from "react-bootstrap";

function QuoteBodyTradeInsPart2() {
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
                <div className=" col">
                  <h5>2018a Mack An64te</h5>
                  <p className="">ymm</p>
                </div>
                <div className=" col">
                  <h5>$114,33,000</h5>
                  <p className="">phone</p>
                </div>
                <div className=" col">
                  <h5>$114,33,000</h5>
                  <p className="">Subtotal</p>
                </div>
              </Accordion.Header>
            </div>
            <Accordion.Body>
              {/* <hr className="dropdown-divider" width="80%" /> */}
              <div className="d-flex col-md-12">
                <div className=" col-md-4">
                  <h5>2021 Mack An64te</h5>
                  <p className="">YMsM</p>
                </div>
                <div className=" col-md-4">
                  <h5>(503)-971-1234</h5>
                  <p className="">phone</p>
                </div>
              </div>
              <div className="section_box">
              <h5 className="col-md-12" style={{ float: "left" }}>
                Trade Value
              </h5>
              <div className="d-flex col-md-12">
                <div className=" col-md-4">
                  <h5>2021 Mack An64te</h5>
                  <p className="">YMsM</p>
                </div>
                <div className=" col-md-4">
                  <h5>(503)-971-1234</h5>
                  <p className="">phone</p>
                </div>
                <div className=" col-md-4">
                  <h5>(503)-971-12</h5>
                  <p className="">phone</p>
                </div>
              </div>
              <div className="typograph_second col-md-12">
                <div className=" col-md-4">
                  <h5>2021 Mack An64te</h5>
                  <p className="">YMsM</p>
                </div>
                <div className=" col-md-4">
                  <h5>(503)-971-1234</h5>
                  <p className="">phone</p>
                </div>
              </div>
              </div>
              <h5 className="col-md-12" style={{ float: "left" }}>
                Payoff Details
              </h5>
              <div className="typograph_second col-md-12">
                <div className=" col-md-4">
                  <h5>2021 Mack An64te</h5>
                  <p className="">YMsM</p>
                </div>
                <div className=" col-md-4">
                  <h5>(503)-971-1234</h5>
                  <p className="">phone</p>
                </div>
                <div className=" col-md-4">
                  <h5>(503)-971-12</h5>
                  <p className="">phone</p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default QuoteBodyTradeInsPart2;
