import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'
import romainPhoto from '../assets/team/romain.jpg'
import florianPhoto from '../assets/team/florian.jpg'

const photos: Record<string, string> = {
  'Romain Gasquet': romainPhoto,
  'Florian Even': florianPhoto,
}

export default function Team() {
  const { t } = useLang()

  return (
    <section id="equipe" className="page">
      <Reveal>
        <div className="section-head">
          <span className="kicker">{t.team.kicker}</span>
          <h2>{t.team.title}</h2>
        </div>
      </Reveal>
      <div className="grid grid-2">
        {t.team.founders.map((f, i) => (
          <Reveal key={f.name} delay={i * 0.1}>
            <div className="card founder-card">
              <img className="founder-avatar" src={photos[f.name]} alt={f.name} />
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
  )
}
