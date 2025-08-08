import './cart.css';
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom';
import { FaRegTrashCan } from "react-icons/fa6";
import { TbShoppingCartExclamation } from "react-icons/tb";


const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className='cart-empty-alert'>
                <TbShoppingCartExclamation className='logo-empty' />
                <h2>El carrito está vacío, agrega productos y llénate de magia!</h2>
            </div>
        )
    } else {

        return (
            <div className='cart'>
                <h2 className='title-cart'>Tu carrito de felicidad. Pop y vámonos!</h2>
                {
                    cart.map((productCart) => (
                        <div className="item-cart-list">
                            <img className='img-item-cart' src={productCart.image} width={100} alt="" />
                            <p className='text-item-cart'>{productCart.name}</p>
                            <p className='text-item-cart'>Precio unidad: ${productCart.price}</p>
                            <p className='text-item-cart'>{productCart.quantity}</p>
                            <p className='text-item-cart'>Precio parcial: ${productCart.quantity * productCart.price}</p>
                            <button className='detele-item-cart' onClick={() => deleteProductById(productCart.id)}>
                                <FaRegTrashCan className='logo-trash' />
                            </button>
                        </div>
                    ))
                }

                <div className='info-cart'>
                    <p className='text-info-cart'>TOTAL COMPRA: ${totalPrice()}</p>
                    <Link className='button-continue-cart' to="/checkout">Continuar con mi compra</Link>
                    <button className='button-delete-cart' onClick={deleteCart}>Vaciar carrito</button>
                </div>
            </div>
        )
    }
}

export default Cart