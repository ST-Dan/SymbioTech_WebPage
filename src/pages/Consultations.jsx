import ServicePage from '../components/ServicePage'

const trainings = [
  {
    label: 'Customized Training',
    text: 'Tailored training sessions designed to meet your team\'s unique requirements and enhance their skills.',
  },
  {
    label: 'On-Site Training',
    text: 'Hands-on training at your facility to ensure practical application and immediate impact.',
  },
  {
    label: 'Remote Training',
    text: 'Flexible online training sessions to accommodate your team\'s schedule and location.',
  },
  {
    label: 'Ongoing Support',
    text: 'Continuous training support to keep your team updated with the latest technologies and techniques.',
  },
]

const consultations = [
  {
    label: 'Process Optimization',
    text: 'Expert analysis and recommendations to streamline your operations and boost efficiency.',
  },
  {
    label: 'System Audits',
    text: 'Thorough audits of your existing systems to identify areas for improvement and potential upgrades.',
  },
  {
    label: 'Technology Integration',
    text: 'Guidance on integrating new technologies seamlessly into your existing workflows.',
  },
  {
    label: 'Risk Management',
    text: 'Strategies to mitigate risks and ensure the reliability and security of your systems.',
  },
  {
    label: 'Strategic Planning',
    text: 'Long-term planning and strategy development to future-proof your operations.',
  },
]

export default function Consultations() {
  return (
    <ServicePage
      heroImage="/contactus.webp"
      title="Trainings & Consultations"
      subtitle="Empower your team and optimize your operations with our expert training and consultation services. We offer a range of solutions tailored to your specific needs."
    >
      <div className="two-col-sections">
        <div className="two-col-section">
          <h2>Trainings</h2>
          {trainings.map(({ label, text }) => (
            <div key={label} className="service-item">
              <span className="service-label">{label}: </span>
              {text}
            </div>
          ))}
        </div>

        <div className="two-col-section">
          <h2>Consultations</h2>
          {consultations.map(({ label, text }) => (
            <div key={label} className="service-item">
              <span className="service-label">{label}: </span>
              {text}
            </div>
          ))}
        </div>
      </div>
    </ServicePage>
  )
}