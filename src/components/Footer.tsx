import { useLang } from '../i18n/LangContext'
import logo from '../assets/logo.png'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="page">
        <div className="brand">
          <img src={logo} alt="Neutron Robotics" style={{ width: 22, height: 22 }} />
          <span>Neutron Robotics</span>
        </div>
        <span>{t.footer.tagline}</span>
        <span>
          © {year} Neutron Robotics — {t.footer.rights}
        </span>
      </div>
    </footer>
  )
}
