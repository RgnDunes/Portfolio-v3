import React, { useState } from "react";

import "./Reach.css";
import Whatsapp from "../../assets/images/reach/whatsapp.png";
import Github from "../../assets/images/reach/github.png";
import Linkedin from "../../assets/images/reach/linkedin.png";
import Gmail from "../../assets/images/reach/gmail.png";

const Reach = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="reach">
      <div className="reach__left">
        <a href="https://www.linkedin.com/in/rgndunes/" target="_blank">
          <button className="reach__contentLink">
            <img src={Linkedin} alt="" />
          </button>
        </a>

        <a href="https://github.com/RgnDunes" target="_blank">
          <button className="reach__contentLink">
            <img src={Github} alt="" />
          </button>
        </a>

        <a href="mailto:singh.divyansh1802@gmail.com" target="_blank">
          <button className="reach__contentLink">
            <img src={Gmail} alt="" />
          </button>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=917394926646"
          target="_blank"
        >
          <button className="reach__contentLink">
            <img src={Whatsapp} alt="" />
          </button>
        </a>
      </div>
      <div className="reach__right">
        <form className="reach__form" action="#">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name : "
            required
            onChange={(e) => setName(e.target.value)}
            pattern="^[A-Za-z]+"
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email : "
            required
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <textarea
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            rows="6"
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Reach;
