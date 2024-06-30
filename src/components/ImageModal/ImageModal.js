import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Modal from "react-modal";
import styles from "./imageModal.module.css";
Modal.setAppElement("#root");
const ImageModal = ({ image, onClose }) => {
    return (_jsx(Modal, { isOpen: true, onRequestClose: onClose, contentLabel: "Image Modal", className: styles.imageModal, overlayClassName: styles.imageModalOverlay, children: _jsxs("div", { className: styles.imageModalContent, children: [_jsx("img", { src: image.urls.regular, alt: image.alt_description }), _jsx("button", { className: styles.closeButton, onClick: onClose, children: "Close" })] }) }));
};
export default ImageModal;
