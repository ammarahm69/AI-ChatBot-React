import React, { useState } from "react";
import "../style/sidebar.css";

import Menu from "../assets/menu_icon.png";
import Plus from "../assets/plus_icon.png";
import MessageIcon from "../assets/message_icon.png";
import Question from "../assets/question_icon.png";
import Histsory from "../assets/history_icon.png";
import Setting from "../assets/setting_icon.png";
function Sidebar() {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img src={Menu} alt="" className="menu" onClick={()=>setExtended(prev=>!prev)} />
        <div className="new-chat">
          <img src={Plus} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
      </div>

      {extended ? (
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={MessageIcon} alt="12" />
            <p>What is react...</p>
          </div>
        </div>
      ) : null}

      {/* Bottom Part */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={Question} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={Histsory} alt="" />
          {extended?<p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={Setting} alt="" />
         {extended ? <p>Settings</p> :null} 
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
