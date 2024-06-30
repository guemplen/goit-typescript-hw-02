import { Image } from "../../types";
interface ImageGalleryProps {
    images: Image[];
    onImageClick: (image: Image) => void;
}
declare const ImageGallery: React.FC<ImageGalleryProps>;
export default ImageGallery;
