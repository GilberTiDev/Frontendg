import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import searchIcon from '../../assets/search-icon.svg';
import cartIcon from '../../assets/cart-icon.svg';
import './Header.css';

const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      navigate(`/products?filter=${search}`);
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
        <img src={searchIcon} alt="Buscar" onClick={handleSearch} />
      </div>
      <nav className="nav-links">
        <NavLink to="/signup" className="cadastro-link">Cadastre-se</NavLink>
        <NavLink to="/login" className="entrar-button">Entrar</NavLink>
        <img src={cartIcon} alt="Carrinho" className="cart-icon" />
      </nav>
      <div className="main-navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/categories">Categorias</NavLink>
        <NavLink to="/orders">Meus Pedidos</NavLink>
      </div>
    </header>
  );
};

export default Header;