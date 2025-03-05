
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

const Video = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      subtitle: "Multimedia",
      title: "Video Presentation",
      description: "Watch our project presentation with captions in both English and Tagalog.",
      projectOverview: "Project Overview",
      projectDescription: "This video explains our zero-emission real estate development in London W2, highlighting our sustainable features, renewable energy solutions, and smart home technology. Captions are available in both English and Tagalog for accessibility.",
      transcript: "Transcript",
      english: "English",
      tagalog: "Tagalog",
      englishTranscript: "Welcome to EcoHaven London W2, where sustainable living meets modern comfort. Our zero-emission development provides housing for 50 families with a focus on renewable energy, eco-friendly materials, and cutting-edge smart home technology.",
      tagalogTranscript: "Maligayang pagdating sa EcoHaven London W2, kung saan ang sustainable na pamumuhay ay nakakatugma sa modernong kaginhawaan. Ang aming zero-emission na development ay nagbibigay ng pabahay para sa 50 pamilya na nakatuon sa renewable energy, eco-friendly na materyales, at pinakabagong smart home technology.",
      videoPlaceholder: "Video will be available soon"
    },
    tl: {
      subtitle: "Multimedia",
      title: "Presentasyon ng Bidyo",
      description: "Panoorin ang aming presentasyon ng proyekto na may subtitle sa parehong Ingles at Tagalog.",
      projectOverview: "Pangkalahatang-ideya ng Proyekto",
      projectDescription: "Ang bidyo na ito ay nagpapaliwanag ng aming zero-emission na real estate development sa London W2, na nagbibigay-diin sa aming sustainable na mga katangian, renewable energy solutions, at smart home technology. Ang mga subtitle ay available sa parehong Ingles at Tagalog para sa accessibility.",
      transcript: "Transcript",
      english: "Ingles",
      tagalog: "Tagalog",
      englishTranscript: "Welcome to EcoHaven London W2, where sustainable living meets modern comfort. Our zero-emission development provides housing for 50 families with a focus on renewable energy, eco-friendly materials, and cutting-edge smart home technology.",
      tagalogTranscript: "Maligayang pagdating sa EcoHaven London W2, kung saan ang sustainable na pamumuhay ay nakakatugma sa modernong kaginhawaan. Ang aming zero-emission na development ay nagbibigay ng pabahay para sa 50 pamilya na nakatuon sa renewable energy, eco-friendly na materyales, at pinakabagong smart home technology.",
      videoPlaceholder: "Ang bidyo ay magiging available sa lalong madaling panahon"
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle={content[language].subtitle}
          title={content[language].title}
          description={content[language].description}
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto mt-10">
          {/* Video embed placeholder - replace with actual video when available */}
          <div className="aspect-w-16 aspect-h-9 bg-slate-100 rounded-xl overflow-hidden mb-8">
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">{content[language].videoPlaceholder}</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="eco-glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{content[language].projectOverview}</h3>
              <p className="text-muted-foreground">
                {content[language].projectDescription}
              </p>
            </div>
            
            <div className="eco-glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{content[language].transcript}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">{content[language].english}</h4>
                  <p className="text-muted-foreground">
                    {content[language].englishTranscript}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">{content[language].tagalog}</h4>
                  <p className="text-muted-foreground">
                    {content[language].tagalogTranscript}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
