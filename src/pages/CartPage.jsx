import { useCartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../api/orders";
import { updateManyProducts } from "../api/products";
import Button from "../components/Button";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const { getTotal, cart, emptyCart } = useCartContext();

  const createOrder = async () => {

    const items = cart.map(({ id, nombre, qty, precio }) => ({
      id,
      title: nombre,
      qty,
      price: precio,
    }));

    const order = {
      buyer: { name, phone, email },
      items,
      total: getTotal(),
    };

    const id = await addOrder(order);
    alert("Pedido realizado, su ID de compra es: " + id)
    await updateManyProducts(items)
    emptyCart();

  };
  return (
    <div className="container">
      {cart.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            gap: 50,
            height: 100,
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: 600 }}>{product.nombre}</div>
          <div className="container w-50 d-flex justify-content-center">
            <img src={product.imagen} alt="imagen" width="75px" />
          </div>
          <div>Cantidad : {product.qty}</div>
        </div>
      ))}
      <span
        style={{
          marginBottom: 50,
          textAlign: "right",
          width: "100%",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        Compra Actual: ${getTotal()}
      </span>
      <div style={{ display: "grid", gap: 10 }}>
        <span>Nombre</span>
        <input
          style={{ border: "1px solid black", height: 40 }}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Telefono</span>
        <input
          style={{ border: "1px solid black", height: 40 }}
          onChange={(e) => setPhone(e.target.value)}
        />
        <span>Email</span>
        <input
          style={{ border: "1px solid black", marginBottom: 15, height: 40 }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button onClick={createOrder}>Comprar</Button>
    </div>
  );
};

export default Cart;