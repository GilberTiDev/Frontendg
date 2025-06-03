// src/components/ProductOptions.jsx
import React, { useState } from 'react';
import './ProductOptions.css';

const ProductOptions = ({ options, shape, type, radius }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="optionsContainer">
      {options.map((opt, index) => {
        const isSelected = selected === index;
        const baseStyle = {
          border: isSelected ? '2px solid var(--primary)' : '1px solid var(--light-gray-2)',
          borderRadius: shape === 'square' ? radius : '50%',
          backgroundColor: type === 'color' ? opt : '#fff',
        };

        return (
          <div
            key={index}
            className={`optionItem ${shape}`}
            style={baseStyle}
            onClick={() => setSelected(index)}
          >
            {type === 'text' ? <span>{opt}</span> : null}
          </div>
        );
      })}
    </div>
  );
};

export default ProductOptions;
