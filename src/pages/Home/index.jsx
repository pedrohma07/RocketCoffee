import './style.sass'
import './responsive.css'

const index = () => {
  return (
    <div className='wrapper container w-full'>
      <header className='container w-full bg-transparent h-12 flex justify-between items-center'>
        <img src="/assets/logo-desktop.svg" alt="" />
        <nav className='navbar flex justify-between'>
          <a href="" className="item-nav">Home</a>
          <a href="" className="item-nav">Menu</a>
          <a href="" className="item-nav">Recompensas</a>
          <a href="" className="item-nav">Gift Cards</a>
          <a href="" className="item-nav">Lojas</a>
        </nav>
        <button className='px-8 py-2 rounded-lg'>PEGAR MEU CAFÉ</button>
      </header>
      <section className='container w-full'>
        <div className='titles'>
          <h1>Great Coffee</h1>
          <h1 >&#8249;Great Code/&#8250;</h1>
        </div>
      </section>
    </div>
   
  )
}

export default index