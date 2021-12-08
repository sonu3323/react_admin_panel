import { Menu } from "@material-ui/icons";
import React from "react";

const Document = () => {
  return (
    <>
      <h5 className="text-secondary">Order Documents</h5>
      <div className="p-3">
        <div className="p-3 d-flex justify-content-between border-start border-4 border-success shadow">
          <div className="d-flex align-items-center">
            <div className="me-4">
              <Menu />
            </div>
            <div>
              <h5>Sales Order</h5>
              <p className="mx-0">Doc Type</p>
            </div>
          </div>
          <div>
            <h5>8/31/21</h5>
            <p className="mx-0">Doc Created</p>
          </div>
          <div>
            <h5>JSON. R</h5>
            <p className="mx-0">Created By</p>
          </div>
          <div>
            <h5>PDF</h5>
            <p className="mx-0">Status</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
