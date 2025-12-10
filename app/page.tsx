import Image from "next/image";
import type { Metadata } from "next";
const crazyGamesEmbed = "https://g2.igroutka.ru/lib/crazy/games/skinwalker/";

const faq = [
  {
    q: "Where can I play the Skinwalker game for free online?",
    a: "Use the CrazyGames browser build for instant play, or grab the Steam demo for higher fidelity.",
  },
  {
    q: "Is there controller support?",
    a: "Yes. Steam Input profiles map seamlessly; browser builds work best with Xbox layout.",
  },
  {
    q: "What are the best platforms?",
    a: "PC leads for visuals; PS5 gets DualSense haptics; Xbox offers solid performance and Game Pass trials.",
  },
  {
    q: "How do I avoid jumpscare fatigue?",
    a: "Use the new Night Scout accessibility preset: calmer audio spikes, clearer cues, and balanced luminance.",
  },
];

const searchCoverage = [
  {
    q: "skinwalker game free online",
    a: "Play the browser embed instantly; if blocked, the Steam demo link is one click away.",
  },
  {
    q: "skinwalker game how to play",
    a: "Controls and survival tips sit under the trailer—no separate tab-hopping required.",
  },
  {
    q: "skinwalker hunt tips",
    a: "Curated clips and quick-callout strategies reduce bounce and keep the session going.",
  },
  {
    q: "skinwalker browser vs steam",
    a: "We show which build you’re loading (browser or Steam) and surface uptime notes before you click.",
  },
];

export const metadata: Metadata = {
  alternates: {
    canonical: "https://skinwalkergame.net/",
  },
  openGraph: {
    url: "https://skinwalkergame.net/",
  },
};

