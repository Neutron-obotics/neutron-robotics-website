import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

const competitorPositions = [
  { left: '16%', bottom: '58%' },
  { left: '24%', bottom: '52%' },
  { left: '20%', bottom: '44%' },
  { left: '66%', bottom: '18%' },
  { left: '74%', bottom: '13%' },
]

export default function ProblemMarket() {
  const { t } = useLang()

  return (
    <>
      <section id="probleme-marche" className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.problem.kicker}</span>
            <h2>{t.problem.title}</h2>
            <p>{t.problem.intro}</p>
          </div>
        </Reveal>
        <div className="grid grid-4">
          {t.problem.points.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <div className="card">
                <div className="stat">{p.stat}</div>
                <div className="label">{p.label}</div>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.problem.marketKicker}</span>
            <h2>{t.problem.marketTitle}</h2>
            <p>{t.problem.marketIntro}</p>
          </div>
        </Reveal>
        <div className="grid grid-3">
          {t.problem.marketStats.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="card">
                <div className="stat">{m.stat}</div>
                <div className="label">{m.label}</div>
                <p>{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.competition.kicker}</span>
            <h2>{t.competition.title}</h2>
            <p>{t.competition.text}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="matrix">
            <span className="matrix-axis axis-top">{t.competition.axisIa}</span>
            <span className="matrix-axis axis-bottom">{t.competition.axisNoIa}</span>
            <span className="matrix-axis axis-left">{t.competition.axisFrozen}</span>
            <span className="matrix-axis axis-right">{t.competition.axisProgrammable}</span>

            {t.competition.others.map((name, i) => {
              const pos = competitorPositions[i]
              return (
                <span key={name} className="matrix-dot" style={{ left: pos.left, bottom: pos.bottom }}>
                  {name}
                </span>
              )
            })}
            <span className="matrix-dot us" style={{ left: '80%', bottom: '82%' }}>
              {t.competition.us}
            </span>
          </div>
        </Reveal>
      </section>
    </>
  )
}
