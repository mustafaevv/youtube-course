import React from "react";
import Badge from "../../components/Badge";
import CategoriesBlock from "../../components/CategoriesBlock";
import DiscountsCarousel from "../../components/DiscountsCarousel";
import Header from "../../components/Header";
import Orderform from "../../components/Orderform";

const Home = () => {
  return (
    <>
      <Header />
      <Badge />
      <CategoriesBlock />
      <DiscountsCarousel />
      <Orderform />
    </>
  );
};

export default Home;
