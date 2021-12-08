import React from 'react'

const FinanceCurrentOrders = () => {
    return (
        <div className="row mx-2 mt-2 text-white">
      <div className="col-12 ">
          <p className="m-0">Current Orders</p>
        <div className="p-2 shadow text-white rounded mt-1">
          <div className="text-uppercase d-flex justify-content-between mx-3 text-center">
            <div className="p-1">
              <p className="m-0">Quotes</p>

              <h1>22</h1>
            </div>
            <div className="p-1">
              <p className="m-0">Manager Review</p>
              <h1>6</h1>
            </div>
            <div className="p-1">
              <p className="m-0">Financing Review</p>
              <h1>44</h1>
            </div>
            <div className="p-1">
              <p className="m-0">credit approval</p>
              <h1>4</h1>
            </div>
            <div className="p-1">

              <p className="m-0">document requests</p>
              <h1>4</h1>
            </div>
            <div className="p-1">
              <p className="m-0">funded</p>

              <h1>4</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default FinanceCurrentOrders


