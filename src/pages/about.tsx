// pages/index.tsx
import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <section className="abtus-sec1">
        <div className="baseContainer">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='md:col-span-1'>

            </div>
            <div className='md:col-span-1'>
              <h2 className="black-blue-text">Enliven Your Ethnic Roots with <span>Wholesome</span> Craftsmanship</h2>
              <p>
                Headed by the impressive experience of Smt. Nupur Saha and her foundation Nupur Silpalay, Sholapith found its online establishment as its official online website. Sholapith defines the profound love and passion of Mrs. Saha for the Shola handicrafts, and describes her 25 years of rich experience aesthetically.
              </p>
              <p>
                The original establishment “Nupur Silpalay” got its physical store and workshop registered under the Government liaison of an SSI Unit (Small Scale Industries Unit) under the business category "Arts & Crafts". It is Mrs. Saha’s immense dedication as a proclaimed shola craft artisan, that the organization has ventured into an online community bringing out the finest wholesale and retail shola handicrafts all over the country.
              </p>

            </div>
          </div>
          <p>
            Having a humble beginning in 2012 at Berhampore, Murshidabad in West Bengal, this dream venture of Mrs. Saha set its stage into the market with the likes of Kadam, Dolungi, Roses and Chandramallika flowers, garlands, and Bengali wedding accessories such as Topor-Mukut, all created out of shola wood craft.
          </p>
          <p>
            It was later in the year 2013 that the District Industries Centre of West Bengal honoured the organization to be a coveted partner and provider of the shola craft work. This opportunity paved new horizons for the organization and helped it venture into designing and merchandizing new sholacraft models including Paltola Nouka, Mayurpankhi and howdah carriages.
          </p>
          <p>
            Sholapith is now ready to achieve newer verticals of success and revive the lost traditions and culture of West Bengal through its pan India presence online. Feel free to connect with us right away to know more!
          </p>
        </div>
      </section>
      <section className="abtus-sec2">
        <div className="baseContainer">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className='md:col-span-1'>

            </div>
            <div className='md:col-span-1'>

            </div>
            <div className='md:col-span-1'>

            </div>
          </div>
          <p>
            Sholapith is proud to have a fantastic presence with its widest range of creatively crafted shola products. We have mastered the design of over 2000 unique shola wood craft products under more than 15 categories and a rich audience base of 300 loyal customers visiting our physical store regularly.
          </p>
          <p>
            With a deep understanding of the rich cultural heritage we hold, we have committed ourselves in providing our customers with exactly what they are looking for. We have always aimed at providing a piece of our heart with every gift item we design.
          </p>
          <Link href="" className="">Get in touch</Link>
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
};

