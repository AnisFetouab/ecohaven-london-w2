
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import { Wind, Leaf, LightbulbIcon, Sprout, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Live Green. Live Smart. A Zero-Emission Future in London W2"
        subtitle="Welcome to EcoHaven, a pioneering sustainable real estate development providing premium eco-friendly housing for 50 families in the heart of London."
        ctaText="Explore the Project"
        ctaLink="/project"
        backgroundImage="public/img1 (1).png"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-eco-gradient">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              subtitle="Our Vision"
              title="A Sustainable Future, Today"
              centered
            />
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll animate-fade-up">
              EcoHaven London W2 represents a new standard in sustainable urban living. Our zero-emission development combines cutting-edge green technology with thoughtful design to create homes that are not only environmentally responsible but also beautiful, comfortable, and built to last.
            </p>
            <div className="animate-on-scroll animate-fade-up">
              <Link 
                to="/project" 
                className="btn btn-primary btn-lg group inline-flex items-center"
              >
                Learn More About Our Approach
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
            subtitle="Key Features"
            title="Eco-Friendly Living Solutions"
            description="Our homes are designed with sustainability at their core, utilizing the latest in green technology and sustainable materials."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Leaf}
              title="100% Renewable Energy"
              description="Powered entirely by solar panels and wind turbines, with energy storage solutions for round-the-clock sustainability."
              delay={0}
            />
            <FeatureCard
              icon={Sprout}
              title="Sustainable Materials"
              description="Built using carbon-neutral cement, recycled wood, and other eco-friendly materials that reduce environmental impact."
              delay={1}
            />
            <FeatureCard
              icon={LightbulbIcon}
              title="Smart Home Technology"
              description="Integrated systems for automated energy management, air purification, and intelligent climate control for optimal efficiency."
              delay={2}
            />
            <FeatureCard
              icon={Wind}
              title="Natural Ventilation"
              description="Designed to maximize airflow, reducing the need for artificial cooling and improving indoor air quality."
              delay={3}
            />
            <FeatureCard
              icon={Wind}
              title="Water Conservation"
              description="Rainwater harvesting systems and water-efficient fixtures reduce consumption by up to 60% compared to conventional homes."
              delay={4}
            />
            <FeatureCard
              icon={Sprout}
              title="Community Gardens"
              description="Shared green spaces for growing food and fostering community, promoting sustainable living beyond your doorstep."
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
              Join the Future of Sustainable Living
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll animate-fade-up">
              EcoHaven London W2 is more than just a place to live—it's a commitment to a sustainable future. Be part of a community that values both environmental responsibility and modern comfort.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll animate-fade-up">
              <Link to="/project" className="btn btn-primary btn-lg">
                Explore the Project
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="page-container">
          <SectionHeading
            subtitle="Testimonials"
            title="What Experts Are Saying"
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
                "This development is a model for the future of urban living. The integration of renewable energy and smart home technology sets a new standard for sustainable housing."
              </p>
              <div>
                <p className="font-semibold">Dr. Emma Richards</p>
                <p className="text-sm text-muted-foreground">Professor of Sustainable Architecture, UCL</p>
              </div>
            </div>
            
            <div className="eco-glass p-8 rounded-2xl animate-on-scroll animate-fade-up" style={{ animationDelay: '150ms' }}>
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg mb-6 italic text-muted-foreground">
                "Living at EcoHaven means reducing your carbon footprint while enjoying a premium lifestyle. The attention to sustainability without compromising on comfort is remarkable."
              </p>
              <div>
                <p className="font-semibold">James Harrington</p>
                <p className="text-sm text-muted-foreground">Environmental Consultant & Early Investor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
