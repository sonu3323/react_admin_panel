import React,{ useState} from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import RemoveIcon from "@material-ui/icons/Remove";
function QuoteBodyModalProductTaxFee() {
  const initialState={
    salesTax:'',
    salesTaxCounty:'',
    tireCredit:'',
    cutTax:'',
    luxuryTax:'',
    etlFee:'',
    licenceFee:'',
    caDMVDocFees:'',
    DocumentationFees:'',
    OutStateDeliveryFees:'',
    additionalTax:'',
    Description:'',
  }

  const [formInput, setFormInput] = useState(initialState);

  const handleChange= e=>{
    const {name,value}=e.target;
    setFormInput({...formInput,[name]:value});
  }

  const handleSubmit=e=>{
    e.preventDefault();
    // setTaxFee(formInput);
    console.log(formInput);
  }
  return (
    <>
      <form>
        <div className="container">
          {/* ------------------------------ Row 1: Taxes & Fee's ------------------------------------ */}
          <div className="row border-bottom mb-3 text-capitalize">
            <div className="d-flex">
              <h5>Taxes & Fee's</h5>
            </div>
          </div>
          {/* ------------------------------ Row 2: SALES TAX ------------------------------------ */}
          <div className="row">
            <h6 className="text-uppercase">SALES TAX</h6>
            <div className="col-2 mx-3 mt-4 bg-light my-2">
              <h6>$1,429,000.00</h6>
              <h6 className="text-secondary text-uppercase">Sales Price</h6>
              <h6 className="text-secondary text-uppercase">Includes Upgrade</h6>
            </div>
            <div className="col-1 mx-2 mt-5">
              <CloseIcon />
            </div>
            <div className="col-3 mt-0 mt-4 text-uppercase">
              <h6>Sales Tax %</h6>
              <input
                type="text"
                onChange={handleChange}
                name="salesTax"
                className="form-control rounded-pill"
                placeholder="6.67%"
              />
            </div>
            <div className=" col-2 mt-5 ms-2">
              <ArrowForwardIcon />
            </div>
            <div className="col-3 mx-2 mt-4 ">
              <h6>$95,314.30</h6>
              <h6 className="text-secondary text-uppercase">Sales Tax</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mx-2 mt-3 text-uppercase">
              <h6>Sales tax County</h6>
              <input
                type="text"
                className="form-control rounded-pill mt-1 text-uppercase"
                onChange={handleChange}
                name="salesTaxCounty"
                placeholder="washington"
              />
            </div>
          </div>
          <hr className="my-3" />
          {/* ------------------------------ Row 3: FET ------------------------------------ */}
          <div className="row text-uppercase">
            <h6>FET</h6>
            <div className="col-2 mx-3 bg-light my-2">
              <h6>$1,429,000.00</h6>
              <h6 className="text-secondary text-uppercase">Sales Price</h6>
            </div>
            <div className="col-1">
              <CloseIcon />
            </div>
            <div className="col-1 mt-1">
              <h6>12.55%</h6>
            </div>
            <div className="col-1 ">
              <RemoveIcon />
            </div>
            <div className="col-2 text-uppercase">
              <h6>tire credit</h6>
              <input
                type="text"
                onChange={handleChange}
                name="tireCredit"
                className="form-control rounded-pill text-uppercase"
                placeholder="$1,000.00"
              />
            </div>
            <div className=" col-1 ">
              <ArrowForwardIcon />
            </div>
            <div className="col-2 ">
              <h6>$178,339.50</h6>
              <h6 className="text-secondary text-uppercase">Fet</h6>
            </div>
          </div>
          <hr className="my-3" />
          {/* ------------------------------ Row 4: CAT TAX ------------------------------------ */}
          <div className="row text-uppercase">
            <h6>CAT TAX (OREGON)</h6>
            <div className="col-2 mx-3 mt-4 bg-light my-2 ">
              <h6>$1,429,000.00</h6>
              <h6 className="text-secondary text-uppercase">Sales Price</h6>
            </div>
            <div className="col-1 mx-2 mt-5">
              <CloseIcon />
            </div>
            <div className=" col-3 mt-0 mt-4 text-uppercase">
              <h6>Cut Tax %</h6>
              <input
                type="text"
                onChange={handleChange}
                name="cutTax"
                className="form-control rounded-pill text-uppercase"
                placeholder="3%"
              />
            </div>
            <div className=" col-2 mt-5 ms-2">
              <ArrowForwardIcon />
            </div>
            <div className="col-3 mx-2 mt-4 ">
              <h6>$42,870.00</h6>
              <h6 className="text-secondary text-uppercase">Cut Tax</h6>
            </div>
          </div>
          <hr className="my-3" />
          {/* ------------------------------ Row 5 ------------------------------------ */}
          <div className="row text-uppercase">
            <h6>LUXURY TAX (OREGON)</h6>
            <h4 className="text-center text-success text-capitalize">
              * Unit Under 75,000 Miles *
            </h4>
            <div className="col-2 mx-3 mt-4 bg-light my-2">
              <h6>$1,429,000.00</h6>
              <h6 className="text-secondary text-uppercase">Sales Price</h6>
            </div>
            <div className="col-1 mx-2 mt-5">
              <CloseIcon />
            </div>
            <div className=" col-3 mt-0 mt-4 text-uppercase">
              <h6>Luxury Tax</h6>
              <input
                type="text"
                onChange={handleChange}
                name="luxuryTax"
                className="form-control rounded-pill text-uppercase"
                placeholder="0.5%"
              />
            </div>
            <div className=" col-2 mt-5 ms-2">
              <ArrowForwardIcon />
            </div>
            <div className="col-3 mx-2 mt-4 ">
              <h6>$7,145.00</h6>
              <h6 className="text-secondary">Cut Tax</h6>
            </div>
          </div>
          <hr className="my-3" />
          {/* ------------------------------ Row 6 ------------------------------------ */}
          <div className="row text-uppercase">
            <h6>Additional fee's</h6>
            <div className="d-flex mb-3 text-uppercase">
              <div className="col-4 mx-3">
                <label htmlFor="stock">ETL Fee</label>
                <input
                onChange={handleChange}
                name='etlFee'
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="$1,000.00"
                />
              </div>
              <div className="col-4 mx-3">
                <label htmlFor="type">Documentation Fee's</label>
                <input
                onChange={handleChange}
                name='DocumentationFees'
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="$1,000.00"
                />
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="col-4 mx-3">
                <label htmlFor="stock">Licence / Title Fees</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="licenceFee"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="$1,000.00"
                />
              </div>
              <div className="col-4 mx-3">
                <label htmlFor="type">Out of State Delivery Fee's</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name='OutStateDeliveryFees'
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="$1,000.00"
                />
              </div>
              <div className="col-4 mx-3">
                <label htmlFor="type" className="ms-3">
                  $5,000.00
                </label>
                <h6 className="ms-3 mt-2">Subtotal</h6>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="col-4 mx-3">
                <label htmlFor="stock">CA Dmv Doc Fees</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name='caDMVDocFees'
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="$1,000.00"
                />
              </div>
              <div className="col-4 mx-3">
                <label htmlFor="type">Addtional Tax</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name='additionalTax'
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="$1,000.00"
                />
              </div>
            </div>
            <div className="d-flex mb-3 text-uppercase">
              <div className="col-12 mx-3">
                <label htmlFor="stock">Description / Notes</label>
                <textarea
                onChange={handleChange}
                name='Description'
                  className="form-control rounded-lg mt-1 text-uppercase"
                  rows="5"
                  placeholder="standard trailor package"
                ></textarea>
              </div>
            </div>
          </div>
          <hr my-3 />
          {/* ------------------------------ Row 6 ------------------------------------ */}
          <div className="row">
            <div className="d-flex mb-3">
              <div className="col-4 mx-3">
                <h4>$1,429,000.00</h4>
                <h6 className="text-secondary text-capitalize">Sales Price Total</h6>
              </div>
              <div className="col-4 mx-3">
                <h4>$328,668.80</h4>
                <h6 className="text-secondary text-capitalize">Tax & Fee Total</h6>
              </div>
              <div className="col-4 mx-3">
                <h4>$1,757,668.80</h4>
                <h6 className="text-secondary text-capitalize">Product Subtotal</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button onClick={handleSubmit} className="btn btn-primary text-uppercase">Save</button>
        </div>
      </form>
    </>
  );
}

export default QuoteBodyModalProductTaxFee;
