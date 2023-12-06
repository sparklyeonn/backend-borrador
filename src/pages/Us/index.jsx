// index.jsx dentro de la carpeta Us en pages, que se encuentra en carpeta SRC
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import "./styles.css";
import { useEffect, useState } from "react";
import getProducts from "../../services/products/getProducts";

const Us = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsService = async () => {
      try {
        const dataProducts = await getProducts();
        setProducts(dataProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProductsService();
  }, []);

  return (
    <Container className="container-store">
      <Row>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Us;
