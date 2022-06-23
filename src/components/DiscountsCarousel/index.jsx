import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Container from "../../layout/Container";
import ProductCart from "../ProductCart";

import "./Discounts.sytles.scss";
import "swiper/css";
import "swiper/css/navigation";
import classes from "./DiscountsCarousel.module.scss";

const DiscountsCarousel = () => {
  const [data, setData] = useState(null);
  const { like, cart: cartItems } = useSelector((state) => state);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/discounts");
      const discounts = await res.json();
      setData(discounts);
    };
    fetchData();
  }, []);
  return (
    <Container className={classes["discount"]}>
      <h2 className={classes["discount__title"]}>special discount</h2>
      {data && (
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={4}>
          {data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <ProductCart
                data={item}
                liked={item.id in like}
                selected={item.id in cartItems}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default DiscountsCarousel;
