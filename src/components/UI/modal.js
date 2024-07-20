import "./modal.css"
import React,{Fragment} from "react";
import ReactDOM from "react-dom";

const Backdrop =(props)=>{

    return <div className="backdrop"></div>
}

const ModalOverlays =(props)=>{

    return <div className="modal">

        <div className="content">{props.children} </div>
    </div>
}

const portalElement = document.getElementById("overlays");

const Modal=(props)=>{

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>,portalElement)};
            {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalElement)};
        </Fragment>
    )
}

export default Modal;