import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
function QuoteBodyModalProductDetail() {
  const initialState = {
    productDetailStock: "",
    productDetailType: "",
    productDetailYear: "",
    productDetailVin: "",
    productDetailMake: "",
    productDetailModel: "",
    productDetailStateRegistered: "",
    productDetailSalePrice: "",
    productDetailWarrantyPrice: "",
    productDetailWarrantyDescription: "",
    productDetailProvidedBy: "",
    productDetailAmount: "",
    productDetailProductNote: "",
    depositeAmount: "",
    depositeStatus: "",
    depositePaymentMethod: "",
    depositeDocument: "",
    depositeNotes: "",
    depositeApplyToPuchaseAmount: "",
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
    <>
      <form>
        <div className="container">
          {/* ------------------------------ Row 1 ------------------------------------ */}
          <div className="row border-bottom">
            <div className="d-flex text-capitalize">
              <div className="">
                <h5>Product Detail</h5>
              </div>
              <div className="mx-2">
                <SearchIcon />
              </div>
              <div className="">available inventory</div>
            </div>
          </div>
          {/* ------------------------------ Row 2 ------------------------------------ */}
          <div className="row">
            <div className="d-flex mb-3 text-uppercase">
              <div className="col-5 mx-3">
                <label htmlFor="stock">Stock #</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="M2021AZ64"
                  name="productDetailStock"
                  onChange={handleChange}
                />
              </div>
              <div className=" mx-3">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="New"
                  name="productDetailType"
                  onChange={handleChange}
                />
              </div>
              <div className=" mx-3">
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="2021"
                  name="productDetailYear"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-flex mb-3 text-uppercase">
              <div className="col-5 mx-3">
                <label htmlFor="stock">Vin</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  name="productDetailVin"
                  onChange={handleChange}
                />
              </div>
              <div className=" mx-3">
                <label htmlFor="type">Make</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="Make"
                  name="productDetailMake"
                  onChange={handleChange}
                />
              </div>
              <div className=" mx-3">
                <label htmlFor="year">Model</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="AZ64"
                  name="productDetailModel"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-flex mb-3 text-uppercase">
              <div className="col-5 mx-3">
                <label htmlFor="stock">State Registered</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="Oregon"
                  name="productDetailStateRegistered"
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mx-3">
                <label htmlFor="type">Sale Price</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1"
                  placeholder="$1,000,000.00"
                  name="productDetailSalePrice"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <hr className="my-5" />
          {/* ------------------------------ Row 3 ------------------------------------ */}
          <div className="row">
            <div className="d-flex mb-3">
              <div className="col-5 mt-4 text-capitalize">
                <label htmlFor="stock">
                  <CancelPresentationIcon className="mx-2" />
                </label>
                <label className="text-secondary">Extended Warranty</label>
              </div>
              <div className="col-6 mx-3 text-uppercase">
                <label htmlFor="type">Warranty Price</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="$1,000.00"
                  name="productDetailWarrantyPrice"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex mb-3 text-uppercase">
              <div className="col-12 mx-3">
                <label htmlFor="stock">Warranty description</label>
                <textarea
                  className="form-control col-10 rounded-lg mt-1 text-uppercase"
                  rows="5"
                  placeholder="make bumper to bumper w/trailor coverage"
                  name="productDetailWarrantyDescription"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <hr className="my-3" />
          {/* ------------------------------ Row 4 ------------------------------------ */}
          <div className="row">
            <div className=" mb-3">
              <div className="col-5 mt-4 text-capitalize">
                <label htmlFor="stock">
                  <CancelPresentationIcon className="me-2" />
                </label>
                <label className="text-secondary">GAP Insurance</label>
              </div>
              <div className="col-5 mt-2 text-uppercase">
                <label htmlFor="stock">Provided By</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="chase Bank"
                  name="productDetailProvidedBy"
                  onChange={handleChange}
                />
              </div>
              <div className="col-5 mt-2">
                <label htmlFor="stock">Amount</label>
                <input
                  type="text"
                  className="form-control rounded-pill mt-1 text-uppercase"
                  placeholder="$1,000.00"
                  name="productDetailAmount"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <hr className="my-3" />
          {/* ------------------------------ Row 5 ------------------------------------ */}
          <div className="row">
            <div className="mb-3 text-uppercase">
              <div className="col-12">
                <label htmlFor="stock">Products Notes</label>
                <textarea
                  className="form-control col-10 rounded-lg mt-1 text-uppercase"
                  rows="5"
                  placeholder="new unit services"
                  name="productDetailProductNote"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* <hr className="my-3" /> */}
        {/* ------------------------------ Row 6 ------------------------------------ */}
        {/* <div className="row">
          <div className="col-12 bg-primary py-3 text-white">
            <h6>Addition 1</h6>
          </div>
        </div> */}

        {/* <hr className="my-3" /> */}
        {/* ------------------------------ Row 7 ------------------------------------ */}
        {/* <div className="row">
          <div className="col-12 bg-primary py-3 text-white">
            <h6>Addition 2</h6>
          </div>
        </div> */}

        {/* <hr className="my-3" /> */}
        {/* ------------------------------ Row 8 ------------------------------------ */}
        {/* <div className="row">
          <div className="col-12 bg-primary py-3 text-white">
            <h6>Upgrade 1</h6>
          </div>
        </div> */}

        <hr className="my-3" />
        {/* ------------------------------ Row 9 ------------------------------------ */}
        <div className="row">
          <div className="col-12 bg-primary py-3 text-white">
            <h6>Deposite </h6>
          </div>
          <div className="d-flex mx-5 my-3 text-uppercase">
            <div className="col-5 mx-3">
              <label htmlFor="stock">Amount</label>
              <input
                type="text"
                className="form-control rounded-pill mt-1 text-uppercase"
                placeholder="$10,000"
                name="depositeAmount"
                onChange={handleChange}
              />
            </div>
            <div className="col-5 mx-3">
              <label htmlFor="type">Status</label>
              <input
                type="text"
                className="form-control rounded-pill mt-1 text-uppercase"
                placeholder="Pending"
                name="depositeStatus"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex mx-5 my-3 text-uppercase">
            <div className="col-5 mx-3">
              <label htmlFor="stock">Payment method</label>
              <input
                type="text"
                className="form-control rounded-pill mt-1 text-uppercase"
                placeholder="check"
                name="depositePaymentMethod"
                onChange={handleChange}
              />
            </div>
            <div className="col-5 mx-3">
              <label htmlFor="type">Document #</label>
              <input
                type="text"
                className="form-control rounded-pill mt-1 text-uppercase"
                placeholder="32145679"
                name="depositeDocument"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex mx-5 my-3 text-uppercase">
            <div className="col-5 mx-3">
              <label htmlFor="stock">Notes</label>
              <textarea
                className="form-control rounded-lg mt-1 text-uppercase"
                rows="5"
                placeholder="refund to customer at delivery."
                name="depositeNotes"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-5 mx-3 border rounded px-2 text-uppercase">
              <div className=" d-flex mt-4">
                <label htmlFor="stock">
                  <CancelPresentationIcon className="mx-2" />
                </label>
                <label className="text-secondary">apply to purchase</label>
              </div>
              <div className="d-flex mx-2">
                <div className="mt-4 col-6">
                  <p>Amount</p>
                  <input
                    type="text"
                    className="form-control rounded-pill mt-1 text-uppercase my-2"
                    placeholder="$7,000"
                    name="depositeApplyToPuchaseAmount"
                    onChange={handleChange}
                  />
                </div>
                <div className=" ms-3 mt-4 col-6 my-2">
                  <p>Refund to customer </p>
                  <p>$3,000</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          {/* ------------------------------ Row 10 ------------------------------------ */}
          <div className=" my-3 mx-2">
            <h5>Price Summary</h5>
            <div className="d-flex justify-content-between my-2 text-capitalize">
              <div className="mx-5">
                <h6 className="text-secondary">Sale Price</h6>
              </div>
              <div className="mx-5">
                <h6>$1,000,000.00</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between my-2 text-capitalize">
              <div className="mx-5">
                <h6 className="text-secondary">addtion 1</h6>
              </div>
              <div className="mx-5">
                <h6>$--</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between my-2 text-capitalize">
              <div className="mx-5">
                <h6 className="text-secondary">addtion 2</h6>
              </div>
              <div className="mx-5">
                <h6>$1,000.00</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between my-2 text-capitalize">
              <div className="mx-5">
                <h6 className="text-secondary">upgrade 1</h6>
              </div>
              <div className="mx-5">
                <h6>$427,000.00</h6>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between my-2 text-capitalize">
              <div className="mx-5">
                <h6 className="text-secondary">Sale Price total</h6>
              </div>
              <div className="mx-5">
                <h6>$1,429,000.00</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between my-2 text-capitalize">
              <div className="mx-5">
                <h6 className="text-secondary">extended warranty</h6>
              </div>
              <div className="mx-5">
                <h6>$1,000.00</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between my-2">
              <div className="mx-5">
                <h6 className="text-secondary">GAP Insurance</h6>
              </div>
              <div className="mx-5">
                <h6>$1,000.00</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default QuoteBodyModalProductDetail;
