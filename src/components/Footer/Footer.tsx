import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from './footer.module.css'


// import styles from '@/components/Footer/footer.module.css'

export default function Footer() {
  return (
    <div className="footer flex items-center justify-between">
      <div>
        <h5 className={`${styles.foooterHeading}`}>Get in touch</h5>
        <ul className={`${styles.addressList}`}>
          <li>
            <span className={`${styles.footerIcon}`}>
              <Image className="w-6 h-6" width="100" height="100" src="/assets/images/home/foooter-map-icon.svg" alt="" />
            </span>
            <p className="address">
              141/A, A.C.Road, Khagra, Berhampore, Murshidabad, West Bengal - 742103
            </p>
          </li>
          <li>
            <span className={`${styles.footerIcon}`}>
              <Image className="w-6 h-6" width="100" height="100" src="/assets/images/home/foooter-phone-icon.svg" alt="" />
            </span>
            <Link href="tel:9775600370">+91 9775600370</Link>
          </li>
          <li>
            <span className={`${styles.footerIcon}`}>
              <Image className="w-6 h-6" width="100" height="100" src="/assets/images/home/foooter-email-icon.svg" alt="" />
            </span>
            <Link href="mailto:info@sholapith.com">info@sholapith.com</Link>
          </li>

        </ul>
        <Image className={`${styles.biswaBanglaLogo}`} height="300" width="200" src="/assets/images/webp/biswa-bangla-logo.webp" alt="" />
      </div>

      <div className="">
        <div className={`${styles.footerLogo}`}>
          <Image className="" width="200" height="200" src="/assets/images/home/logo-img.webp" alt="" />
        </div>
        <div className={`${styles.footerLogo}`}>
          <Image className="" width="200" height="200" src="/assets/images/home/footer-text-logo.svg" alt="" />
        </div>
      </div>

      <div>
        <h5 className={`${styles.foooterHeading}`}>Quick Link</h5>
        <ul className={`${styles.footerQuickLink}`}>
          <li><Link href="">About Us</Link></li>
          <li><Link href="">How we work</Link></li>
          <li><Link href="">Our Prodcuts</Link></li>
          <li><Link href="">Contact Us</Link></li>
        </ul>
        <ul className={`${styles.socialLinks}`}>
          <li>
            <Link href="">
              <Image className="h-6 w-6" height="100" width="100" src="/assets/images/home/facebook.svg" alt="facebook icon" />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image className="h-6 w-6" height="100" width="100" src="/assets/images/home/youtube.svg" alt="youtube icon" />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image className="h-6 w-6" height="100" width="100" src="/assets/images/home/linkdin.svg" alt="linkedin icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

