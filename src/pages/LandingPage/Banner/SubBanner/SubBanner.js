import React from "react";

import "./SubBanner.css";
import MyPhoto from "../../../../assets/images/photos/myPhotoBrownWhiteBg.png";

const SubBanner = () => {
  return (
    <div className="subbanner">
      <div className="wrapper">
        <div className="subbanner__photo">
          <img src={MyPhoto} alt="" />
        </div>
        <div className="subbanner__caption">
          <div className="subbanner__captionSmall">Hi, I'm a</div>
          <div className="subbanner__captionLarge">
            <span className="subbanner__captionLargeSpan">{"<"}</span>
            Web Developer
            <span className="subbanner__captionLargeSpan">{"/>"}</span>
          </div>

          <div className="subbanner__captionHighlight"></div>
        </div>
      </div>
      {/* <div className="subbanner__context">
        Hello, my name is{" "}
        <span className="subbanner__captionHighlightRed">Divyansh Singh</span>{" "}
        and I'm currently living in Prayagraj, Uttar Pradesh, India 🇮🇳 I make
        web applications, usually with{" "}
        <span className="subbanner__captionHighlight">
          ReactJS, Firebase, Flask and sometimes NodeJS
        </span>
        {". "}
        Currently I'm a{" "}
        <span className="subbanner__captionHighlight">
          Frontend SDE Intern at Razorpay.
        </span>
      </div> */}
    </div>
  );
};

export default SubBanner;
