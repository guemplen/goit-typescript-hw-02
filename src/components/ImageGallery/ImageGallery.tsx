import ImageCard from "../ImageCard/ImageCard";
import styles from "./imageGallery.module.css";
import { Image } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.imageGalleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
