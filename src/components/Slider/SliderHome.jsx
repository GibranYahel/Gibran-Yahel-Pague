import { SliderData } from "../../data/Slider.Home";
import css from './Slider.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2900,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className={css.sContainer}>
      <Slider {...settings}>
      {SliderData.map((item) =>(
          <div className={css.card} key={item.id}>
            <div className={css.cardImg}>
              <img src={item.img} alt={item.detail} />
            </div>

            <div className={css.cardInfo}>
              <h1>{item.name}</h1>
              <h3>{item.detail}</h3>
              <p>{item.top}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
