import React from 'react';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';

export default function HomePage() {
  const galleryImages = [
    { src: '/home-slide-1.jpeg' },
    { src: '/home-slide-2.jpeg' },
    { src: '/home-slide-3.jpeg' },
    { src: '/home-slide-4.jpeg' }
  ];

  const featuredCollections = [
    '/collection-1.png',
    '/collection-2.png',
    '/collection-3.png'
  ];

  const topProducts = [
    {
      name: 'Produto 1',
      image: '/product-thumb-1.png',
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: 'Produto 2',
      image: '/product-thumb-2.png',
      price: 99.9
    },
    {
      name: 'Produto 3',
      image: '/product-thumb-3.png',
      price: 180,
      priceDiscount: 120
    },
    {
      name: 'Produto 4',
      image: '/product-thumb-4.png',
      price: 249.9
    },
    {
      name: 'Produto 5',
      image: '/product-thumb-5.png',
      price: 180
    },
    {
      name: 'Produto 6',
      image: '/product-thumb-6.png',
      price: 119.9,
      priceDiscount: 89.9
    },
    {
      name: 'Produto 7',
      image: '/product-thumb-7.png',
      price: 99.9
    },
    {
      name: 'Produto 8',
      image: '/product-thumb-8.png',
      price: 159.9,
      priceDiscount: 109.9
    }
  ];

  return (
   <>
   
  
      {/* 5.1 Slide de imagens */}
      <Gallery
        width="1440px"
        height="681px"
        radius="0px"
        images={galleryImages}
        showThumbs
      />

      {/* 5.2 Coleções em destaque */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          {featuredCollections.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Coleção ${index + 1}`}
              style={{ width: '384px', height: 'auto', borderRadius: '4px' }}
            />
          ))}
        </div>
      </Section>

      {/* 5.3 Produtos em alta */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={topProducts} />
      </Section>
     </>
  );
}
