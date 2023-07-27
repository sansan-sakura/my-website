import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import ProjectCard from "../ProjectCard";
import style from "./ProjectCarousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef } from "react";

export default function ProjectCarousel() {
  return (
    <div className={style.carousel}>
      <Swiper
        grabCursor="true"
        centeredSlides="true"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        loop="true"
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "20px",
          "--swiper-pagination-bullet-horizontal-gap": "10px",
          "swiper-button-next-color": "red",
        }}
      >
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
