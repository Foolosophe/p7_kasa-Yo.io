import React, { useState, useRef } from "react";
import open from "../../assets/ChevronOpen.png";
import "./collapse.css";

export default function Collapse({ title, content }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("open");
  const contents = useRef(null);

  function toggleCollapse() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${contents.current.scrollHeight}px`
    );
    setRotateState(setRotate === "open" ? "close" : "open");
  }
  return (
    <div className="collapse_div">
      <button className={`collapse_btn ${setActive}`} onClick={toggleCollapse}>
        <div className="collapse_title">{title}</div>
        <img className={`${setRotate}`} src={open} alt="ouvrir" />
      </button>

      <div
        className="collapse_content"
        ref={contents}
        style={{ maxHeight: `${setHeight}` }}
      >
        <div className="collapse_content_container">
          <div className="collapse_text">{content}</div>
        </div>
      </div>
    </div>
  );
}
