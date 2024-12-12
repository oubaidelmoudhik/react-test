import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Product from "./Product";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((e) => {
        console.log("something is wrong:", e);
      });
  }, []);
  return (
    <>
      <Container className="my-5">
        <Row>
          {products.map((product) => (
            <Product
              key={product.id}
              img={product.images[0]}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
