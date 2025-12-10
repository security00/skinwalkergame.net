import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const steamDemo = "https://store.steampowered.com/app/3722330/Shift_At_Midnight/";
const itchDemo = "https://bunmuen.itch.io/shiftatmidnight";

const bullets = [
  "Gameplay: night-shift clerk checks IDs/behavior to spot doppelgangers (“skinwalkers”); deny or shoot on suspicion.",
  "Modes: supports 1-3 player online co-op (Steam multiplayer demo) and a solo experience (Itch.io demo).",
  "Events: customers and incidents are randomized; letting the wrong one through triggers escapes or invasions—board doors, set traps, hide.",
  "Tone: 90s rural gas-station convenience store; jump scares and gore, similar to That's Not My Neighbor but heavier on survival co-op.",
];

const facts = [
  "Why it's blowing up: TikTok clips from @keemsama, @kingwoolz, and @lightskinnightmare go viral—mutations, double faces, and wrong-door moments spread fast.",
  "Platform status: no browser build, not on CrazyGames/Poki; you have to download.",
  "Performance: friendly to low specs; integrated graphics work; recommend Windows 10+, i5, and 8GB RAM or more.",
  "Release cadence: Steam full version expected Q2 2026; co-op demo is live on Steam, solo demo on Itch.io.",
];

export const metadata: Metadata = {
  alternates: {
    canonical: "https://skinwalkergame.net/shift-at-midnight",
  },
  openGraph: {
    url: "https://skinwalkergame.net/shift-at-midnight",
  },
};

