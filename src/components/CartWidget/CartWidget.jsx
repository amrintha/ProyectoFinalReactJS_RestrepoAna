import "./cartwidget.css"
import { TiShoppingCart } from "react-icons/ti";


const CartWidget = () => {
  return (
    <div className="cartWidget">
      <TiShoppingCart className="logo-cartwidget" />
      <span className="contador">3</span>;
    </div>
  )
}

export default CartWidget;
