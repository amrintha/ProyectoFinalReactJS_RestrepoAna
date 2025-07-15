import "./navbar.css";
import balooLogo from '../../assets/balooLogo.jpg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to ="/">
        <img className="logo" src={balooLogo} alt="" />
      </Link>

        <ul className="categorias">
            <li>
              <Link  to="/category/personalizados" className="category">Personalizados</Link>
            </li>
            <li>
              <Link  to="/category/temporada" className="category">Temporada</Link>
            </li>
            <li>
              <Link  to="/category/siempre" className="category">De Siempre</Link>
              </li>
        </ul>
    
    <CartWidget />
    </div>
  )
}

export default Navbar;