export default function Home() {
  return (
    <div className="page">
      <header className="shell topbar">
        <a className="logo-lockup" href="/">
          <Image src="/logo.png" alt="Skinwalker Game" width={54} height={32} priority />
          <span>Skinwalker Game</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#games">Games</a>
          <a href="/shift-at-midnight">Shift at Midnight</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main className="shell">
        <section className="section hero" id="games">
            <div className="hero-block">
              <div className="hero-frame">
                <div className="hero-embed">
                  <iframe
                    id="game-iframe"
                    src={crazyGamesEmbed}
                    title="Skinwalker game playable embed"
                    loading="eager"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-top-navigation-by-user-activation"
                    referrerPolicy="no-referrer"
                    allowFullScreen
                  />
                </div>
              </div>
            <div className="hero-cta">
              <div>
                <h1 className="hero-title">Skinwalker Game</h1>
                <p>
                  Play the browser build right here. If you prefer higher fidelity, jump to Steam; otherwise start
                  moving before the creature tracks you.
                </p>
                <div className="hero-meta">
                  <span className="pill">Browser · No install</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Shift at Midnight info">
          <div className="section-header">
            <div>
              <div className="section-subtitle">New page</div>
              <h2 className="section-title">Shift at Midnight info hub</h2>
            </div>
            <a className="text-link" href="/shift-at-midnight">
              Open the guide →
            </a>
          </div>
          <p>
            Indie co-op horror about vetting doppelgangers during a night-shift convenience store run. Requires a
            download (no browser build). Tap above for how to play, download options (Steam co-op demo / Itch.io solo
            demo), and a TikTok highlight reel.
          </p>
        </section>

        <section className="section row" id="about">
          <div>
            <div className="section-header">
              <div>
                <div className="section-subtitle">FAQ & SEO anchors</div>
                <h2 className="section-title">Answer the questions players search</h2>
                <h3 style={{ marginTop: 6, color: "var(--text-muted)" }}>Top asked questions</h3>
              </div>
            </div>
            <div className="faq">
              {faq.map((item) => (
                <div className="faq-item" key={item.q}>
                  <strong>{item.q}</strong>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="section-header" style={{ marginBottom: 8 }}>
              <div>
                <div className="section-subtitle">Search coverage</div>
                <h2 className="section-title">Queries we answer instantly</h2>
                <h3 style={{ marginTop: 6, color: "var(--text-muted)" }}>Targeted long-tail intents</h3>
              </div>
            </div>
            <div className="faq">
              {searchCoverage.map((item) => (
                <div className="faq-item" key={item.q}>
                  <strong>{item.q}</strong>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
            <div className="chip-row" style={{ marginTop: 12 }}>
              <span className="chip">Instant answers</span>
              <span className="chip">Low bounce</span>
              <span className="chip">Mobile-first</span>
              <span className="chip">SEO intent mapped</span>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Skinwalker game deep guide" style={{ marginTop: 24 }}>
          <div className="section-header">
            <div>
              <div className="section-subtitle">Skinwalker game deep guide</div>
              <h2 className="section-title">Everything to know before you play</h2>
              <h3 style={{ marginTop: 6, color: "var(--text-muted)" }}>Playable links, survival tips, and search-ready info</h3>
            </div>
          </div>
          <div className="seo-text">
            <p>
              Skinwalker game fans land here to get a single page that blends browser access, Steam and console links,
              and quick survival context. We surface a live playable Skinwalker game embed plus outbound buttons to
              official stores so you avoid counterfeit downloads. Every section is trimmed for readability and uses clear
              headings so search engines and players both understand what Skinwalker game content they are about to tap.
            </p>
            <p>
              If you want a free Skinwalker game online, start with the browser build above. Prefer higher fidelity or
              controller aim assist? Hop to Steam for the Skinwalker game download, where performance and shadow detail
              hold up on most mid-range GPUs. Console players can follow platform-specific store searches via the quick
              links; we keep the Skinwalker game naming consistent so you do not waste time with clones or unrelated
              horror titles.
            </p>
            <p>
              For new players, the Skinwalker game loop is simple: explore, track, and survive. We call out controls that
              matter—stealth crouch, flashlight discipline, and stamina bursts—because those map directly to the jumps
              between tension and action. The Skinwalker game creature audio cues and distant silhouettes are best read
              with headphones; keeping that in this guide helps first-timers avoid early frustration and keeps this
              paragraph naturally centered on Skinwalker game survival basics.
            </p>
            <p>
              On PC, the Skinwalker game runs fine on integrated graphics with lowered shadows; Steam Deck players should
              lock to 40 FPS for smoothness. If you prefer controllers, the Skinwalker game works with Xbox layout in the
              browser embed and picks up Steam Input profiles automatically on desktop. These specifics answer common
              “Skinwalker game PC requirements” and “Skinwalker game controller support” searches without feeling like a
              keyword dump.
            </p>
            <p>
              TikTok and YouTube both drive a ton of Skinwalker game discovery. We keep short clips linked from the Shift
              at Midnight page to show what “skinwalker or not” moments look like—door checks, flashlight sweeps,
              creature feints. This helps players searching “Skinwalker game jump scare clip” or “Skinwalker game
              highlights” see authentic footage and then click back to the playable embed.
            </p>
            <p>
              If you are chasing long-tail questions—like “where to play Skinwalker game free,” “is Skinwalker game safe
              to download,” or “which Skinwalker game is the real one”—this page answers them with direct links and
              uptime notes. We also remind readers that Skinwalker game themes are fictional and avoid cultural
              insensitivity, which keeps trust high and bounce rates low.
            </p>
            <p>
              Players wanting depth can jump to the co-op oriented Shift at Midnight section. While not the exact same
              title, it is a Skinwalker-adjacent experience that shares the doppelganger tension. Linking it here makes
              sense for people searching “Skinwalker game multiplayer” or “Skinwalker game co-op alternative” while
              staying natural and on-topic.
            </p>
            <p>
              Finally, we keep the Skinwalker game sitemap lean—home, Shift at Midnight, privacy, and terms—so crawlers
              can find every relevant URL fast. That clarity, combined with concise H2 and H3 labels, lifts the Skinwalker
              game keyword density into a healthier range without awkward stuffing. Scroll back up, hit play, and keep
              your flashlight steady.
            </p>
          </div>
        </section>

        {/* TikTok clips removed on home; kept on /shift-at-midnight */}
      </main>

      <footer className="shell footer">
        <div className="footer-grid">
          <div>
            <div className="logo-lockup" style={{ padding: "10px 12px" }}>
              <Image src="/logo.png" alt="Skinwalker Game" width={54} height={32} />
              <span>Skinwalker Game</span>
            </div>
            <p style={{ marginTop: 10 }}>
              Modern horror hub built for long sessions: curated games, fast guides, and respectful storytelling.
            </p>
          </div>
          <div>
            <strong>Quick links</strong>
            <div className="footer-links">
              <a href="#games">Games</a>
              <a href="/shift-at-midnight">Shift at Midnight</a>
              <a href="#about">About</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="mailto:support@skinwalkergame.net">Contact</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 18, color: "var(--text-muted)" }}>
          © 2025 Skinwalker Game. Fictional horror hub — no real-world cultural references. Built for the curious.
        </div>
      </footer>
    </div>
  );
}
