import React, { useContext } from "react";
import UserIcon from "../assets/user_icon.png";
import CompassIcon from "../assets/compass_icon.png";
import BulbIcon from "../assets/bulb_icon.png";
import MessageIcon from "../assets/message_icon.png";
import CodeIcon from "../assets/code_icon.png";
import GalleryIcon from "../assets/gallery_icon.png";
import SendIcon from "../assets/send_icon.png";
import MicIcon from "../assets/mic_icon.png";
import { Context } from "../context/Context";
import "../style/main.css";
function Main() {
  const {
    OnSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setResponse,
    response,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={UserIcon} alt="" />
      </div>

      {/* Main container */}
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={CompassIcon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={BulbIcon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={MessageIcon} alt="" />
          </div>
          <div className="card">
            <p>Tell me about React js and React native</p>
            <img src={CodeIcon} alt="" />
          </div>
        </div>
        {/* Input Prompting */}
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here." />
            <div>
              <img src={GalleryIcon} alt="" />
              <img src={MicIcon} alt="" />
              <img src={SendIcon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini App
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
