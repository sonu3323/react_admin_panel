import { Menu } from "@material-ui/icons";
import React from "react";
import { Accordion } from "react-bootstrap";
import QuoteBodyProductAdditions from "./QuoteBodyProductAdditions";
import QuoteBodyProductUpgrades from "./QuoteBodyProductUpgrades";
import QuoteBodyProductTaxFeeBreakdown from "./QuoteBodyProductTaxFeeBreakdown";
import QuoteBodyProductFinancing from "./QuoteBodyProductFinancing";
import "./Style/orderquote.css";

function QuoteBodyProduct() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <div className="bg-success">
            <Accordion.Header>
              <div className="me-2">
                <Menu />
              </div>
              <div className=" col textUppercase">
                <h5>2021 Mack An64te</h5>
                <p className="">ymm</p>
              </div>
              <div className=" col textCapitalize">
                <h5>$123,000.00</h5>
                <p className="">sales price</p>
              </div>
              <div className=" col textCapitalize">
                <h5>$114,33,000</h5>
                <p className="">Subtotal</p>
              </div>
            </Accordion.Header>
          </div>
          <Accordion.Body>
            <div className="row">
              <div className=" col-md-5">
                <h5 className="textUppercase">m21a64-tr</h5>
                <p className="text-secondary textCapitalize">stock#</p>
              </div>
              <div className=" col-md-7">
                <h5>$1,950.00</h5>
                <p className="text-secondary textCapitalize">taxs & fee's</p>
              </div>
            </div>
            <QuoteBodyProductAdditions />
            <QuoteBodyProductUpgrades />
            <QuoteBodyProductTaxFeeBreakdown />
            <QuoteBodyProductFinancing />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <div className="bg-success">
            <Accordion.Header>
              <div className="me-2">
                <Menu />
              </div>
              <div className=" col textUppercase">
                <h5>2018 volvo v20</h5>
                <p className=" textUppercase">ymm</p>
              </div>
              <div className=" col">
                <h5>$103,000.00</h5>
                <p className="textCapitalize">sales price</p>
              </div>
              <div className=" col">
                <h5>$104,300,000</h5>
                <p className="textCapitalize">Subtotal</p>

              </div>
            </Accordion.Header>
          </div>
          <Accordion.Body>Tester here</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default QuoteBodyProduct;
