import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import ProductCart from "../../components/ProductCart";
import Container from "../../layout/Container";
import classes from "./Category.module.scss";

const Category = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);
  const fetchData = () => {
    fetch("http://localhost:4000/products")
      .then((data) => {
        return data.json();
      })
      .then((cards) => {
        setData(cards);
      });
  };
  return (
    <>
      <Header />
      <Container className={classes["cards"]}>
        {data &&
          data.map((card) => (
            <ProductCart
              key={card.id}
              data={card}
              className={classes["card-item"]}
            />
          ))}
        <button onClick={fetchData}>fetchData</button>
      </Container>
    </>
  );
};

export default Category;
