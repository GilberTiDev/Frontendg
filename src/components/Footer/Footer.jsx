import React from 'react';
import Logo from '../Logo/Logo';
import InformationGroup from './InformationGroup';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';

const Footer = () => {
  const infoSections = [
    {
      title: 'Institucional',
      informations: [
        { text: 'Sobre Drip Store', link: '/about' },
        { text: 'Blog', link: '/blog' },
      ]
    },
    {
      title: 'Ajuda',
      informations: [
        { text: 'Dúvidas', link: '/faq' },
        { text: 'Fale Conosco', link: '/contact' },
      ]
    }
  ];

  return (
    <footer className="footer-container">
      <Logo />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="footer-infos">
        {infoSections.map((section, index) => (
          <InformationGroup key={index} {...section} />
        ))}
      </div>

      <div className="social-icons">
        <a href="https://facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="https://instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="https://twitter.com"><img src={twitterIcon} alt="Twitter" /></a>
      </div>

      <hr />
      <p>© 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;