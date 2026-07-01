import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

export default function SolutionProduct() {
  const { t } = useLang()

  return (
    <>
      <section id="solution" className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.solution.kicker}</span>
            <h2>{t.solution.title}</h2>
            <p>{t.solution.intro}</p>
          </div>
        </Reveal>
        <div className="grid grid-3">
          {t.solution.points.map((pt, i) => (
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
            <span className="kicker">{t.solution.productKicker}</span>
            <h2>{t.solution.productTitle}</h2>
          </div>
        </Reveal>
        <div className="timeline">
          {t.solution.productSteps.map((step, i) => (
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
            <span className="kicker">{t.solution.advantagesKicker}</span>
            <h2>{t.solution.advantagesTitle}</h2>
          </div>
        </Reveal>
        <div className="grid grid-3">
          {t.solution.advantages.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.08}>
              <div className="card">
                <div className="stat">{a.stat}</div>
                <div className="label">{a.label}</div>
                <p>{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.impact.kicker}</span>
            <h2>{t.impact.title}</h2>
            <p>{t.impact.text}</p>
          </div>
        </Reveal>
        <div className="grid grid-4">
          {t.impact.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card">
                <span className="num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mono" style={{ marginTop: 28, fontSize: '0.82rem', letterSpacing: '0.02em' }}>
            {t.impact.calc}
          </p>
        </Reveal>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.business.kicker}</span>
            <h2>{t.business.title}</h2>
            <p>{t.business.text}</p>
          </div>
        </Reveal>
        <div className="grid grid-2">
          <Reveal>
            <div className="card">
              <div className="label">{t.business.unique.title}</div>
              <div className="stat">{t.business.unique.stat}</div>
              <p>{t.business.unique.desc}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card">
              <div className="label">{t.business.recurring.title}</div>
              <div className="stat">{t.business.recurring.stat}</div>
              <p>{t.business.recurring.desc}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.gtm.kicker}</span>
            <h2>{t.gtm.title}</h2>
          </div>
        </Reveal>
        <div className="grid grid-3">
          {t.gtm.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card">
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.roadmap.kicker}</span>
            <h2>{t.roadmap.title}</h2>
          </div>
        </Reveal>
        <div className="timeline">
          {t.roadmap.years.map((y, i) => (
            <Reveal key={y.year} delay={i * 0.08}>
              <div className="timeline-item">
                <div className="timeline-year">{y.year}</div>
                <p>{y.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
