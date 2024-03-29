import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { projectData } from "../../../data/projectData";

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
        // centeredSlides="true"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        loop="false"
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          "--swiper-pagination-color": "#fd9848",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "40px",
          "--swiper-pagination-bullet-horizontal-gap": "10px",
        }}
        breakpoints={{
          940: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1268: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {projectData.map((data) => {
          return (
            <SwiperSlide>
              <ProjectCard
                title={data.title}
                imageUrl={data.imageUrl}
                text={data.text}
                git={data.git}
                link={data.link}
              />
            </SwiperSlide>
          );
        })}{" "}
      </Swiper>
    </div>
  );
}
