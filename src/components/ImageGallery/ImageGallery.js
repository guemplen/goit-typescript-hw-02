import { jsx as _jsx } from "react/jsx-runtime";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./imageGallery.module.css";
const ImageGallery = ({ images, onImageClick, }) => {
    return (_jsx("ul", { className: styles.imageGallery, children: images.map((image) => (_jsx("li", { className: styles.imageGalleryItem, children: _jsx(ImageCard, { image: image, onClick: () => onImageClick(image) }) }, image.id))) }));
};
export default ImageGallery;
