import "./cartwidget.css"
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
 

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);

  return (
    <Link to ="/cart" className="cartWidget">
      <TiShoppingCart className="logo-cartwidget" />
      <span className="contador">{totalQuantity()}</span>
    </Link>
  )
}

export default CartWidget;
