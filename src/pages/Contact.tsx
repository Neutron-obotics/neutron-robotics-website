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
    <section id="contact" className="page section-border contact-section" style={{ textAlign: 'center' }}>
      <Reveal>
        <div className="section-head">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        {submitted ? (
          <div className="waitlist-thanks">{t.contact.thanks}</div>
        ) : (
          <form onSubmit={handleSubmit} className="waitlist-form">
            <input
              type="email"
              required
              placeholder={t.contact.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              {t.contact.submit}
            </button>
          </form>
        )}
      </Reveal>

      <p className="mono" style={{ marginTop: 26, fontSize: '0.85rem', color: 'var(--text-faint)' }}>
        {t.contact.orEmail}{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </section>
  )
}
