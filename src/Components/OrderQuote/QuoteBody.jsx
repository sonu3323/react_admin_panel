
import { ControlPoint, Menu } from "@material-ui/icons";
import React from "react";
import { Accordion } from "react-bootstrap";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import "./Style/orderquote.css";
import Cusomter from "./QuoteSubComponents/Customer/Cusomter";
import CusomterModal from "./QuoteSubComponents/Customer/CutomerModal";
import Details from "./QuoteSubComponents/Details/Details";
import DownPayment from "./QuoteSubComponents/DownPayment/DownPayment";
import QuoteBodyProduct from "./QuoteSubComponents/QuoteBodyProduct/QuoteBodyProduct";
import QuoteBodyTradeIns from "./QuoteSubComponents/QuoteBodyTradeIns/QuoteBodyTradeIns";
import Document from "./QuoteSubComponents/Document/Document";
import QuoteBodyProductModal from "./QuoteSubComponents/QuoteBodyProduct/ProductModal/QuoteBodyProductModal";
import DownpaymentModel from "./QuoteSubComponents/DownPayment/DownpaymentModel";
import DetailsModel from "./QuoteSubComponents/Details/DetailsModel";
import TradeModel from "./QuoteSubComponents/QuoteBodyTradeIns/TradeModel";


const QuoteBody = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-3 ">
          <div className="p-3 section_main">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Customer</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Product</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Trade Ins</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Details</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Down Payment</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Summary</TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>

          <div className="d-grid gap-2 mx-4 mt-3">
            <button className="btn btn-primary" type="button">
              PRINT SALES QUOTE
            </button>
            <button className="btn btn-success" type="button">
              SUBMIT FOR MANAGER APPROVAL
            </button>
          </div>
        </div>
        {/* RIGHT SECTOIN  */}

        <div className="col-9  border-5">
          <div className="p-1">
            <Accordion defaultActiveKey="0">
              {/* product Model Start Here  */}
              <div className="d-flex align-items-center">
                <div
                  type="button"
                  className="btn btn-primary px-1 mb-auto mt-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#customermodal"
                >
                  <ControlPoint />
                </div>

                <div>
                  <CusomterModal />
                </div>

                {/* product Model End Here  */}

                <div className="flex-grow-1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="me-2">
                        <Menu />
                      </div>
                      CUSTOMER
                    </Accordion.Header>

                    <Accordion.Body>
                      <Cusomter />
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </div>
              {/* product Model Start Here  */}
              <div className="d-flex align-items-center">
                <div
                  type="button"
                  className="btn btn-primary px-1 mb-auto mt-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#productmodal"
                >
                  <ControlPoint />
                </div>

                <div>
                  <QuoteBodyProductModal />
                </div>

                {/* product Model End Here  */}

                <div className="flex-grow-1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="me-2">
                        <Menu />
                      </div>
                      PRODUCTS
                    </Accordion.Header>
                    <Accordion.Body>
                      <QuoteBodyProduct />
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </div>
              {/* Trade Model Start Here  */}
              <div className="d-flex align-items-center">
                <div
                  type="button"
                  className="btn btn-primary px-1 mb-auto mt-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#trademodal"
                >
                  <ControlPoint />
                </div>

                <div>
                  <TradeModel />
                </div>

                {/* Trade Model End Here  */}
                <div className="flex-grow-1">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <div className="me-2">
                        <Menu />
                      </div>
                      TRADE INS
                    </Accordion.Header>
                    <Accordion.Body>
                      <QuoteBodyTradeIns />
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </div>
              {/* Downpayment Model Start Here  */}
              <div className="d-flex align-items-center">
                <div
                  type="button"
                  className="btn btn-primary px-1 mb-auto mt-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#detailsexample"
                >
                  <ControlPoint />
                </div>
                <div>
                  <DetailsModel />
                </div>

                {/* Downpayment Model End Here  */}
                <div className="flex-grow-1">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <div className="me-2">
                        <Menu />
                      </div>
                      DETAILS
                    </Accordion.Header>
                    <Accordion.Body>
                      <Details />
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </div>
              {/* Downpayment Model Start Here  */}
              <div className="d-flex align-items-center">
                <div
                  type="button"
                  className="btn btn-primary px-1 mb-auto mt-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#downpaymentmodel"
                >
                  <ControlPoint />
                </div>

                <div>
                  <DownpaymentModel />
                </div>

                {/* Downpayment Model End Here  */}
                <div className="flex-grow-1">
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <div className="me-2">
                        <Menu />
                      </div>
                      DOWN PAYMENTS
                    </Accordion.Header>
                    <Accordion.Body>
                      <DownPayment />
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className=" px-1 mb-auto mt-2 me-2">
                  <ControlPoint />
                </div>
                <div className="flex-grow-1">
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <div className="me-2">
                        <Menu />
                      </div>
                      DOCUMENTS
                    </Accordion.Header>
                    <Accordion.Body>
                      <Document />
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </div>

            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBody;
