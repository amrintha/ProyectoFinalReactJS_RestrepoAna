import "./cartwidget.css"
import carrito from "../assets/carrito.png";

const CartWidget = () => {
  return (
    <div className="cartWidget">
       <img className="carrito" src={carrito} alt=" " /> 
       <span className="contador">3</span>;
    </div>
  )
}

export default CartWidget;
