import React from "react";

const Details = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="text-success">Quote</h5>
                <p className="mx-0">Status</p>
              </div>
              <div>
                <h5 className="">PDX</h5>
                <p className="mx-0">Branch</p>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-1 ms-1">
              <div>
                <h5 className="">8/1/2021</h5>
                <p className="mx-0">Order Date</p>
              </div>
              <div>
                <h5 className="">---</h5>
                <p className="mx-0">Delivery Date</p>
              </div>
            </div>
          </div>

          <div className="col-6 d-flex justify-content-around ">
            <div>
              <h5 className="">JSON R.</h5>
              <p className="mx-0">Sales Rep</p>
            </div>
            <div>
              <h5 className="">----</h5>
              <p className="mx-0">Manager</p>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Special instructions"
            rows="2"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Details;
