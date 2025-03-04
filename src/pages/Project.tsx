import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import ProjectOverview from '../components/ProjectOverview';
import { Sun, Wind, Sprout, LightbulbIcon, Smartphone, Home, ArrowRight } from 'lucide-react';

const Project = () => {
  return (
    <div className="pt-20">
      {/* Project Hero */}
      <section className="section-padding bg-forest-gradient">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll animate-fade-up">
              <div className="inline-block bg-accent px-3 py-1 rounded-full text-xs font-medium text-primary mb-4">
                Zero-Emission Living
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Emission-Free in London W2 – A New Standard in Sustainable Living
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the future of sustainable urban housing with our pioneering zero-emission development in the heart of London.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg group">
                Contact Us for More Info
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="animate-on-scroll animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src="https://www.dropbox.com/s/qfi03jgp308hmtx/d46a9aaf-94cf-41c2-9749-9ef66ed8e892.jpg?raw=1"
                  alt="EcoHaven London Project"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AIDA Framework Section */}
      <section className="section-padding">
        <div className="page-container">
          <SectionHeading
            subtitle="Project Overview"
            title="A Greener Way of Living in the Heart of London"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-4 animate-on-scroll animate-fade-up">
              <p className="text-lg mb-6">
                Imagine a home where every detail is designed for a sustainable future. Located in London W2, our zero-emission real estate development offers premium, eco-friendly housing for 50 families—without compromising comfort or modernity.
              </p>
            </div>
            
            <div className="eco-glass p-6 rounded-2xl animate-on-scroll animate-fade-up">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Attention</h3>
              <p className="text-muted-foreground">
                A pioneering zero-emission development in one of London's most desirable neighborhoods, offering a new way of living that's kind to both you and the planet.
              </p>
            </div>
            
            <div className="eco-glass p-6 rounded-2xl animate-on-scroll animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interest</h3>
              <p className="text-muted-foreground">
                As climate change and rising energy costs become urgent concerns, our project provides a forward-thinking solution with 100% renewable energy, eco-friendly materials, and improved air quality.
              </p>
            </div>
            
            <div className="eco-glass p-6 rounded-2xl animate-on-scroll animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">D</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Decision</h3>
              <p className="text-muted-foreground">
                Designed by leading architects and sustainability engineers, each home maximizes energy efficiency while providing premium comfort, backed by industry experts and early residents.
              </p>
            </div>
            
            <div className="eco-glass p-6 rounded-2xl animate-on-scroll animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Action</h3>
              <p className="text-muted-foreground">
                This is a unique opportunity to invest in a greener future. Contact us today to learn more about availability, pricing, and to schedule a visit to our show home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-eco-gradient">
        <div className="page-container">
          <SectionHeading
            subtitle="Eco-Friendly Features"
            title="Sustainable Living, By Design"
            description="Every aspect of EcoHaven London is designed with sustainability and comfort in mind, utilizing cutting-edge technology and thoughtful design."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Sun}
              title="100% Renewable Energy"
              description="Solar panels, passive energy systems, and energy storage solutions provide clean power to all residences."
              delay={0}
            />
            <FeatureCard
              icon={Sprout}
              title="Sustainable Materials"
              description="Carbon-neutral cement, recycled wood, and other eco-friendly materials minimize our environmental footprint."
              delay={1}
            />
            <FeatureCard
              icon={LightbulbIcon}
              title="Smart Energy Management"
              description="AI-powered systems optimize energy usage, reducing waste and maximizing efficiency throughout the day."
              delay={2}
            />
            <FeatureCard
              icon={Wind}
              title="Air Purification"
              description="Built-in filtration systems ensure clean, fresh indoor air quality while reducing energy consumption."
              delay={3}
            />
            <FeatureCard
              icon={Smartphone}
              title="Smart Home Integration"
              description="Control lighting, heating, cooling, and security with intuitive apps designed for convenience and efficiency."
              delay={4}
            />
            <FeatureCard
              icon={Home}
              title="Zero-Emission Construction"
              description="From breaking ground to finishing touches, our construction process prioritizes minimal environmental impact."
              delay={5}
            />
          </div>
        </div>
      </section>

      {/* Project Schematics */}
      <section className="section-padding">
        <div className="page-container">
          <SectionHeading
            subtitle="Project Details"
            title="Thoughtfully Designed Spaces"
          />
          
          <ProjectOverview
            title="Homes Built for Tomorrow"
            content="Our residences are designed with an optimal balance of aesthetic beauty, functional comfort, and environmental responsibility. Each home features open floor plans, ample natural light, and smart spatial design to maximize both energy efficiency and living comfort.

The building's orientation and window placement maximize passive solar heating in winter while preventing overheating in summer. Triple-glazed windows, superior insulation, and airtight construction drastically reduce energy needs while maintaining ideal indoor temperatures year-round."
            image="https://www.dropbox.com/s/5n30o5p3v19z0o2/green_block_london_courtesy_of_watg_and_pixelflakes.jpg?raw=1"
          />
          
          <div className="mt-20">
            <ProjectOverview
              title="Community-Centered Design"
              content="Beyond individual homes, EcoHaven London is designed as a complete ecosystem for sustainable living. Shared spaces include community gardens, a bike-sharing program, electric vehicle charging stations, and common areas powered by renewable energy.

Our development incorporates green roofs, rainwater collection systems, and native plant landscaping that supports local biodiversity while creating beautiful spaces for residents to enjoy. These thoughtful touches not only enhance daily life but also minimize our collective environmental footprint."
              image="https://www.dropbox.com/s/1egux20peaqmeo8/London-nine-elms.jpg?raw=1"
              reverse
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-earth-gradient">
        <div className="page-container">
          <SectionHeading
            subtitle="Expert Opinions"
            title="What Leaders Are Saying"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="eco-glass p-8 rounded-2xl animate-on-scroll animate-fade-up">
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-base mb-6 italic text-muted-foreground">
                "EcoHaven London represents the gold standard for sustainable urban development. The integration of renewable energy systems and smart technology creates homes that are not just eco-friendly, but genuinely forward-thinking."
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
              <p className="text-base mb-6 italic text-muted-foreground">
                "What impresses me most about this project is how it balances environmental responsibility with luxury living. The developers have shown that sustainability and comfort aren't mutually exclusive."
              </p>
              <div>
                <p className="font-semibold">James Harrington</p>
                <p className="text-sm text-muted-foreground">CEO, EcoTech Solutions</p>
              </div>
            </div>
            
            <div className="eco-glass p-8 rounded-2xl animate-on-scroll animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-base mb-6 italic text-muted-foreground">
                "This development is a true reflection of how the real estate industry can evolve to meet the needs of our changing world. EcoHaven London is a shining example for others to follow."
              </p>
              <div>
                <p className="font-semibold">Hannah Green</p>
                <p className="text-sm text-muted-foreground">Founder, Green Living Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

