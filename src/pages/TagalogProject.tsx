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
      attentionTitle: "🌱 ATTENTION – A Greener Way of Living in the Heart of London",
      attentionDescription: "Picture this: A beautiful home nestled in the vibrant heart of London, where every detail is purposefully crafted to nurture both your family and the planet. Welcome to our zero-emission real estate development in W2, designed for 50 families who share a vision of a sustainable future. It’s not just about living; it’s about living well, with a deep respect for our environment. 🌍🏡",
      interestTitle: "💡 INTEREST – Why Choose Eco-Friendly Living?",
      interestDescription: "As we face the realities of climate change and the ever-increasing cost of energy, the need for eco-friendly solutions has never been more pressing. Our development is at the forefront of this movement, offering an innovative lifestyle that doesn’t compromise on comfort or style. Imagine waking up in a home built with eco-friendly materials, surrounded by the tranquility of nature, yet just a stone’s throw away from the bustling energy of London. 🌎💰",
      decisionTitle: "🏗️ DESIRE – Experience the Benefits of Sustainable Living",
      decisionDescription: "Imagine hosting friends and family in a space that not only looks stunning but also functions harmoniously with the environment. Our homes are designed by leading architects and sustainability engineers who prioritize both aesthetics and functionality. Each home is a masterpiece, combining modern design with eco-friendly features that enhance your quality of life. 🌿✨\n\nThink about the savings too! With energy-efficient appliances and renewable energy sources, your utility bills will reflect your commitment to the planet. Plus, you’ll be part of a community of like-minded individuals who share your passion for sustainability. Together, you can cultivate a lifestyle that prioritizes health, wellness, and ecological responsibility. 🏡💚\n\nAnd it doesn’t stop there. Living in a sustainable home means you’re contributing to a larger movement toward a greener future. You’re not just making a choice for yourself; you’re making a choice for your children and the generations to come. 🌏🌟",
      actionTitle: "🚀 ACTION – Join Us in Creating a Greener Future!",
      actionDescription: "This is your opportunity to invest in a lifestyle that aligns with your values. Don’t miss out on being part of this groundbreaking project that prioritizes the environment and your well-being. Whether you’re a family looking for a nurturing environment or an individual passionate about making a difference, our homes in London W2 are the perfect fit. 🏠💚\n\nReady to take the next step? Contact us today to learn more about our eco-friendly homes or to schedule a visit. Let’s work together to create a sustainable future, one home at a time. 📩📞",
      keyFeaturesTitle: "🌍 Sustainable Solutions",
      keyFeaturesDescription: "Our development incorporates the following eco-friendly solutions to ensure sustainability and efficiency:",
      feature1Title: "♻️ Eco-Friendly Materials",
      feature1Description: "We use sustainable and non-toxic materials throughout the construction process, ensuring durability and environmental responsibility. 🌱🏗️",
      feature2Title: "🌞 Renewable Energy",
      feature2Description: "100% renewable energy sourced from solar panels and wind turbines integrated into the design, providing clean and cost-effective power. ⚡🔄",
      feature3Title: "🏡 Energy Efficiency",
      feature3Description: "Superior insulation, energy-efficient windows, and smart HVAC systems to minimize energy consumption, making homes warmer in winter and cooler in summer. ❄️🔥",
      feature4Title: "📲 Smart Technology",
      feature4Description: "Integrated smart home systems to optimize energy usage, reduce waste, and enhance everyday comfort. Control lighting, temperature, and security from your smartphone. 📡🔧"
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle={translations[language].subtitle} title={translations[language].title} centered={true} />

        {/* AIDA Format Content */}
        <div className="eco-glass p-8 md:p-10 rounded-2xl my-12 animate-on-scroll animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {translations[language].attentionTitle}
          </h2>
          <p className="text-muted-foreground">{translations[language].attentionDescription}</p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">
            {translations[language].interestTitle}
          </h2>
          <p className="text-muted-foreground">{translations[language].interestDescription}</p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">
            {translations[language].decisionTitle}
          </h2>
          <p className="text-muted-foreground">{translations[language].decisionDescription}</p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">
            {translations[language].actionTitle}
          </h2>
          <p className="text-muted-foreground">{translations[language].actionDescription}</p>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center"><span className="text-xl mr-2">📩</span> info@ecohaven-london.com</div>
            <div className="flex items-center"><span className="text-xl mr-2">📞</span> +44 (0) 123 456 7890</div>
            <div className="flex items-center"><span className="text-xl mr-2">📍</span> London W2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagalogProject;


