import React from "react";
import { Accordion } from "react-bootstrap";
import { Menu } from "@material-ui/icons";
import QuoteBodyProductInternalF1 from "./QuoteBodyProductInternalF1";
import QuoteBodyProductInternalF2 from "./QuoteBodyProductInternalF2";

function QuoteBodyProductFinancing() {
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
                FINANCING
              </Accordion.Header>
            </div>
            <Accordion.Body>
              <QuoteBodyProductInternalF1 />
              <QuoteBodyProductInternalF2 />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default QuoteBodyProductFinancing;
