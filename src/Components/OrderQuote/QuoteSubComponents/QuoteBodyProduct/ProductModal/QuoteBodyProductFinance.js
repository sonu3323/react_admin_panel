import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

function QuoteBodyProductFinance() {
  const [open, setOpen] = useState(false);


  const initialState={
    financingMethod:"",
    payMentMethod:"",
    documents:"",
    status:"",
    lienHolder:"",
    address:"",
    address2:"",
    city:"",
    state:"",
    zip:"",

    // Funding details
    term:"",
    customerRate:'',
    dealerRate:"",
    adminFee:"",
    reserve:"",
    insuranceIncome:""
  }
  const [formInput, setFormInput] = useState(initialState);
  // const [productFinace, setProductFinace] = useState('');

  const handleChange= e=>{
    const {name,value}=e.target;
    setFormInput({...formInput,[name]:value});
  }

  const handleSubmit=e=>{
    e.preventDefault();
    // setProductFinace(formInput);
    console.log(formInput);
  }
  return (
    <>
      <div className="container-flued">
        <div className="row col-12">
          {/* ------------------------------ Row 1: Sidebar ------------------------------------ */}
          <div className="col-3 border-end">
            <ul className="list-group list-group-flush justify-content-lg-between">
              <li className="list-group-item bg-secondary text-white text-center">
                CASH DEAL
              </li>
              <li className="list-group-item text-success fs-5 text-center">
                + ADD LENDER
              </li>
            </ul>
            <hr />
            <ol>
              
              <li className="my-3">- CHASE BANK</li>
              
              <li
                className="my-3 py-3 highlight_sidebar"
                
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                
                aria-expanded={open}
              >
                - WELLS FARGO AUTO
              </li>
              <li className="my-3">- ABC FINANCING</li>
            </ol>
          </div>
          {/* ------------------------------ Row 1: Section ------------------------------------ */}
          <div className="col-9">
            <div className="row">
              <div className="">
                <h6>Financing </h6>
              </div>
              <div className="d-flex mx-4 my-3 text-uppercase">
                <div className="col-5 mx-3 ">
                  <label htmlFor="stock">Financing method</label>
                 <select
                    className="rounded-pill form-control form-select"
                    onChange={handleChange}
                    name="financingMethod"
                    id="financingMethod"
                  >
                    <option value="state1">CASH W/LIEN</option>
                    <option value="State2">OPTION2</option>
                    <option value="State3">OPTION3</option>
                  </select> 
                </div>
                <div className="col-5 mx-3">
                  <label htmlFor="type">Lien holder</label>
                  <input
                  onChange={handleChange}
                  name="lienHolder"
                    type="text"
                    className="form-control rounded-pill mt-1"
                    placeholder="WELLS FARGO AUTO"
                  />
                </div>
              </div>
              <div className="d-flex mx-4 my-3 text-uppercase">
                <div className="col-5 mx-3">
                  <label htmlFor="stock">Payment method</label>
                  <input
                    type="text"
                    onChange={handleChange}
                  name="payMentMethod"
                    className="form-control rounded-pill mt-1"
                    placeholder="CHECK"
                  />
                </div>
                <div className="col-5 mx-3">
                  <label htmlFor="type">Address</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name='address'
                    className="form-control rounded-pill mt-1"
                    placeholder="1234 MAIN ST."
                  />
                </div>
              </div>
              <div className="d-flex mx-4 my-3 text-uppercase">
                <div className="col-5 mx-3">
                  <label htmlFor="stock">Document #</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name='documents'
                    className="form-control rounded-pill mt-1"
                    placeholder="123456789"
                  />
                </div>
                <div className="col-5 mx-3">
                  <label htmlFor="type">Address Line 2</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name='address2'
                    className="form-control rounded-pill mt-1"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="d-flex mx-4 my-3 text-uppercase">
                <div className="col-5 mx-3">
                  <label htmlFor="status">Status</label>
                  {/* <input
                    type="text"
                    className="form-control rounded-pill mt-1"
                    placeholder="$10,000"
                  /> */}
                  <select
                    className="rounded-pill form-control form-select"
                    name="status"
                    onChange={handleChange}
                    id="status"
                  >
                    <option value="state1">PENDING</option>
                    <option value="State2">OPTION1</option>
                    <option value="State3">OPTION2</option>
                  </select>
                </div>
                <div className="col-5 mx-2 d-flex mb-5">
                  <div className="d-flex mx-2 city_state_field">
                    <div className=" mt-4">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="city"
                        className="form-control rounded-pill mt-1"
                        placeholder="PORTLAND"
                      />
                    </div>
                    <div className="ms-3 mt-3 col-6">
                      <label htmlFor="state" className="rounded-pill form-label">
                        State
                      </label>
                      <select
                        className="rounded-pill form-control form-select"
                        name="state"
                        onChange={handleChange}
                        id="state"
                      >
                        <option value="OREGON">OREGON</option>
                        <option value="State2">STATE1</option>
                        <option value="State3">STATE2</option>
                        <option value="State4">STATE3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mx-3 mt-0 text-uppercase">
                <div className="col-5 mx-3"></div>
                <div className="col-5 mx-3 ms-4 zip_field">
                  <div className="col-5">
                    <label htmlFor="type">Zip</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name='zip'
                      className="form-control rounded-pill mt-1"
                      placeholder="97232"
                    />
                  </div>
                </div>
              </div>
              <hr className="my-3 mx-3" />
              <div className="d-flex mb-3 mt-4 text-capitalize">
                <div className="col-4 mx-3">
                  <h4>$1,707,653.80</h4>
                  <h6 className="text-secondary">product subtotal</h6>
                </div>
                <div className="col-4 mx-3">
                  <h4>$100,000.00</h4>
                  <h6 className="text-secondary">Downpayment collected</h6>
                </div>
                <div className="col-4 mx-3">
                  <h4>$1,607,653.80</h4>
                  <h6 className="text-secondary">balance due t delivery</h6>
                </div>
              </div>
              {/* Collapse Text Section */}
              <Collapse in={open}>
                <div className="mx-1" id="example-collapse-text">
                  <hr />
                  <h6>Funding Details</h6>
                  <div className="d-flex mx-4 my-3 text-uppercase">
                    <div className="col-5 mx-3">
                      <label htmlFor="stock">Term</label>
                      <input
                      onChange={handleChange}
                      name='term'
                        type="text"
                        className="form-control rounded-pill mt-1"
                        placeholder="72 MONTHS"
                      />
                    </div>
                    <div className="col-5 mx-3 text-uppercase">
                      <label htmlFor="type">Admin Fee</label>
                      <input
                      onChange={handleChange}
                      name='adminFee'
                        type="text"
                        className="form-control rounded-pill mt-1"
                        placeholder="$100.00"
                      />
                    </div>
                  </div>
                  <div className="d-flex mx-4 my-3 text-uppercase">
                    <div className="col-5 mx-3">
                      <label htmlFor="stock">Customer Rate</label>
                      <input
                      onChange={handleChange}
                      name='customerRate'
                        type="text"
                        className="form-control rounded-pill mt-1"
                        placeholder="6%"
                      />
                    </div>
                    <div className="col-5 mx-3 text-uppercase">
                      <label htmlFor="type">Reserve</label>
                      <input
                      onChange={handleChange}
                      name="reserve"
                        type="text"
                        className="form-control rounded-pill mt-1"
                        placeholder="$100.00"
                      />
                    </div>
                  </div>
                  <div className="d-flex mx-4 my-3 text-uppercase">
                    <div className="col-5 mx-3">
                      <label htmlFor="stock">Dealer Rate</label>
                      <input
                      onChange={handleChange}
                      name="dealerRate"
                        type="text"
                        className="form-control rounded-pill mt-1"
                        placeholder="3%"
                      />
                    </div>
                    <div className="col-5 mx-3 text-uppercase">
                      <label htmlFor="type">Insurance Income</label>
                      <input
                      onChange={handleChange}
                      name="insuranceIncome"
                        type="text"
                        className="form-control rounded-pill mt-1"
                        placeholder="$1,500.00"
                      />
                    </div>
                  </div>
                  <hr className="my-5 mx-3" />
                  <div className="d-flex mb-3">
                    <div className="col-4 mx-3 text-capitalize">
                      <h4>$1,700</h4>
                      <h6 className="text-secondary">Total F & I</h6>
                    </div>
                    <div className="col-4 mx-3 text-capitalize">
                      <h4>$1,700,653.80</h4>
                      <h6 className="text-secondary">Funded</h6>
                    </div>
                    <div className="col-4 mx-3 text-capitalize">
                      <h4>$1,702,353.80</h4>
                      <h6 className="text-secondary">Total Wire Expected</h6>
                    </div>
                  </div>
                </div>
              </Collapse>
              {/* End Collapse Text Section */}
            </div>
            <hr className="my-3 justify-content-between" />
            <div className="d-flex text-center">
              <div className="text-center col-4">
                <button className="btn btn-secondary text-uppercase">close</button>
              </div>
              <div className="text-center col-4 ">
                <button onClick={handleSubmit} className="btn btn-primary text-uppercase">Save</button>
              </div>
              <div className="text-center col-4 text-uppercase">
                <h6 className="text-danger mt-2">Delete Lendor</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteBodyProductFinance;
