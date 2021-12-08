import React from "react";
import { Accordion } from "react-bootstrap";
import { Menu } from "@material-ui/icons";

import "./Style/orderquote.css";

function QuoteBodyProductAdditions() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <div className="bg-success textUppercase">
              <Accordion.Header>
                <div className="me-2">
                  <Menu />
                </div>
                ADDITIONS
              </Accordion.Header>
            </div>
            <Accordion.Body>
              <div className="container addition_text col-md-12">
                <div className="me-2">
                  <Menu />
                </div>
                <div className="col-md-6">
                  <h5 className="textUppercase">Trailer</h5>
                  <p className="text-secondary textCapitalize">type</p>
                  <div>
                    <h5>--</h5>
                    <p className="text-secondary textCapitalize">Description</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>553430045</h5>
                  <p className="text-secondary textCapitalize">serial#</p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default QuoteBodyProductAdditions;
