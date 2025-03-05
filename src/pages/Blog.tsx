
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Blog = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      subtitle: "Sustainability Insights",
      title: "The Future of Real Estate: Addressing Environmental Challenges and Embracing Sustainability",
      author: "Emma Brown",
      date: "February 15, 2025",
      readTime: "8 min read",
      imgAlt: "Sustainable building with solar panels",
      crisisTitle: "The Growing Crisis in the Real Estate Industry",
      crisisContent: `
        For decades, the real estate sector has been a pillar of economic growth, 
        providing homes, offices, and commercial spaces. However, this industry now 
        faces an existential challenge: its environmental impact. 
      `,
      keyIssues: "The Key Pain Points in Real Estate Today",
      issue1: "High Carbon Footprint and Energy Consumption",
      issue2: "Soaring Energy Costs",
      issue3: "Consumer Demand for Sustainable Living",
      issue4: "Stricter Environmental Regulations",
      issue5: "Waste and Resource Depletion",
      futureTitle: "The Future: A Shift Towards Sustainable Real Estate",
      netZero: "1. The Rise of Net-Zero and Zero-Emission Buildings",
      smartHomes: "2. Smart Homes and Energy-Efficient Technologies",
      sustainableMaterials: "3. Sustainable Materials and Green Construction Methods",
      greenSpaces: "4. Green Spaces and Urban Sustainability",
      policyChanges: "5. Policy Changes and Financial Incentives",
      callToAction: "Looking Ahead: A Call to Action for Businesses and Consumers",
      backToHome: "Back to Home"
    },
    tl: {
      subtitle: "Mga Pananaw sa Sustainability",
      title: "Ang Kinabukasan ng Real Estate: Pagtugon sa mga Hamon sa Kapaligiran at Pagtangkilik sa Sustainability",
      author: "Emma Brown",
      date: "Pebrero 15, 2025",
      readTime: "8 minuto na pagbabasa",
      imgAlt: "Gusaling pangkalikasan na may solar panels",
      crisisTitle: "Ang Lumalalang Krisis sa Industriya ng Real Estate",
      crisisContent: `
        Sa loob ng mga dekada, ang sektor ng real estate ay naging pundasyon ng paglago 
        ng ekonomiya. Ngunit ngayon, ito ay nahaharap sa isang malaking hamon: ang epekto nito sa kapaligiran.
      `,
      keyIssues: "Mga Pangunahing Suliranin sa Real Estate Ngayon",
      issue1: "Mataas na Carbon Footprint at Konsumo ng Enerhiya",
      issue2: "Tumataas na Gastos sa Enerhiya",
      issue3: "Pangangailangan ng mga Mamimili para sa Sustainable na Pamumuhay",
      issue4: "Mas Mahigpit na Regulasyon sa Kapaligiran",
      issue5: "Basura at Pagkaubos ng Likas na Yaman",
      futureTitle: "Ang Hinaharap: Isang Paglipat Patungo sa Sustainable na Real Estate",
      netZero: "1. Pag-usbong ng Net-Zero at Zero-Emission na Gusali",
      smartHomes: "2. Smart Homes at Mga Teknolohiyang Matipid sa Enerhiya",
      sustainableMaterials: "3. Mga Sustainable na Materyales at Pamamaraan sa Pagtatayo",
      greenSpaces: "4. Mga Berdeng Espasyo at Sustainability sa Lungsod",
      policyChanges: "5. Mga Pagbabago sa Patakaran at Insentibo sa Pananalapi",
      callToAction: "Pagtanaw sa Hinaharap: Isang Panawagan sa Negosyo at Mga Mamimili",
      backToHome: "Bumalik sa Tahanan"
    },
  };

  return (
    <div className="pt-20">
      <div className="page-container section-padding">
        {/* Blog Header */}
        <Link to="/" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {content[language].backToHome}
        </Link>

        <SectionHeading subtitle={content[language].subtitle} title={content[language].title} />

        {/* Publication Info */}
        <div className="flex items-center space-x-4 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              EB
            </span>
            <span>{content[language].author}</span>
          </div>
          <span>|</span>
          <time>{content[language].date}</time>
          <span>|</span>
          <span>{content[language].readTime}</span>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12">
          <img 
            src="https://www.dropbox.com/s/mjyucrpgyad5a9e/TALA-AB-Image-Size-1200-x-800-6.jpg?raw=1"
            alt={content[language].imgAlt} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto prose prose-green lg:prose-lg">
          <h2>{content[language].crisisTitle}</h2>
          <p>{content[language].crisisContent}</p>

          <h2>{content[language].keyIssues}</h2>
          <h3>{content[language].issue1}</h3>
          <h3>{content[language].issue2}</h3>
          <h3>{content[language].issue3}</h3>
          <h3>{content[language].issue4}</h3>
          <h3>{content[language].issue5}</h3>

          <h2>{content[language].futureTitle}</h2>
          <h3>{content[language].netZero}</h3>
          <h3>{content[language].smartHomes}</h3>
          <h3>{content[language].sustainableMaterials}</h3>
          <h3>{content[language].greenSpaces}</h3>
          <h3>{content[language].policyChanges}</h3>

          <h2>{content[language].callToAction}</h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
