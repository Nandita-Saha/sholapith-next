import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import styles from './productSlider.module.css'
// import { sliders } from "@/configs/slider-config"

export default function ProductSlider() {
  return (
    <div className=''>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        centeredSlides={true}
        // navigation={{
        //   prevEl: '.swiper-button-prev',
        //   nextEl: '.swiper-button-next',
        // }}
        loop={true}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation]}
        className="prodSwiper"
      >
        <SwiperSlide>
          <div className={styles.topProductItem}>
            <Image width="300" height="200" className="" src="/assets/images/webp/top-product-1.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.topProductItem}>
            <Image width="300" height="200" className="" src="/assets/images/webp/top-product-3.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.topProductItem}>
            <Image width="300" height="200" className="" src="/assets/images/webp/top-product-2.webp" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.topProductItem}>
            <Image width="300" height="200" className="" src="/assets/images/webp/top-product-4.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.topProductItem}>
            <Image width="300" height="200" className="" src="/assets/images/webp/top-product-5.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.topProductItem}>
            <Image width="300" height="200" className="" src="/assets/images/webp/top-product-6.webp" alt="" />
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
