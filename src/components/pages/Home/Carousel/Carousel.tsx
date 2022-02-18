/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "react-i18next";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./Carousel.module.scss";

export interface CarouselProps {
  className?: string;
}

const tkCarousel = tk.page.home.component.carousel;

export const Carousel: FC<CarouselProps> = ({ className }) => {
  const { t } = useTranslation();
  const images = [
    {
      src: "https://http2.mlstatic.com/D_NQ_857613-MLA49021410076_022022-OO.webp",
      alt: t(tkCarousel.imagesAlt[0])
    },
    {
      src: "https://http2.mlstatic.com/D_NQ_871855-MLA49126786565_022022-OO.webp",
      alt: t(tkCarousel.imagesAlt[1])
    },
    {
      src: "https://http2.mlstatic.com/D_NQ_710595-MLA49073821669_022022-OO.webp",
      alt: t(tkCarousel.imagesAlt[2])
    },
    {
      src: "https://http2.mlstatic.com/D_NQ_768910-MLA49062840237_022022-OO.webp",
      alt: t(tkCarousel.imagesAlt[3])
    }
  ];
  return (
    <div className={getClassName(classes.container, className)}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <div className={classes.imageContainer}>
              <img
                className={classes.image}
                src={image.src}
                alt={image.alt}
                title={image.alt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
