import ServicePage from '../components/ServicePage'

const sections = [
  {
    items: [
      {
        label: 'PLC Upgrades',
        text: 'Replace or upgrade aging PLCs with modern, high-performance controllers for improved reliability and processing power.',
      },
      {
        label: 'HMI Modernization',
        text: 'Update operator interfaces with intuitive touchscreen HMIs for improved usability and faster response times.',
      },
      {
        label: 'Technology Updates',
        text: 'Transition older control systems to newer, more efficient technologies without disrupting ongoing production.',
      },
      {
        label: 'Legacy Equipment Modernization',
        text: 'Develop custom solutions that enable older machines to communicate with current technologies and networked systems.',
      },
      {
        label: 'Network Infrastructure Upgrades',
        text: 'Migrate from legacy fieldbus systems to modern Ethernet-based industrial networks for greater speed and flexibility.',
      },
      {
        label: 'Sensor & Actuator Replacement',
        text: 'Source and install current-generation sensors and actuators to improve precision, repeatability, and data quality.',
      },
      {
        label: 'Safety System Updates',
        text: 'Bring existing equipment up to current safety standards with modern safety PLCs, light curtains, and interlocks.',
      },
      {
        label: 'Preventative Maintenance Programs',
        text: 'Establish structured maintenance schedules to maximize equipment uptime and extend asset life cycles.',
      },
    ],
  },
]

export default function UpgradeEquipment() {
  return (
    <ServicePage
      heroImage="/ULS.jpg"
      title="Upgrade Equipment"
      subtitle="Modernize your existing machinery with our equipment upgrade services — extending asset life while dramatically improving performance, connectivity, and safety compliance."
      sections={sections}
    />
  )
}