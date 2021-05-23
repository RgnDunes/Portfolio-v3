import React, { useState } from "react";

import "./AddMobPhotography.css";

const AddMobPhotography = () => {
  const [mobPhotographUrl, setMobPhotographUrl] = useState("");
  return (
    <div className="addmobilephotography">
      <h2>➕ Add Mob Photograph ➕</h2>
      <form action="#">
        <input
          type="url"
          name="mobphotographurl"
          value={mobPhotographUrl}
          onChange={(e) => setMobPhotographUrl(e.target.value)}
          placeholder="Enter the url of Mob Photograph"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddMobPhotography;
