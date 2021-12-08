import React from "react";

const Cusomter = () => {
  return (
    <>
      <div className="d-flex p-2 justify-content-between">
        <div>
          <h5>ABC TRUCKING</h5>
          <p className="mx-0 text-secondary">Name</p>
        </div>

        <div>
          <h5>(503) 971-1234</h5>
          <p className="mx-0 text-secondary">Phone</p>
        </div>

        <div>
          <h5>EXAMPLE@ABCTRUCKING.COM</h5>
          <p className="mx-0 text-secondary">Email</p>
        </div>
      </div>

      <div className="bg-light d-flex justify-content-between">
        <div className="p-2">
          <h5>BILLING ADDRESS</h5>
          <h6 className="mx-0">123 main st.</h6>
          <h6 className="mx-0"> FRESNO, CA98234998</h6>
        </div>

        <div className="p-2 me-5">
          <h5>DELIVERY ADDRESS</h5>
          <h6 className="mx-0">123 main st.</h6>
          <h6 className="mx-0"> FRESNO, CA98234998</h6>
        </div>
      </div>

      <div className="p-2 justify-content-between">
        <h5>CO-SINGER</h5>
        <div className="d-flex justify-content-between">
          <div>
            <h5>-----</h5>
            <p className="mx-0 text-secondary">Name</p>
          </div>

          <div>
            <h5>----</h5>
            <p className="mx-0 text-secondary">Phone</p>
          </div>

          <div className="me-5">
            <h5>-----</h5>
            <p className="mx-0 text-secondary">Email</p>
          </div>
        </div>
      </div>

      <div className="p-2 bg-light justify-content-between">
        <h5>ADDITIONAL CONTACT</h5>
        <div className="d-flex justify-content-between">
          <div>
            <h5>KEN OBI</h5>
            <p className="mx-0 text-secondary">Name</p>
          </div>

          <div>
            <h5>ABC TRUCKING</h5>
            <p className="mx-0 text-secondary">Phone</p>
          </div>

          <div className="me-5">
            <h5>EXAMPLE@GAMIL.COM</h5>
            <p className="mx-0 text-secondary">Email</p>
          </div>
        </div>

        <div className="d-flex p-3 justify-content-between">
          <div>
            <h6 className="mx-0">123 main st.</h6>
            <h6 className="mx-0"> FRESNO, CA98234998</h6>
            <p className="mx-0 text-secondary">ADDRESS</p>
          </div>

          <div>
            <h5>(503) 971-1234</h5>
            <p className="mx-0 text-secondary">Phone</p>
          </div>

          <div>
            <h5>(503) 971-1234</h5>
            <p className="mx-0 text-secondary">Phone</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <h5>TAX EXEMPTION</h5>
            <div className="p-2 d-flex justify-content-between">
              <div>
                <h5>YES</h5>
                <p className="mx-0 text-secondary">Exampt</p>
              </div>

              <div>
                <h5>1234567</h5>
                <p className="mx-0 text-secondary">ICC Number</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cusomter;
