import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ClientSlider.css';
import { Pagination, Navigation } from 'swiper/modules';
import CardQuote from '../../assets/images/quote.png';
import CardProfile from '../../assets/images/card__profile.png';
import CardProfile2 from '../../assets/images/card__profile2.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ClientSlider = () => {
  return (
    <div className="client__slider">
      <>
        <Swiper
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1.34}
          spaceBetween={24}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.34,
              spaceBetween: 24,
            },
          }}
        >
          <SwiperSlide>
            <div className="cards__slider">
              <div className="cards__slide">
                <img src={CardQuote} alt="" className="quote__img" />
                <p className="cards__slider__desc">
                  “MAKI transformed our outdated infrastructure into a modern,
                  cloud-native platform. Their expertise is unmatched. We
                  achieved faster time-to-market with their seamless project
                  management and skilled development team.”
                </p>
                <div className="card__slide__profile">
                  <img src={CardProfile} alt="" className="user__profile" />
                  <div className="card__slider__profile__details">
                    <h5>Leo Vaccaro</h5>
                    <p>CEO of Company</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cards__slider">
              <div className="cards__slide">
                <img src={CardQuote} alt="" className="quote__img" />
                <p className="cards__slider__desc">
                  “MAKI transformed our outdated infrastructure into a modern,
                  cloud-native platform. Their expertise is unmatched. We
                  achieved faster time-to-market with their seamless project
                  management and skilled development team.”
                </p>
                <div className="card__slide__profile">
                  <img src={CardProfile2} alt="" className="user__profile" />
                  <div className="card__slider__profile__details">
                    <h5>Leo Vaccaro</h5>
                    <p>CEO of Company</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cards__slider">
              <div className="cards__slide">
                <img src={CardQuote} alt="" className="quote__img" />
                <p className="cards__slider__desc">
                  “MAKI transformed our outdated infrastructure into a modern,
                  cloud-native platform. Their expertise is unmatched. We
                  achieved faster time-to-market with their seamless project
                  management and skilled development team.”
                </p>
                <div className="card__slide__profile">
                  <img src={CardProfile} alt="" className="user__profile" />
                  <div className="card__slider__profile__details">
                    <h5>Leo Vaccaro</h5>
                    <p>CEO of Company</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="client__slider__arrows">
          <div className="swiper-button-prev custom-prev">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.57 5.93005L3.5 12.0001L9.57 18.0701"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 12H3.67004"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="swiper-button-next custom-next">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="pagination__swiper__slider">
            <div className="swiper-pagination custom-pagination"></div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ClientSlider;
