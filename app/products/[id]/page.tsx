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
const BASE_URL = 'https://healthlytics.ai';  // Add this line at the top

const servicesData = [
  {
    id: 1,
    index:0,
    image: '/p1.png',
    title: 'Early Detection for Healthier Lungs: PulmoDeep.AI',
    description: '',
  },
  {
    id: 2,
    image: '/p2.jpg',
    title: 'Optimized Operations with Trusted Data',
    index:1,
    description: '',
  },
  {
    id: 3,
    image: '/p3.jpg',
    title: 'Reclaiming Time, Enhancing Care with our AI Scribe for Mental Health Professionals: waivs.ai',
    index:2,
    description: '',
  },
  
  // Add more services as needed...
];

const featuresData=[
  [
    {
      title: "The Challenge: Understanding Lung Disease's Impact",
      description:
        "Lung diseases are a major global health crisis, often diagnosed too late when treatment options are limited.Current methods for detecting lung conditions like cancer and COPD are often inaccurate, leading to misdiagnosis in up to 30% of cases. This delay means patients miss crucial early treatment windows, significantly impacting survival rates and quality of life. For healthcare systems, late diagnoses result in higher treatment costs, longer hospital stays, and reduced patient well-being – a heavy burden for everyone.",
      image: "/p1.png",
    },
    {
      title: "Our Solution: PulmoDeep AI Technology",
      description:
        "We introduced PulmoDeep, an advanced AI-powered diagnostic tool that acts like a specialist's second opinion, instantly available. PulmoDeep uses sophisticated AI to analyze chest X-rays and CT scans with exceptional precision, identifying subtle signs of lung disease that might be missed by the human eye, especially in early stages. Think of it as equipping doctors with a super-powered assistant that never tires and learns from vast amounts of medical data, ensuring consistent and reliable analysis.",
      image: "/p4.png",
    },
    {
      title: "Impact and Benefits",
      description:
        "PulmoDeep dramatically improves diagnostic accuracy, leading to earlier detection of critical lung diseases. This means patients can receive timely treatment, significantly improving their chances of recovery and long-term health. For healthcare providers, PulmoDeep reduces diagnostic errors, streamlines workflows, and helps prioritize urgent cases.This translates to better patient outcomes, reduced healthcare costs from late-stage interventions, and increased efficiency in radiology departments, allowing them to focus on delivering the best possible care.",
      image: "/p5.jpg",
    },
    
  ],
   [
    {
      image: "/p6.jpg",
      title: "The Challenge: Data Trust Issues in Emergency Department",
      description:
        "For an academic based Hospital in Canada, like many large healthcare organizations, critical decisions were being made based on reports where the underlying data was questionable. Emergency Department managers lacked confidence in wait time and patient length-of-stay reports because they didn't know where the data came from, how it was calculated, or if it was even accurate.",
    },
    {
      image: "/p3.jpg",
      title: "Our Strategic Solution: Data Governance Implementation",
      description:
        "We partnered with HM Hospital to implement a robust data governance framework. This involved establishing clear policies and procedures to ensure data quality, privacy, and integrity across the organization.",
    },
    {
      image: "/p2.jpg",
      title: "Technical Implementation",
      description:
        "We deployed Microsoft Purview to establish data trust and governance across their entire data landscape, leading to better data quality, compliance, and ultimately, improved decision-making.We also built a modern data architecture using Microsoft Fabric, creating a scalable and efficient system for managing and analyzing diverse healthcare data.",
    },
    {
      image: "/p1.png",
      title: "Impact and Achievements",
      description:
        "Our Emergency Department project delivered immediate ROI by providing HM Hospital with the data-driven insights needed to optimize staffing. This means better resource allocation and potentially reduced costs in a high-demand area.More broadly, our data governance initiative is building a foundation of reliable data across the hospital, transforming it into a strategic asset.",
    },
  ],
  // Trainig support
  [
    {
      image: "/p5.jpg",
      title: "Issue: The Burden of Note-Taking: Therapist Burnout and Reduced Client Focus",
      description:
        "Mental health professionals (MHPs) face a significant administrative burden with extensive note-taking required for each session.This manual process is time-consuming, often spilling into evenings and weekends, contributing to therapist burnout. More importantly, focusing on note-taking during sessions can detract from the therapist's presence and engagement with the client, potentially impacting the therapeutic relationship and treatment effectiveness. The need for efficient and less intrusive documentation methods is critical to support MHPs and improve client care."
    },
    {
      image: "/t6.jpg",
      title: "Approach: AI-Powered Scribes: Effortless and Secure Session Documentation",
      description:
        "We introduced an AI-powered note-taking tool that acts as a secure, virtual scribe for therapy sessions.This technology automatically transcribes sessions in real-time, converting speech to text and generating comprehensive progress notes. MHPs can choose from customizable note templates and easily review and edit the AI-generated notes post-session. The tool works seamlessly with online and in-person sessions, freeing therapists from the distraction of manual note-taking and allowing them to fully focus on their clients."
    },
    {
      image: "/p7.jpg",
      title: "Result: Time Savings, Reduced Burnout, and Deeper Client Connections",
      description:
        "By automating note-taking, MHPs are reclaiming up to 50% of their time previously spent on documentation. This significant time saving allows them to reduce burnout, improve work-life balance, and dedicate more time to direct client care or professional development.Furthermore, with AI handling the note-taking, therapists can be more present and engaged during sessions, fostering stronger therapeutic alliances and potentially improving treatment outcomes."
    }
  ],


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
   
    
    <ServiceHero index={service.id} title={service.title} description={service.description} />
    <Features services={featuresData[service.index]}/>
    {/* thumb nail only for first index */}
    {
      service.id==1 &&
    <div className='flex justify-center items-center mt-12'>
    <iframe 
  width="600" 
  height="350" 
  src="https://www.youtube.com/embed/nuDsKp9QsEM" 
  title="YouTube video player" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen>
</iframe>
</div>}

{service.id==3 &&
  <div className='flex mt-12 flex-col'>
  <Image src="/wavie.png" width={300} height={50} className='' alt=''/>
  <h1 className="font-normal mt-[15px] text-[14px] xl:text-[18px] leading-[28px] text-[#161B24B2]">
    <Link href="https://www.waivs.ai" className="text-blue-600 underline">
      https://www.waivs.ai
    </Link>
  </h1>
</div>
  }


<div className="flex items-center mt-12 flex-wrap gap-4">
  {servicesData.map((ser, index) => (
    <Link key={index} href={`/products/${ser.id}`} className="group relative">
      <h1 className="relative overflow-hidden rounded-full px-4 py-2 text-[14px] border border-black text-black transition-all duration-500 ease-in-out">
        <span className="relative z-10 group-hover:text-white transition-all duration-500">
          {index === 0 ? 'PulmoDeep.AI' : index === 2 ? 'Waivs.AI' : 'Optimized Operations'}
        </span>
        <span className="absolute inset-0 bg-green-500 -z-10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
      </h1>
    </Link>
  ))}
</div>

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": service?.title,
      "description": service?.description || `${
        service?.id === 1 
          ? 'AI-powered lung disease detection and diagnostic support system for early intervention and improved patient outcomes.'
          : service?.id === 2 
          ? 'Data governance and analytics solution for healthcare organizations to optimize operations and ensure data reliability.'
          : 'waivs.ai: AI-powered transcription and documentation solution for mental health professionals to reduce administrative burden and improve patient care.'
      }`,
      "image": `${BASE_URL}${service?.image}`,
      "brand": {
        "@type": "Brand",
        "name": "Healthlytics.ai",
        "logo": `${BASE_URL}/logo.svg`
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "category": "Healthcare AI Solutions"
      }
    })
  }}
/>
    </div>
  );
};


