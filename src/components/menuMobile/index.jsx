import { useState } from 'react';
import './style.scss'; 
import menuOpenImage from '../../assets/menu-buguer-open.svg';
import menuCloseImage from '../../assets/menu-buguer-close.svg';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <div className='navbarMobile flex flex-col items-start'>
        <a href="" className="item-nav">Home</a>
        <a href="" className="item-nav">Menu</a>
        <a href="" className="item-nav">Recompensas</a>
        <a href="" className="item-nav">Gift Cards</a>
        <a href="" className="item-nav">Lojas</a>
      </div>
      </div>
      <div className="hamburger-menu">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <img
          src={isOpen ? menuCloseImage : menuOpenImage}
          alt={isOpen ? 'Fechar menu' : 'Abrir menu'}
        />
      </div>
    </div>
    </div>
   
  );
};

export default Index;
