import Image from "next/image";
import CatalogExperience, { MobileMenu } from "./CatalogExperience";

const WHATSAPP_URL = "https://wa.me/message/LJTANQKTCEGXL1";
const INSTAGRAM_URL = "https://www.instagram.com/maymart_secret/";
const TIKTOK_URL = "https://www.tiktok.com/@maymart_secret";
const EMAIL = "marthaobenobe@gmail.com";
const HERO_VIDEO_FILE =
  "Plain T-shirts in different colours, made for easy styling and effortless looks Pick your favourite colour and place your order today DM to order.mp4";
const HERO_VIDEO = `https://raw.githubusercontent.com/Silasgee/maymart-secret-fashion-house/main/public/assets/videos/${encodeURIComponent(HERO_VIDEO_FILE)}`;
const SECOND_VIDEO_FILE =
  "Another colour set just dropped More colours, more ways to style your plain tees. Simple, comfortable and easy to pair with anything Which colour are you picking  Available now — DM to order..mp4";
const SECOND_VIDEO = `https://raw.githubusercontent.com/Silasgee/maymart-secret-fashion-house/main/public/assets/videos/${encodeURIComponent(SECOND_VIDEO_FILE)}`;

function whatsappLink(item?: string) {
  const message = item
    ? `Hello Maymart Secret, I'm interested in ${item}. Please let me know the price, available sizes, and availability. Thank you.`
    : "Hello Maymart Secret, I'd like to browse the collection. Please show me what is currently available. Thank you.";
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

const tickerItems = [
  "Maymart Secret",
  "Streetwear",
  "Graphic tees",
  "Hoodie sets",
  "Jerseys",
  "Shorts",
  "Varsity jackets",
  "Lagos / Nigeria",
  "Ask on WhatsApp",
];

export default function Home() {
  return (
    <>
      <div className="site-intro" aria-hidden="true">
        <div className="site-intro-mark">
          <Image src="/assets/logo/maymart-secret-logo.webp" alt="" width={720} height={360} priority />
        </div>
        <span className="site-intro-line" />
        <p>Fashion House · Lagos</p>
      </div>

      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Maymart Secret home">
          <Image src="/assets/logo/maymart-secret-logo.webp" alt="Maymart Secret Fashion House" width={720} height={360} priority />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a className="header-cta" href={whatsappLink()} target="_blank" rel="noreferrer">
            Shop <span aria-hidden="true">↗</span>
          </a>
          <MobileMenu />
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero/maymart-hero-poster.webp"
            aria-hidden="true"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="hero-wash" />
          <div className="hero-side-note" aria-hidden="true">LAGOS · NG / EST. NOW</div>

          <div className="hero-content shell">
            <p className="eyebrow">Maymart Secret / Lagos</p>
            <h1 id="hero-title">Everyday.<br /><em>Unmissable.</em></h1>
            <p className="hero-copy">Clean shapes. Confident colour. Clothing made to make your everyday look feel like your own.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#collection">Explore the collection</a>
              <a className="button button-outline" href={whatsappLink()} target="_blank" rel="noreferrer">
                Shop on WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <a className="scroll-cue" href="#collection">
            <span>Scroll to discover</span><span aria-hidden="true">↓</span>
          </a>
        </section>

        <div className="category-ribbon" aria-label="Maymart Secret collection ticker">
          <div className="ribbon-track">
            {[0, 1].map((group) => (
              <div className="ribbon-group" aria-hidden={group === 1} key={group}>
                {tickerItems.map((item) => (
                  <span className="ribbon-item" key={item}>{item}<i /></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <CatalogExperience secondVideo={SECOND_VIDEO} />

        <section className="about about-v2" id="about">
          <div className="about-media">
            <Image
              src="/assets/editorial/campaign-03.webp"
              alt="Maymart Secret clothing displayed in the Lagos fashion space"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="media-stamp">Maymart / Lagos</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">This is Maymart Secret</p>
            <h2>Streetwear to<br />ceremony.</h2>
            <p className="about-lead">Maymart Secret is a fashion-forward Lagos brand blending urban streetwear with luxury craftsmanship.</p>
            <p>We specialise in high-quality T-shirts, hoodies and joggers designed for effortless style, alongside premium ready-to-wear and exquisite wedding outfits. From casual cool to elevated elegance, every look is made to bring comfort, confidence and individuality to your wardrobe.</p>

            <dl className="brand-details" aria-label="Maymart Secret brand details">
              <div>
                <dt>Based in</dt>
                <dd>Lagos State</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
              </div>
              <div>
                <dt>TikTok</dt>
                <dd><a href={TIKTOK_URL} target="_blank" rel="noreferrer">@maymart_secret ↗</a></dd>
              </div>
              <div>
                <dt>Facebook</dt>
                <dd>Maymart Secret Fashion House</dd>
              </div>
            </dl>

            <a className="text-link" href={whatsappLink()} target="_blank" rel="noreferrer">
              Ask what is available <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="shop-flow shell" aria-labelledby="shop-flow-title">
          <div className="shop-flow-heading">
            <p className="eyebrow dark">From look to WhatsApp</p>
            <h2 id="shop-flow-title">See it.<br />Open it.<br /><em>Ask.</em></h2>
          </div>
          <div className="shop-flow-steps">
            <article><span>01</span><h3>Browse</h3><p>Move through the collection by clothing category.</p></article>
            <article><span>02</span><h3>Open a look</h3><p>Tap any picture for a larger, cleaner product view.</p></article>
            <article><span>03</span><h3>Ask directly</h3><p>Send the product name to Maymart Secret on WhatsApp.</p></article>
          </div>
        </section>

        <section className="closing-cta closing-cta-v2" id="contact">
          <div className="closing-logo">
            <Image src="/assets/logo/maymart-secret-logo.webp" alt="Maymart Secret Fashion House" width={720} height={360} />
          </div>
          <p>Found your look?</p>
          <h2>Ask about your size.</h2>
          <a className="button button-accent" href={whatsappLink()} target="_blank" rel="noreferrer">
            Continue on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="footer shell">
        <p>© {new Date().getFullYear()} Maymart Secret</p>
        <p>Lagos, Nigeria</p>
        <div className="footer-socials" aria-label="Maymart Secret social media">
          <a href={`mailto:${EMAIL}`}>Email <span aria-hidden="true">↗</span></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer">TikTok <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </>
  );
}
