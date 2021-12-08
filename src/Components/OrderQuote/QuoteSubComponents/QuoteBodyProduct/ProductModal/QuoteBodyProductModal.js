import React from "react";
import QuoteBodyModalProductDetail from "./QuoteBodyModalProductDetail";
import QuoteBodyModalProductTaxFee from "./QuoteBodyModalProductTaxFee";
import QuoteBodyProductFinance from "./QuoteBodyProductFinance";
import "./Style/productmodal.css"

function QuoteBodyProductModal() {
  return (
    <>
      <div
        className="modal fade"
        id="productmodal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header bg-primary my-0 py-1">
              <div className="col-12 d-flex">
                <h5
                  className="modal-title text-white col-3 mt-2"
                  id="exampleModalLabel"
                >
                  Add Product
                </h5>
                <ul
                  className="nav nav-pills mb-3 text-center col-8"
                  id="pills-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item text-white border-bottom border-4 mx-5"
                    role="presentation"
                  >
                    <button
                      className="nav-link active text-white"
                      id="product-details"
                      data-bs-toggle="pill"
                      data-bs-target="#details"
                    >
                      Product Details
                    </button>
                  </li>
                  <li className="nav-item text-white mx-5" role="presentation">
                    <button
                      className="nav-link text-white"
                      id="tax-and-fee"
                      data-bs-toggle="pill"
                      data-bs-target="#tax-fee"
                    >
                     Taxes & Fee's
                    </button>
                  </li>
                  <li className="nav-item text-white mx-5" role="presentation">
                    <button
                      className="nav-link text-white"
                      id="financing"
                      data-bs-toggle="pill"
                      data-bs-target="#product-financing"
                    >
                      Financing
                    </button>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn-close bg-white mt-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="modal-body tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="details"
                role="tabpanel"
                aria-labelledby="product-details"
              >
                <QuoteBodyModalProductDetail />
              </div>
              <div
                className="tab-pane fade"
                id="tax-fee"
                role="tabpanel"
                aria-labelledby="tax-and-fee"
              >
                <QuoteBodyModalProductTaxFee />
              </div>
              <div
                className="tab-pane fade"
                id="product-financing"
                role="tabpanel"
                aria-labelledby="financing"
              >
                <QuoteBodyProductFinance />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteBodyProductModal;
