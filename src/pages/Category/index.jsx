import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DiscountsCarousel from "../../components/DiscountsCarousel";
import Header from "../../components/Header";
import ProductCart from "../../components/ProductCart";
import Container from "../../layout/Container";

import classes from "./Category.module.scss";
import Title from "../../components/Title";
import categories from "../../routes/categories";

const Category = () => {
  const { type } = useParams();
  const { pathname } = useLocation();
  const [data, setData] = useState(null);
  const { like, cart: cartItems } = useSelector((state) => state);
  const { text: title } = categories.find((item) => item.link === pathname);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/florisman_items?category=${type}`
      );
      const cards = await res.json();
      setData(cards);
    };
    fetchData();
  }, [type]);

  return (
    <>
      <Header />
      {title && <Title>{title}</Title>}
      <Container className={classes["cards"]}>
        {data &&
          data.map((card) => (
            <ProductCart
              key={card.id}
              data={card}
              className={classes["card-item"]}
              liked={card.id in like}
              selected={card.in in cartItems}
            />
          ))}
      </Container>
      <DiscountsCarousel />
    </>
  );
};

export default Category;
