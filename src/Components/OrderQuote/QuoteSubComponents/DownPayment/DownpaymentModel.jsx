import React, { useState } from "react";
const DownpaymentModel = () => {
  const initialState = {
    status: "",
    amount: "",
    paymentMethod: "",
    document: "",
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
    console.log(state);
  };
  return (
    <div
      className="modal fade"
      id="downpaymentmodel"
      tabIndex="-1"
      aria-labelledby="exampledownpaymentmodel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5
              className="modal-title text-capitalize"
              id="exampledownpaymentmodel"
            >
              Add Down payment
            </h5>
            <button
              type="button"
              className="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* MODLE BODY START HERE */}
          <div className="modal-body">
            <div className="px-3 text-uppercase">
              <div className="fw-bold text-secondary my-1 ">
                <label htmlFor="stock">STATUS</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="Pending"
                  name="status"
                  onChange={handleChange}
                />
              </div>
              <div className="fw-bold text-secondary my-1 ">
                <label htmlFor="stock">AMOUNT</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="$30,000"
                  name="amount"
                  onChange={handleChange}
                />
              </div>
              <div className="fw-bold text-secondary my-1 ">
                <label htmlFor="stock">PAYMENT METHOD</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="Check"
                  name="paymentMethod"
                  onChange={handleChange}
                />
              </div>
              <div className="fw-bold text-secondary my-1 ">
                <label htmlFor="type">DOUCUMENT #</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="123456789"
                  name="document"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* MODLE BODY END HERE */}

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary me-auto"
              data-bs-dismiss="modal"
            >
              CENCEL
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownpaymentModel;
