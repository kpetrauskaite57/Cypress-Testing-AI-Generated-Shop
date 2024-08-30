// src/components/Modal.js

import React from 'react';
import '../styles/Modal.css';

function Modal({ show, onClose, title, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
