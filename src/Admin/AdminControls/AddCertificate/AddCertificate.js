import React, { useState } from "react";

import "./AddCertificate.css";

const AddCertificate = () => {
  const [certificateUrl, setCertificateUrl] = useState("");

  return (
    <div className="addcertificate">
      <h2>➕ Add Certificate ➕</h2>
      <form action="#">
        <input
          type="url"
          name="certificateurl"
          value={certificateUrl}
          onChange={(e) => setCertificateUrl(e.target.value)}
          placeholder="Enter the url of certificate"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddCertificate;
