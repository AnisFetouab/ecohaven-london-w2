
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
          subtitle="AIDA"
          title="Zero-Emission sa London W2"
          centered={true}
        />

        {/* AIDA Format Content */}
        <div className="eco-glass p-8 md:p-10 rounded-2xl my-12 animate-on-scroll animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">🌱 Live Emission-Free in London W2 – A New Standard in Sustainable Living</h2>
          
          <div className="space-y-10">
            {/* Attention */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🟢</span>
                <span>ATTENTION – A Greener Way of Living in the Heart of London</span>
              </div>
              <p className="text-muted-foreground">
                Imagine a home where every detail is designed for a sustainable future. 
                Located in London W2, our zero-emission real estate development offers premium, 
                eco-friendly housing for 50 families—without compromising comfort or modernity.
              </p>
            </div>
            
            {/* Interest */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🟡</span>
                <span>INTEREST – Why Choose an Eco-Friendly Home?</span>
              </div>
              <p className="text-muted-foreground mb-4">
                As climate change and rising energy costs become urgent concerns, our project 
                provides a forward-thinking solution:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✅</span>
                  <span>100% Renewable Energy – Solar panels and passive energy recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✅</span>
                  <span>Eco-Friendly Materials – Reduced carbon footprint from construction to daily living</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✅</span>
                  <span>Better Air Quality & Well-Being – Natural ventilation and integrated green spaces</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                By choosing to live here, you embrace a sustainable lifestyle while enjoying a high-quality, 
                modern home.
              </p>
            </div>
            
            {/* Decision */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🔵</span>
                <span>DECISION – A Project Backed by Experts</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Designed by leading architects and sustainability engineers, each home maximizes 
                energy efficiency. Industry leaders have praised the project:
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-4 italic">
                "This development is a model for the future of urban living."
                <footer className="text-sm mt-2">UN Nations</footer>
              </blockquote>
              <blockquote className="border-l-4 border-primary/30 pl-4 italic mt-4">
                "Living here means reducing your carbon footprint while enjoying a premium lifestyle."
                <footer className="text-sm mt-2">Lewis Hamilton</footer>
              </blockquote>
            </div>
            
            {/* Action */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🔴</span>
                <span>ACTION – Join the Zero-Emission Revolution!</span>
              </div>
              <p className="text-muted-foreground">
                This is a unique opportunity to invest in a greener future. 
                Contact us today to learn more or schedule a visit.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center">
                  <span className="text-xl mr-2">📩</span>
                  <span>info@ecohaven-london.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-2">📞</span>
                  <span>+44 (0) 123 456 7890</span>
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
        {/* Key Features Section */}
<div className="py-12">
  <SectionHeading
    subtitle="Key Features"
    title="Sustainable Solutions"
    description="Our development incorporates the following eco-friendly solutions:"
  />

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
    <FeatureCard
      icon={Leaf}
      title="Eco-Friendly Materials"
      description="We use sustainable and non-toxic materials throughout the construction process."
      delay={0}
    />
    <FeatureCard
      icon={SunMedium}
      title="Renewable Energy"
      description="100% renewable energy sourced from solar panels and wind turbines integrated into the design."
      delay={1}
    />
    <FeatureCard
      icon={Home}
      title="Energy Efficiency"
      description="Superior insulation and energy-efficient windows to minimize energy consumption."
      delay={2}
    />
    <FeatureCard
      icon={Lightbulb}
      title="Smart Technology"
      description="Integrated smart home systems to optimize energy usage and enhance comfort."
      delay={3}
    />
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TagalogProject;
