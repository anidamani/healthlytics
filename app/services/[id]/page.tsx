import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/app/components/Services/ServiceHero';
import AdvanceAnalytics from '@/app/components/Services/AdvanceAnalytics';
import Features from '@/app/components/Services/Features';
import AnalyticsTools from '@/app/components/Services/AnalyticsTools';
import FabricImplementation from '@/app/components/Services/FabricImplementation';
import Consulting from '@/app/components/Services/Consulting';
import StockMilestones from '@/app/components/Services/StockMilestones';
import Healthlytcis from '@/app/components/Services/Healthlytics';
import Link from 'next/link';
const servicesData = [
  {
    id: 1,
    index:0,
    image: '/s1.jpg',
    title: 'Data Governance & Compliance',
    description: 'Protecting healthcare data integrity through robust Canadian privacy compliance and responsible AI governance, powered by advanced monitoring and proactive risk management.',
  },
  {
    id: 2,
    image: '/s2.jpg',
    title: 'Advanced Analytics & AI',
    index:0,
    description: 'Predictive insights and intelligent automation that transform clinical operations.',
  },
  {
    id: 3,
    image: '/s3.jpg',
    title: 'Data Integration',
    index:1,
    description: 'Integrate EMR HIS, HR, payroll, and specialized clinical systems.',
  },
  {
    id:4,
    image: '/s4.jpg',
    title: 'Business Intelligence',
    index:3,
    description: 'Interactive dashboards, reports and analytics that deliver real time insights.'
  },
  {
    id:5,
    image: '/s5.jpg',
    title: 'Microsoft Fabric Implementation',
    index:0,
    description: 'As a certified Microsoft part, provide enterprise-grade data.'
  },
  {
    id:6,
    image: '/s6.jpg',
    title: 'Custom Healthcare AI Solutions Development',
    index:0,
    description: 'No matter what your need, we have an experienced dev team to leverage our existing platforms and/or develop new healthcare AI solutions to create better operational workflows and patient outcomes.'
  },
  {
    id:7,
    image: '/s7.jpg',
    title: 'Strategic Consulting',
    index:0,
    description: 'Expert guidance to accelerate your digital transformation journey.'
  },
  {
    id:8,
    image: '/s8.jpg',
    title: 'Training & Support',
    index:2,
    description: 'Comprehensive capability building through hands-on workshops.'
  },
  // Add more services as needed...
];

