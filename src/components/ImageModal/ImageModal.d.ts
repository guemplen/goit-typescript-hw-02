import { Image } from "../../types";
interface ImageModalProps {
    image: Image;
    onClose: () => void;
}
declare const ImageModal: React.FC<ImageModalProps>;
export default ImageModal;
