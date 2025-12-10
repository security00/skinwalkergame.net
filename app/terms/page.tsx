import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  const narrowSection = { maxWidth: 900, margin: "0 auto" };

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
              <div className="hero-embed" style={{ padding: 24, maxWidth: 920, margin: "0 auto" }}>
                <h1 className="hero-title">Use Skinwalker Game responsibly</h1>
                <p>Last updated: 2025-12-09</p>
                <p style={{ marginTop: 8 }}>
                  Read this overview before using links, embeds, or downloads. It covers acceptable use, ownership,
                  third-party stores, and liability limits.
                </p>
                <div style={{ marginTop: 16 }}>
                  <Link className="primary-btn" href="/" style={{ display: "inline-flex" }}>
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={narrowSection} id="agreement">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Agreement</div>
              <h2 className="section-title">By using the site</h2>
            </div>
          </div>
          <p>
            You agree to follow these terms, applicable laws, and respect intellectual property. Do not use the site if
            you disagree with any part of these terms.
          </p>
        </section>

        <section className="section" style={narrowSection} id="eligibility">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Eligibility</div>
              <h2 className="section-title">Who may use Skinwalker Game</h2>
            </div>
          </div>
          <ul className="seo-text" style={{ paddingLeft: 18, lineHeight: 1.6 }}>
            <li>The site is for users 13+; under 18, use it only with parental or guardian consent.</li>
            <li>We do not require an account; third-party links (Steam, Itch.io, embeds) follow their own terms.</li>
            <li>You are responsible for your device and network security when browsing or downloading.</li>
          </ul>
        </section>

        <section className="section" style={narrowSection} id="acceptable-use">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Acceptable use</div>
              <h2 className="section-title">What you can and cannot do</h2>
            </div>
          </div>
          <ul className="seo-text" style={{ paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Do not misuse embeds or attempt to disrupt the site.</li>
            <li>Do not infringe on copyrights, trademarks, or publicity rights.</li>
            <li>Do not scrape or automate in ways that harm performance or violate robots.txt.</li>
            <li>Do not upload or transmit malware, phishing, or exploits.</li>
            <li>Do not use the site to harass, defame, or engage in illegal activity.</li>
          </ul>
        </section>

        <section className="section" style={narrowSection} id="content-rights">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Content</div>
              <h2 className="section-title">Ownership and rights</h2>
            </div>
          </div>
          <ul className="seo-text" style={{ paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Game assets, videos, and embeds belong to their respective owners; we do not claim ownership.</li>
            <li>Links and embeds are provided for discovery and informational purposes.</li>
            <li>If you are a rights holder and want content removed or credited differently, contact us.</li>
            <li>User submissions (e.g., emails) remain yours; you permit us to read and respond.</li>
          </ul>
        </section>

        <section className="section" style={narrowSection} id="third-parties">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Downloads & third parties</div>
              <h2 className="section-title">Links, embeds, and external stores</h2>
            </div>
          </div>
          <p className="seo-text">
            The site links to and embeds third-party content (Steam, Itch.io, CrazyGames, TikTok, YouTube, etc.). Their
            terms, privacy practices, and availability govern your use. Downloads are at your own risk; verify sources
            and system requirements before installing anything.
          </p>
        </section>

        <section className="section" style={narrowSection} id="liability">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Warranties & liability</div>
              <h2 className="section-title">Availability and limitations</h2>
            </div>
          </div>
          <p className="seo-text">
            The site is provided “as is” and “as available” without warranties of any kind, express or implied
            (including fitness, non-infringement, and accuracy). We do not guarantee uptime, compatibility, or
            uninterrupted access.
          </p>
          <p className="seo-text">
            To the fullest extent permitted by law, we are not liable for indirect, incidental, consequential, or
            punitive damages, or for loss of data, profits, or goodwill arising from your use of the site, embeds,
            downloads, or linked services.
          </p>
        </section>

        <section className="section" style={narrowSection} id="changes">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Changes</div>
              <h2 className="section-title">Updating these terms</h2>
            </div>
          </div>
          <p className="seo-text">
            We may update these terms from time to time. The “Last updated” date will change when we do. Continued use
            after updates means you accept the revised terms.
          </p>
        </section>

        <section className="section" style={narrowSection} id="governing-law">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Governing law</div>
              <h2 className="section-title">Venue and jurisdiction</h2>
            </div>
          </div>
          <p className="seo-text">
            These terms are governed by applicable U.S. laws. Disputes should start with good-faith discussions; if
            unresolved, they will be handled in courts with appropriate jurisdiction. Class actions and jury trials are
            waived to the extent permitted by law.
          </p>
        </section>

        <section className="section" style={narrowSection} id="contact">
          <div className="section-header">
            <div>
              <div className="section-subtitle">Contact</div>
              <h2 className="section-title">Reach us</h2>
            </div>
          </div>
          <p className="seo-text">
            For questions or takedown requests, email <a href="mailto:support@skinwalkergame.net">support@skinwalkergame.net</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
