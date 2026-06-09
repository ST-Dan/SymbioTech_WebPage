import './ServicePage.css'

export default function ServicePage({ heroImage, title, subtitle, sections, children }) {
  return (
    <>
      <div className="page-hero" style={{ backgroundImage: `url('${heroImage}')` }}>
        <div className="page-hero-overlay">
          <h1 className="page-hero-title">{title}</h1>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          {subtitle && <p className="page-subtitle">{subtitle}</p>}

          {sections?.map((section) => (
            <div key={section.heading ?? 'default'} className="page-section">
              {section.heading && <h2 className="page-section-heading">{section.heading}</h2>}
              <div className={`services-grid ${section.cols === 1 ? 'services-grid--single' : ''}`}>
                {section.items.map(({ label, text }) => (
                  <div key={label} className="service-item">
                    <span className="service-label">{label}: </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {children}
        </div>
      </section>
    </>
  )
}