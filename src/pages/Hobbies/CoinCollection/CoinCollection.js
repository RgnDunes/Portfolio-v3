import React, { useState, useEffect } from "react";

import "./CoinCollection.css";
// import One from "../../../assets/images/hobbies/coins/1.png";
// import Two from "../../../assets/images/hobbies/coins/2.png";
// import Three from "../../../assets/images/hobbies/coins/3.png";
// import Four from "../../../assets/images/hobbies/coins/4.png";
// import Five from "../../../assets/images/hobbies/coins/5.png";
// import Six from "../../../assets/images/hobbies/coins/6.png";
// import Seven from "../../../assets/images/hobbies/coins/7.png";
// import Eight from "../../../assets/images/hobbies/coins/8.png";
// import Nine from "../../../assets/images/hobbies/coins/9.png";
// import Ten from "../../../assets/images/hobbies/coins/10.png";
// import Eleven from "../../../assets/images/hobbies/coins/11.png";
// import Twelve from "../../../assets/images/hobbies/coins/12.png";
// import Thirteen from "../../../assets/images/hobbies/coins/13.png";
// import Fourteen from "../../../assets/images/hobbies/coins/14.png";
// import Fifteen from "../../../assets/images/hobbies/coins/15.png";
// import Sixteen from "../../../assets/images/hobbies/coins/16.png";
// import Seventeen from "../../../assets/images/hobbies/coins/17.png";
// import Eighteen from "../../../assets/images/hobbies/coins/18.png";
// import Nineteen from "../../../assets/images/hobbies/coins/19.png";
// import Twenty from "../../../assets/images/hobbies/coins/20.png";
// import TwentyOne from "../../../assets/images/hobbies/coins/21.png";
// import TwentyTwo from "../../../assets/images/hobbies/coins/22.png";
// import TwentyThree from "../../../assets/images/hobbies/coins/23.png";
// import TwentyFour from "../../../assets/images/hobbies/coins/24.png";
// import TwentyFive from "../../../assets/images/hobbies/coins/25.png";
// import TwentySix from "../../../assets/images/hobbies/coins/26.png";
// import TwentySeven from "../../../assets/images/hobbies/coins/27.png";
// import TwentyEight from "../../../assets/images/hobbies/coins/28.png";
// import TwentyNine from "../../../assets/images/hobbies/coins/29.png";
// import Thirty from "../../../assets/images/hobbies/coins/30.png";
// import ThirtyOne from "../../../assets/images/hobbies/coins/31.png";
// import ThirtyTwo from "../../../assets/images/hobbies/coins/32.png";
// import ThirtyThree from "../../../assets/images/hobbies/coins/33.png";
// import ThirtyFour from "../../../assets/images/hobbies/coins/34.png";
// import ThirtyFive from "../../../assets/images/hobbies/coins/35.png";
// import ThirtySix from "../../../assets/images/hobbies/coins/36.png";
// import ThirtySeven from "../../../assets/images/hobbies/coins/37.png";
// import ThirtyEight from "../../../assets/images/hobbies/coins/38.png";
// import ThirtyNine from "../../../assets/images/hobbies/coins/39.png";
// import Fourty from "../../../assets/images/hobbies/coins/40.png";
// import FourtyOne from "../../../assets/images/hobbies/coins/41.png";
import { db } from "../../../firebase";

const CoinCollection = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("hobbies")
      .doc("zrzvCxmk1tsVdeMfdMA8")
      .collection("coins")
      .onSnapshot((snapshot) =>
        setCoins(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="coinCollection">
      <h2>Coins Collection</h2>
      <div className="coinCollection__content">
        {/* {coins.map(({ url }) => (
          <div className="image">
            <img src={url} alt="" />
          </div>
        ))} */}

        {/* <div class="image">
          <img src={One} alt="" />
        </div>
        <div class="image">
          <img src={Two} alt="" />
        </div>
        <div class="image">
          <img src={Three} alt="" />
        </div>
        <div class="image">
          <img src={Four} alt="" />
        </div>
        <div class="image">
          <img src={Five} alt="" />
        </div>
        <div class="image">
          <img src={Six} alt="" />
        </div>
        <div class="image">
          <img src={Seven} alt="" />
        </div>
        <div class="image">
          <img src={Eight} alt="" />
        </div>
        <div class="image">
          <img src={Nine} alt="" />
        </div>
        <div class="image">
          <img src={Ten} alt="" />
        </div>
        <div class="image">
          <img src={Eleven} alt="" />
        </div>
        <div class="image">
          <img src={Twelve} alt="" />
        </div>
        <div class="image">
          <img src={Thirteen} alt="" />
        </div>
        <div class="image">
          <img src={Fourteen} alt="" />
        </div>
        <div class="image">
          <img src={Fifteen} alt="" />
        </div>
        <div class="image">
          <img src={Sixteen} alt="" />
        </div>
        <div class="image">
          <img src={Seventeen} alt="" />
        </div>
        <div class="image">
          <img src={Eighteen} alt="" />
        </div>
        <div class="image">
          <img src={Nineteen} alt="" />
        </div>
        <div class="image">
          <img src={Twenty} alt="" />
        </div>
        <div class="image">
          <img src={TwentyOne} alt="" />
        </div>
        <div class="image">
          <img src={TwentyTwo} alt="" />
        </div>
        <div class="image">
          <img src={TwentyThree} alt="" />
        </div>
        <div class="image">
          <img src={TwentyFour} alt="" />
        </div>
        <div class="image">
          <img src={TwentyFive} alt="" />
        </div>
        <div class="image">
          <img src={TwentySix} alt="" />
        </div>
        <div class="image">
          <img src={TwentySeven} alt="" />
        </div>
        <div class="image">
          <img src={TwentyEight} alt="" />
        </div>
        <div class="image">
          <img src={TwentyNine} alt="" />
        </div>
        <div class="image">
          <img src={Thirty} alt="" />
        </div>
        <div class="image">
          <img src={ThirtyOne} alt="" />
        </div>
        <div class="image">
          <img src={ThirtyTwo} alt="" />
        </div>
        <div class="image">
          <img src={ThirtyThree} alt="" />
        </div>
        <div class="image">
          <img src={ThirtyFour} alt="" />
        </div>
        <div class="image">
          <img src={ThirtyFive} alt="" />
        </div>
        <div class="image">
          <img src={ThirtySix} alt="" />
        </div>
        <div class="image">
          <img src={ThirtySeven} alt="" />
        </div>
        <div class="image">
          <img src={ThirtyEight} alt="" />
        </div>
        <div class="image">
          <img src={ThirtyNine} alt="" />
        </div>
        <div class="image">
          <img src={Fourty} alt="" />
        </div>
        <div class="image">
          <img src={FourtyOne} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default CoinCollection;
