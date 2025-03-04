
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectOverview from '../components/ProjectOverview';
import FeatureCard from '../components/FeatureCard';
import { Leaf, SunMedium, Home, Lightbulb } from 'lucide-react';

const TagalogProject = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Proyekto"
          title="Zero-Emission sa London W2"
          description="Isang bagong pamantayan sa sustainable na pamumuhay sa gitna ng London."
          centered={true}
        />

        {/* AIDA Format Content */}
        <div className="eco-glass p-8 md:p-10 rounded-2xl my-12 animate-on-scroll animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Emission-Free sa London W2 – Bagong Pamantayan sa Sustainable na Pamumuhay</h2>
          
          <div className="space-y-10">
            {/* Attention */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🟢</span>
                <span>ATTENTION – Ang Mas Luntian na Paraan ng Pamumuhay sa Gitna ng London</span>
              </div>
              <p className="text-muted-foreground">
                Isipin ang isang tahanan kung saan ang bawat detalye ay idinisenyo para sa sustainable na hinaharap. 
                Matatagpuan sa London W2, ang aming zero-emission na real estate development ay nag-aalok ng premium, 
                eco-friendly na pabahay para sa 50 pamilya — nang hindi nagkokompromiso sa ginhawa o modernidad.
              </p>
            </div>
            
            {/* Interest */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🟡</span>
                <span>INTEREST – Bakit Pipiliin ang Eco-Friendly na Tahanan?</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Habang ang climate change at tumataas na presyo ng enerhiya ay nagiging mga agarang alalahanin, 
                ang aming proyekto ay nagbibigay ng isang may pananaw sa hinaharap na solusyon:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✅</span>
                  <span>100% Renewable Energy – Solar panels at passive energy recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✅</span>
                  <span>Eco-Friendly na Materyales – Binawasan na carbon footprint mula sa construction hanggang sa pang-araw-araw na pamumuhay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✅</span>
                  <span>Mas Magandang Kalidad ng Hangin & Kalusugan – Natural na bentilasyon at integrated green spaces</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Sa pagpili na manirahan dito, tinatanggap mo ang sustainable na pamumuhay habang natatamasa ang isang 
                mataas na kalidad, modernong tahanan.
              </p>
            </div>
            
            {/* Decision */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🔵</span>
                <span>DECISION – Isang Proyektong Suportado ng mga Eksperto</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Idinisenyo ng nangungunang mga arkitekto at sustainability engineers, bawat tahanan ay 
                pinapataas ang energy efficiency. Ang mga lider ng industriya ay pumuri sa proyekto:
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-4 italic">
                "Ang development na ito ay isang modelo para sa hinaharap ng urban living."
                <footer className="text-sm mt-2">— Sustainability Expert</footer>
              </blockquote>
              <blockquote className="border-l-4 border-primary/30 pl-4 italic mt-4">
                "Ang paninirahan dito ay nangangahulugang pagbabawas ng iyong carbon footprint habang tinatamasa ang isang premium lifestyle."
                <footer className="text-sm mt-2">— Resident Testimonial</footer>
              </blockquote>
            </div>
            
            {/* Action */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🔴</span>
                <span>ACTION – Sumali sa Zero-Emission Revolution!</span>
              </div>
              <p className="text-muted-foreground">
                Ito ay isang natatanging pagkakataon upang mamuhunan sa mas luntiang hinaharap. 
                Makipag-ugnayan sa amin ngayon upang matuto nang higit pa o mag-iskedyul ng pagbisita.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center">
                  <span className="text-xl mr-2">📩</span>
                  <a href="/contact" className="text-primary hover:underline">Makipag-ugnayan Sa Amin</a>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-2">📍</span>
                  <span>London W2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <ProjectOverview
          title="Modernong Sustainable Design"
          content="Ang EcoHaven London W2 ay nagtatampok ng cutting-edge na sustainable design na gumagamit ng mga renewable na materyales at advanced na teknolohiya upang bawasan ang environmental impact. Ang aming mga istruktura ay idinisenyo upang ma-maximize ang natural na liwanag at bentilasyon, na nagbabawas sa pangangailangan para sa artificial na pag-iilaw at pagpapalamig."
          image="/placeholder.svg"
        />

        <div className="py-16">
          <ProjectOverview
            title="Smart Home Technology"
            content="Bawat unit ay nilagyan ng cutting-edge na smart home technology para sa optimal na energy management. Ang mga sensor ay awtomatikong nag-a-adjust ng temperatura, ilaw, at iba pang mga appliance para sa maximum efficiency. Ang mga residente ay maaaring subaybayan at kontrolin ang kanilang energy consumption sa pamamagitan ng madaling gamitin na mobile app."
            image="/placeholder.svg"
            reverse={true}
          />
        </div>

        {/* Key Features */}
        <div className="py-12">
          <SectionHeading
            subtitle="Mga Katangian"
            title="Sustainable na Solusyon"
            description="Ang aming development ay nagtatampok ng mga sumusunod na eco-friendly na solusyon:"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly Materials"
              description="Gumagamit ng sustainable at hindi nakakalason na materyales sa buong construction process."
              delay={0}
            />
            <FeatureCard
              icon={SunMedium}
              title="Renewable Energy"
              description="100% renewable energy mula sa solar panels at wind turbines na naka-integrate sa design."
              delay={1}
            />
            <FeatureCard
              icon={Home}
              title="Energy Efficiency"
              description="Superior na insulasyon at energy-efficient na windows para sa pinakamababang energy consumption."
              delay={2}
            />
            <FeatureCard
              icon={Lightbulb}
              title="Smart Technology"
              description="Integrated smart home systems para ma-optimize ang energy usage at comfort."
              delay={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagalogProject;
