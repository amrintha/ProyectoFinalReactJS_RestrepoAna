import "./itemCount.css";
import { useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1);
    const [message, setMessage] = useState(false);
    const [added, setAdded] = useState(false);

    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleAddProduct = () => {
        addProduct(count);
        setAdded(true);
        setMessage(true);
        setTimeout(() => {
            setMessage(false);
        }, 2000);
    };


    return (
        <>
            {message && (
                <div className="alert-overlay">
                    <div className="alert-cart-message"> Producto agregado al carrito. </div>
                </div>
            )}

            {
                added ? (
                    <div className="post-added-actions">
                        <Link to="/cart">
                            <button className="button-to-cart">🛒 Ir al carrito</button>
                        </Link>
                        <Link to="/">
                            <button className="button-to-products">Seguir comprando</button>
                        </Link>
                    </div>

                ) : (
                    <div className="item-count">
                        <div className="controls-count">
                            <button onClick={handleClickDecrement} >-</button>
                            <p>{count}</p>
                            <button onClick={handleClickIncrement} >+</button>
                        </div>
                        <button className="button-add-count" onClick={handleAddProduct}>Agregar producto</button>;
                    </div>
                )}
        </>
    )
}

export default ItemCount