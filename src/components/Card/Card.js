import React from "react";

import "./Card.css";

const Card = ({
  index,
  companyName,
  startDate,
  endDate,
  designation,
  certificateUrl,
  websiteUrl,
  description,
}) => {
  return (
    <div className="card">
      <div class="card__icon">{index}</div>
      <div class="card__contentbox">
        <br />
        <h3>
          <a href={websiteUrl} target="_blank">
            {companyName} 🔗
          </a>
        </h3>
        <h6>
          {startDate} - {endDate}
        </h6>
        <h6>
          {"↪"} {designation} {"↩"}
        </h6>
        <br />
        <p>{description}</p>
      </div>
      <a href={certificateUrl} target="_blank">
        <button className="btn corousal_btn">View Docs</button>
      </a>
    </div>
  );
};

export default Card;
