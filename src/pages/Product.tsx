import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

export default function Product() {
  const { t } = useLang()

  return (
    <>
      <section id="produit" className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.product.kicker}</span>
            <h2>{t.product.title}</h2>
          </div>
        </Reveal>
        <div className="timeline">
          {t.product.items.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="timeline-item">
                <div className="timeline-year">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {step.list && (
                  <p className="mono" style={{ fontSize: '0.82rem', marginTop: 10 }}>
                    {step.list}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page">
        <div className="grid grid-3">
          {t.benefits.items.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <div className="card">
                <div className="stat">{b.stat}</div>
                <div className="label">{b.label}</div>
                <p>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head" style={{ margin: '0 auto', textAlign: 'center' }}>
            <span className="kicker" style={{ justifyContent: 'center' }}>
              {t.sovereignty.kicker}
            </span>
            <h2>{t.sovereignty.title}</h2>
          </div>
        </Reveal>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          {t.sovereignty.paragraphs.map((para, i) => (
            <Reveal key={para} delay={i * 0.08}>
              <p>{para}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
