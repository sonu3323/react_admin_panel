import { Menu } from "@material-ui/icons";
import React from "react";

const Document = () => {
  return (
    <>
      <h5 className="text-secondary text-uppercase">Order Documents</h5>
      <div className="p-3">
        <div className="p-3 d-flex justify-content-between border-start border-4 border-success shadow">
          <div className="d-flex align-items-center">
            <div className="me-4">
              <Menu />
            </div>
            <div>
              <h5 className="text-uppercase">Sales Order</h5>
              <p className="mx-0 text-capitalize">Doc Type</p>
            </div>
          </div>
          <div>
            <h5 className="text-uppercase">8/31/21</h5>
            <p className="mx-0 text-capitalize">date Created</p>
          </div>
          <div>
            <h5 className="text-uppercase">JASON. R</h5>
            <p className="mx-0 text-capitalize">Created By</p>
          </div>
          <div>
            <h5 className="text-uppercase">PDF</h5>
            <p className="mx-0 text-capitalize">Status</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
