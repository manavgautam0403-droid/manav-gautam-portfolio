import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, MoveRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manav Gautam — CSE Student & Curious Builder" },
      {
        name: "description",
        content:
          "Meet Manav Gautam, a first-year Computer Science student at JECRC University in Jaipur, exploring technology, entrepreneurship, and new ideas.",
      },
      { property: "og:title", content: "Manav Gautam — CSE Student & Curious Builder" },
      {
        property: "og:description",
        content: "Computer Science, new ideas, and the things I'm learning along the way.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});

const navigation = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Interests", href: "#interests" },
  { label: "Projects", href: "#projects" },
];

function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useBotpressChat();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="portfolio-shell min-h-screen overflow-hidden bg-background text-foreground">
      <header className="portfolio-header">
        <div className="portfolio-header-inner">
          <a aria-label="Manav Gautam home" className="portfolio-wordmark" href="#home" onClick={closeMobileMenu}>
            mg<span aria-hidden="true" className="portfolio-mark-period">.</span>
          </a>
          <nav aria-label="Main navigation" className="portfolio-desktop-nav">
            {navigation.map((item) => (
              <a key={item.href} className="portfolio-nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button variant="outline" asChild className="portfolio-header-contact">
            <a href="#contact">
              Let’s talk <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="portfolio-menu-toggle"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {mobileMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="portfolio-mobile-nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMobileMenu}>
                {item.label} <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
            <a href="#contact" onClick={closeMobileMenu}>
              Contact <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>

      <section id="home" className="portfolio-hero portfolio-container">
        <div className="portfolio-hero-copy">
          <div className="portfolio-status"><span aria-hidden="true" /> JAIPUR, INDIA <span className="portfolio-status-separator">/</span> OPEN TO WHAT’S NEXT</div>
          <h1>Manav<br /><span>Gautam.</span></h1>
          <p className="portfolio-hero-role">First-year B.Tech CSE (Core) student <span>at JECRC University</span></p>
          <p className="portfolio-hero-intro">
            Curious about how technology can turn good ideas into something meaningful. Learning, exploring, and building one step at a time.
          </p>
          <div className="portfolio-hero-actions">
            <Button asChild size="lg">
              <a href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <a className="portfolio-text-link" href="#about">A little about me <ArrowDown aria-hidden="true" /></a>
          </div>
        </div>
        <div className="portfolio-profile-wrap">
          <div className="portfolio-profile" role="img" aria-label="Profile photo placeholder for Manav Gautam">
            <div className="portfolio-profile-topline"><span>PROFILE / 01</span><span>MG</span></div>
            <div className="portfolio-profile-art" aria-hidden="true">
              <svg className="portfolio-portrait" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="portfolio-portrait-ring" cx="150" cy="122" r="83" />
                <path className="portfolio-portrait-figure" d="M105 124c0-29 19-51 45-51s45 22 45 51v12c0 26-20 47-45 47s-45-21-45-47v-12Z" />
                <path className="portfolio-portrait-figure" d="M65 301c7-60 41-94 85-94s78 34 85 94H65Z" />
                <path className="portfolio-portrait-accent" d="M105 119c2-30 20-48 45-48 20 0 36 11 42 32-15 1-27-3-38-13-12 12-29 21-49 29Z" />
                <path className="portfolio-portrait-line" d="M117 135h.1m65-.1h.1m-42 27c7 6 15 6 22 0" />
                <path className="portfolio-portrait-line" d="M40 300h220" />
              </svg>
              <div className="portfolio-profile-placeholder">YOUR PHOTO GOES HERE</div>
            </div>
            <div className="portfolio-profile-caption"><span>MANAV GAUTAM</span><span>STUDENT · BUILDER · LEARNER</span></div>
            <span className="portfolio-profile-corner portfolio-corner-top" aria-hidden="true" />
            <span className="portfolio-profile-corner portfolio-corner-bottom" aria-hidden="true" />
          </div>
          <span className="portfolio-profile-index" aria-hidden="true">26<span>°</span> 54′ 30″ N&nbsp; / &nbsp;75° 47′ 45″ E</span>
        </div>
        <a className="portfolio-scroll-hint" aria-label="Scroll to about section" href="#about">
          <span>SCROLL TO EXPLORE</span><span className="portfolio-scroll-line" /><ArrowDown aria-hidden="true" />
        </a>
        <span className="portfolio-hero-index" aria-hidden="true">01 — 05</span>
      </section>

      <section id="about" className="portfolio-section portfolio-section-rule portfolio-container">
        <SectionEyebrow number="01" label="A LITTLE ABOUT ME" />
        <div className="portfolio-about-grid">
          <h2>Curious by nature.<br /><span>Optimistic by choice.</span></h2>
          <div className="portfolio-about-copy">
            <p>I’m a first-year Computer Science student at JECRC University, Jaipur, excited about the possibilities technology opens up.</p>
            <p>Outside the classroom, I’m drawn to innovation and entrepreneurship—ideas with the potential to make a real difference. Right now, I’m focused on learning software development, staying curious, and seeing where the next good question takes me.</p>
            <div className="portfolio-about-footnote"><span aria-hidden="true" /> ALWAYS LEARNING. ALWAYS LOOKING AHEAD.</div>
          </div>
        </div>
      </section>

      <section id="education" className="portfolio-section portfolio-section-rule portfolio-container">
        <SectionEyebrow number="02" label="EDUCATION" />
        <div className="portfolio-section-heading"><h2>Where I’m learning.</h2><span>THE ROAD SO FAR</span></div>
        <div className="portfolio-education-list">
          <article className="portfolio-education-row portfolio-current-study">
            <div className="portfolio-study-year">2026<span>—</span>NOW</div>
            <div className="portfolio-study-info"><h3>B.Tech, Computer Science &amp; Engineering</h3><p>Core · JECRC University</p></div>
            <span className="portfolio-study-badge"><span aria-hidden="true" /> IN PROGRESS</span>
            <ArrowUpRight aria-hidden="true" className="portfolio-study-arrow" />
          </article>
          <article className="portfolio-education-row">
            <div className="portfolio-study-year">2026</div>
            <div className="portfolio-study-info"><h3>Class 12</h3><p>SVVM Public School</p></div>
            <span className="portfolio-study-badge portfolio-study-complete">COMPLETED</span>
            <ArrowUpRight aria-hidden="true" className="portfolio-study-arrow" />
          </article>
          <article className="portfolio-education-row">
            <div className="portfolio-study-year">2024</div>
            <div className="portfolio-study-info"><h3>Class 10</h3><p>School education</p></div>
            <span className="portfolio-study-badge portfolio-study-complete">COMPLETED</span>
            <ArrowUpRight aria-hidden="true" className="portfolio-study-arrow" />
          </article>
        </div>
      </section>

      <section id="interests" className="portfolio-section portfolio-section-rule portfolio-container">
        <SectionEyebrow number="03" label="THINGS THAT SPARK MY CURIOSITY" />
        <div className="portfolio-section-heading portfolio-interest-heading"><h2>Always exploring.</h2><p>A few areas I keep coming back to.</p></div>
        <div className="portfolio-interest-grid">
          <Interest number="01" title="Web development" detail="Bringing ideas to life on the web." />
          <Interest number="02" title="Artificial intelligence" detail="Thinking about what becomes possible." />
          <Interest number="03" title="Entrepreneurship" detail="Where bold ideas meet real-world impact." />
          <Interest number="04" title="Cricket" detail="A favourite beyond the classroom." />
          <Interest number="05" title="Aviation" detail="Always looking up and looking ahead." />
        </div>
      </section>

      <section id="projects" className="portfolio-section portfolio-section-rule portfolio-container">
        <SectionEyebrow number="04" label="AN IDEA IN PROGRESS" />
        <div className="portfolio-project">
          <div className="portfolio-project-copy">
            <span className="portfolio-project-index">CONCEPT PROJECT <span>·</span> 001</span>
            <h2>Meet FitPulse<span>.</span></h2>
            <p>A concept for an AI-powered fitness platform—an early exploration of how technology could bring a more personal touch to the fitness journey.</p>
            <div className="portfolio-project-tags"><span>AI</span><span>FITNESS</span><span>EARLY CONCEPT</span></div>
          </div>
          <div className="portfolio-project-visual" role="img" aria-label="FitPulse concept, an AI-powered fitness platform idea">
            <div className="portfolio-fitpulse-head"><span>FITPULSE</span><span>CONCEPT / 001</span></div>
            <div className="portfolio-pulse-frame" aria-hidden="true">
              <div className="portfolio-pulse-topline"><span>YOUR PACE.</span><span>YOUR PROGRESS.</span></div>
              <svg className="portfolio-pulse-graphic" viewBox="0 0 460 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="portfolio-pulse-baseline" d="M1 67H459" />
                <path className="portfolio-pulse-path" d="M1 67h72l16-10 17 15 22-25 17 54 21-87 23 112 24-94 18 61 20-38 17 12h66l16-10 18 11h88" />
              </svg>
              <div className="portfolio-pulse-legend"><span><i aria-hidden="true" /> A PERSONAL APPROACH TO FITNESS</span><ArrowDownRight aria-hidden="true" /></div>
            </div>
            <div className="portfolio-fitpulse-foot"><span>IDEA / 2026</span><span>MADE OF CURIOSITY <span aria-hidden="true">↗</span></span></div>
          </div>
        </div>
      </section>

      <section id="contact" className="portfolio-contact portfolio-container">
        <SectionEyebrow number="05" label="HAVE A QUESTION OR AN IDEA?" />
        <div className="portfolio-contact-main">
          <div><h2>Let’s start<br /><span>a conversation.</span></h2><p>Always glad to connect with curious people and new ideas.</p></div>
          <Button asChild size="lg" className="portfolio-contact-cta">
            <a href="mailto:your.email@example.com">Say hello <MoveRight aria-hidden="true" /></a>
          </Button>
        </div>
        <div className="portfolio-contact-links">
          <a href="mailto:your.email@example.com"><span><Mail aria-hidden="true" /> EMAIL</span><span>your.email@example.com <ArrowUpRight aria-hidden="true" /></span></a>
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer"><span><Github aria-hidden="true" /> GITHUB</span><span>github.com/your-username <ArrowUpRight aria-hidden="true" /></span></a>
          <a href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noreferrer"><span><Linkedin aria-hidden="true" /> LINKEDIN</span><span>linkedin.com/in/your-username <ArrowUpRight aria-hidden="true" /></span></a>
        </div>
        <footer className="portfolio-footer"><a aria-label="Back to the top" href="#home">mg<span>.</span></a><span>MADE WITH CURIOSITY <span aria-hidden="true">©</span> 2026</span><a href="#home">BACK TO TOP <ArrowUpRight aria-hidden="true" /></a></footer>
      </section>
    </main>
  );
}

function useBotpressChat() {
  useEffect(() => {
    const injectorId = "botpress-webchat-injector";
    const configId = "botpress-webchat-config";
    if (document.getElementById(injectorId)) return;

    const injector = document.createElement("script");
    injector.id = injectorId;
    injector.src = "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    injector.async = true;
    injector.onload = () => {
      if (document.getElementById(configId)) return;

      const config = document.createElement("script");
      config.id = configId;
      config.src = "https://files.bpcontent.cloud/2026/10/13/15/20261013155237-L8EI7HB6.js";
      config.async = true;
      document.body.append(config);
    };
    injector.onerror = () => console.error("The Botpress chatbot could not be loaded.");
    document.head.append(injector);
  }, []);
}

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return <div className="portfolio-eyebrow"><span>{number}</span><span>{label}</span><i aria-hidden="true" /></div>;
}

function Interest({ number, title, detail }: { number: string; title: string; detail: string }) {
  return (
    <article className="portfolio-interest-row">
      <span className="portfolio-interest-number">{number}</span>
      <div><h3>{title}</h3><p>{detail}</p></div>
      <ArrowUpRight aria-hidden="true" />
    </article>
  );
}