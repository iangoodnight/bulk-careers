import * as React from 'react';
import { Link } from 'gatsby';
import { hide, modal } from './modal.module.scss';

const Modal = ({ handleClose, show, children }) => {
  const modalClass = show ? modal : `${modal} ${hide}`;

  return (
    <div className={modalClass}>
      <section>
        <div>
          <button type="button" aria-label="close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>{children}</p>
        <Link to="/">Return home</Link>
      </section>
    </div>
  );
};

export default Modal;
