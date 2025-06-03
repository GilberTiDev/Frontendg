// src/pages/ProductViewPage.jsx
import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import './ProductViewPage.css';

const ProductViewPage = () => {
  const galleryImages = [
    { src: '/product-image-1.png' },
    { src: '/product-image-2.png' },
    { src: '/product-image-3.png' }
  ];

  const recommendedProducts = [
    {
      name: "Tênis Azul",
      image: "https://via.placeholder.com/292x321?text=Produto+1",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "Camiseta Branca",
      image: "https://via.placeholder.com/292x321?text=Produto+2",
      price: 49.9
    }
  ];

  return (
    <Layout>
      <div className="productViewPage">
        <Gallery
          images={galleryImages}
          width="700px"
          height="570px"
          radius="4px"
          showThumbs
        />
        <BuyBox
          name="Tênis Esportivo"
          reference="REF123456"
          stars={4.5}
          rating={230}
          price={300}
          priceDiscount={199.9}
          description="Tênis ideal para treinos e atividades físicas, confortável e durável."
        >
          <ProductOptions
            options={["39", "40", "41", "42"]}
            shape="square"
            radius="4px"
            type="text"
          />
          <ProductOptions
            options={["#000", "#333", "#999"]}
            shape="circle"
            type="color"
          />
        </BuyBox>
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </Layout>
  );
};

export default ProductViewPage;
