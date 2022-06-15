import React from "react";
import { useSelector } from "react-redux";

import DiscountsCarousel from "../../components/DiscountsCarousel";
import Header from "../../components/Header";
import ProductCart from "../../components/ProductCart";
import Title from "../../components/Title";
import Container from "../../layout/Container";

import classes from "./Favorite.module.scss";

const Favorite = () => {
  const { like } = useSelector((state) => state);
  const items = Object.values(like);
  return (
    <>
      <Header />
      {items.length ? (
        <>
          <Title>Favorite products</Title>
          <Container className={classes["cards"]}>
            {items.map((card) => (
              <ProductCart
                key={card.id}
                data={card}
                className={classes["card-item"]}
                liked={card.id in like}
              />
            ))}
          </Container>
        </>
      ) : (
        <Title>You don't have favorite products. 😥</Title>
      )}

      <DiscountsCarousel />
    </>
  );
};

export default Favorite;
