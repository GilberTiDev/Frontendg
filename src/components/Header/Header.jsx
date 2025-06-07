import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import images from '../img';
import { Link } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState('');
  
  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      // Aqui você pode implementar a lógica de busca
      console.log('Buscar por:', search);
    }
  };

  return (
    <header className="header-container">
      <Logo />
     
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
        <img src={images.logo} alt="Buscar" />
      </div>
     
      <nav className="nav-links">
        <a href="/signup" className="cadastro-link">Cadastre-se</a>
        <Link to={'/login'} >Entrar</Link>
        <img src={images.card} alt="Carrinho" className="cart-icon" />
      </nav>
      
      <div className="main-navigation">
        <a href="/">Home</a>
        <a href="/products">Produtos</a>
        <a href="/categories">Categorias</a>
        <a href="/orders">Meus Pedidos</a>
      </div>
    </header>
  );
};

export default Header;