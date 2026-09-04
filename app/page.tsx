import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/message/LJTANQKTCEGXL1";
const INSTAGRAM_URL = "https://www.instagram.com/maymart_secret/";
const TIKTOK_URL = "https://www.tiktok.com/@maymart_secret";
const HERO_VIDEO_FILE =
  "Plain T-shirts in different colours, made for easy styling and effortless looks Pick your favourite colour and place your order today DM to order.mp4";
const HERO_VIDEO = `https://raw.githubusercontent.com/Silasgee/maymart-secret-fashion-house/main/public/assets/videos/${encodeURIComponent(HERO_VIDEO_FILE)}`;
const SECOND_VIDEO_FILE =
  "Another colour set just dropped More colours, more ways to style your plain tees. Simple, comfortable and easy to pair with anything Which colour are you picking  Available now — DM to order..mp4";
const SECOND_VIDEO = `https://raw.githubusercontent.com/Silasgee/maymart-secret-fashion-house/main/public/assets/videos/${encodeURIComponent(SECOND_VIDEO_FILE)}`;

function whatsappLink(item?: string) {
  const message = item ? ` about ${item}` : "";
  return `${WHATSAPP_URL}?text=${encodeURIComponent(`Hello Maymart Secret, I’d like to enquire${message}.`)}`;
}

const collections = [
  {
    number: "01",
    name: "Hoodies",
    copy: "Ask about the hoodies currently available.",
  },
  {
    number: "02",
    name: "Trousers",
    copy: "Find a pair for an easy, coordinated look.",
  },
  {
    number: "03",
    name: "Thick polos",
    copy: "Explore current colours and available sizes.",
  },
];

