import './style.sass'
import './responsive.css'
import { useState, useEffect } from 'react';
import MenuMobile from '../../components/menuMobile'

const Index = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className='wrapper container w-full'>
      <header className='container w-full bg-transparent h-12 flex justify-between items-center'>
        <div className='div-logo'>
          <img src="/assets/logo-desktop.svg" alt="" />
          {windowWidth <= 430 ? (<div> <img src="/assets/rocketseat.svg" alt="" /> <MenuMobile /> </div> ) : (<></>)}
        </div>
        
        <nav className='navbar flex justify-between'>
          <a href="" className="item-nav">Home</a>
          <a href="" className="item-nav">Menu</a>
          <a href="" className="item-nav">Recompensas</a>
          <a href="" className="item-nav">Gift Cards</a>
          <a href="" className="item-nav">Lojas</a>
        </nav>
        <button className='header-btn px-8 py-2 rounded-lg'>PEGAR MEU CAFÉ</button>
      </header>
      <section className='container w-full'>
        {windowWidth <= 430 ? (
          <div className='titles'>
            <h2 className={' text-3xl'}>O café que fará seu código decolar para o próximo nível.</h2>
            <button className='px-8 py-2 rounded-lg'>PEGAR MEU CAFÉ</button>
            <h1 className={' text-5xl'}>Great Coffee</h1>
            <h1 className={' text-5xl'}>&#8249;Great Code/&#8250;</h1>
          </div>
          ) : (
          <div className='titles'>
            <h1 className={' text-8xl'}>Great Coffee</h1>
            <h1 className={' text-8xl'}>&#8249;Great Code/&#8250;</h1>
          </div>
        )}
      </section>
    </div>
   
  )
}

export default Index