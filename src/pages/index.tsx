// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BannerSlider from '@/components/BannerSlider/BannerSlider';
import styles from '../styles/home.module.css'

export default function Homepage() {
  return (
    <>
      <section className={styles.banner}>
        <div className="baseContainer text-center">
          <BannerSlider />
          {/* <Image className="mx-auto" src="/assets/images/home/slider-03.png" width="300" height="200" alt="" /> */}
          <h1 className="whiteOrangeText">Explore a Rich <span>Culture</span> of Bengal with Authentic <span>Shola Craft.</span></h1>
          <p className="whiteOrangeText px-4 mb-10">
            Experience the ever-enchanting and authentic craftsmanship of the ancient <span>shola art and craft.</span>
            Choose from a wide range of Bengali wedding accessories, rakhis and home-décor items,<span> all under one roof!</span>
          </p>
          <Link className={`${styles.bannerWhiteBtn}`} href="">Get in touch with us</Link>
        </div>
      </section>
      <section className={styles.culture}>
        <div className="baseContainer">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-2'>
            <div className='md:col-span-1 relative'>
              <Image width="1000" height="1000" className="w-2/3 mx-auto" src="/assets/images/webp/woman-img.webp" alt="logo" />
            </div>
            <div className='md:col-span-1'>
              <h2 className='blackBlueText'><span>Sholapith</span> – A Home to the Bengal <span>Culture and Tradition</span></h2>
              <p className='mb-3'>
                Welcome to the illustrious world of Sholapith, where tradition and culture of the shola craft take an all-new dimension under the able guidance of Mrs. Nupur Saha and her visionary project of Nupur Silpalay.
              </p>
              <p className='mb-10'>
                Mesmerize your aesthetic senses with a wide variety of world-class shola handicraft and shola wood craft at the most sought-after shola handicraft store online. Discover the best shola craft of West Bengal right here, right away!
              </p>
              <Link href="" className='blueBtn'>Contact Us..</Link>
            </div>
          </div>

        </div>
      </section>
      <section className={styles.topPicks}>
        <div className="baseContainer text-center">
          <h2 className='blackBlueText'>Our <span>Top Picks</span> – Shola Wood Craft Par Excellence</h2>
          <p className='blackOrangeText'>
            Browse through a wide range of <span>eco-friendly handicraft</span> designed exclusive from sola wood, <br />
            and discover the <span>beautiful tradition</span> of West Bengal only at <span>Sholapith.</span> <br />
            We proudly exhibit the best shola craft of <span>West Bengal</span> here.
          </p>
        </div>
      </section>
      <section className={styles.events}>
        <div className="baseContainer text-center">
          <h2>Featured Events – Connecting with Our Roots</h2>
          <p>
            Let us take to you to some of the amazing events we had featured in. As much
            as we loved participating in them, and showcasing our skills, we are
            sure you would love reading about them the same way!
          </p>
        </div>
      </section>
      <section className={styles.products}>
        <div className="baseContainer text-center">
          <h2>Our Products – Sholapith Craft at its Best</h2>

        </div>
      </section>
      <section className={styles.video}>
        <div className="baseContainer text-center">
          <h2>A sneakpeak to our works</h2>
          <p className='blackOrangeText '>
            Discover the widest selection of some of the <span>finest art and craft</span> of West Bengal only at Sholapith Craft. <br />
            We are a reputed shola craft shop in <span>Berhampore</span> which thrives in preserving the <br />
            biggest West Bengal <span>tradition of craftwork.</span> Scroll down to know more!
          </p>
        </div>
      </section>
      <section className={styles.testimonials}>
        <div className="baseContainer text-center">
          <h2>Our Success Story – Client Testimonials</h2>
        </div>
      </section>
      <section className={styles.customized}>
        <div className="baseContainer text-center">
          <h2 className="blackBlueText">Get <span>Beautifully Customized</span> Shola Craft Work <br />
            at Your <span>Doorsteps</span> Today!</h2>
          <p className='mb-3'>At Sholapith, we promise to deliver every piece of craft and décor with equal dedication and sincerity. We are committed to customize your favourite piece of craft order; despite the numbers you order from our handicraft store online. We have tied up with the best courier partners to safely and swiftly deliver your favourite products.</p>
          <p className='mb-10'>
            No matter what you choose, or the quantity of the products, a single one or multiple items in one go, we will customize each of your shola handicraft with same zeal and quality at our workshop in Berhampore, West Bengal. With sheer love and passion towards our work, we assure to deliver nothing but the best-in-class shola work right at your doorsteps anywhere in India!
          </p>
          <Link className="blueBtn" href="">Get in touch</Link>
        </div>
      </section>
    </>
  );
};

