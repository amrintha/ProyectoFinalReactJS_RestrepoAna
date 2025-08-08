import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import FormCheckout from "../FormCheckout/FormCheckout"
import "./Checkout.css"
import { addDoc, collection } from "firebase/firestore"
import db from "../../db/db.js"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    }

    const sendOrder = (event) => {
        event.preventDefault();

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice()
        }

        uploadOrder(order);
    }

    const uploadOrder = async (order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);

            setOrderId(response.id);
        } catch (error) {
            console.log("Error")
        }
    }

    return (
        <div className="checkout">
            {
                orderId ? (
                    <div>
                        <h2>Orden de pedido generada con éxito!</h2>
                        <p>Guarde el número de orden: {orderId}</p>
                    </div>
                ) : (
                    <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder} />
                )
            }
        </div>
    )
}

export default Checkout