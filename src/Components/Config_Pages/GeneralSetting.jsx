import React from "react";

const GeneralSetting = () => {
  return (
    <>
      <div className="ms-4 me-3">
        <h3 className="fw-bold border-bottom border-3 ">
          Super Admin
        </h3>

        <div className="p-4">
          <form class="row g-3 text-uppercase">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Name
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label">
                Email
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label"></label>
              <p className="m-0 pt-3 ms-3">
                User Account found{" "}
                <span className="text-success ms-2">YES</span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="ms-4 me-3">
        <h3 className="fw-bold border-bottom border-3 ">
          Doucument Storage
        </h3>

        <div className="p-4">
          <form class="row g-3 text-uppercase">

            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                One Drive Api Key
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label">
                Top Level Directory
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GeneralSetting;
