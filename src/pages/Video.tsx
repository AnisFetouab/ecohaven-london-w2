
import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Video = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Multimedia"
          title="Video Presentation"
          description="Watch our project presentation with captions in both English and Tagalog."
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto mt-10">
          {/* Video embed placeholder - replace with actual video when available */}
          <div className="aspect-w-16 aspect-h-9 bg-slate-100 rounded-xl overflow-hidden mb-8">
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Video will be available soon</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="eco-glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <p className="text-muted-foreground">
                This video explains our zero-emission real estate development in London W2, 
                highlighting our sustainable features, renewable energy solutions, and smart home 
                technology. Captions are available in both English and Tagalog for accessibility.
              </p>
            </div>
            
            <div className="eco-glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Transcript</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">English</h4>
                  <p className="text-muted-foreground">
                    Welcome to EcoHaven London W2, where sustainable living meets modern comfort.
                    Our zero-emission development provides housing for 50 families with a focus on
                    renewable energy, eco-friendly materials, and cutting-edge smart home technology.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Tagalog</h4>
                  <p className="text-muted-foreground">
                    Maligayang pagdating sa EcoHaven London W2, kung saan ang sustainable na pamumuhay
                    ay nakakatugma sa modernong kaginhawaan. Ang aming zero-emission na development ay 
                    nagbibigay ng pabahay para sa 50 pamilya na nakatuon sa renewable energy, eco-friendly 
                    na materyales, at pinakabagong smart home technology.
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
