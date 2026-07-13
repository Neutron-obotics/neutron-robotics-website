import { useState, type FormEvent } from 'react'
import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

const CONTACT_EMAIL = 'contact@neutron-robotics.fr'

export default function Contact() {
  const { t } = useLang()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="contact" className="page" style={{ textAlign: 'center' }}>
      <Reveal>
        <div className="section-head" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        {submitted ? (
          <div className="card" style={{ maxWidth: 480, margin: '0 auto' }}>
            <p style={{ margin: 0, color: 'var(--text)' }}>{t.contact.thanks}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <input
              type="email"
              required
              placeholder={t.contact.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: '1',
                minWidth: 240,
                maxWidth: 340,
                background: 'var(--panel)',
                border: '1px solid var(--panel-border)',
                borderRadius: 8,
                padding: '13px 16px',
                color: 'var(--text)',
                fontFamily: 'inherit',
                fontSize: '0.95rem',
              }}
            />
            <button type="submit" className="btn btn-primary">
              {t.contact.submit}
            </button>
          </form>
        )}
      </Reveal>

      <p className="mono" style={{ marginTop: 26, fontSize: '0.85rem' }}>
        {t.contact.orEmail}{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--accent)' }}>
          {CONTACT_EMAIL}
        </a>
      </p>
    </section>
  )
}
