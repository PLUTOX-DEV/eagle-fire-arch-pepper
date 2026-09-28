import { createFileRoute } from "@tanstack/react-router";
import { CountdownTimer } from "@/components/countdown-timer";
import {
  CalendarIcon,
  FeatherIcon,
  GhostIcon,
  PumpkinMark,
  RocketIcon,
  TelegramIcon,
  XIcon,
} from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { FEES, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="kicker">
              <i /> Halloween has entered the hood
            </div>
            <p className="welcome">Welcome to</p>
            <h1 className="hero-title">
              <em className="dollar">$</em>
              HOOD
              <img className="pump" src="/images/pumpkin.webp" alt="" width={72} height={72} />
              <span className="ween">WEEN</span>
            </h1>
            <h2>
              <strong>Hoodoween:</strong> Robinhood first ever Halloween celebration and memecoin.
            </h2>
            <div className="rule" />
            <p className="intro">
              This is Robinhood first Halloween ever. Hoodoween is the name of its first Halloween
              celebration and token ever. The ticker is {SITE.ticker}.
            </p>

            <div className="signal">
              <div className="signal-icon">
                <XIcon />
              </div>
              <p>
                There is a 60% chance of Robinhood tweeting <strong>&ldquo;Happy Hoodoween&rdquo;</strong> on
                Halloween.
              </p>
              <div className="gauge" aria-label="60 percent">
                <span>60%</span>
              </div>
            </div>

            <p className="scare">
              <img src="/images/pumpkin.webp" alt="" width={28} height={28} />
              Don't get scared of the potential of Hoodoween
              <GhostIcon className="size-6 text-fog" />
            </p>
          </div>

          <div className="hero-art">
            <img
              className="scene"
              src="/images/hoodoween-hero.webp"
              alt="Hoodoween pumpkin-headed character in a hoodie under a full moon"
              width={1100}
              height={1173}
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="countdown-band" id="launch">
          <img className="bg" src="/images/cityscape.webp" alt="" width={1600} height={900} />
          <div className="veil" />
          <div className="countdown-inner wrap">
            <div className="count-label">
              <h2>The countdown</h2>
              <div className="count-sub">— CA launch</div>
            </div>
            <CountdownTimer />
            <div className="launch-chip">
              <img src="/images/pumpkin.webp" alt="" width={28} height={28} />
              <div>
                <b>{SITE.caStatus}</b>
                <small>{SITE.caWhen}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-grid wrap" aria-label="Highlights">
          <article>
            <div className="feature-icon">
              <PumpkinMark className="size-9" />
            </div>
            <span>01</span>
            <h3>The first</h3>
            <p>Robinhood's first ever Halloween celebration and memecoin.</p>
          </article>
          <article className="green">
            <div className="feature-icon">
              <FeatherIcon className="size-8" />
            </div>
            <span>02</span>
            <h3>Community</h3>
            <p>Built by the people. For the people. Hoodoween.</p>
          </article>
          <article>
            <div className="feature-icon">
              <RocketIcon className="size-8" />
            </div>
            <span>03</span>
            <h3>Big potential</h3>
            <p>A memecoin with real culture, real energy, real community.</p>
          </article>
          <article className="green">
            <div className="feature-icon">
              <GhostIcon className="size-8" />
            </div>
            <span>04</span>
            <h3>CA exchange</h3>
            <p>Coming soon by 12 October.</p>
            <div className="feature-date">
              <CalendarIcon /> 12 October
            </div>
          </article>
        </section>

        <section className="story-layout wrap" id="about">
          <div className="story-image">
            <img
              src="/images/story.webp"
              alt="Cloaked Hoodoween figure facing a blood moon over the city"
              width={1400}
              height={787}
              loading="lazy"
            />
          </div>
          <div className="story-copy">
            <div className="kicker">The story</div>
            <h2>The hood is ready for Halloween.</h2>
            <p>
              Robinhood is known for breaking the rules. This Halloween, they're not just watching
              from the sidelines... they're celebrating.
            </p>
            <p>
              Hoodoween is more than a memecoin. It's a movement — a celebration of freedom,
              culture, and the community that makes it all possible.
            </p>
            <div className="script">
              Same Robinhood.
              <br />
              New kind of holiday.
            </div>
          </div>
          <div className="token-box" id="tokenomics">
            <div className="kicker">Tokenomics</div>
            <h3>$HOODOWEEN</h3>
            <div className="ticker-badge">{SITE.ticker}</div>
            <div className="token-row">
              <span>Holder airdrops</span>
              <b>30% fees</b>
            </div>
            <div className="token-row">
              <span>Buybacks</span>
              <b>20% fees</b>
            </div>
            <div className="token-row">
              <span>Donations</span>
              <b>20% fees</b>
            </div>
            <div className="token-row">
              <span>Marketing</span>
              <b>30% fees</b>
            </div>
            <div className="token-row">
              <span>Dev holdings</span>
              <b>2.5% supply</b>
            </div>
            <div className="no-sell">No token sales for marketing</div>
            <div className="token-ca">
              <img src="/images/pumpkin.webp" alt="" width={28} height={28} />
              <span>
                {SITE.caStatus}
                <small>{SITE.caWhen}</small>
              </span>
            </div>
          </div>
        </section>

        <section className="fees-section wrap" id="fees">
          <div className="fees-head">
            <div className="kicker center">
              <i /> Fees breakdown
            </div>
            <h2>Every fee has a purpose.</h2>
            <p>$HOODOWEEN routes fees across holders, buybacks, donations and marketing.</p>
          </div>
          <div className="fee-grid">
            {FEES.map((fee) => (
              <article className={`fee-card ${fee.tone}`} key={fee.title}>
                <strong>{fee.pct}</strong>
                <span>{fee.title}</span>
                <p>{fee.copy}</p>
              </article>
            ))}
          </div>
          <div className="dev-note">
            <span>Dev holdings</span>
            <b>2.5%</b>
            <p>of total token supply</p>
            <em>So there are no dev token sales for marketing and related expenses.</em>
          </div>
        </section>

        <section className="roadmap wrap" id="roadmap" aria-labelledby="roadmap-title">
          <div className="kicker">
            <i /> Launch path
          </div>
          <h2 id="roadmap-title">Roadmap</h2>
          <div className="steps">
            <article className="step">
              <b>01</b>
              <div>
                <h3>CA launch · 12 October</h3>
                <p>Contract address drops. Liquidity locked. The hood goes live.</p>
              </div>
            </article>
            <article className="step">
              <b>02</b>
              <div>
                <h3>Halloween watch</h3>
                <p>60% chance Robinhood tweets &ldquo;Happy Hoodoween.&rdquo; Holders eat first.</p>
              </div>
            </article>
            <article className="step">
              <b>03</b>
              <div>
                <h3>Fees that work</h3>
                <p>Airdrops, buybacks, donations, marketing — without selling the 2.5% dev bag.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="community" id="community">
          <img className="bg" src="/images/cityscape.webp" alt="" width={1600} height={900} />
          <div className="community-inner wrap">
            <div>
              <div className="big-logo">
                <img src="/images/pumpkin.webp" alt="" width={42} height={42} />
                <span>
                  <em>$</em>HOODO<span className="ween">WEEN</span>
                </span>
              </div>
              <div className="tagline">— SCARY GOOD POTENTIAL —</div>
            </div>
            <div className="join">
              <div className="social-row">
                <a className="circle wide" href={SITE.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
                  <TelegramIcon />
                </a>
                <a className="circle wide" href={SITE.x} target="_blank" rel="noreferrer" aria-label="X">
                  <XIcon />
                </a>
              </div>
              <b>Join the community</b>
              <div className="handles">
                <a href={SITE.telegram} target="_blank" rel="noreferrer">
                  {SITE.telegramHandle}
                </a>
                <a href={SITE.x} target="_blank" rel="noreferrer">
                  {SITE.xHandle}
                </a>
              </div>
            </div>
            <div className="community-art">
              <img
                src="/images/hoodoween-character.webp"
                alt="Hooded Hoodoween figure with a glowing green feather"
                width={900}
                height={900}
                loading="lazy"
              />
              <p className="miss-it">Don't miss it... Hoodoween is coming.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer wrap">
        <b>$HOODOWEEN</b>
        <span>Robinhood first ever Halloween celebration and memecoin.</span>
        <small>Not affiliated with Robinhood Markets, Inc. This is a community memecoin project.</small>
      </footer>
      <StickyCta />
    </div>
  );
}
