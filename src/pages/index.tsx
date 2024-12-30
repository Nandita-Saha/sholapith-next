// pages/index.tsx
import React from 'react';
import Link from 'next/link';

export default function Homepage() {
  return (
    <>
      <section className='banner'>
        <div className="baseContainer">
          <h1>Explore a Rich <span>Culture</span> of Bengal with Authentic <span>Shola Craft.</span></h1>
          <p>
            Experience the ever-enchanting and authentic craftsmanship of the ancient <span>shola art and craft.</span>
            Choose from a wide range of Bengali wedding accessories, rakhis and home-décor items,<span> all under one roof!</span>
          </p>
          <Link href="">Get in touch with us</Link>
        </div>
      </section>
      <section className='culture'>
        <div className="baseContainer">
          <h2 className='black-blue-text'><span>Sholapith</span> – A Home to the Bengal <span>Culture and Tradition</span></h2>
          <p>
            Welcome to the illustrious world of Sholapith, where tradition and culture of the shola craft take an all-new dimension under the able guidance of Mrs. Nupur Saha and her visionary project of Nupur Silpalay.
          </p>
          <p>
            Mesmerize your aesthetic senses with a wide variety of world-class shola handicraft and shola wood craft at the most sought-after shola handicraft store online. Discover the best shola craft of West Bengal right here, right away!
          </p>
          <Link href="" className='blue-btn'>Contact Us..</Link>
        </div>
      </section>
      <section className='top-picks'>
        <div className="baseContainer text-center">
          <h2 className='black-blue-text'>Our <span>Top Picks</span> – Shola Wood Craft Par Excellence</h2>
          <p className='black-orange-text'>
            Browse through a wide range of <span>eco-friendly handicraft</span> designed exclusive from sola wood, <br />
            and discover the <span>beautiful tradition</span> of West Bengal only at <span>Sholapith.</span> <br />
            We proudly exhibit the best shola craft of <span>West Bengal</span> here.
          </p>
        </div>
      </section>
      <section className='events'>
        <div className="baseContainer text-center">
          <h2>Featured Events – Connecting with Our Roots</h2>
          <p>
            Let us take to you to some of the amazing events we had featured in. As much
            as we loved participating in them, and showcasing our skills, we are
            sure you would love reading about them the same way!
          </p>
        </div>
      </section>
      <section className='products'>
        <div className="baseContainer text-center">
          <h2>Our Products – Sholapith Craft at its Best</h2>

        </div>
      </section>
      <section className='video'>
        <div className="baseContainer text-center">
          <h2>A sneakpeak to our Works</h2>
          <p className='black-orange-text '>
            Discover the widest selection of some of the <span>finest art and craft</span> of West Bengal only at Sholapith Craft. <br />
            We are a reputed shola craft shop in <span>Berhampore</span> which thrives in preserving the <br />
            biggest West Bengal <span>tradition of craftwork.</span> Scroll down to know more!
          </p>
        </div>
      </section>
      <section className='testimonials'>
        <div className="baseContainer text-center">
          <h2>Our Success Story – Client Testimonials</h2>
        </div>
      </section>
      <section className='customized'>
        <div className="baseContainer text-center">
          <h2 className="black-blue-text">Get <span>Beautifully Customized</span> Shola Craft Work <br />
            at Your <span>Doorsteps</span> Today!</h2>
          <p>At Sholapith, we promise to deliver every piece of craft and décor with equal dedication and sincerity. We are committed to customize your favourite piece of craft order; despite the numbers you order from our handicraft store online. We have tied up with the best courier partners to safely and swiftly deliver your favourite products.</p>
          <p>
            No matter what you choose, or the quantity of the products, a single one or multiple items in one go, we will customize each of your shola handicraft with same zeal and quality at our workshop in Berhampore, West Bengal. With sheer love and passion towards our work, we assure to deliver nothing but the best-in-class shola work right at your doorsteps anywhere in India!
          </p>
          <Link className="blue-btn" href="">Get in touch</Link>
        </div>
      </section>
    </>
  );
};