const featuresData=[
  [
    {
      title: "Intelligent Staffing Forecasts",
      description:
        "Our comprehensive privacy framework ensures seamless HIPAA, PHIPA & PIPEDA compliance for healthcare organizations. We implement granular role-based access controls, real-time audit logging, and automated breach detection to safeguard sensitive patient information while enabling secure data access for authorized care providers.",
      image: "/t8.jpg",
    },
    {
      title: "AI Governance Framework",
      description:
        "We embed ethics and transparency into every AI solution through advanced bias detection algorithms and clear model interpretability tools. Our continuous monitoring system tracks model drift, validates predictions, and ensures compliance with evolving AI regulations - giving you confidence in AI-powered clinical decisions.",
      image: "/t9.jpg",
    },
    {
      title: "Enterprise Data Governance",
      description:
        "By leveraging the DAMA framework to assess and enhance your organization’s data governance maturity—we help you improve data quality, data visibility and data management.Separately, we incorporate the HIMSS AMAM (Analytics Maturity Assessment Model) to evaluate and advance your healthcare analytics maturity.",
      image: "/t10.jpg",
    },
    
  ],
   [
    {
      image: "/t1.jpg",
      title: "EMR Integration",
      description:
        "Implement robust data pipelines to seamlessly ingest and transform clinical data, including patient encounters, laboratory results, and billing information from major systems like Oracle Health, Epic, and Meditech.",
    },
    {
      image: "/t2.jpg",
      title: "Specialty Systems",
      description:
        "Seamlessly integrate complex departmental systems including perioperative analytics, oncology databases, and cardiology imaging systems, ensuring comprehensive clinical insights beyond standard EMR capabilities.",
    },
    {
      image: "/t3.jpg",
      title: "HR and Financial Systems",
      description:
        "Enable comprehensive workforce and financial analytics by integrating enterprise systems like SAP SuccessFactors, UKG (Kronos), and ERP platforms, providing a complete view of operational performance.",
    },
    {
      image: "/t4.jpg",
      title: "Quality Reporting Systems",
      description:
        "Streamline regulatory reporting by automating data submission to CIHI, provincial agencies, and other bodies, reducing manual effort.",
    },
    {
      image: "/t5.jpg",
      title: "Medical Devices & IoT",
      description:
        "Create real-time data pipelines from patient monitoring devices, smart medical equipment, and IoT sensors, enabling proactive patient care and equipment maintenance through advanced analytics.",
    },
    {
      image: "/t1.jpg",
      title: "Claims & Payer Data",
      description:
        "Streamline billing, reduce admin, and gain insights by integrating claims, authorizations, and payer connections.",
    },
    {
      image: "/t6.jpg",
      title: "Research Data Integration",
      description:
        "Connect clinical trial management systems, genomic databases, and research repositories to enable translational research insights and accelerate evidence-based medicine initiatives.",
    },
    {
      image: "/t7.jpg",
      title: "Public Health Data",
      description:
        "Integrate public health registries, epidemiological databases, and social determinants of health data to support population health management and community health initiatives.",
    },
  ],
  // Trainig support
  [
    {
      image: "/tr1.jpg",
      title: "Hands-On Training",
      description:
        "Interactive training sessions designed to build practical skills and confidence in your team. Our expert-led workshops combine real-world healthcare scenarios with hands-on technical practice, ensuring your staff can effectively utilize our analytics solutions."
    },
    {
      image: "/tr2.jpg",
      title: "Continuous Support",
      description:
        "Ongoing assistance at every stage of your analytics journey, with dedicated support channels available 24/7. Our experienced team provides real-time responses, regular check-ins, and proactive monitoring to prevent issues before they arise."
    },
    {
      image: "/tr3.jpg",
      title: "Managed Services",
      description:
        "Comprehensive support solutions ensuring long-term stability and growth of your analytics infrastructure. Our managed services include regular maintenance, performance optimization, system updates, and strategic monitoring."
    }
  ],

  [
    {
      image: "/t4.jpg",
      title: "Interactive Dashboards & Visualization",
      description:
        "Monitor patient flow, financials, staffing, and clinical outcomes with real-time, customizable visualizations accessible from any device. Our advanced dashboards ensure your critical metrics are always at your fingertips."
    },
    {
      image: "/t3.jpg",
      title: "Seamless Integration & Distribution",
      description:
        "Access insights directly within EMRs and internal portals for seamless workflow integration. Schedule and deliver customized reports automatically to key stakeholders."
    },
    {
      image: "/t2.jpg",
      title: "Self-Service Analytics",
      description:
        "Enable teams to create their own insights with a drag-and-drop interface, while maintaining robust data governance. This empowers staff to explore data without compromising security or compliance."
    },
    {
      image: "/t1.jpg",
      title: "Performance Monitoring & Alerts",
      description:
        "Monitor departmental metrics and receive critical real-time alerts. Track KPIs and ensure operational excellence across healthcare organizations."
    }
  ]
]





interface PageProps {
    params: Promise<{ id: string }>;
  }
  
  export default async function Page({ params }: PageProps) {
    // Await the params before using them
    const { id } = await params;
    const service = servicesData.find((service) => service.id === Number(id));
  
    if (!service) {
      return <div>Service not found.</div>;
    }
  return (
    <div>
    {
      (id=="1" || id=="4" || id=="3" || id=="8") &&
      <>
    
    <ServiceHero index={service.id} title={service.title} description={service.description} />
    <Features services={featuresData[service.index]}/>
    {
      id=="4" && <AnalyticsTools/>
    }
    
    </>
    }
   {id=="2" &&
   <>
   <ServiceHero index={service.id} title={service.title} description={service.description} />
   <AdvanceAnalytics/>
   </>
   }
    {id=="6" &&
   <>
   <ServiceHero index={service.id} title={service.title} description={service.description} />
   <Healthlytcis/>
   </>
   }
    {/* {id=="3" && <AnalyticsTools/> } */}
    {id=="5" && <FabricImplementation/> }
    {id=="7" && <Consulting/> }
    

    {/* Other Services */}
{/* Other Services */}
<div className="flex items-center mt-12 flex-wrap gap-4">
  {servicesData.map((ser, index) => (
    <Link key={index} href={`/services/${ser.id}`} className="group relative">
      <h1 className="relative overflow-hidden rounded-full px-4 py-2 text-[14px] border border-black text-black transition-all duration-500 ease-in-out">
        <span className="relative z-10 group-hover:text-white transition-all duration-500">{ser.title}</span>
        <span className="absolute inset-0 bg-green-500 -z-10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
      </h1>
    </Link>
  ))}
</div>




    </div>
  );
};


