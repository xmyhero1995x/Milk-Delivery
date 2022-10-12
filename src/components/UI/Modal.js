import { Fragment } from "react/cjs/react.production.min";
import styles from "./Modal.module.css";
import  ReactDOM  from "react-dom";


const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </Fragment>
  );
};
