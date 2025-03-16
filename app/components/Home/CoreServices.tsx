import Image from 'next/image';
import Link from 'next/link';

const CoreServices = () => {
  return (
    <section className="gap-8 rounded-[40px] bg-white p-[48px] mt-[32px]">
      {/* Services List */}
      <h1 className="max-w-[70%] mb-3 md:max-w-[60%] font-medium text-[28px] sm:text-[34px] md:text-[54px] xl:text-[64px] leading-[40px] sm:leading-[60px] md:leading-[80px] text-[#161B24]">
        <span className="bg-[#79ED9E80] rounded-[20px] px-2">Our Core</span>  Services
      </h1>

      <div className="flex flex-col gap-7 md:flex-row items-center justify-center">
        {/* Services List */}
        <div className="w-full md:w-1/2">
          <ul className="list-disc grid sm:grid-cols-2 pl-5 text-lg space-y-2">
            <li><Link className="text-blue-600 underline" href="/services/1">Governance & Compliance</Link></li>
            <li><Link className="text-blue-600 underline" href="/services/2">Advanced Analytics & AI</Link></li>
            <li><Link className="text-blue-600 underline" href="/services/3">Data Integration</Link></li>
            <li><Link className="text-blue-600 underline" href="/services/4">Business Intelligence</Link></li>
            <li><Link className="text-blue-600 underline" href="/services/5">Microsoft Fabric Implementation</Link></li>
            <li><Link className="text-blue-600 underline" href="/services/6">Custom Healthcare AI Solutions Development</Link></li>
            <li><Link className="text-blue-600 underline" href="/services/7">Strategic Consulting</Link></li>
            <li><Link className="text-blue-600 underline" href="/services/8">Training & Support</Link></li>
          </ul>
        </div>

        {/* Clickable Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Link href="/services">
            <Image 
              src="/core.jpeg" 
              alt="Core Services"
              width={500}
              height={300}
              className="rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
