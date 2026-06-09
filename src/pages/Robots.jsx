import ServicePage from '../components/ServicePage'

const brands = ['Fanuc', 'ABB', 'Kuka', 'Yaskawa', 'Stäubli', 'Universal Robots']

const sections = [
  {
    items: [
      {
        label: 'Robot Programming',
        text: 'Customized programming to optimize robotic performance in various industrial applications.',
      },
      {
        label: 'Robot Upgrades',
        text: 'Modernizing existing robots to enhance efficiency, capabilities, and compatibility with current systems.',
      },
      {
        label: 'Technology Updates',
        text: 'Transitioning to cutting-edge robotic technologies for superior results and extended service life.',
      },
      {
        label: 'New Implementations',
        text: 'Designing and integrating new robotic systems tailored to your specific production needs.',
      },
      {
        label: 'Preventative Maintenance',
        text: 'Regular maintenance services to ensure peak performance and maximize the longevity of your robots.',
      },
      {
        label: 'Troubleshooting & Maintenance',
        text: 'Emergency and scheduled maintenance services to minimize downtime and keep your lines running.',
      },
      {
        label: 'System Integration',
        text: 'Seamlessly connecting robotic systems with other industrial hardware, PLCs, and software platforms.',
      },
      {
        label: 'Training & Support',
        text: 'Providing expert training sessions and ongoing support so your team can operate and maintain robots confidently.',
      },
      {
        label: 'Consultation Services',
        text: 'Offering expert advice to identify the right robotic solutions and improve your automation strategies.',
      },
    ],
  },
]

export default function Robots() {
  return (
    <ServicePage
      heroImage="/automation.jpg"
      title="Robots"
      subtitle="Elevate your automation with our diverse range of robot services. From first-time integrations to full fleet upgrades, we deliver solutions built for performance and reliability."
      sections={sections}
    >
      <div className="brands-section">
        <h2>Brands We Work With</h2>
        <ul className="brands-list">
          {brands.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
      </div>
    </ServicePage>
  )
}