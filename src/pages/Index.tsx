import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import { Wind, Leaf, LightbulbIcon, Sprout, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  const content = {
    en: {
      heroTitle: "Live Green. Live Smart. A Zero-Emission Future in London W2",
      heroSubtitle: "Welcome to EcoHaven, a pioneering sustainable real estate development providing premium eco-friendly housing for 50 families in the heart of London.",
      heroCta: "Explore the Project",
      visionTitle: "A Sustainable Future, Today",
      visionSubtitle: "Our Vision",
      visionText: "EcoHaven London W2 represents a new standard in sustainable urban living. Our zero-emission development combines cutting-edge green technology with thoughtful design to create homes that are not only environmentally responsible but also beautiful, comfortable, and built to last.",
      visionCta: "Learn More About Our Approach",
      featuresTitle: "Eco-Friendly Living Solutions",
      featuresSubtitle: "Key Features",
      featuresDescription: "Our homes are designed with sustainability at their core, utilizing the latest in green technology and sustainable materials.",
      feature1Title: "100% Renewable Energy",
      feature1Description: "Powered entirely by solar panels and wind turbines, with energy storage solutions for round-the-clock sustainability.",
      feature2Title: "Sustainable Materials",
      feature2Description: "Built using carbon-neutral cement, recycled wood, and other eco-friendly materials that reduce environmental impact.",
      feature3Title: "Smart Home Technology",
      feature3Description: "Integrated systems for automated energy management, air purification, and intelligent climate control for optimal efficiency.",
      feature4Title: "Natural Ventilation",
      feature4Description: "Designed to maximize airflow, reducing the need for artificial cooling and improving indoor air quality.",
      feature5Title: "Water Conservation",
      feature5Description: "Rainwater harvesting systems and water-efficient fixtures reduce consumption by up to 60% compared to conventional homes.",
      feature6Title: "Community Gardens",
      feature6Description: "Shared green spaces for growing food and fostering community, promoting sustainable living beyond your doorstep.",
      ctaTitle: "Join the Future of Sustainable Living",
      ctaText: "EcoHaven London W2 is more than just a place to live—it's a commitment to a sustainable future. Be part of a community that values both environmental responsibility and modern comfort.",
      ctaButton1: "Explore the Project",
      ctaButton2: "Contact Us",
      testimonialsTitle: "What Experts Are Saying",
      testimonialsSubtitle: "Testimonials",
      testimonial1Text: "This development is a model for the future of urban living. The integration of renewable energy and smart home technology sets a new standard for sustainable housing.",
      testimonial1Name: "Dr. Emma Richards",
      testimonial1Position: "Professor of Sustainable Architecture, UCL",
      testimonial2Text: "Living at EcoHaven means reducing your carbon footprint while enjoying a premium lifestyle. The attention to sustainability without compromising on comfort is remarkable.",
      testimonial2Name: "James Harrington",
      testimonial2Position: "Environmental Consultant & Early Investor",
    },
    tl: {
      heroTitle: "Mabuhay ng Eco-friendly. Mabuhay ng Matalino. Isang Zero-Emission na Kinabukasan sa London W2",
      heroSubtitle: "Maligayang pagdating sa EcoHaven, isang pioneering na sustainable real estate development na nagbibigay ng premium eco-friendly na pabahay para sa 50 pamilya sa gitna ng London.",
      heroCta: "Tuklasin ang Proyekto",
      visionTitle: "Isang Sustainable na Kinabukasan, Ngayon Na",
      visionSubtitle: "Ang Aming Pananaw",
      visionText: "Ang EcoHaven London W2 ay kumakatawan sa bagong pamantayan sa sustainable urban living. Ang aming zero-emission development ay pinagsasama ang cutting-edge green technology at maingat na disenyo upang lumikha ng mga tahanan na hindi lamang responsable sa kapaligiran kundi maganda, komportable, at matibay.",
      visionCta: "Alamin Pa ang Tungkol sa Aming Pamamaraan",
      featuresTitle: "Mga Eco-Friendly na Solusyon sa Pamumuhay",
      featuresSubtitle: "Mga Pangunahing Katangian",
      featuresDescription: "Ang aming mga tahanan ay dinisenyo na may sustainability sa kanilang puso, gumagamit ng pinakabagong green technology at sustainable na materyales.",
      feature1Title: "100% Renewable Energy",
      feature1Description: "Pinatatakbo ng solar panels at wind turbines, na may energy storage solutions para sa round-the-clock sustainability.",
      feature2Title: "Sustainable na Materyales",
      feature2Description: "Ginawa gamit ang carbon-neutral cement, recycled wood, at iba pang eco-friendly na materyales na nagbabawas ng epekto sa kapaligiran.",
      feature3Title: "Smart Home Technology",
      feature3Description: "Integrated systems para sa automated energy management, air purification, at intelligent na climate control para sa optimal efficiency.",
      feature4Title: "Natural na Bentilasyon",
      feature4Description: "Dinisenyo upang i-maximize ang daloy ng hangin, nagbabawas ng pangangailangan para sa artipisyal na cooling at pagpapabuti ng indoor air quality.",
      feature5Title: "Konserbasyon ng Tubig",
      feature5Description: "Ang rainwater harvesting systems at water-efficient fixtures ay nagbabawas ng konsumo ng hanggang 60% kumpara sa mga karaniwang tahanan.",
      feature6Title: "Mga Komunidad na Hardin",
      feature6Description: "Mga shared green spaces para sa pagtatanim ng pagkain at pagpapalakas ng komunidad, nagtataguyod ng sustainable na pamumuhay na lampas sa iyong pintuan.",
      ctaTitle: "Sumali sa Kinabukasan ng Sustainable na Pamumuhay",
      ctaText: "Ang EcoHaven London W2 ay higit pa sa isang lugar upang manirahan—ito ay isang pangako sa isang sustainable na kinabukasan. Maging bahagi ng isang komunidad na nagpapahalaga kapwa sa responsabilidad sa kapaligiran at modernong kaginhawaan.",
      ctaButton1: "Tuklasin ang Proyekto",
      ctaButton2: "Makipag-ugnayan sa Amin",
      testimonialsTitle: "Ano ang Sinasabi ng mga Eksperto",
      testimonialsSubtitle: "Mga Testimonya",
      testimonial1Text: "Ang development na ito ay isang modelo para sa kinabukasan ng urban living. Ang pagsasama ng renewable energy at smart home technology ay nagtatakda ng bagong pamantayan para sa sustainable housing.",
      testimonial1Name: "Dr. Emma Richards",
      testimonial1Position: "Propesor ng Sustainable Architecture, UCL",
      testimonial2Text: "Ang pamumuhay sa EcoHaven ay nangangahulugang pagbabawas ng iyong carbon footprint habang tinatamasa ang premium lifestyle. Ang atensyon sa sustainability nang hindi kinokompromiso ang kaginhawaan ay kapansin-pansin.",
      testimonial2Name: "James Harrington",
      testimonial2Position: "Environmental Consultant at Early Investor",
    }
  };

  const heroTitle = {
    en: content.en.heroTitle,
    tl: content.tl.heroTitle
  };
  
  const heroSubtitle = {
    en: content.en.heroSubtitle,
    tl: content.tl.heroSubtitle
  };
  
  const heroCta = {
    en: content.en.heroCta,
    tl: content.tl.heroCta
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText={heroCta}
        ctaLink="/project"
        backgroundImage="https://www.dropbox.com/s/txs90seufubbr5q/img1%20(1).png?raw=1"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-eco-gradient">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              subtitle={content[language].visionSubtitle}
              title={content[language].visionTitle}
              centered
            />
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll animate-fade-up">
              {content[language].visionText}
            </p>
            <div className="animate-on-scroll animate-fade-up">
              <Link 
                to="/project" 
                className="btn btn-primary btn-lg group inline-flex items-center"
              >
                {content[language].visionCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding">
        <div className="page-container">
          <SectionHeading
            subtitle={content[language].featuresSubtitle}
            title={content[language].featuresTitle}
            description={content[language].featuresDescription}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Leaf}
              title={content[language].feature1Title}
              description={content[language].feature1Description}
              delay={0}
            />
            <FeatureCard
              icon={Sprout}
              title={content[language].feature2Title}
              description={content[language].feature2Description}
              delay={1}
            />
            <FeatureCard
              icon={LightbulbIcon}
              title={content[language].feature3Title}
              description={content[language].feature3Description}
              delay={2}
            />
            <FeatureCard
              icon={Wind}
              title={content[language].feature4Title}
              description={content[language].feature4Description}
              delay={3}
            />
            <FeatureCard
              icon={Wind}
              title={content[language].feature5Title}
              description={content[language].feature5Description}
              delay={4}
            />
            <FeatureCard
              icon={Sprout}
              title={content[language].feature6Title}
              description={content[language].feature6Description}
              delay={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-forest-gradient">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll animate-fade-up">
              {content[language].ctaTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll animate-fade-up">
              {content[language].ctaText}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll animate-fade-up">
              <Link to="/project" className="btn btn-primary btn-lg">
                {content[language].ctaButton1}
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                {content[language].ctaButton2}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="page-container">
          <SectionHeading
            subtitle={content[language].testimonialsSubtitle}
            title={content[language].testimonialsTitle}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="eco-glass p-8 rounded-2xl animate-on-scroll animate-fade-up">
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg mb-6 italic text-muted-foreground">
                {content[language].testimonial1Text}
              </p>
              <div>
                <p className="font-semibold">{content[language].testimonial1Name}</p>
                <p className="text-sm text-muted-foreground">{content[language].testimonial1Position}</p>
              </div>
            </div>
            
            <div className="eco-glass p-8 rounded-2xl animate-on-scroll animate-fade-up" style={{ animationDelay: '150ms' }}>
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg mb-6 italic text-muted-foreground">
                {content[language].testimonial2Text}
              </p>
              <div>
                <p className="font-semibold">{content[language].testimonial2Name}</p>
                <p className="text-sm text-muted-foreground">{content[language].testimonial2Position}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
