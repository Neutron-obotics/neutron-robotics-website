import { useState } from 'react'
import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

export default function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="page">
      <Reveal>
        <div className="section-head">
          <span className="kicker">{t.faq.kicker}</span>
          <h2>{t.faq.title}</h2>
        </div>
      </Reveal>
      <div className="faq-list">
        {t.faq.items.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal key={item.q} delay={i * 0.06}>
              <div className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