export default function Home() {
  return (
    <>
      <div className="site-intro" aria-hidden="true">
        <div className="site-intro-mark">
          <Image
            src="/assets/logo/maymart-secret-logo.webp"
            alt=""
            width={720}
            height={360}
            priority
          />
        </div>
        <span className="site-intro-line" />
        <p>Fashion House · Lagos</p>
      </div>

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Maymart Secret home">
          <Image
            src="/assets/logo/maymart-secret-logo.webp"
            alt="Maymart Secret Fashion House"
            width={720}
            height={360}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#moments">Gallery</a>
        </nav>

        <a
          className="header-cta"
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
        >
          Shop <span aria-hidden="true">↗</span>
        </a>
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
            <source
              src={HERO_VIDEO}
              type="video/mp4"
            />
          </video>
          <div className="hero-wash" />

          <div className="hero-side-note" aria-hidden="true">
            LAGOS · NG / EST. NOW
          </div>

          <div className="hero-content shell">
            <p className="eyebrow">Maymart Secret / Lagos</p>
            <h1 id="hero-title">
              Everyday.
              <br />
              <em>Unmissable.</em>
            </h1>
            <p className="hero-copy">
              Clean shapes. Confident colour. Clothing made to make your everyday
              look feel like your own.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#collection">
                Explore the collection
              </a>
              <a
                className="button button-outline"
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
              >
                Shop on WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <a className="scroll-cue" href="#collection">
            <span>Scroll to discover</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <div className="category-ribbon" aria-label="Clothing categories">
          <div className="ribbon-track">
            <span>Hoodies</span><i />
            <span>Trousers</span><i />
            <span>Thick polos</span><i />
            <span>Plain tees</span><i />
            <span>Hoodies</span><i />
            <span>Trousers</span><i />
            <span>Thick polos</span><i />
            <span>Plain tees</span><i />
          </div>
        </div>

        <section className="collection section shell" id="collection">
          <div className="section-heading">
            <p className="eyebrow dark">The current edit</p>
            <h2>Good basics.<br />Strong presence.</h2>
            <p>
              Everyday pieces shown with colour, clarity and room for your own
              style.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card feature-main">
              <Image
                src="/assets/editorial/look-04.webp"
                alt="Colourful Maymart Secret clothing arranged on a gold rail"
                fill
                sizes="(max-width: 760px) 100vw, 58vw"
              />
              <div className="image-caption">
                <div>
                  <p>Colour story / 001</p>
                  <h3>Plain tees</h3>
                </div>
                <a
                  href={whatsappLink("plain tees")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Enquire about Maymart Secret plain tees on WhatsApp"
                >
                  Enquire <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className="feature-card feature-detail">
              <Image
                src="/assets/editorial/look-03.webp"
                alt="Close view of navy, pink and mint Maymart Secret clothing"
                fill
                sizes="(max-width: 760px) 100vw, 34vw"
              />
              <div className="corner-label">Navy / Pink / Mint</div>
            </article>
          </div>

          <div className="collection-list">
            {collections.map((item) => (
              <article className="collection-row" key={item.name}>
                <span>{item.number}</span>
                <h3>{item.name}</h3>
                <p>{item.copy}</p>
                <a
                  href={whatsappLink(item.name.toLowerCase())}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Enquire about ${item.name} on WhatsApp`}
                >
                  Enquire <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-media">
            <Image
              src="/assets/editorial/campaign-03.webp"
              alt="Maymart Secret outfits displayed on mannequins in the Lagos fashion space"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="media-stamp">Maymart / Lagos</span>
          </div>

          <div className="about-copy">
            <p className="eyebrow">This is Maymart Secret</p>
            <h2>Wear the colour.<br />Keep it effortless.</h2>
            <p className="about-lead">
              Maymart Secret is a Lagos-based clothing brand offering hoodies,
              trousers, thick polos and other everyday pieces.
            </p>
            <p>
              The focus is simple: clothes that stand out through shape, colour
              and the way you style them.
            </p>
            <a
              className="text-link"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              Ask what is available <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="why section shell" aria-labelledby="why-title">
          <div className="why-heading">
            <p className="eyebrow dark">Why Maymart Secret</p>
            <h2 id="why-title">Style with<br />nothing forced.</h2>
          </div>
          <div className="why-list">
            <article>
              <span>01</span>
              <div>
                <h3>Colour with confidence</h3>
                <p>From grounded navy to bright pink, mint, blue and yellow.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Clean, wearable shapes</h3>
                <p>Simple pieces that leave room for personal styling.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>A direct way to shop</h3>
                <p>Ask about current pieces, sizes and prices on WhatsApp.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="moments" id="moments" aria-labelledby="moments-title">
          <div className="moments-intro shell">
            <p className="eyebrow">Fashion moments / Lagos</p>
            <h2 id="moments-title">In the Maymart world.</h2>
          </div>
          <div className="campaign-film shell">
            <div className="campaign-film-copy">
              <p className="eyebrow dark">Campaign film / 002</p>
              <h3>Another colour set just dropped.</h3>
              <p>
                More colours and more ways to style the everyday. Pick your
                favourite, then ask Maymart Secret about available sizes.
              </p>
              <a
                className="button button-film"
                href={whatsappLink("new plain tee colour set")}
                target="_blank"
                rel="noreferrer"
              >
                Ask about this drop <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="campaign-film-media">
              <video
                className="campaign-film-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/assets/editorial/campaign-01.webp"
                aria-label="Maymart Secret second plain tee colour campaign"
              >
                <source src={SECOND_VIDEO} type="video/mp4" />
              </video>
              <span>02 / Colour in motion</span>
            </div>
          </div>
          <div className="editorial-grid shell">
            <figure className="editorial-frame frame-one">
              <Image
                src="/assets/editorial/campaign-05.webp"
                alt="Maymart Secret neutral and navy pieces displayed beside a mannequin"
                fill
                sizes="(max-width: 720px) 100vw, 42vw"
              />
            </figure>
            <figure className="editorial-frame frame-two">
              <Image
                src="/assets/editorial/campaign-04.webp"
                alt="Close view of Maymart Secret blue, navy and neutral pieces"
                fill
                sizes="(max-width: 720px) 76vw, 28vw"
              />
            </figure>
            <div className="editorial-note">
              <span>NEW COLOUR SET</span>
              <p>More colour. More ways to style the everyday.</p>
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="closing-logo">
            <Image
              src="/assets/logo/maymart-secret-logo.webp"
              alt="Maymart Secret Fashion House"
              width={720}
              height={360}
            />
          </div>
          <p>Seen something you like?</p>
          <h2>Let’s find your next look.</h2>
          <a
            className="button button-accent"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            Shop on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="footer shell">
        <p>© {new Date().getFullYear()} Maymart Secret</p>
        <p>Lagos, Nigeria</p>
        <div className="footer-socials" aria-label="Maymart Secret social media">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram <span aria-hidden="true">↗</span>
          </a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer">
            TikTok <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </>
  );
}
