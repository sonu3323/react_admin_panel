import React from "react";
import { Accordion } from "react-bootstrap";
import { Menu } from "@material-ui/icons";
import "./Style/orderquote.css";

function QuoteBodyProductUpgrades() {
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
                UPGRADES
              </Accordion.Header>
            </div>
            <Accordion.Body>
              <div className="containier-fuid">
                <div className="row">
                  <div className="col d-flex">
                    <div className="me-4">
                      <Menu />
                    </div>
                    <div>
                    <h5 className="textUppercase">tire upgrade</h5>
                    <p className="text-secondary textCapitalize">type</p>
                    </div>
                  </div>
                  <div className="col">
                  <h5 className="textUppercase">553430045</h5>
                    <p className="text-secondary textCapitalize">serial #</p>
                  </div>
                  <div className="col">
                  <h5 className="textUppercase">--</h5>
                    <p className="text-secondary textCapitalize">sales price</p>
                  </div>
                </div>

                <div className="ms-4 ps-3">
                <h5 className="textUppercase">new set of brand name tires</h5>
                    <p className="text-secondary textCapitalize">description</p>

                </div>

              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default QuoteBodyProductUpgrades;

