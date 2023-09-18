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
          "--swiper-pagination-bullet-size": "30px",
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
        <SwiperSlide>
          <ProjectCard
            title={"Weather App"}
            imageUrl={"images/weatherapp.png"}
            text={
              "This is a vanila JavaScript weather app. You can add cities and delete them. The data is stored in local storgae, so when you come back to the app, you can still see the weather focust from cities of your choice."
            }
            git={"https://github.com/sansan-sakura/project-weather-app"}
            link={"https://sakura-world-weather-app.netlify.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title={"My Website"}
            imageUrl={"images/mysite.png"}
            text={
              "This is what you are currently visiting. I created with Astro.js/ React/ SCSS/ TypScript."
            }
            git={"https://github.com/sansan-sakura/my-website"}
            link={"https://cerulean-manatee-b311c3.netlify.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title={"News Site"}
            imageUrl={"images/berlin.png"}
            text={
              "I used api to fetch data from NEWS API. You can choose languages, so that you can read news from many countries in the langugae!! "
            }
            git={"https://github.com/sansan-sakura/project-news-site"}
            link={"https://tourmaline-cendol-e09256.netlify.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title={"Guess Who"}
            imageUrl={"images/guesswho.png"}
            text={
              "It is a game that you need to guess who is a secret person. Winning data will be stored in local storage, so you can compare results from the past."
            }
            git={"https://github.com/sansan-sakura/project-guess-who"}
            link={"https://guess-who2222.netlify.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title={"Chat bot"}
            imageUrl={"images/chatbot.png"}
            text={
              "You can ask recommendation for a museum in Europe from your preference"
            }
            git={"https://github.com/sansan-sakura/project-chatbot"}
            link={"https://helpful-piroshki-45c88f.netlify.app/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
