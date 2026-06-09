import { Fragment, useState } from 'react'
import './Home.css'

const tabs = [
  {
    label: 'Industry 4.0',
    image: '/i4.png',
    content:
      'Embrace the future of manufacturing with our Industry 4.0 solutions. We specialize in integrating advanced technologies such as IoT, AI, and big data analytics to create smart factories that are efficient, flexible, and responsive. Our expertise in Industry 4.0 enables us to transform traditional manufacturing processes into interconnected systems that optimize production, enhance quality, and reduce costs. Partner with us to stay ahead of the curve and drive innovation in your industry.',
  },
  {
    label: 'MES',
    image: '/general-mes.png',
    content:
      'Our Manufacturing Execution System (MES) solutions bridge the gap between your shop floor and enterprise systems. We provide real-time visibility into production processes, enabling data-driven decisions that boost efficiency and quality. Our MES implementations are tailored to your specific industry needs, ensuring seamless integration with existing infrastructure and delivering measurable results from day one.',
  },
  {
    label: 'Automation',
    image: '/automation.jpg',
    content:
      'Unlock the full potential of your production lines with our comprehensive automation solutions. From robotic process automation to advanced PLC programming and SCADA systems, we design and deploy solutions that reduce manual labor, minimize errors, and maximize throughput. Our team works closely with yours to identify automation opportunities and deliver systems that scale with your business growth.',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-text">Smart Machines - Smarter Business</h1>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>

          <div className="stepper-card">
            {/* Step tabs */}
            <div className="stepper">
              {tabs.map((tab, i) => (
                <Fragment key={tab.label}>
                  <button
                    className={`step ${activeTab === i ? 'active' : ''}`}
                    onClick={() => setActiveTab(i)}
                  >
                    <span className="step-num">{i + 1}</span>
                    <span className="step-label">{tab.label}</span>
                  </button>
                  {i < tabs.length - 1 && <div className="step-line" />}
                </Fragment>
              ))}
            </div>

            {/* Tab content */}
            <div className="tab-content">
              <img src={tabs[activeTab].image} alt={tabs[activeTab].label} />
              <p>{tabs[activeTab].content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>

          <div className="contact-grid">
            <img
              src="/contactus.webp"
              alt="Contact SymbioTech"
              className="contact-image"
            />

            <div className="contact-info">
              <div className="contact-block">
                <h3>CALL US</h3>
                <p>Have questions or need assistance?</p>
                <p>We&apos;re happy to help!</p>
                <p className="contact-phone">+1 915 873 5665</p>
              </div>

              <div className="contact-block">
                <p>Prefer to write?</p>
                <p>Send us an email at</p>
                <a href="mailto:sales@symbiotechusa.com" className="contact-email">
                  sales@symbiotechusa.com
                </a>
              </div>

              <hr className="contact-divider" />

              <div className="contact-block">
                <h3>Business Hours</h3>
                <p className="contact-hours-text">8:00 am to 6:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}