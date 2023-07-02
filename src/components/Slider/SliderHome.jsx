import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../../data/Slider.Home";
import css from './Slider.module.css'
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks";

export const SliderHome = () => {
  const { theme } = useTheme();
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
          <div className={theme === 'dark' ? css.cardDark : css.cardLight} key={item.id}>
            <div className={css.cardImg}>
              <img src={item.img} alt={item.detail} />
            </div>

            <div className={css.cardInfo}>
              <h1>{item.name}</h1>
              <h3>{item.detail}</h3>
              { item.url.startsWith('/') ? (
                  <p><Link to={item.url}> See Project</Link></p>
                )
                : (
                  <p><a href={item.url}>See Project</a></p>
                ) }
              <p>{item.see}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
