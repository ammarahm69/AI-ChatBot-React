import React, { useContext, useState } from "react";
import "../style/sidebar.css";

import Menu from "../assets/menu_icon.png";
import Plus from "../assets/plus_icon.png";
import MessageIcon from "../assets/message_icon.png";
import Question from "../assets/question_icon.png";
import History from "../assets/history_icon.png";
import Setting from "../assets/setting_icon.png";
import { Context } from "../context/Context";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { prevPrompt, onSent, setRecentPrompt,newChat } = useContext(Context);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={Menu}
          alt="Menu"
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="new-chat" onClick={() =>newChat()}>
          <img src={Plus} alt="New Chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
      </div>

      {extended ? (
        <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompt.map((item, index) => {
            return (
              <div className="recent-entry" key={index}>
                <img src={MessageIcon} alt="Recent Prompt" />
                <p>{item.slice(0, 18)} ...</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {/* Bottom Part */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={Question} alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={History} alt="Activity" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={Setting} alt="Settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
