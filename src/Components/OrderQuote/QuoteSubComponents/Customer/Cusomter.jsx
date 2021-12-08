import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMethods, rootapi } from "../../../../utlis/api";
import { SHOW_CUSTOMER } from "../../../../redux/customers/customerTypes";
import { addOrder } from "../../../../redux/customers/customerAction";
const Cusomter = () => {
  const customerState = useSelector((state) => state.customerState);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMethods
    .get(`${rootapi}/customer`)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        dispatch(addOrder(SHOW_CUSTOMER, res?.data));
      }
    })
    .catch((err) => console.log(err));
    // eslint-disable-next-line 
  }, []);
  console.log("customers", customerState);
  return (
    <>
      <div className="d-flex p-2 justify-content-between">
        <div>
          <h5>ABC TRUCKING</h5>
          <p className="mx-0 text-secondary">Name</p>
        </div>

        <div>
          <h5>(503) 971-1234</h5>
          <p className="mx-0 text-secondary">Phone</p>
        </div>

        <div>
          <h5>EXAMPLE@ABCTRUCKING.COM</h5>
          <p className="mx-0 text-secondary">Email</p>
        </div>
      </div>

      <div className="bg-light d-flex">
        <div className="p-2 col-4">
          <h5>BILLING ADDRESS</h5>
          <h6 className="mx-0">123 main st.</h6>
          <h6 className="mx-0"> FRESNO, CA98234998</h6>
        </div>

        <div className="p-2 mx-5 col-4">
          <h5>DELIVERY ADDRESS</h5>
          <h6 className="mx-0">123 main st.</h6>
          <h6 className="mx-0"> FRESNO, CA98234998</h6>
        </div>
      </div>

      <div className="p-2 justify-content-between">
        <h5>CO-SINGER</h5>
        <div className="d-flex justify-content-between">
          <div>
            <h5>-----</h5>
            <p className="mx-0 text-secondary">Name</p>
          </div>

          <div>
            <h5>----</h5>
            <p className="mx-0 text-secondary">Phone</p>
          </div>

          <div className="me-5">
            <h5>-----</h5>
            <p className="mx-0 text-secondary">Email</p>
          </div>
        </div>
      </div>

      <div className="p-2 bg-light ">
        <h5>ADDITIONAL CONTACT</h5>
        <div className="d-flex ">
          <div className="col-4">
            <h5>KEN OBI</h5>
            <p className="mx-0 text-secondary">Name</p>
          </div>

          <div className="col-4">
            <h5>ABC TRUCKING</h5>
            <p className="mx-0 text-secondary">Phone</p>
          </div>

          <div className="me-5 col-4">
            <h5>EXAMPLE@GAMIL.COM</h5>
            <p className="mx-0 text-secondary">Email</p>
          </div>
        </div>

        <div className="d-flex p-3">
          <div className="col-4">
            <h6 className="mx-0">123 main st.</h6>
            <h6 className="mx-0"> FRESNO, CA98234998</h6>
            <p className="mx-0 text-secondary">ADDRESS</p>
          </div>

          <div className="col-4">
            <h5>(503) 971-1234</h5>
            <p className="mx-0 text-secondary">Phone</p>
          </div>

          <div className="col-4">
            <h5>(503) 971-1234</h5>
            <p className="mx-0 text-secondary">Phone</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <h5>TAX EXEMPTION</h5>
            <div className="p-2 d-flex justify-content-between">
              <div>
                <h5>YES</h5>
                <p className="mx-0 text-secondary">Exampt</p>
              </div>

              <div>
                <h5>1234567</h5>
                <p className="mx-0 text-secondary">ICC Number</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cusomter;
