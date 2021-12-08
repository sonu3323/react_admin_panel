import React,{useState} from "react";

const CutomerModal = () => {

  const initialState = {
      customerName:'',
      customerPhone:'',
      customerEmail:'',
      customerAddress:'',
      customerAddress2:'',
      customerCity:'',
      customerState:'',
      customerZip:'',
      customerNotes:'',
      salesTax:'', //CheckBox state
      customerSalesTaxPercentage:'', 
      customerCountry:'',
      //for co signer Details
      coSignerName:'',
      coSignerPhone:'',
      // for Addition contact Details
      contactInfoName:'',
      contactInfoPhone:'',
      contactInfoEmail:'',
      contactInfoCompany:'',
      contactInfoFax:'',
      
  }

  const [formInput, setFormInput] = useState(initialState);
  // const [addCustomer, setAddCustomer] = useState('');

  const handleChange= e=>{
    const {name,value}=e.target;
    setFormInput({...formInput,[name]:value});
  }

  const handleSubmit=e=>{
    e.preventDefault();
    console.log(formInput);
    
  }
  return (
    <div
      className="modal fade"
      id="customermodal"
      tabIndex="-1"
      aria-labelledby="exampleModalCustomer"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title text-capitalize" id="exampleModalCustomer">
            add  Customer
            </h5>
            <button
              type="button"
              className="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form className="container-fluid mt-0">
              <div className="container-fluid row">
                <div className="mb-3 col-md-4 ">
                  <label htmlFor="customerName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control text-uppercase rounded-pill"
                    id="customerName"
                    placeholder="ABC TRUCKING"
                    name='customerName'
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3  col-md-4">
                  <label htmlFor="customerPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="rounded-pill form-control text-uppercase"
                    id="customerPhone"
                    name='customerPhone'
                    onChange={handleChange}
                    placeholder="(503)555-5555"
                  />
                </div>
                <div className="mb-3  col-md-4">
                  <label htmlFor="customerEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="rounded-pill form-control text-uppercase"
                    id="customerEmail"
                    name='customerEmail'
                    onChange={handleChange}
                    placeholder="ABOSS@ABCTRUCKING.COM"
                  />
                </div>
                <hr />
              </div>
              {/* -------------------------row2 Address------------------- */}
              <div className="container-fluid row">
                {/*---------------------------------- Column 1 Address fields ----------------------------------------- */}
                <div className="mb-3 col-md-6">
                  <div>
                    <label htmlFor="address1" className="form-label">
                      Address1
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="address1"
                      name="customerAddress"
                      onChange={handleChange}
                      placeholder="12345 3RD ST."
                    />
                  </div>
                  <div>
                    <label htmlFor="address2" className="form-label">
                      Address2
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="address2"
                      name="customerAddress2"
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
                        name="customerCity"
                      onChange={handleChange}
                        placeholder="PORT LAND"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="state" className="rounded-pill form-label">
                        State
                      </label>
                      <select
                        className="rounded-pill form-control text-uppercase"
                        name="customerState"
                        onChange={handleChange}
                        id="state"
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
                        name="customerZip"
                        onChange={handleChange}
                        placeholder="97232"
                      />
                    </div>
                  </div>
                </div>
                {/*---------------------------------- Column 2 ----------------------------------------- */}
                <div className="mb-3 col-md-6">
                  <label htmlFor="notes" className="form-label">
                    Notes
                  </label>
                  <textarea
                    className="form-control text-uppercase rounded-lg"
                    id="notes"
                    rows="10"
                    cols="50"
                    name="customerNotes"
                        onChange={handleChange}
                    placeholder="REFERRED BY XYZ TRUCKING"
                  >
                    
                  </textarea>
                </div>
              </div>
              <hr />
              <div className="container-fluid row">
                <div className="mb-3 col-md-6 ">
                  <div className="custom-control custom-checkbox checkbox-lg">
                    <input
                      type="checkbox"
                      style={{padding:'10px'}}
                      className="custom-control-input-group-lg"
                      id="salesTax"
                      name="SalesTax"
                      value="checked"
                      onChange={handleChange}
                    />
                    <label htmlFor="salesTax">
                      <h3> EXEMPT FROM SALES TAX </h3>
                    </label>
                  </div>
                </div>
                <div className="mb-3 col-md-6">
                  <h4 className="text-secondary">Adding of text box</h4>
                </div>
                {/* ------------------------ tax fileds-------------------- */}
                <div className="container-fluid row">
                  <div className="mb-2 col ms-5 ">
                    <label htmlFor="taxPercentage" className="form-label">
                      SALES TAX PERCENT
                    </label>
                    <input
                      type="number"
                      className="rounded-pill form-control text-uppercase"
                      id="taxPercentage"
                      placeholder="6.2"
                      name="customerSalesTaxPercentage"
                        onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 w-auto col ms-5 me-5">
                    <label htmlFor="county" className="form-label">
                      COUNTRY
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="county"
                      placeholder="LAS VEGAS"
                      name="customerCountry"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <hr />
              {/*---------------------------- CoSigner input details------------------------------- */}
              <nav className="navbar navbar-dark bg-primary">
                <div className="container text-white">
                  <h5>Co-Signer</h5>
                </div>
              </nav>
              <div className="container row">
                <div className="mb-2  w-auto col ms-5 ">
                  <label htmlFor="customerName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="rounded-pill form-control text-uppercase"
                    id="customerName"
                    name='coSignerName'
                    onChange={handleChange}
                    placeholder="JOE SMITH"
                  />
                </div>
                <div className="mb-3 w-auto col ms-5">
                  <label htmlFor="customerPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="rounded-pill form-control text-uppercase"
                    id="customerPhone"
                    name='coSignerPhone'
                    onChange={handleChange}
                    placeholder="(555)555-5555X23"
                  />
                </div>
              </div>
              {/* ------------------------Addition contact details ---------------------------------- */}
              <nav className="navbar navbar-dark bg-primary">
                <div className="container text-white">
                  <h5>Additional Contact information</h5>
                </div>
              </nav>
              <form className="container row mt-2">
                {/* ------------------------Row 1---------------------------- */}
                <div className="row">
                  <div className="mb-2 col-md-4">
                    <label htmlFor="customerName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="customerName"
                      name='contactInfoName'
                    onChange={handleChange}
                      placeholder="SUSAN ANDERSON"
                    />
                  </div>
                  <div className="mb-3 col-md-4">
                    <label htmlFor="customerPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="rounded-pill form-control text-uppercase"
                      id="customerPhone"
                      name='contactInfoPhone'
                    onChange={handleChange}
                      placeholder="(555)555-5555"
                    />
                  </div>
                  <div className="mb-3 col-md-4">
                    <label htmlFor="customerEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="rounded-pill form-control text-uppercase"
                      id="customerEmail"
                      name='contactInfoEmail'
                    onChange={handleChange}
                      placeholder="SUSAN@ABCHODLINGS.COM"
                    />
                  </div>
                </div>
                {/* ------------------------Row 2---------------------------- */}
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="customerCompany" className="form-label">
                      Company
                    </label>
                    <input
                      type="text"
                      className="rounded-pill form-control text-uppercase"
                      id="customerCompany"
                      name='contactInfoCompany'
                    onChange={handleChange}
                      placeholder="ABC HOLDINGS"
                    />
                  </div>
                  <div className="mb-2 col-md-4">
                    <label htmlFor="customerFax" className="form-label">
                      Fax
                    </label>
                    <input
                      type="tel"
                      className="rounded-pill form-control text-uppercase"
                      id="customerFax"
                      name='contactInfoFax'
                    onChange={handleChange}
                      placeholder="(555)555-5555"
                    />
                  </div>
                </div>
                <div className="row justify-content-center mt-2">
                  <button type="submit" onClick={handleSubmit} className="w-25 btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </form>
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CutomerModal;
