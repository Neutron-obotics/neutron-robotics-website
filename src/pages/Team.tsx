import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

export default function Team() {
  const { t } = useLang()

  return (
    <div className="page" style={{ paddingTop: 140 }}>
      <section style={{ paddingTop: 0 }}>
        <Reveal>
          <div className="section-head">
            <span className="kicker">{t.team.kicker}</span>
            <h2>{t.team.title}</h2>
            <p>{t.team.intro}</p>
          </div>
        </Reveal>
        <div className="grid grid-2">
          {t.team.founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="card founder-card">
                <div className="founder-avatar">
                  {f.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <span className="founder-role">{f.role}</span>
                <h3>{f.name}</h3>
                <p>{f.title}</p>
                <p className="mono" style={{ fontSize: '0.82rem' }}>
                  {f.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
