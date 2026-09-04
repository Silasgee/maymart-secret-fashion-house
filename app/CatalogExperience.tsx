"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Look = {
  id: number;
  name: string;
  category: string;
  image: string;
  alt: string;
};

const WHATSAPP_URL = "https://wa.me/message/LJTANQKTCEGXL1";

const looks: Look[] = [
  { id: 1, name: "Grey Hoodie Set", category: "Hoodies & Sets", image: "/assets/catalog/look-01.webp", alt: "Two people wearing matching grey hoodie and trouser sets" },
  { id: 2, name: "Two-Tone Hoodie Pair", category: "Hoodies & Sets", image: "/assets/catalog/look-02.webp", alt: "Back view of two people in charcoal and cream hoodies" },
  { id: 3, name: "Neutral Hoodie Set", category: "Hoodies & Sets", image: "/assets/catalog/look-03.webp", alt: "Model wearing a neutral hoodie and relaxed trousers" },
  { id: 4, name: "Grey Street Set", category: "Hoodies & Sets", image: "/assets/catalog/look-04.webp", alt: "Model wearing a grey hoodie and matching trousers" },
  { id: 5, name: "Maymart Logo Tees", category: "T-Shirts", image: "/assets/catalog/look-05.webp", alt: "White Maymart Secret logo T-shirts on mannequins" },
  { id: 6, name: "White Graphic Tees", category: "T-Shirts", image: "/assets/catalog/look-06.webp", alt: "Two white graphic T-shirts on mannequins" },
  { id: 7, name: "Black Monochrome Looks", category: "T-Shirts", image: "/assets/catalog/look-07.webp", alt: "Black shirt and trouser outfits on mannequins" },
  { id: 8, name: "Heritage Graphic Tees", category: "T-Shirts", image: "/assets/catalog/look-08.webp", alt: "Grey and red graphic T-shirts on mannequins" },
  { id: 9, name: "Colour Block Tees", category: "T-Shirts", image: "/assets/catalog/look-09.webp", alt: "Pink and purple graphic T-shirts on mannequins" },
  { id: 10, name: "Portrait Print Tees", category: "T-Shirts", image: "/assets/catalog/look-10.webp", alt: "White and black portrait print T-shirts on mannequins" },
  { id: 11, name: "Sport Graphic Tops", category: "T-Shirts", image: "/assets/catalog/look-11.webp", alt: "White graphic T-shirt and navy sport top on mannequins" },
  { id: 12, name: "White & Orange Tees", category: "T-Shirts", image: "/assets/catalog/look-12.webp", alt: "White and orange graphic T-shirts on mannequins" },
  { id: 13, name: "Red Football Jerseys", category: "Jerseys", image: "/assets/catalog/look-13.webp", alt: "Two red football jerseys on mannequins" },
  { id: 14, name: "Graphic Tee Pair", category: "T-Shirts", image: "/assets/catalog/look-14.webp", alt: "Pink and white graphic T-shirts on mannequins" },
  { id: 15, name: "Graphic Tees & Shorts", category: "T-Shirts", image: "/assets/catalog/look-15.webp", alt: "Two graphic T-shirt and shorts looks on mannequins" },
  { id: 16, name: "Red Matching Set", category: "Lifestyle", image: "/assets/catalog/look-16.webp", alt: "Group wearing matching printed tops and red trousers" },
  { id: 17, name: "Red Set Portrait", category: "Lifestyle", image: "/assets/catalog/look-17.webp", alt: "Group portrait in matching printed tops and red trousers" },
  { id: 18, name: "Red Set Story", category: "Lifestyle", image: "/assets/catalog/look-18.webp", alt: "Group arranged in matching printed tops and red trousers" },
  { id: 19, name: "Red Set Campaign", category: "Lifestyle", image: "/assets/catalog/look-19.webp", alt: "Campaign portrait in matching printed tops and red trousers" },
  { id: 20, name: "Blue Number Jerseys", category: "Jerseys", image: "/assets/catalog/look-20.webp", alt: "Two blue numbered jerseys on mannequins" },
  { id: 21, name: "Black & Red Jerseys", category: "Jerseys", image: "/assets/catalog/look-21.webp", alt: "Black and red numbered jerseys on mannequins" },
  { id: 22, name: "Orange Number Jerseys", category: "Jerseys", image: "/assets/catalog/look-22.webp", alt: "Orange and white numbered jerseys on mannequins" },
  { id: 23, name: "Grey & Pink Shorts", category: "Shorts", image: "/assets/catalog/look-23.webp", alt: "Grey and pink casual shorts" },
  { id: 24, name: "Black & Orange Shorts", category: "Shorts", image: "/assets/catalog/look-24.webp", alt: "Black and orange casual shorts" },
  { id: 25, name: "Pastel Shorts Range", category: "Shorts", image: "/assets/catalog/look-25.webp", alt: "Shorts in navy grey blue and lilac colours" },
  { id: 26, name: "Pastel Shorts Pair", category: "Shorts", image: "/assets/catalog/look-26.webp", alt: "Light blue and lilac shorts" },
  { id: 27, name: "Shorts Colour Range", category: "Shorts", image: "/assets/catalog/look-27.webp", alt: "Casual shorts arranged in several colours" },
  { id: 28, name: "Black Varsity Jacket", category: "Varsity Jackets", image: "/assets/catalog/look-28.webp", alt: "Model wearing a black varsity jacket" },
  { id: 29, name: "Green Varsity Jacket", category: "Varsity Jackets", image: "/assets/catalog/look-29.webp", alt: "Model wearing a green and cream varsity jacket" },
  { id: 30, name: "Monochrome Varsity Jacket", category: "Varsity Jackets", image: "/assets/catalog/look-30.webp", alt: "Model wearing a black and cream varsity jacket" },
  { id: 31, name: "Blue Varsity Jacket", category: "Varsity Jackets", image: "/assets/catalog/look-31.webp", alt: "Model wearing a blue and white varsity jacket" },
];

