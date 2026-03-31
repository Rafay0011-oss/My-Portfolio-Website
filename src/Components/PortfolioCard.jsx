import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = ({
  title = "App Design",
  subtitle = "Food Delivery App",
  backgroundColor = "",        
  background = null,                   
  imageContainerStyle = {},
  images = [],
}) => {
  const cardBackground = background || backgroundColor;

  return (
    <div
      className="card-container"
      style={{ background: cardBackground }}
    >
      <div className="card-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="phones" style={imageContainerStyle}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt="preview"
            className="phone-image"
            style={{
              width: img.width,
              height: img.height,
              transform: `rotate(${img.rotate || 0}deg)`,
              marginLeft: img.marginLeft,
              marginRight: img.marginRight,
              marginTop: img.marginTop,
              marginBottom: img.marginBottom,
              zIndex: img.zIndex,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;