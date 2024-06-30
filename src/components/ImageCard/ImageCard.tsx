import styles from "./imageCard.module.css";
import { Image } from "../../types";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
