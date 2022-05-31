import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Container from "../../layout/Container";
import ProductCart from "../ProductCart";

import "./Discounts.sytles.scss";
import classes from "./DiscountsCarousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const DiscountsCarousel = () => {
  const [data, setData] = useState(null);
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
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          onSlideChange={() => console.log(123)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide>
              <ProductCart key={item.id} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default DiscountsCarousel;
