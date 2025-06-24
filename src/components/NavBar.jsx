import "./navbar.css";
import balooLogo from "../assets/balooLogo.jpg";
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <div className="navbar">
        <img className="logo" src={balooLogo} alt="" />

        <ul className="categorias">
            <li>Personalizados</li>
            <li>Temporada</li>
            <li>De Siempre</li>
        </ul>
    
    <CartWidget />
    </div>
  )
}

export default Navbar;