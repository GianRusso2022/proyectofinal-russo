import AppContainer from "../components/AppContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts([]);
    
    getProducts(categoryId)
      .then((items) => {
        setProducts(items);
        
      })
      .catch((e) => console.log(e));
  }, [categoryId]);
  return (
    <AppContainer />
  )
}
