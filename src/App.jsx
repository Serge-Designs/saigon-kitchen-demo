import { useState, useEffect, useRef } from "react";
import content from "./content.js";

/* ═══════════════════════════════════════════
   HOOKS & HELPERS
   ═══════════════════════════════════════════ */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Fade({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

const section = (extra = {}) => ({
  padding: "clamp(60px, 10vw, 120px) clamp(24px, 5vw, 80px)",
  ...extra,
});

const label = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "11px",
  letterSpacing: "4px",
  textTransform: "uppercase",
  color: "var(--copper)",
  marginBottom: "16px",
  fontWeight: 500,
};

const heading = (extra = {}) => ({
  fontFamily: "'DM Serif Display', serif",
  fontSize: "clamp(30px, 5vw, 48px)",
  fontWeight: 400,
  lineHeight: 1.2,
  ...extra,
});

/* ═══════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(250,246,241,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--light-border)" : "1px solid transparent",
      transition: "all 0.3s ease",
      padding: "0 clamp(24px, 5vw, 80px)",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px",
      }}>
        <a href="#" style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "20px", color: "var(--charcoal)", textDecoration: "none",
        }}>
          Ember & <span style={{ fontStyle: "italic", color: "var(--copper)" }}>Bloom</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 32px)" }}>
          {["Menu", "About", "Visit"].map((t) => (
            <a key={t} href={`#${t.toLowerCase()}`} style={{
              fontSize: "13px", fontWeight: 500, color: "var(--charcoal)",
              textDecoration: "none", letterSpacing: "0.5px",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => e.target.style.color = "var(--copper)"}
              onMouseLeave={(e) => e.target.style.color = "var(--charcoal)"}
            >{t}</a>
          ))}
          <a href="#order" style={{
            fontSize: "12px", fontWeight: 600, letterSpacing: "1px",
            textTransform: "uppercase", textDecoration: "none",
            background: "var(--copper)", color: "white",
            padding: "10px 20px", borderRadius: "4px",
            transition: "background 0.2s",
          }}
            onMouseEnter={(e) => e.target.style.background = "var(--copper-light)"}
            onMouseLeave={(e) => e.target.style.background = "var(--copper)"}
          >Order</a>
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════
   HERO — Split layout
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "100vh",
    }}>
      {/* Left — Text */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "clamp(100px, 12vw, 160px) clamp(32px, 6vw, 100px) clamp(60px, 8vw, 120px)",
      }}>
        <div style={{ animation: "fadeUp 0.9s ease 0.2s both" }}>
          <div style={{
            ...label,
            marginBottom: "24px",
          }}>
            {content.cuisine} · {content.location}
          </div>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "20px",
          }}>
            Ember &<br />
            <span style={{ fontStyle: "italic", color: "var(--copper)" }}>Bloom</span>
          </h1>
          <p style={{
            fontSize: "clamp(16px, 1.8vw, 19px)",
            fontWeight: 300,
            color: "var(--warm-gray)",
            lineHeight: 1.7,
            maxWidth: "400px",
            marginBottom: "32px",
          }}>
            {content.tagline}
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#menu" style={{
              display: "inline-block", padding: "14px 32px",
              background: "var(--copper)", color: "white",
              textDecoration: "none", fontSize: "13px",
              fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase",
              borderRadius: "4px", transition: "background 0.2s",
            }}
              onMouseEnter={(e) => e.target.style.background = "var(--copper-light)"}
              onMouseLeave={(e) => e.target.style.background = "var(--copper)"}
            >View Menu</a>
            <a href="#visit" style={{
              display: "inline-block", padding: "14px 32px",
              background: "transparent", color: "var(--charcoal)",
              textDecoration: "none", fontSize: "13px",
              fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase",
              borderRadius: "4px", border: "1.5px solid var(--charcoal)",
              transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.target.style.background = "var(--charcoal)"; e.target.style.color = "white"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "var(--charcoal)"; }}
            >Find Us</a>
          </div>
        </div>
      </div>

      {/* Right — Image */}
      <div style={{
        position: "relative", overflow: "hidden",
        minHeight: "500px",
      }}>
        <img
          src={content.images.hero}
          alt="Ember & Bloom coffee"
          loading="eager"
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            animation: "fadeIn 1.2s ease both",
          }}
        />
      </div>

      {/* Mobile: stack vertically */}
      <style>{`
        @media (max-width: 768px) {
          div:has(> div:first-child > div > h1) {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════
   FEATURED DRINKS — Horizontal carousel
   ═══════════════════════════════════════════ */
function FeaturedDrinks() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  const arrowBtn = (dir) => ({
    position: "absolute", top: "50%", transform: "translateY(-50%)",
    [dir === -1 ? "left" : "right"]: "clamp(8px, 2vw, 24px)",
    width: "44px", height: "44px", borderRadius: "50%",
    background: "rgba(255,255,255,0.9)", border: "1px solid var(--light-border)",
    cursor: "pointer", fontSize: "18px", color: "var(--charcoal)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 2, transition: "all 0.2s",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  });

  return (
    <div style={{ ...section(), position: "relative" }}>
      <Fade>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={label}>Featured Drinks</div>
          <h2 style={heading()}>
            What We're <span style={{ fontStyle: "italic", color: "var(--copper)" }}>Pouring</span>
          </h2>
        </div>
      </Fade>

      <div style={{ position: "relative" }}>
        <button onClick={() => scroll(-1)} style={arrowBtn(-1)}
          onMouseEnter={(e) => e.target.style.background = "var(--copper)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.9)"}
          onMouseDown={(e) => e.target.style.color = "white"}
          onMouseUp={(e) => e.target.style.color = "var(--charcoal)"}
        >&larr;</button>

        <div className="drink-track" ref={trackRef}>
          {content.featuredDrinks.map((drink, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div className="drink-card" style={{
                background: "var(--card-bg)", borderRadius: "8px",
                overflow: "hidden", border: "1px solid var(--light-border)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img src={drink.image} alt={drink.name} loading="lazy" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                    onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "baseline", marginBottom: "8px",
                  }}>
                    <h3 style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "18px", fontWeight: 400,
                    }}>{drink.name}</h3>
                    <span style={{
                      fontFamily: "'DM Serif Display', serif",
                      color: "var(--copper)", fontSize: "16px",
                    }}>${drink.price}</span>
                  </div>
                  <p style={{
                    fontSize: "13px", color: "var(--warm-gray)",
                    fontWeight: 300, lineHeight: 1.5,
                  }}>{drink.desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <button onClick={() => scroll(1)} style={arrowBtn(1)}
          onMouseEnter={(e) => { e.target.style.background = "var(--copper)"; e.target.style.color = "white"; }}
          onMouseLeave={(e) => { e.target.style.background = "rgba(255,255,255,0.9)"; e.target.style.color = "var(--charcoal)"; }}
        >&rarr;</button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════ */
function About() {
  return (
    <div id="about" style={{
      ...section(),
      background: "white",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "clamp(32px, 5vw, 64px)",
        maxWidth: "1100px", margin: "0 auto", alignItems: "center",
      }}>
        <Fade>
          <div>
            <div style={label}>Our Story</div>
            <h2 style={heading({ marginBottom: "24px" })}>
              {content.aboutHeading}{" "}
              <span style={{ fontStyle: "italic", color: "var(--sage)" }}>{content.aboutAccent}</span>
            </h2>
            {content.aboutText.map((p, i) => (
              <p key={i} style={{
                fontSize: "16px", lineHeight: 1.8,
                color: "var(--warm-gray)", fontWeight: 300,
                marginBottom: i < content.aboutText.length - 1 ? "16px" : 0,
              }}>{p}</p>
            ))}
          </div>
        </Fade>
        <Fade delay={0.15}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "200px 200px",
            gap: "12px",
          }}>
            <div style={{ gridRow: "1 / 3", borderRadius: "6px", overflow: "hidden" }}>
              <img src={content.images.about1} alt="Coffee" loading="lazy" style={{
                width: "100%", height: "100%", objectFit: "cover",
              }} />
            </div>
            <div style={{ borderRadius: "6px", overflow: "hidden" }}>
              <img src={content.images.about2} alt="Latte art" loading="lazy" style={{
                width: "100%", height: "100%", objectFit: "cover",
              }} />
            </div>
            <div style={{ borderRadius: "6px", overflow: "hidden" }}>
              <img src={content.images.about3} alt="Pastries" loading="lazy" style={{
                width: "100%", height: "100%", objectFit: "cover",
              }} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ATMOSPHERE BREAK
   ═══════════════════════════════════════════ */
function Atmosphere() {
  return (
    <div style={{
      position: "relative", height: "45vh", minHeight: "280px",
      overflow: "hidden",
    }}>
      <img src={content.images.interior} alt="Cafe interior" loading="lazy" style={{
        width: "100%", height: "100%", objectFit: "cover",
        filter: "brightness(0.55)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        textAlign: "center", padding: "24px",
      }}>
        <Fade>
          <h2 style={{
            ...heading({ color: "var(--cream)", marginBottom: "12px" }),
          }}>
            {content.atmosphereHeading}{" "}
            <span style={{ fontStyle: "italic", color: "var(--copper-light)" }}>{content.atmosphereAccent}</span>
          </h2>
          <p style={{
            fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase",
            color: "rgba(250,246,241,0.5)", fontWeight: 400,
          }}>{content.atmosphereTags}</p>
        </Fade>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MENU
   ═══════════════════════════════════════════ */
function Menu() {
  const [activeTab, setActiveTab] = useState(content.menuCategories[0].id);

  return (
    <div id="menu" style={{
      ...section(),
      maxWidth: "900px",
      margin: "0 auto",
    }}>
      <Fade>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={label}>The Menu</div>
          <h2 style={heading()}>
            From Our <span style={{ fontStyle: "italic", color: "var(--sage)" }}>Counter</span>
          </h2>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: "clamp(16px, 3vw, 36px)", marginBottom: "48px", flexWrap: "wrap",
        }}>
          {content.menuCategories.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
              fontWeight: 500,
              color: activeTab === tab.id ? "var(--copper)" : "var(--warm-gray)",
              paddingBottom: "8px",
              borderBottom: activeTab === tab.id ? "2px solid var(--copper)" : "2px solid transparent",
              transition: "all 0.3s ease",
            }}>{tab.label}</button>
          ))}
        </div>

        {/* Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {(content.menuItems[activeTab] || []).map((item, i) => (
            <div key={`${activeTab}-${i}`} style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", gap: "16px",
              animation: `fadeUp 0.5s ease ${i * 0.06}s both`,
              paddingBottom: "20px",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                  <h4 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "18px", fontWeight: 400,
                  }}>{item.name}</h4>
                  {item.popular && (
                    <span style={{
                      fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase",
                      background: "var(--sage)", color: "white", fontWeight: 600,
                      padding: "3px 8px", borderRadius: "2px",
                    }}>Popular</span>
                  )}
                </div>
                <p style={{
                  color: "var(--warm-gray)", fontSize: "14px",
                  fontWeight: 300, lineHeight: 1.5,
                }}>{item.desc}</p>
              </div>
              <span style={{
                fontFamily: "'DM Serif Display', serif",
                color: "var(--copper)", fontSize: "17px",
                flexShrink: 0, fontWeight: 400,
              }}>${item.price}</span>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

/* ═══════════════════════════════════════════
   VISIT / FOOTER
   ═══════════════════════════════════════════ */
function Visit() {
  return (
    <>
      <div id="visit" style={{
        background: "var(--charcoal)", color: "var(--cream)",
        padding: "clamp(60px, 10vw, 100px) clamp(24px, 5vw, 80px)",
      }}>
        <Fade>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(40px, 5vw, 64px)",
            maxWidth: "950px", margin: "0 auto", textAlign: "center",
          }}>
            <div>
              <div style={{ ...label, color: "var(--copper-light)" }}>Hours</div>
              <div style={{ color: "rgba(250,246,241,0.6)", fontSize: "15px", lineHeight: 2.1, fontWeight: 300 }}>
                {content.hours.map((h, i) => <div key={i}>{h}</div>)}
              </div>
            </div>
            <div>
              <div style={{ ...label, color: "var(--copper-light)" }}>Location</div>
              <div style={{ color: "rgba(250,246,241,0.6)", fontSize: "15px", lineHeight: 2.1, fontWeight: 300 }}>
                <div>{content.address.street}</div>
                <div>{content.address.suite}</div>
                <div>{content.address.city}</div>
                <div style={{ marginTop: "8px" }}>{content.phone}</div>
              </div>
            </div>
            <div id="order">
              <div style={{ ...label, color: "var(--copper-light)" }}>Order</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                {content.orderPickupUrl && (
                  <a href={content.orderPickupUrl} style={{
                    background: "var(--copper)", color: "white", border: "none",
                    fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
                    padding: "13px 32px", fontWeight: 600,
                    textDecoration: "none", textAlign: "center",
                    width: "100%", maxWidth: "200px", borderRadius: "4px",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={(e) => e.target.style.background = "var(--copper-light)"}
                    onMouseLeave={(e) => e.target.style.background = "var(--copper)"}
                  >Order Pickup</a>
                )}
                {content.orderDeliveryUrl && (
                  <a href={content.orderDeliveryUrl} style={{
                    background: "transparent", color: "var(--copper)",
                    border: "1px solid var(--copper)",
                    fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
                    padding: "13px 32px",
                    textDecoration: "none", textAlign: "center",
                    width: "100%", maxWidth: "200px", borderRadius: "4px",
                    transition: "all 0.2s",
                  }}
                    onMouseEnter={(e) => { e.target.style.background = "var(--copper)"; e.target.style.color = "white"; }}
                    onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "var(--copper)"; }}
                  >Order Delivery</a>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Copyright */}
      <div style={{
        background: "var(--charcoal)",
        borderTop: "1px solid rgba(184,115,58,0.1)",
        textAlign: "center", padding: "28px 24px",
      }}>
        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "18px", color: "var(--cream)", marginBottom: "8px",
        }}>
          Ember & <span style={{ fontStyle: "italic", color: "var(--copper)" }}>Bloom</span>
        </div>
        <div style={{
          fontSize: "10px", letterSpacing: "3px", color: "rgba(250,246,241,0.3)",
          textTransform: "uppercase",
        }}>
          &copy; {new Date().getFullYear()} {content.name} &middot; {content.location} &middot; All Rights Reserved
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedDrinks />
      <About />
      <Atmosphere />
      <Menu />
      <Visit />
    </>
  );
}
