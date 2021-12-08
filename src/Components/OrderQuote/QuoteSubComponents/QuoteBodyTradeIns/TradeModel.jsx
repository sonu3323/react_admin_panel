import React, { useState } from "react";

const TradeModel = () => {
  const initialState = {
    vin: "",
    year: "",
    vechiclePlate: "",
    make: "",
    serial: "",
    model: "",
    description: "",
    payOffDetailBalance: "",
    payOffDetailGoodUntil: "",
    payOffDetailBalanceOwedTo: "",
    payOffDetailAddress: "",
    payOffDetailAddressLine2: "",
    payOffDetailCity: "",
    payOffDetailState: "",
    payOffDetailZip: "",
    tradeInCreditAllowance: "",
    tradeInCreditCashRefundCustomer: "",
    tradeInCreditFinalTradeAllowance: "",
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
    <div
      className="modal fade"
      id="trademodal"
      tabIndex="-1"
      aria-labelledby="exampletrademodal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl ">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title textCapitalize" id="exampletrademodal">
              Add Trade In
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
            {/* <div className="container ">
              <h5>Details</h5>

              <div className="row px-3">
                <div className="col">
                  <div className="fw-bold text-secondary my-1 ">
                    <label htmlFor="stock">STATUS</label>
                    <input
                    
                      type="text"
                      className="form-control rounded-pill text-uppercase mt-1"
                      placeholder="Pending"
                    />
                  </div>
                  <div className="fw-bold text-secondary my-1 ">
                    <label htmlFor="stock">STATUS</label>
                    <input
                    
                      type="text"
                      className="form-control rounded-pill text-uppercase mt-1"
                      placeholder="Pending"
                    />
                  </div>
                  <div className="fw-bold text-secondary my-1 ">
                    <label htmlFor="stock">STATUS</label>
                    <input
                    
                      type="text"
                      className="form-control rounded-pill text-uppercase mt-1"
                      placeholder="Pending"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="fw-bold text-secondary my-1 ">
                    <label htmlFor="stock">STATUS</label>
                    <input
                    
                      type="text"
                      className="form-control rounded-pill text-uppercase mt-1"
                      placeholder="Pending"
                    />
                  </div>
                  <div className="fw-bold text-secondary my-1 ">
                    <label htmlFor="stock">STATUS</label>
                    <input
                    
                      type="text"
                      className="form-control rounded-pill text-uppercase mt-1"
                      placeholder="Pending"
                    />
                  </div>
                  <div className="fw-bold text-secondary my-1 ">
                    <label htmlFor="stock">STATUS</label>
                    <input
                    
                      type="text"
                      className="form-control rounded-pill text-uppercase mt-1"
                      placeholder="Pending"
                    />
                  </div>
                </div>
              </div>

          </div> */}

            <form>
              <div className="container row mt-2">
                <div className="mb-2 col ms-5 ">
                  <label htmlFor="vin" className="form-label">
                    VIN
                  </label>
                  <input
                    type="text"
                    className="rounded-pill form-control text-uppercase"
                    id="vin"
                    placeholder="123456789"
                    name="vin"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3 w-auto col ms-5 me-5">
                  <label htmlFor="customerPhone" className="form-label">
                    YEAR
                  </label>
                  <input
                    type="number"
                    className="rounded-pill form-control text-uppercase"
                    id="customerPhone"
                    placeholder="2020"
                    name="year"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* ---------------------row 2------------------- */}
              <div className="container row mt-2">
                <div className="mb-2 col ms-5 ">
                  <label htmlFor="vechiclePlate" className="form-label">
                    VECHICLE PLATE
                  </label>
                  <input
                    type="text"
                    className="rounded-pill form-control text-uppercase"
                    id="vechiclePlate"
                    placeholder="ERT154"
                    name="vechiclePlate"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3 w-auto col ms-5 me-5">
                  <label htmlFor="make" className="form-label">
                    MAKE
                  </label>
                  <input
                    type="tel"
                    className="rounded-pill form-control text-uppercase"
                    id="make"
                    placeholder="VOLVO"
                    name="make"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* ---------------------row 3------------------- */}
              <div className="container row mt-2">
                <div className="mb-2 col ms-5 ">
                  <label htmlFor="serial" className="form-label">
                    SERIAL #
                  </label>
                  <input
                    type="number"
                    className="rounded-pill form-control text-uppercase"
                    id="serial"
                    placeholder="123456789"
                    name="serial"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3 w-auto col ms-5 me-5">
                  <label htmlFor="model" className="form-label">
                    MODEL
                  </label>
                  <input
                    type="tel"
                    className="rounded-pill form-control text-uppercase"
                    id="model"
                    placeholder="VVT"
                    name="model"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="container row mt-2">
                <label htmlFor="serial" className="form-label">
                  DESCRIPTION
                </label>
                <textarea
                  className="form-control rounded-lg text-uppercase"
                  placeholder="1 OWNER"
                  id="notes"
                  rows="5"
                  cols="50"
                  name="description"
                  onChange={handleChange}
                />
              </div>
              <hr />

              <div className="container row mt-2">
                {/*---------------------------- pay oFF details------------------------------- */}
                <div className="mb-2 col ms-5 ">
                  <h4>PayOFF Details</h4>
                  <div className="mb-2">
                    <label
                      htmlFor="balanceOwed"
                      className="form-label text-uppercase"
                    >
                      BALANCE OWED owed
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="balanceOwed"
                      placeholder="$20,0000.00"
                      name="payOffDetailBalance"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="goodUntil" className="form-label">
                      GOOD UNTIL
                    </label>
                    <input
                      type="date"
                      className="rounded-pill form-control"
                      id="GOOD UNTIL"
                      name="payOffDetailGoodUntil"
                      onChange={handleChange}
                    />
                  </div>
                  <hr />
                  <div className="mb-2">
                    <label htmlFor="balanceOwed" className="form-label">
                      BALANCE OWED TO
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="balanceOwed"
                      placeholder="CHASE BANK"
                      name="payOffDetailBalanceOwedTo"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="address1" className="form-label">
                      ADDRESS
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="address1"
                      placeholder="1234 MAIN ST."
                      name="payOffDetailAddress"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="address2" className="form-label">
                      ADDRESS LINE 2
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="address2"
                      name="payOffDetailAddressLine2"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="city" className="rounded-pill form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="rounded-pill form-control text-uppercase"
                        id="city"
                        placeholder="PORTLAND"
                        name="payOffDetailCity"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3 col-md-6">
                      <label htmlFor="state" className="rounded-pill form-label">
                        State
                      </label>
                      <select
                        className="rounded-pill form-control"
                        name="payOffDetailState"
                        id="state"
                        onChange={handleChange}
                      >
                        <option value="OREGON">OREGON</option>
                        <option value="OREGON">OREGON</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="rounded-pill form-control text-uppercase"
                        id="zip"
                        placeholder="97232-1234"
                        name="payOffDetailZip"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                {/* ---------------------------------TRADE IN CREDITS---------------------------------------- */}
                <div className="mb-3 w-auto col ms-5 me-5">
                  <h4>Trade In CREDITS</h4>
                  <div className="mb-2">
                    <label htmlFor="tradeAllowance" className="form-label">
                      TRADE IN ALLOWANCE(AT TERMS)
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="tradeAllowance"
                      placeholder="$40,0000.00"
                      name="tradeInCreditAllowance"
                      onChange={handleChange}
                    />
                  </div>
                  <hr />
                  <div className="mb-2">
                    <label htmlFor="cashRefund" className="form-label">
                      CASH REFUND TO CUSTOMERS
                    </label>
                    <input
                      type="number"
                      className="rounded-pill form-control text-uppercase"
                      id="cashRefund"
                      placeholder="98000.00"
                      name="tradeInCreditCashRefundCustomer"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="finalAllowance" className="form-label">
                      FINAL / NET TRADE IN ALLOWANCE
                    </label>
                    <input
                      type="number"
                      className="rounded-pill form-control text-uppercase"
                      id="cashRefund"
                      placeholder="$300,000.00"
                      name="tradeInCreditFinalTradeAllowance"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="row justify-content-center mt-2">
                <button type="button" className="w-25 btn btn-primary">
                  Submit
                </button>
              </div> */}
            </form>
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
  );
};

export default TradeModel;
