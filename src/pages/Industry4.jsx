import ServicePage from '../components/ServicePage'

const sections = [
  {
    items: [
      {
        label: 'Custom Machine Building',
        text: 'Tailored solutions to meet your specific manufacturing needs.',
      },
      {
        label: 'Fully Automated Production Lines',
        text: 'Design and implementation of complete automation solutions, ensuring maximum efficiency and productivity.',
      },
      {
        label: 'MES System Integration',
        text: 'Seamlessly integrate Manufacturing Execution Systems (MES) to monitor and control your production processes in real-time.',
      },
      {
        label: 'Industry 4.0 Compliance',
        text: 'Adopting the latest technologies to ensure your operations are future-ready and compliant with industry standards.',
      },
      {
        label: 'Legacy Equipment Modernization',
        text: 'Developing custom solutions to enable older machines to communicate with current technologies.',
      },
      {
        label: 'IoT Integration',
        text: 'Implementing Internet of Things (IoT) devices and systems to enhance connectivity and data collection.',
      },
      {
        label: 'Data Analytics Solutions',
        text: 'Providing data analytics and reporting tools to optimize performance and decision-making.',
      },
    ],
  },
]

export default function Industry4() {
  return (
    <ServicePage
      heroImage="/citys.jpg"
      title="Industry 4.0"
      subtitle="Transform your production processes with our help. We specialize in building custom machines and fully automated production lines that meet all Industry 4.0 requirements."
      sections={sections}
    />
  )
}