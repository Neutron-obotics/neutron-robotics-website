import { useState, type FormEvent } from 'react'
import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

const CONTACT_EMAIL = 'florian.even@neutron-robotics.fr'

export default function Contact() {
  const { t } = useLang()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Neutron Robotics : message de ${name || 'un visiteur'}`)
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="page">
      <Reveal>
        <div className="section-head">
          <span className="kicker">{t.contact.kicker}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
        </div>
      </Reveal>

        <div className="contact-grid">
          <Reveal>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">{t.contact.formName}</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="field">
                <label htmlFor="email">{t.contact.formEmail}</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="message">{t.contact.formMessage}</label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {t.contact.formSend}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="notice-card">
              <h3>{t.contact.noticeTitle}</h3>
              <p>{t.contact.noticeText}</p>
              <a
                href="https://guillaumeg22350.github.io/notice-drone/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                style={{ marginTop: 16 }}
              >
                {t.contact.noticeCta} ↗
              </a>

              <div style={{ marginTop: 32 }}>
                <span className="founder-role">Email</span>
                <p className="mono" style={{ marginTop: 6 }}>
                  romain.gasquet@neutron-robotics.fr
                  <br />
                  florian.even@neutron-robotics.fr
                </p>
              </div>
            </div>
          </Reveal>
        </div>
    </section>
  )
}
