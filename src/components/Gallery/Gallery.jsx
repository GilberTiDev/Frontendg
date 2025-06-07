import React, { useState } from 'react';
import styles from './Gallery.module.css';
import imagens from '../img'

export default function Gallery({ className = '', width = '100%', height = 'auto', radius = '0px', showThumbs, images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const selectImage = (index) => setCurrentIndex(index);

  const currentImage = images[currentIndex]?.src;

  return (
    <div
      className={`${styles.galleryContainer} ${className}`}
      style={{ width, height, '--thumb-radius': radius }}
    >
      {/* Setas de navegação */}
      <button
        className={`${styles.arrowButton} ${styles.arrowLeft} ${currentIndex === 0 ? styles.arrowDisabled : ''}`}
        onClick={goPrev}
        disabled={currentIndex === 0}
      >
        <img src={imagens.ArrowLeft} alt="Anterior" />
      </button>

      <img
        src={currentImage}
        alt={`Imagem ${currentIndex + 1}`}
        className={styles.galleryImage}
        style={{ borderRadius: radius }}
      />

      <button
        className={`${styles.arrowButton} ${styles.arrowRight} ${currentIndex === images.length - 1 ? styles.arrowDisabled : ''}`}
        onClick={goNext}
        disabled={currentIndex === images.length - 1}
      >
        <img src={imagens.ArrowRight} alt="Próxima" />
      </button>

      {/* Miniaturas */}
      {showThumbs && (
        <div className={styles.thumbnails}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Thumb ${index + 1}`}
              className={`${styles.thumbnailImage} ${index === currentIndex ? styles.thumbnailSelected : ''}`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
