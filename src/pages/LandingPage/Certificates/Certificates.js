import React from "react";

import "./Certificates.css";
import Correlations from "../../../assets/images/certificates/correlations.png";
import Globalshala from "../../../assets/images/certificates/globalshala.png";
import Taghive from "../../../assets/images/certificates/taghive.png";
import Microsoft from "../../../assets/images/certificates/microsoft.jpeg";
import Konnexions from "../../../assets/images/certificates/konnexians.jpeg";
import IncubateInd from "../../../assets/images/certificates/incubateind.png";
import HpsIntermediate from "../../../assets/images/certificates/hpsIntermediate.png";
import HpsBasic from "../../../assets/images/certificates/hpsBasic.jpeg";
import HpBasic from "../../../assets/images/certificates/hpBasic.png";
import HashCode from "../../../assets/images/certificates/hashCode.png";

const Certificates = () => {
  return (
    <div className="certificates">
      <h2>📄 Certificates 📄</h2>
      <div className="certificates__content">
        <div class="image">
          <img src={Correlations} alt="" />
        </div>
        <div class="image">
          <img src={Globalshala} alt="" />
        </div>
        <div class="image">
          <img src={Taghive} alt="" />
        </div>
        <div class="image">
          <img src={Microsoft} alt="" />
        </div>
        <div class="image">
          <img src={Konnexions} alt="" />
        </div>
        <div class="image">
          <img src={IncubateInd} alt="" />
        </div>
        <div class="image">
          <img src={HpsIntermediate} alt="" />
        </div>
        <div class="image">
          <img src={HpsBasic} alt="" />
        </div>
        <div class="image">
          <img src={HpBasic} alt="" />
        </div>
        <div class="image">
          <img src={HashCode} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
