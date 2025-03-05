import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectOverview from '../components/ProjectOverview';
import FeatureCard from '../components/FeatureCard';
import { Leaf, SunMedium, Home, Lightbulb } from 'lucide-react';

const TagalogProject = () => {
  const [language, setLanguage] = useState('en'); // Language state (en for English, tl for Tagalog)

  // Translations
  const translations = {
    en: {
      subtitle: "AIDA",
      title: "Zero-Emission in London W2",
      attentionTitle: "ATTENTION – A Greener Way of Living in the Heart of London",
      attentionDescription: "Imagine a home where every detail is designed for a sustainable future. Located in London W2, our zero-emission real estate development offers premium, eco-friendly housing for 50 families—without compromising comfort or modernity.",
      interestTitle: "INTEREST – Why Choose an Eco-Friendly Home?",
      interestDescription: "As climate change and rising energy costs become urgent concerns, our project provides a forward-thinking solution:",
      decisionTitle: "DECISION – A Project Backed by Experts",
      decisionDescription: "Designed by leading architects and sustainability engineers, each home maximizes energy efficiency. Industry leaders have praised the project:",
      actionTitle: "ACTION – Join the Zero-Emission Revolution!",
      actionDescription: "This is a unique opportunity to invest in a greener future. Contact us today to learn more or schedule a visit.",
      keyFeaturesTitle: "Sustainable Solutions",
      keyFeaturesDescription: "Our development incorporates the following eco-friendly solutions:",
      feature1Title: "Eco-Friendly Materials",
      feature1Description: "We use sustainable and non-toxic materials throughout the construction process.",
      feature2Title: "Renewable Energy",
      feature2Description: "100% renewable energy sourced from solar panels and wind turbines integrated into the design.",
      feature3Title: "Energy Efficiency",
      feature3Description: "Superior insulation and energy-efficient windows to minimize energy consumption.",
      feature4Title: "Smart Technology",
      feature4Description: "Integrated smart home systems to optimize energy usage and enhance comfort."
    },
    tl: {
      subtitle: "AIDA",
      title: "Zero-Emission sa London W2",
      attentionTitle: "ATTENTION – Isang Mas Luntiang Pamumuhay sa Puso ng London",
      attentionDescription: "Isipin ang isang bahay kung saan ang bawat detalye ay dinisenyo para sa isang sustainable na hinaharap. Matatagpuan sa London W2, ang aming zero-emission na proyekto ng real estate ay nag-aalok ng premium, eco-friendly na pabahay para sa 50 pamilya—nang hindi isinasakripisyo ang kaginhawahan o modernidad.",
      interestTitle: "INTEREST – Bakit Pumili ng Eco-Friendly na Bahay?",
      interestDescription: "Habang ang pagbabago ng klima at tumataas na gastos sa enerhiya ay nagiging mga kagyat na isyu, nag-aalok ang aming proyekto ng isang makabagong solusyon:",
      decisionTitle: "DECISION – Isang Proyektong Suportado ng mga Eksperto",
      decisionDescription: "Dinisenyo ng mga nangungunang arkitekto at mga inhinyero sa sustainability, ang bawat bahay ay maximo ang kahusayan sa enerhiya. Pinuri ng mga lider sa industriya ang proyekto:",
      actionTitle: "ACTION – Sumali sa Zero-Emission na Rebolusyon!",
      actionDescription: "Ito ay isang natatanging pagkakataon upang mamuhunan sa isang mas luntiang hinaharap. Makipag-ugnayan sa amin ngayon upang matuto nang higit pa o mag-iskedyul ng isang pagbisita.",
      keyFeaturesTitle: "Sustainable na Solusyon",
      keyFeaturesDescription: "Ang aming proyekto ay may kasamang mga sumusunod na eco-friendly na solusyon:",
      feature1Title: "Eco-Friendly na Materyales",
      feature1Description: "Gumagamit kami ng mga sustainable at non-toxic na materyales sa buong proseso ng konstruksyon.",
      feature2Title: "Renewable na Enerhiya",
      feature2Description: "100% renewable energy na nagmumula sa mga solar panel at wind turbine na isinama sa disenyo.",
      feature3Title: "Energy Efficiency",
      feature3Description: "Superior insulation at energy-efficient na mga bintana upang mabawasan ang pagkonsumo ng enerhiya.",
      feature4Title: "Smart Technology",
      feature4Description: "Isinamang smart home systems upang i-optimize ang paggamit ng enerhiya at mapabuti ang kaginhawahan."
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle={translations[language].subtitle} title={translations[language].title} centered={true} />

        {/* AIDA Format Content */}
        <div className="eco-glass p-8 md:p-10 rounded-2xl my-12 animate-on-scroll animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            🌱 {translations[language].attentionTitle}
          </h2>
          
          <div className="space-y-10">
            {/* Attention */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🟢</span>
                <span>{translations[language].attentionTitle}</span>
              </div>
              <p className="text-muted-foreground">
                {translations[language].attentionDescription}
              </p>
            </div>
            
            {/* Interest */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🟡</span>
                <span>{translations[language].interestTitle}</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {translations[language].interestDescription}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">✅</span> {translations[language].feature1Title}</li>
                <li className="flex items-start"><span className="text-primary mr-2">✅</span> {translations[language].feature2Title}</li>
                <li className="flex items-start"><span className="text-primary mr-2">✅</span> {translations[language].feature3Title}</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                {translations[language].interestDescription}
              </p>
            </div>

            {/* Decision */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🔵</span>
                <span>{translations[language].decisionTitle}</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {translations[language].decisionDescription}
              </p>
            </div>
            
            {/* Action */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full mb-3">
                <span className="text-2xl mr-2">🔴</span>
                <span>{translations[language].actionTitle}</span>
              </div>
              <p className="text-muted-foreground">
                {translations[language].actionDescription}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center"><span className="text-xl mr-2">📩</span> info@ecohaven-london.com</div>
                <div className="flex items-center"><span className="text-xl mr-2">📞</span> +44 (0) 123 456 7890</div>
                <div className="flex items-center"><span className="text-xl mr-2">📍</span> London W2</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview 1 */}
        <ProjectOverview
          title={translations[language].feature1Title}
          content={translations[language].feature1Description}
          image="https://www.dropbox.com/s/1uhuoagyjvn2a5u/Modernong%20Sustainable%20Design.webp?raw=1"
        />
        
        {/* Project Overview 2 */}
        <ProjectOverview
          title={translations[language].feature2Title}
          content={translations[language].feature2Description}
          image="https://www.dropbox.com/s/dxv9jjdqre7usgx/SmarthomeTechnology.jpg.jpg?st=640xzija&dl=1"
          reverse={true}
        />

        {/* Key Features Section */}
        <div className="py-12">
          <SectionHeading subtitle="Key Features" title={translations[language].keyFeaturesTitle} description={translations[language].keyFeaturesDescription} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard icon={Leaf} title={translations[language].feature1Title} description={translations[language].feature1Description} delay={0} />
            <FeatureCard icon={SunMedium} title={translations[language].feature2Title} description={translations[language].feature2Description} delay={1} />
            <FeatureCard icon={Home} title={translations[language].feature3Title} description={translations[language].feature3Description} delay={2} />
            <FeatureCard icon={Lightbulb} title={translations[language].feature4Title} description={translations[language].feature4Description} delay={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagalogProject;
