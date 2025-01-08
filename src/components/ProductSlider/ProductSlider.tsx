import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
// import { sliders } from "@/configs/slider-config"

export default function ProductSlider() {
  return (
    <div className=''>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        // navigation={{
        //   prevEl: '.swiper-button-prev',
        //   nextEl: '.swiper-button-next',
        // }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className="">
                <Image width="300" height="200" className="" src="/assets/images/home/slider-01.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
                <Image width="300" height="200" className="" src="/assets/images/home/slider-02.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
                <Image width="300" height="200" className="" src="/assets/images/home/slider-03.png" alt="" />
            </div>
          </SwiperSlide>
       
          {/* {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className=''>
            <div className="featureBox relative">
              <Image
                className="inline-block z-10 h-full w-full"
                height="500"
                width="300"
                src={slider.src}
                alt={slider.alt}
                priority={true}
              />
            <Link
              href={slider?.link} target='_blank'
              className={`hover-box w-full h-full absolute z-50 top-0 left-0 flex items-center justify-center bg-[#000000b5] `}
            >
              <p className="proj-name text-center text-white text-2xl w-3/4 mx-auto ">
                {slider?.name}
              </p>
            </Link>
            </div>

            </div>
          </SwiperSlide>
        ))} */}



      </Swiper>
    </div>
  );
}
