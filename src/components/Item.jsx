import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const Item = ({ precio, color, detalle, id, imagen, categoria, nombre, stock }) => {
    const navigate = useNavigate();
    const { addProduct } = useCartContext();
    return <div className="m-2">
        <div className="card" onClick={() => navigate(`/product/${id}`)}>
            <img src={imagen} alt="imagen-producto" className="card-img-top" />
            <div className="card-body d-flex justify-content-between">
                <span>{nombre}</span>
                <span>${precio}</span>
                <button className="btn btn-dark" onClick={(e) => {
                    e.stopPropagation();
                    addProduct({ precio, color, detalle, id, imagen, categoria, nombre, stock }, 1)
                }}>Agregar al carrito</button>
            </div>
        </div>
    </div>
}

export default Item;