import React from "react";
import "./Home.css";
import bankImg from "../Assets/bank.svg"

const home = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-introduction">Welcome to</h2>
          <h1 className="i-name">TSF Bank</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Deposit</div>
              <div className="i-title-item">Transact</div>
            </div>
          </div>
          <p className="i-desc">
            With TSF Bank, transfer money in a secure, smooth and hassle-free manner. Buckle up for a great user experience ahead!
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={bankImg} alt="" className="i-img"></img>
      </div>
    </div>
  );
};

export default home;
