import React from "react";

import { Menu } from "@material-ui/icons";
import { Accordion } from "react-bootstrap";

function QuoteBodyTradeInsPart1() {
  return (
    <div className=" container-fluid ">
      <div className="row">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <div className="bg-success">
              <Accordion.Header>
                    <div className="me-2">
                      <Menu />
                    </div>
                    <div className=" col">
                      <h5>2018 Mack An64te</h5>
                      <p className="mx-0">ymm</p>
                    </div>
                    <div className=" col">
                      <h5>$114,33,000</h5>
                      <p className="mx-0">phone</p>
                    </div>
                    <div className=" col">
                      <h5>$114,33,000</h5>
                      <p className="mx-0">Subtotal</p>
                    </div>
              </Accordion.Header>
            </div>
            <Accordion.Body>Tester here</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default QuoteBodyTradeInsPart1;
