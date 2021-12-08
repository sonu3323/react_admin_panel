import React from "react";
import Navbar from "../Navbar/Navbar";
import ConfigHeader from "./ConfigHeader";
import GeneralSetting from "./GeneralSetting";

const Config = () => {
  return (
    <>
      <Navbar title="FAST Configuration" />
      <div>
        <ConfigHeader />
        <div>
          <GeneralSetting />
        </div>
      </div>
    </>
  );
};

export default Config;
