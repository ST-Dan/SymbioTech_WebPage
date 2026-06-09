import ServicePage from '../components/ServicePage'

const sections = [
  {
    items: [
      {
        label: 'Real-Time Production Monitoring',
        text: 'Gain complete visibility into your production processes with live data dashboards and reporting.',
      },
      {
        label: 'MES Implementation',
        text: 'Full-cycle MES deployment tailored to your plant\'s specific workflows and systems.',
      },
      {
        label: 'ERP & SCADA Integration',
        text: 'Seamlessly connect your MES with ERP, SCADA, and other enterprise platforms for end-to-end data flow.',
      },
      {
        label: 'Data Collection & Analysis',
        text: 'Capture machine data and KPIs to drive continuous improvement and reduce unplanned downtime.',
      },
      {
        label: 'Traceability & Quality Management',
        text: 'Track production batches and ensure compliance with industry quality standards throughout the process.',
      },
      {
        label: 'Legacy Equipment Connectivity',
        text: 'Bridge older machines to your modern MES through custom OPC-UA or protocol adapters.',
      },
      {
        label: 'MES System Upgrades',
        text: 'Modernize and extend existing MES installations to keep pace with evolving production demands.',
      },
      {
        label: 'Training & Support',
        text: 'Hands-on training for your team and ongoing technical support to keep your MES running at peak performance.',
      },
    ],
  },
]

export default function MESIntegration() {
  return (
    <ServicePage
      heroImage="/mes.webp"
      title="MES Integration"
      subtitle="Our Manufacturing Execution System (MES) solutions bridge the gap between your shop floor and enterprise systems, providing real-time visibility and control over every stage of production."
      sections={sections}
    />
  )
}