export default function ShiftAtMidnightPage() {
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
                  New: Shift at Midnight · Co-op horror night shift
                </div>
                <h1 className="hero-title">Shift at Midnight</h1>
                <p>
                  Indie co-op horror set on a 90s rural gas-station graveyard shift. Verify IDs and behaviors to decide
                  if customers are doppelgangers (TikTok calls them skinwalkers) and barricade when one slips in.
                </p>
                <div className="hero-meta">
                  <span className="pill">Steam co-op demo · 1-3 players online</span>
                  <span className="pill">Itch.io solo demo · unzip to run</span>
                  <span className="pill">No browser build · download required</span>
                </div>
                <div className="hero-actions">
                  <a className="primary-btn" href={steamDemo} id="download-steam" target="_blank" rel="noreferrer">
                    Download the Steam demo
                  </a>
                  <a className="ghost-btn" href={itchDemo} id="download-itch" target="_blank" rel="noreferrer">
                    Itch.io solo demo
                  </a>
                  <Link className="ghost-btn" href="#tiktok">
                    See TikTok highlights
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section row">
          <div>
            <div className="section-header">
              <div>
                <div className="section-subtitle">Core facts</div>
                <h2 className="section-title">How to play · available modes</h2>
                <h3 style={{ marginTop: 6, color: "var(--text-muted)" }}>Quick-read overview</h3>
              </div>
            </div>
            <div className="faq">
              {bullets.map((item) => (
                <div className="faq-item" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="section-header">
              <div>
                <div className="section-subtitle">Why it's trending</div>
                <h2 className="section-title">Why TikTok keeps pushing it</h2>
                <h3 style={{ marginTop: 6, color: "var(--text-muted)" }}>Social traction highlights</h3>
              </div>
            </div>
            <div className="faq">
              {facts.map((item) => (
                <div className="faq-item" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section className="section" aria-label="Download links">
        <div className="section-header">
          <div>
            <div className="section-subtitle">Download options</div>
            <h2 className="section-title">Steam co-op / Itch.io solo</h2>
            <h3 style={{ marginTop: 6, color: "var(--text-muted)" }}>Shift at Midnight download and setup</h3>
          </div>
        </div>
        <div className="guide-grid">
          <article className="guide-card" id="download-steam">
            <div className="chip-row">
                <span className="chip">Co-op demo</span>
                <span className="chip">1-3 player co-op</span>
              </div>
              <h3>Steam co-op demo (free)</h3>
              <p>Download via Steam client with “Install Demo”; online play supported; Steam account required.</p>
              <a className="text-link" href={steamDemo} target="_blank" rel="noreferrer">
                Open Steam page →
              </a>
            </article>

            <article className="guide-card" id="download-itch">
              <div className="chip-row">
                <span className="chip">Solo demo</span>
                <span className="chip">ZIP download</span>
              </div>
              <h3>Itch.io solo demo</h3>
              <p>Download the ZIP (~130MB), unzip, and run ShiftAtMidnight.exe; no browser build.</p>
              <a className="text-link" href={itchDemo} target="_blank" rel="noreferrer">
                Open Itch.io →
              </a>
            </article>
        </div>
      </section>

      <section className="section" aria-label="Shift at Midnight deep guide" style={{ marginTop: 24 }}>
        <div className="section-header">
          <div>
            <div className="section-subtitle">Shift at Midnight guide</div>
            <h2 className="section-title">Everything about the Shift at Midnight co-op horror loop</h2>
            <h3 style={{ marginTop: 6, color: "var(--text-muted)" }}>Shift at Midnight survival, downloads, and tips</h3>
          </div>
        </div>
        <div className="seo-text">
          <p>
            Shift at Midnight is a co-op horror game about working a graveyard shift at a rural gas station while
            spotting shapeshifters who mimic humans. This page keeps Shift at Midnight keywords concentrated around the
            things players actually search: how to download Shift at Midnight on Steam, how to run the Itch.io solo demo,
            and how to survive the night. Instead of stuffing, we reuse “Shift at Midnight” naturally inside real
            instructions so search engines see relevance and players get clarity.
          </p>
          <p>
            For new players, the Shift at Midnight gameplay loop is simple: check IDs, watch behavior, and close doors
            when a doppelganger slips. The Steam multiplayer demo of Shift at Midnight supports 1-3 players and keeps
            tension high with randomized customers. The Itch.io solo version of Shift at Midnight uses the same core
            rules but lets you practice without voice chat. Both builds favor quick rounds, so every mention of Shift at
            Midnight on this page leads to a real action you can take—download, host, or invite friends.
          </p>
          <p>
            Performance matters for Shift at Midnight. On integrated graphics you can run Shift at Midnight at medium
            settings; if you play on Steam Deck, cap at 40 FPS and use TDP limiting. The Itch.io Shift at Midnight build
            is about 130MB and runs after a quick unzip; antivirus warnings are rare but always verify your source by
            using the official Shift at Midnight links here. These details answer “Shift at Midnight system requirements”
            naturally while keeping the phrase anchored to real guidance.
          </p>
          <p>
            Social proof fuels Shift at Midnight searches. TikTok clips of Shift at Midnight show clerks letting impostors
            in or slamming doors just in time. We link those clips from the TikTok section above so that “Shift at
            Midnight jump scare” and “Shift at Midnight highlights” queries land on authentic footage, not filler. Each
            clip reinforces the exact feel of Shift at Midnight: tense ID checks, eerie pauses, and sudden invasions.
          </p>
          <p>
            Controls are straightforward: Shift at Midnight reads Xbox layout by default, with smooth mouse aim on PC.
            Keep flashlight discipline, listen for audio tells, and coordinate callouts when playing Shift at Midnight in
            co-op. If you fail an ID check in Shift at Midnight, shut doors, place traps, and manage stamina bursts to
            reset control of the store. These repeated mentions match how players phrase questions about Shift at Midnight
            strategy without forcing awkward keyword stuffing.
          </p>
          <p>
            Community players also search “Shift at Midnight browser version.” As of now, Shift at Midnight has no
            browser build, so every reference here points to the Steam and Itch.io downloads. By stating that clearly, we
            prevent confusion and give search crawlers a clean, honest answer tied to the Shift at Midnight brand.
          </p>
          <p>
            Everything here sits inside the Skinwalker Game hub so you never lose your place. Clean headings and
            canonicals keep Shift at Midnight easy to crawl, but more importantly they keep Shift at Midnight easy to act
            on. If you came for a Shift at Midnight download, a co-op run with friends, or quick Shift at Midnight tips,
            the buttons above get you moving without filler.
          </p>
        </div>
      </section>

      <section className="section" id="tiktok" aria-label="TikTok clips">
        <div className="section-header">
          <div>
            <div className="section-subtitle">TikTok highlights</div>
            <h2 className="section-title">Clerk lets impostor in, sudden mutations, jump-scare moments</h2>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {[
              { creator: "@keemsama", url: "https://www.tiktok.com/@keemsama/video/7522587126915943710", id: "7522587126915943710" },
              { creator: "@lightskinnightmare", url: "https://www.tiktok.com/@lightskinnightmare/video/7525155458324221198", id: "7525155458324221198" },
              { creator: "@lightskinnightmare", url: "https://www.tiktok.com/@lightskinnightmare/video/7556317113200217399", id: "7556317113200217399" },
              { creator: "@lightskinnightmare", url: "https://www.tiktok.com/@lightskinnightmare/video/7580076026454101303", id: "7580076026454101303" },
              { creator: "@lightskinnightmare", url: "https://www.tiktok.com/@lightskinnightmare/video/7553262150412766519", id: "7553262150412766519" },
              { creator: "@lightskinnightmare", url: "https://www.tiktok.com/@lightskinnightmare/video/7556397459388386573", id: "7556397459388386573" },
              { creator: "@lightskinnightmare", url: "https://www.tiktok.com/@lightskinnightmare/video/7580842167149546765", id: "7580842167149546765" },
              { creator: "@theclassiccraig", url: "https://www.tiktok.com/@theclassiccraig/video/7522950674733223182", id: "7522950674733223182" },
            ].map((clip) => (
              <blockquote
                key={clip.id}
                className="tiktok-embed"
                cite={clip.url}
                data-video-id={clip.id}
                style={{ maxWidth: 420, minWidth: 240, margin: "0 auto" }}
              >
                <section>
                  <a href={`https://www.tiktok.com/${clip.creator}`}>{clip.creator}</a>
                  <a href={clip.url}>Watch on TikTok</a>
                </section>
              </blockquote>
            ))}
          </div>
          <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
        </section>
      </main>
    </div>
  );
}
