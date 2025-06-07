
import images from '../img'
import './BuyBox.css';

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div className="buyBox">
      <h1 className="productName">{name}</h1>
      <p className="reference">Ref: {reference}</p>
      <div className="ratingBox">
        <span className="stars">{stars} <img src={images.starIcon} alt="star" /></span>
        <span className="rating">({rating} avaliações)</span>
      </div>
      <div className="priceBox">
        {priceDiscount ? (
          <>
            <span className="priceStrikethrough">R$ {price.toFixed(2)}</span>
            <span className="price">R$ {priceDiscount.toFixed(2)}</span>
          </>
        ) : (
          <span className="price">R$ {price.toFixed(2)}</span>
        )}
      </div>
      <p className="description">{description}</p>
      {children}
      <button className="buyButton">COMPRAR</button>
    </div>
  );
};

export default BuyBox;