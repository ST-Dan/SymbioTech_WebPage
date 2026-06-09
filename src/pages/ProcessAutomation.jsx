import ServicePage from '../components/ServicePage'

const sections = [
  {
    items: [
      {
        label: 'PLC Programming',
        text: 'Tailored software development for various industrial applications.',
      },
      {
        label: 'PLC Upgrades',
        text: 'Enhancing existing systems with the latest advancements for optimal performance.',
      },
      {
        label: 'Technology Updates',
        text: 'Transitioning older systems to newer, more efficient technologies.',
      },
      {
        label: 'New Implementations',
        text: 'Designing and integrating new PLC systems from scratch.',
      },
      {
        label: 'System Integration',
        text: 'Seamlessly connecting PLC systems with other hardware and software.',
      },
      {
        label: 'Training & Support',
        text: 'Providing expert training sessions and ongoing support for your team.',
      },
      {
        label: 'Remote Monitoring',
        text: 'Implementing solutions for remote monitoring and control of your PLC systems.',
      },
      {
        label: 'Consultation Services',
        text: 'Offering expert advice to improve your automation strategies.',
      },
      {
        label: 'Troubleshooting & Maintenance',
        text: 'Regular and emergency maintenance services to keep your systems running smoothly.',
      },
    ],
  },
]

export default function ProcessAutomation() {
  return (
    <ServicePage
      heroImage="/automation.jpg"
      title="Process Automation"
      subtitle="Discover our comprehensive range of PLC (Programmable Logic Controller) services designed to meet your automation needs."
      sections={sections}
    />
  )
}