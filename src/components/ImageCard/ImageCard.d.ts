import { Image } from "../../types";
interface ImageCardProps {
    image: Image;
    onClick: () => void;
}
declare const ImageCard: React.FC<ImageCardProps>;
export default ImageCard;
