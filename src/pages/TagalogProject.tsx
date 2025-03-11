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
      attentionDescription: "Imagine a home where every detail is designed for a sustainable future. Located in London W2, our zero-emission real estate development offers premium, eco-friendly housing for 50 families—without compromising comfort or modernity. 🌱🏡",
      interestTitle: "INTEREST – Why Choose an Eco-Friendly Home?",
      interestDescription: "Climate change and rising energy costs are pressing concerns. Our project provides an innovative solution: cutting-edge sustainable housing that reduces carbon footprints, lowers energy bills, and ensures a healthier living environment for future generations. 🌍⚡",
      decisionTitle: "DECISION – A Project Backed by Experts",
      decisionDescription: "Designed by leading architects and sustainability engineers, each home maximizes energy efficiency. Industry leaders and green living advocates have praised this project as a step toward a carbon-neutral future. 🏗️🔬",
      actionTitle: "ACTION – Join the Zero-Emission Revolution!",
      actionDescription: "Take action today! Be part of a sustainable lifestyle that benefits you and the planet. Contact us now to learn more or schedule a visit. 📩📞",
      keyFeaturesTitle: "Sustainable Solutions",
      keyFeaturesDescription: "Our development incorporates the following eco-friendly solutions: 🌎💚",
      feature1Title: "Eco-Friendly Materials",
      feature1Description: "We use sustainable and non-toxic materials throughout the construction process. 🏠♻️",
      feature2Title: "Renewable Energy",
      feature2Description: "100% renewable energy sourced from solar panels and wind turbines integrated into the design. ☀️🌬️",
      feature3Title: "Energy Efficiency",
      feature3Description: "Superior insulation and energy-efficient windows to minimize energy consumption. 🔋🪟",
      feature4Title: "Smart Technology",
      feature4Description: "Integrated smart home systems to optimize energy usage and enhance comfort. 📡🏠"
    },
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle={translations[language].subtitle} title={translations[language].title} centered={true} />
        
        <div className="eco-glass p-8 md:p-10 rounded-2xl my-12 animate-on-scroll animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">🌱 {translations[language].attentionTitle}</h2>
          <p className="text-muted-foreground">{translations[language].attentionDescription}</p>
          <h3 className="text-xl font-bold mt-6">⚡ {translations[language].interestTitle}</h3>
          <p className="text-muted-foreground">{translations[language].interestDescription}</p>
          <h3 className="text-xl font-bold mt-6">🏗️ {translations[language].decisionTitle}</h3>
          <p className="text-muted-foreground">{translations[language].decisionDescription}</p>
          <h3 className="text-xl font-bold mt-6">🚀 {translations[language].actionTitle}</h3>
          <p className="text-muted-foreground">{translations[language].actionDescription}</p>
        </div>

        <ProjectOverview title={translations[language].feature1Title} content={translations[language].feature1Description} image="/path/to/image1.jpg" />
        <ProjectOverview title={translations[language].feature2Title} content={translations[language].feature2Description} image="/path/to/image2.jpg" reverse={true} />
        
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

