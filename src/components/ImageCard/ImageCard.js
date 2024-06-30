import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./imageCard.module.css";
const ImageCard = ({ image, onClick }) => {
    return (_jsx("div", { className: styles.imageCard, onClick: onClick, children: _jsx("img", { src: image.urls.small, alt: image.alt_description, onClick: onClick }) }));
};
export default ImageCard;
