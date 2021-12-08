import React from "react";

const QuoteHeader = () => {
  return (
    <div className="row mx-0">
      <div className="col-7 d-flex justify-content-between  p-2 ms-4">
        <div>
          <h3>Order</h3>
          <h5 className="text-success">New Quote</h5>
        </div>

        <div>
          <p className="m-0">--</p>
          <p className="m-0">Customer</p>
        </div>
        <div>
          <p className="m-0">--</p>
          <p className="m-0">Financed</p>
        </div>
        <div>
          <p className="m-0">--</p>
          <p className="m-0">trade in Credit</p>
        </div>
        <div>
          <p className="m-0">--</p>
          <p className="m-0">Sels Rep</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteHeader;
