import React, { useState } from "react";

const DetailsModel = () => {
  const initialState = {
    orderDate: "",
    deliveryDate: "",
    status: "",
    salesRep: "",
    branch: "",
    manager: "",
    specialInstructions: "",
  };
  const [state, setstate] = useState(initialState);
  // const [formInput, setFormInput] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormInput(state);
    console.log(state);
  };
  return (
    <div>
      <div
        className="modal fade"
        id="detailsexample"
        tabIndex="-1"
        aria-labelledby="examplemodeldetails"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5
                className="modal-title textUppercase"
                id="exampledetailsmodel"
              >
                UPDATE ORDER DETAILS
              </h5>
              <button
                type="button"
                className="btn-close bg-white "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* MODLE BODY START HERE */}
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="fw-bold text-secondary my-1 textCapitalize">
                      <label htmlFor="stock">ORDER DATE</label>
                      <input
                        type="text"
                        className="form-control rounded-pill text-uppercase mt-1"
                        placeholder="10/1/2021"
                        name="orderDate"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="fw-bold text-secondary my-3 ">
                      <label htmlFor="stock">DELIVERY DATE</label>
                      <input
                        type="text"
                        className="form-control rounded-pill text-uppercase mt-1"
                        placeholder="10/1/2022"
                        name="deliveryDate"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="fw-bold text-secondary my-1 ">
                      <label htmlFor="stock">STATUS</label>
                      <input
                        type="text"
                        className="form-control rounded-pill mt-1"
                        placeholder="QUOTE"
                        name="status"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="fw-bold text-secondary my-3 ">
                      <label htmlFor="stock">SALES REP</label>
                      <input
                        type="text"
                        className="form-control rounded-pill mt-1 text-uppercase"
                        placeholder="JASON R.-E1234"
                        name="salesRep"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="fw-bold text-secondary my-1 ">
                      <label htmlFor="stock">BRANCH</label>
                      <input
                        type="text"
                        className="form-control rounded-pill mt-1 text-uppercase"
                        placeholder="PDX"
                        name="branch"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="fw-bold text-secondary my-3 ">
                      <label htmlFor="stock">MANAGER</label>
                      <input
                        type="text"
                        className="form-control rounded-pill mt-1 text-uppercase"
                        placeholder="SUSEN s.-E1235"
                        name="manager"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 fw-bold text-secondary px-4">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    SPECIAL INSTRUCTIONS
                  </label>
                  <textarea
                    className="form-control rounded text-uppercase"
                    id="exampleFormControlTextarea1"
                    placeholder="DELEIVER TO TRANSPORT DEPARTMENT SUPERVISOR"
                    rows="4"
                    name="specialInstructions"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* MODLE BODY END HERE */}

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary mx-auto"
                // data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModel;
