import AppContainer from "../components/AppContainer"
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    
    setProducts([]);
    getProducts()
      .then((items) => {
        setProducts(items);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <AppContainer />
  )
}
