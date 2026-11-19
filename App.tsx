import { useState } from 'react'
import { Header, ActionBar, MobileNav, useTheme, useLang } from './components/layout/Header'
import { LiveTicker, StoryRail } from './components/live/LiveTicker'
import { LiveWatch } from './components/watch/LiveWatch'
import { HeroSection } from './components/hero/HeroSection'
import { LiveNowSection } from './components/live-now/LiveNowSection'
import { ScheduleRail } from './components/schedule/ScheduleRail'
import { HeritageSection } from './components/heritage/HeritageSection'
import { RegistrationModal, DonationModal, VolunteerModal, PledgeModal } from './components/actions/ActionModals'

type ModalType = 'register' | 'donate' | 'volunteer' | 'pledge' | null

function App() {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, t }  = useLang()
  const [modal, setModal] = useState<ModalType>(null)

  /* Demo broadcast director config */
  const youtubeVideoId = 'live_centenary_main'
  const ytIsLive = true
  const igIsLive = true

  return (
    <>
      {/* ── 1. SITE HEADER with Language & Theme Switchers ── */}
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

      {/* ── 2. DESKTOP ACTION BAR ── */}
      <ActionBar t={t} onAction={act => setModal(act)} />

      {/* ── 3. INSTAGRAM-STYLE STORY RING BAR (Sayyid Ali Bafaqy Thangal story) ── */}
      <StoryRail />

      {/* ── 4. REAL-TIME ACTIVITY TICKER ── */}
      <LiveTicker isDemoMode />

      {/* ── 5. MAIN LIVESTREAM WATCH SECTION & LIVE CHAT WITH REACTIONS ── */}
      <main id="main">
        <LiveWatch
          videoId={youtubeVideoId}
          isLive={ytIsLive}
          viewerCount={18450}
          title="Samastha Centenary Grand Assembly — Live from Wadi Haramain"
          channelHandle="@Samasthakerala"
          channelUrl="https://www.youtube.com/@Samasthakerala"
        />

        {/* ── 6. OFFICIAL CENTENARY CONFERENCE 2027 HERO (with official poster & countdown) ── */}
        <HeroSection t={t} onRegister={() => setModal('register')} />

        {/* ── 7. "LIVE NOW" SECTION (Hand-drawn wobbly outline cards: YouTube & Instagram) ── */}
        <LiveNowSection
          t={t}
          youtubeVideoId={youtubeVideoId}
          ytIsLive={ytIsLive}
          igIsLive={igIsLive}
        />

        {/* ── 8. UP NEXT SCHEDULE RAIL & LIVE EVENTS ── */}
        <ScheduleRail
          lang={lang}
          onRegister={() => setModal('register')}
        />

        {/* ── 9. HERITAGE (1926–2026) & SUPREME LEADERSHIP ── */}
        <HeritageSection lang={lang} />
      </main>

      {/* ── 10. OFFICIAL FOOTER ── */}
      <footer style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        padding: '3.5rem 1rem 5.5rem',
        color: 'var(--text-secondary)',
        fontSize: '0.85rem'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              SamasthaLive
            </h3>
            <p style={{ color: 'var(--accent-gold)', fontStyle: 'italic', marginBottom: '0.75rem', fontWeight: 600 }}>
              &ldquo;Guiding Faith. Preserving Legacy. Shaping the Future.&rdquo;
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              Official interactive live platform for the Samastha Kerala Jam&apos;iyyathul Ulama Centenary (1926–2026).
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Headquarters</h4>
            <p>Samastha Centre, Francis Road, Kozhikode 673006, Kerala, India</p>
            <p style={{ marginTop: '0.4rem' }}>Phone: <a href="tel:+919412786313" style={{ color: 'var(--accent-gold)' }}>+91 94127 86313</a></p>
            <p style={{ marginTop: '0.4rem' }}>Web: <a href="https://samastha.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>samastha.org</a></p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Official Channels</h4>
            <p>📺 YouTube: <a href="https://www.youtube.com/@Samasthakerala" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>@Samasthakerala</a></p>
            <p>🎥 Samastha Graph: <a href="https://www.youtube.com/@SamasthaGraph" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>@SamasthaGraph</a></p>
            <p>📸 Instagram: <a href="https://instagram.com/samastha.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>@samastha.in</a></p>
            <p>📘 Facebook: <a href="https://facebook.com/samastha.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>samastha.in</a></p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Privacy & Safety</h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Only name and phone are collected for event admission pass generation. No user data is ever sold or shared with any third party.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '1400px', margin: '2rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
          © 1926 — 2026 Samastha Kerala Jam&apos;iyyathul Ulama. All rights reserved.
        </div>
      </footer>

      {/* ── 11. MOBILE BOTTOM STICKY NAVIGATION ── */}
      <MobileNav t={t} onAction={act => setModal(act)} />

      {/* ── 12. INTERACTIVE CORE ACTION MODALS ── */}
      {modal === 'register'  && <RegistrationModal onClose={() => setModal(null)} />}
      {modal === 'donate'    && <DonationModal     onClose={() => setModal(null)} />}
      {modal === 'volunteer' && <VolunteerModal    onClose={() => setModal(null)} />}
      {modal === 'pledge'    && <PledgeModal       onClose={() => setModal(null)} />}
    </>
  )
}

export default App
