import { useParams, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../api/products";
import { useCartContext } from "../context/cartContext"
import Counter from "../components/Counter";

export const DetailPage = () => {
  const { productId } = useParams();
  const { addProduct } = useCartContext();
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProduct(productId).then((data) => setProduct(data))
  }, [productId])

  const handleAdd = (qty) => {
    addProduct(product, qty);
  };

  return (
    <div>
      <div className="card w-50 container">
        <img src={product.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">Color: {product.color}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.detalle}</li>
          <li className="list-group-item">${product.precio}</li>
          <li className="list-group-item"><span>Disponibles: {product.stock}</span></li>
        </ul>
        <div className="card-body">
          <Counter stock={product?.stock} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};
