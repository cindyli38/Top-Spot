import ReactDOM from "react-dom";

const Modal = ({ setShowModal, message }) => {
    const closePopup = () => {
        setShowModal(false);
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="innerModal">
                <div className="topBar">

                    <h2>{message}</h2>
                    <button className="exitButton" onClick={() => closePopup()}>X</button>
                </div>

            </div>
        </div>,
        document.getElementById("portal")
    )
}

export default Modal