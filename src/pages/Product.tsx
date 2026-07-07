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
            <p>{t.product.intro}</p>
          </div>
        </Reveal>
        <div className="grid grid-3">
          {t.product.pillars.map((pt, i) => (
            <Reveal key={pt.title} delay={i * 0.08}>
              <div className="card">
                <span className="num">{pt.num}</span>
                <h3>{pt.title}</h3>
                <p>{pt.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.steps.kicker}</span>
            <h2>{t.steps.title}</h2>
          </div>
        </Reveal>
        <div className="timeline">
          {t.steps.items.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="timeline-item">
                <div className="timeline-year">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.benefits.kicker}</span>
            <h2>{t.benefits.title}</h2>
          </div>
        </Reveal>
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
          <div className="section-head">
            <span className="kicker">{t.price.kicker}</span>
            <h2>{t.price.title}</h2>
            <p>{t.price.intro}</p>
          </div>
        </Reveal>
        <div className="grid grid-2">
          <Reveal>
            <div className="card">
              <div className="label">{t.price.drone.title}</div>
              <div className="stat">{t.price.drone.amount}</div>
              <p>{t.price.drone.desc}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card">
              <div className="label">{t.price.models.title}</div>
              <div className="stat">{t.price.models.amount}</div>
              <p>{t.price.models.desc}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head" style={{ margin: '0 auto', textAlign: 'center' }}>
            <h2>{t.trust.title}</h2>
          </div>
        </Reveal>
        <div className="grid grid-3">
          {t.trust.badges.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
