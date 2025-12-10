import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://skinwalkergame.net/privacy",
  },
  openGraph: {
    url: "https://skinwalkergame.net/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <header className="shell topbar">
        <Link className="logo-lockup" href="/">
          <Image src="/logo.png" alt="Skinwalker Game" width={54} height={32} priority />
          <span>Skinwalker Game</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/#games">Games</Link>
          <Link href="/shift-at-midnight">Shift at Midnight</Link>
          <Link href="/#about">About</Link>
        </nav>
      </header>

      <main className="shell">
        <section className="section hero">
          <div className="hero-block">
            <div className="hero-frame">
              <div className="hero-embed" style={{ padding: 24 }}>
                <div className="pill" style={{ marginBottom: 12 }}>
                  Privacy Policy
                </div>
                <h1 className="hero-title">Your data, handled with care</h1>
                <p>Last updated: 2025-12-09</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Scope</div>
              <h2 className="section-title">What this policy covers</h2>
            </div>
          </div>
          <div className="seo-text">
            <p>
              This policy explains how Skinwalker Game collects, uses, and protects information when you browse our
              site, interact with embeds, or contact us. By using the site, you agree to these practices.
            </p>
          </div>
        </section>

        <section className="section row">
          <div>
            <div className="section-header">
              <div>
                <div className="section-subtitle">Data we collect</div>
                <h2 className="section-title">Info that may be processed</h2>
              </div>
            </div>
            <div className="faq">
              {[
                "Basic analytics (page views, device/browser type, rough region).",
                "Technical logs for performance and security (IP at request time, error traces).",
                "Emails you send us for support.",
              ].map((item) => (
                <div className="faq-item" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="section-header">
              <div>
                <div className="section-subtitle">How we use it</div>
                <h2 className="section-title">Why data is processed</h2>
              </div>
            </div>
            <div className="faq">
              {[
                "To operate and improve the site experience.",
                "To detect abuse, downtime, and security issues.",
                "To reply when you contact support.",
              ].map((item) => (
                <div className="faq-item" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Third parties</div>
              <h2 className="section-title">Embeds and analytics</h2>
            </div>
          </div>
          <div className="seo-text">
            <p>
              We embed third-party content (e.g., games, videos) that may set their own cookies or collect usage data.
              We may use privacy-friendly analytics to understand traffic patterns. Review those providers for their
              specific practices.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Your choices</div>
              <h2 className="section-title">Control and contact</h2>
            </div>
          </div>
          <div className="seo-text">
            <p>
              You can block cookies in your browser, and you may request deletion of support emails you have sent us.
              For questions, email <a href="mailto:support@skinwalkergame.net">support@skinwalkergame.net</a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
