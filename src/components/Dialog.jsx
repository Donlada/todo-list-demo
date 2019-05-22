import React from "react";

export default ({ open, onClose, children }) => {
  return (
    <div
      className="dialog-backdrop"
      style={{ display: open ? "block" : "none" }}
      onClick={onClose}
    >
      <div className="dialog" onClick={e => e.stopPropagation()}>
        {children}
        <div className="dialog-bottom">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
