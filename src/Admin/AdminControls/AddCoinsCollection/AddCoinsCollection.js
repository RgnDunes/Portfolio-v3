import React, { useState } from "react";

import "./AddCoinsCollection.css";

const AddCoinsCollection = () => {
  const [coinUrl, setCoinUrl] = useState("");
  return (
    <div className="addcoinscollection">
      <h2>➕ Add Coin ➕</h2>
      <form action="#">
        <input
          type="url"
          name="coinurl"
          value={coinUrl}
          onChange={(e) => setCoinUrl(e.target.value)}
          placeholder="Enter the url of coin"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddCoinsCollection;