const byIds = (ids: number[]) => ids.map((id) => looks[id - 1]);

function inquiryLink(look: Look) {
  const message = `Hello Maymart Secret, I'm interested in ${look.name}. Please let me know the price, available sizes, and availability. Thank you.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function LookCard({
  look,
  variant = "standard",
  onOpen,
}: {
  look: Look;
  variant?: "standard" | "wide" | "tall" | "compact";
  onOpen: (look: Look) => void;
}) {
  return (
    <button
      className={`look-card look-card-${variant}`}
      type="button"
      onClick={() => onOpen(look)}
      aria-label={`View ${look.name}`}
    >
      <span className="look-card-image">
        <Image
          src={look.image}
          alt={look.alt}
          fill
          sizes={variant === "wide" ? "(max-width: 700px) 100vw, 58vw" : "(max-width: 700px) 78vw, 28vw"}
        />
        <span className="look-card-number">{String(look.id).padStart(2, "0")}</span>
      </span>
      <span className="look-card-meta">
        <span>{look.category}</span>
        <strong>{look.name}</strong>
        <i>View look ↗</i>
      </span>
    </button>
  );
}

function LookDialog({ look, onClose }: { look: Look; onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("modal-open");
    closeButton.current?.focus();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="look-dialog-backdrop" onMouseDown={(event) => event.currentTarget === event.target && onClose()}>
      <section className="look-dialog" role="dialog" aria-modal="true" aria-labelledby="look-dialog-title">
        <button ref={closeButton} className="look-dialog-close" type="button" onClick={onClose} aria-label="Close product view">
          <span />
          <span />
        </button>
        <div className="look-dialog-image">
          <Image src={look.image} alt={look.alt} fill sizes="(max-width: 760px) 100vw, 58vw" priority />
        </div>
        <div className="look-dialog-copy">
          <p>{look.category} / {String(look.id).padStart(2, "0")}</p>
          <h2 id="look-dialog-title">{look.name}</h2>
          <p className="look-dialog-note">Ask about price, sizes and availability.</p>
          <a className="button dialog-whatsapp" href={inquiryLink(look)} target="_blank" rel="noreferrer">
            Ask on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.classList.toggle("menu-open", open);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button className={`menu-toggle${open ? " is-open" : ""}`} type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
        <span />
        <span />
      </button>
      <div className={`menu-layer${open ? " is-open" : ""}`} aria-hidden={!open}>
        <button className="menu-scrim" type="button" onClick={close} tabIndex={open ? 0 : -1} aria-label="Close menu" />
        <nav className="menu-panel" id="mobile-menu" aria-label="Mobile navigation">
          <div className="menu-panel-head">
            <span>Maymart Secret</span>
            <span>Lagos / NG</span>
          </div>
          <div className="menu-links">
            {[
              ["01", "Home", "#top"],
              ["02", "Collection", "#collection"],
              ["03", "About", "#about"],
              ["04", "Contact", "#contact"],
            ].map(([number, label, href]) => (
              <a href={href} onClick={close} key={label} tabIndex={open ? 0 : -1}>
                <span>{number}</span>{label}<i>↘</i>
              </a>
            ))}
          </div>
          <div className="menu-socials">
            <a href="https://www.instagram.com/maymart_secret/" target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>Instagram ↗</a>
            <a href="https://www.tiktok.com/@maymart_secret" target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>TikTok ↗</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>WhatsApp ↗</a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default function CatalogExperience({ secondVideo }: { secondVideo: string }) {
  const [selected, setSelected] = useState<Look | null>(null);

  return (
    <>
      <section className="lookbook" id="collection" aria-labelledby="lookbook-title">
        <div className="lookbook-head shell">
          <div>
            <p className="eyebrow dark">The Maymart index / 31 looks</p>
            <h2 id="lookbook-title">Not a shop floor.<br /><em>A style archive.</em></h2>
          </div>
          <div className="lookbook-intro">
            <nav aria-label="Collection categories">
              <a href="#hoodies">Hoodies & sets</a>
              <a href="#tees">T-shirts</a>
              <a href="#jerseys">Jerseys</a>
              <a href="#shorts">Shorts</a>
              <a href="#jackets">Jackets</a>
            </nav>
          </div>
        </div>

        <section className="collection-story hoodies-story shell" id="hoodies" aria-labelledby="hoodies-title">
          <div className="story-title">
            <span>01 / Street sets</span>
            <h3 id="hoodies-title">Soft volume.<br />Hard presence.</h3>
          </div>
          <div className="hoodie-composition">
            <LookCard look={looks[0]} variant="wide" onOpen={setSelected} />
            <div className="hoodie-stack">
              <LookCard look={looks[1]} variant="compact" onOpen={setSelected} />
              <LookCard look={looks[2]} variant="compact" onOpen={setSelected} />
            </div>
            <LookCard look={looks[3]} variant="tall" onOpen={setSelected} />
          </div>
        </section>

        <section className="collection-story tees-story" id="tees" aria-labelledby="tees-title">
          <div className="story-title shell story-title-light">
            <span>02 / Graphic language</span>
            <h3 id="tees-title">The wall of tees.</h3>
            <p>Swipe to browse.</p>
          </div>
          <div className="tee-rail" aria-label="T-shirt collection">
            {byIds([5, 6, 7, 8, 9, 10, 11, 12, 14, 15]).map((look, index) => (
              <LookCard key={look.id} look={look} variant={index % 3 === 1 ? "tall" : "standard"} onOpen={setSelected} />
            ))}
          </div>
        </section>

        <section className="red-story" aria-labelledby="red-story-title">
          <div className="red-story-copy shell">
            <span>03 / Lifestyle story</span>
            <h3 id="red-story-title">One set.<br />Four frames.</h3>
          </div>
          <div className="red-story-grid shell">
            {byIds([16, 17, 18, 19]).map((look, index) => (
              <LookCard key={look.id} look={look} variant={index === 0 || index === 3 ? "wide" : "tall"} onOpen={setSelected} />
            ))}
          </div>
        </section>

        <section className="campaign-film-v2" aria-labelledby="film-title">
          <div className="campaign-film-v2-copy">
            <p>Campaign film / 002</p>
            <h3 id="film-title">Another colour set just dropped.</h3>
            <span>Plain tees / Colour in motion</span>
          </div>
          <div className="campaign-film-v2-media">
            <video autoPlay muted loop playsInline preload="metadata" poster="/assets/editorial/campaign-01.webp" aria-label="Maymart Secret second plain tee colour campaign">
              <source src={secondVideo} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="collection-story jerseys-story shell" id="jerseys" aria-labelledby="jerseys-title">
          <div className="story-title">
            <span>04 / Jerseys</span>
            <h3 id="jerseys-title">Numbers<br />with attitude.</h3>
          </div>
          <div className="jersey-grid">
            {byIds([13, 20, 21, 22]).map((look, index) => (
              <LookCard key={look.id} look={look} variant={index === 1 ? "wide" : "standard"} onOpen={setSelected} />
            ))}
          </div>
        </section>

        <section className="collection-story shorts-story" id="shorts" aria-labelledby="shorts-title">
          <div className="shorts-inner shell">
            <div className="story-title">
              <span>05 / Shorts</span>
              <h3 id="shorts-title">Pick a colour.<br />Keep it moving.</h3>
            </div>
            <div className="shorts-grid">
              {byIds([23, 24, 25, 26, 27]).map((look, index) => (
                <LookCard key={look.id} look={look} variant={index === 2 ? "wide" : "compact"} onOpen={setSelected} />
              ))}
            </div>
          </div>
        </section>

        <section className="collection-story jackets-story shell" id="jackets" aria-labelledby="jackets-title">
          <div className="story-title jackets-title">
            <span>06 / Varsity jackets</span>
            <h3 id="jackets-title">The final<br />layer.</h3>
          </div>
          <div className="jacket-grid">
            {byIds([28, 29, 30, 31]).map((look, index) => (
              <LookCard key={look.id} look={look} variant={index === 0 || index === 3 ? "tall" : "standard"} onOpen={setSelected} />
            ))}
          </div>
        </section>
      </section>

      {selected && <LookDialog look={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
