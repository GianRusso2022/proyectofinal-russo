import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Item from "./Item";
import { useParams } from "react-router-dom";

const AppContainer = () => {
    const { categoryId } = useParams();
    const [productos, setProducts] = useState([]);

    useEffect(() => {
        setProducts([])
        getProducts(categoryId)
            .then(items => setProducts(items))
            .catch(e => console.log(e))
    }, [categoryId])

    return (
        <div className="container d-flex flex-wrap justify-content-center">
            {productos.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        {...producto}
                    />
                );
            })}
        </div>
    );
}

export default AppContainer;