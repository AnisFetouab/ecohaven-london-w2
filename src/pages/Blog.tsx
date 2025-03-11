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
      readTime: "5 min read",
      imgAlt: "Sustainable building with solar panels",
      crisisTitle: "The Growing Crisis in the Real Estate Industry",
      crisisContent: `
        For decades, the real estate sector has been a pillar of economic growth, 
        providing homes, offices, and commercial spaces. However, this industry now 
        faces an existential challenge: its environmental impact. Buildings account 
        for nearly 40% of global carbon emissions and consume vast amounts of energy 
        and resources. In densely populated areas like London, these issues are 
        particularly acute, with rising energy costs and pollution levels directly 
        impacting residents' quality of life.
      `,
      keyIssues: "The Key Pain Points in Real Estate Today",
      issue1Title: "High Carbon Footprint and Energy Consumption",
      issue1Content: `
        Traditional buildings are energy-intensive throughout their lifecycle—from construction 
        to operation and eventual demolition. In London, where many structures date back centuries, 
        retrofitting for energy efficiency presents enormous challenges. Families face astronomical 
        heating bills during winter months, particularly in older properties with poor insulation 
        and outdated heating systems. With energy prices continuing to rise, many Londoners now 
        allocate a significant portion of their income just to keep their homes at a comfortable 
        temperature.
      `,
      issue2Title: "Soaring Energy Costs",
      issue2Content: `
        The volatility of energy markets has created financial uncertainty for homeowners and 
        renters alike. Since 2023, London residents have seen their energy bills increase by nearly 
        60%, placing significant strain on household budgets. For many families, this financial 
        pressure forces difficult choices between heating their homes adequately or meeting other 
        essential needs. Building owners face similar challenges, with rising operational costs 
        eating into returns and necessitating higher rents—creating a cycle that affects everyone 
        in the real estate ecosystem.
      `,
      issue3Title: "Health and Well-being Concerns",
      issue3Content: `
        Indoor air quality has emerged as a critical concern, with research linking poor ventilation 
        and building materials to respiratory issues, allergies, and other health problems. In London's 
        densely populated areas, residents also contend with external pollution, creating environments 
        that adversely affect physical and mental well-being. Studies show that Londoners living in 
        areas with higher pollution levels report significantly higher rates of stress and anxiety, 
        alongside physical health concerns.
      `,
      issue4Title: "Stricter Environmental Regulations",
      issue4Content: `
        UK regulatory frameworks around building sustainability have intensified, with London 
        implementing some of the strictest standards nationwide. Recent legislation requires all 
        new developments to achieve carbon neutrality, and existing buildings must meet increasingly 
        stringent energy efficiency standards by 2028. Non-compliance carries substantial financial 
        penalties, creating urgency for property owners to adapt. These regulations, while necessary 
        for environmental progress, add significant complexity and cost to real estate development and management.
      `,
      issue5Title: "Changing Consumer Expectations",
      issue5Content: `
        Today's homebuyers and renters—particularly younger generations—prioritize sustainability 
        in their housing decisions. Recent surveys indicate that 68% of London residents under 40 
        are willing to pay a premium for energy-efficient homes with minimal environmental impact. 
        This shift in consumer preferences is reshaping the market, leaving owners of traditional 
        properties scrambling to adapt or face declining property values and extended vacancy periods.
      `,
      futureTitle: "The Future: A Shift Towards Sustainable Real Estate",
      netZeroTitle: "1. The Rise of Net-Zero and Zero-Emission Buildings",
      netZeroContent: `
        The next five years will see zero-emission developments become the gold standard in London's 
        real estate market. These buildings generate all required energy on-site through renewable 
        sources like solar and geothermal, maintaining a neutral or positive energy balance. Advanced 
        insulation, energy-recovery ventilation, and passive solar design will minimize energy requirements, 
        while smart systems optimize consumption. By 2027, experts predict that zero-emission 
        properties will command 15-20% higher values than conventional buildings, transforming from 
        luxury outliers to market necessities.
      `,
      smartHomesTitle: "2. Smart Homes and Energy-Efficient Technologies",
      smartHomesContent: `
        Integrated smart technologies will revolutionize how we interact with our living spaces. 
        AI-driven systems will anticipate and adjust to occupants' needs while minimizing energy use. 
        Gesture and voice-controlled environments will eliminate unnecessary switches and controls, 
        while real-time energy monitoring empowers residents to understand and optimize their consumption. 
        These technologies will reduce average household energy use by 30-40%, delivering both environmental 
        benefits and significant cost savings for families.
      `,
      sustainableMaterialsTitle: "3. Sustainable Materials and Green Construction Methods",
      sustainableMaterialsContent: `
        Construction methodologies will undergo radical transformation, with carbon-sequestering 
        materials replacing traditional resource-intensive options. Mass timber, mycelium-based 
        insulation, and recycled concrete will significantly reduce embodied carbon. Modular, 
        prefabricated construction will minimize waste and shorten build times, reducing disruption 
        to local communities. These advances will cut construction-related emissions by up to 60% 
        while creating healthier indoor environments free from the volatile organic compounds common 
        in conventional building materials.
      `,
      greenSpacesTitle: "4. Green Spaces and Urban Sustainability",
      greenSpacesContent: `
        Future developments will integrate nature throughout, with rooftop gardens, living walls, 
        and community growing spaces becoming standard features rather than luxury additions. These 
        elements will counteract urban heat island effects, improve air quality, and support biodiversity. 
        Beyond environmental benefits, these spaces will foster community cohesion and improve residents' 
        mental health. London's planning authorities are already revising guidelines to require meaningful 
        green space integration in all new residential developments, recognizing their essential role in 
        creating sustainable communities.
      `,
      policyChangesTitle: "5. Community-Centered Living",
      policyChangesContent: `
        The most progressive developments will evolve beyond mere buildings to become self-sustaining 
        micro-communities. Shared amenities like workshop spaces, community kitchens, and co-working 
        areas will reduce the need for excess private space while fostering social connections. 
        Integrated transportation solutions, including EV charging infrastructure and car-sharing 
        services, will reduce reliance on private vehicle ownership. These developments will demonstrate 
        how thoughtful design can enhance quality of life while reducing environmental impact, creating 
        templates for future urban planning across London and beyond.
      `,
      callToActionTitle: "Looking Ahead: A Call to Action for Businesses and Consumers",
      callToActionContent: `
        The transformation of London's real estate landscape represents both challenge and opportunity. 
        For developers and property owners, embracing sustainability isn't merely about compliance—it's 
        about future-proofing assets and meeting evolving market demands. For residents, these changes 
        promise healthier living environments, lower utility costs, and communities designed to enhance 
        wellbeing.

        As we look to the next five years, it's clear that the most successful real estate projects will 
        be those that address today's pain points while anticipating tomorrow's needs. By embracing 
        zero-emission standards, integrating smart technologies, utilizing sustainable materials, 
        incorporating meaningful green spaces, and fostering community, we can create living environments 
        that benefit people and planet alike.

        The future of real estate is not just about buildings—it's about creating the sustainable, 
        healthy, and connected communities that will define urban living for generations to come.
      `,
      backToHome: "Back to Home"
    },
    tl: {
      subtitle: "Mga Pananaw sa Sustainability",
      title: "Ang Kinabukasan ng Real Estate: Pagtugon sa mga Hamon sa Kapaligiran at Pagtangkilik sa Sustainability",
      author: "Emma Brown",
      date: "Pebrero 15, 2025",
      readTime: "5 minutong pagbabasa",
      imgAlt: "Gusaling pangkalikasan na may solar panels",
      crisisTitle: "Ang Lumalalang Krisis sa Industriya ng Real Estate",
      crisisContent: `
        Sa loob ng mga dekada, ang sektor ng real estate ay naging pundasyon ng paglago 
        ng ekonomiya, nagbibigay ng mga tahanan, opisina, at komersyal na espasyo. Gayunpaman, 
        ang industriyang ito ngayon ay nahaharap sa isang napakalaking hamon: ang epekto nito 
        sa kapaligiran. Ang mga gusali ay bumubuo ng halos 40% ng pandaigdigang carbon emissions 
        at gumagamit ng malaking dami ng enerhiya at mga likas na yaman. Sa mga lugar na mataas 
        ang populasyon tulad ng London, ang mga isyung ito ay lalong tumitindi, kasama ang 
        pagtaas ng gastos sa enerhiya at antas ng polusyon na direktang nakakaapekto sa kalidad 
        ng buhay ng mga residente.
      `,
      keyIssues: "Mga Pangunahing Suliranin sa Real Estate Ngayon",
      issue1Title: "Mataas na Carbon Footprint at Konsumo ng Enerhiya",
      issue1Content: `
        Ang mga tradisyonal na gusali ay gumagamit ng maraming enerhiya sa buong siklo ng 
        buhay nito—mula sa konstruksyon hanggang sa operasyon at kalaunan ay paggiba. Sa London, 
        kung saan maraming mga istruktura ang nagmula sa mga nakaraang siglo, ang pag-retrofit 
        para sa kahusayan sa enerhiya ay nagpapakita ng napakalaking mga hamon. Ang mga pamilya 
        ay nahaharap sa napakalaking mga singil sa pagpapainit sa mga buwan ng taglamig, lalo na 
        sa mga lumang ari-arian na may mahinang insulasyon at lumang sistema ng pagpapainit. Sa 
        patuloy na pagtaas ng presyo ng enerhiya, maraming mga Londoner ngayon ang naglalaan ng 
        malaking bahagi ng kanilang kita para lang mapanatili ang kanilang mga tahanan sa komportableng temperatura.
      `,
      issue2Title: "Tumataas na Gastos sa Enerhiya",
      issue2Content: `
        Ang hindi pagiging matatag ng mga merkado ng enerhiya ay lumikha ng pananalaping 
        kawalan ng katiyakan para sa mga may-ari ng bahay at mga umuupa. Mula noong 2023, 
        nakita ng mga residente ng London ang pagtaas ng kanilang mga singil sa enerhiya 
        ng halos 60%, na nagdudulot ng malaking presyon sa badyet ng sambahayan. Para sa 
        maraming mga pamilya, ang pressure na ito sa pananalapi ay nagdudulot ng mahihirap 
        na pagpipilian sa pagitan ng sapat na pagpapainit ng kanilang mga tahanan o pagtupad 
        sa iba pang mahahalagang pangangailangan. Ang mga may-ari ng gusali ay humaharap din 
        sa mga katulad na hamon, na may tumataas na gastos sa operasyon na kumakain sa mga kita 
        at nangangailangan ng mas mataas na upa—na lumilikha ng isang siklo na nakakaapekto sa 
        lahat sa ecosystem ng real estate.
      `,
      issue3Title: "Mga Alalahanin sa Kalusugan at Kapakanan",
      issue3Content: `
        Ang kalidad ng panloob na hangin ay lumitaw bilang isang kritikal na alalahanin, 
        na may pananaliksik na nag-uugnay ng mahinang bentilasyon at mga materyales ng gusali 
        sa mga problema sa paghinga, alerhiya, at iba pang mga problema sa kalusugan. Sa mga 
        lugar sa London na mataas ang populasyon, ang mga residente ay nakikipaglaban din sa 
        panlabas na polusyon, na lumilikha ng mga kapaligiran na may masamang epekto sa pisikal 
        at mental na kapakanan. Ipinapakita ng mga pag-aaral na ang mga Londoner na naninirahan 
        sa mga lugar na may mas mataas na antas ng polusyon ay nag-uulat ng mas mataas na rates 
        ng stress at pagkabalisa, kasama ang mga alalahanin sa pisikal na kalusugan.
      `,
      issue4Title: "Mas Mahigpit na Regulasyon sa Kapaligiran",
      issue4Content: `
        Ang mga regulasyon ng UK sa paligid ng sustainability ng gusali ay tumindi, na ang London 
        ay nagpapatupad ng ilan sa pinakamahigpit na pamantayan sa buong bansa. Ang kamakailang 
        lehislasyon ay nag-uutos sa lahat ng bagong development na makamit ang carbon neutrality, 
        at ang mga umiiral na gusali ay dapat matugunan ang patuloy na mahigpit na pamantayan sa 
        kahusayan ng enerhiya bago 2028. Ang hindi pagsunod ay nagdadala ng malalaking parusa sa 
        pananalapi, na lumilikha ng pangangailangan para sa mga may-ari ng ari-arian na umangkop. 
        Ang mga regulasyong ito, bagaman kinakailangan para sa pag-unlad sa kapaligiran, ay nagdadagdag 
        ng makabuluhang komplikasyon at gastos sa development at pamamahala ng real estate.
      `,
      issue5Title: "Nagbabagong Inaasahan ng Mamimili",
      issue5Content: `
        Ang mga bumibili ng bahay at umuupa ngayon—lalo na ang mga mas batang henerasyon—ay 
        binibigyang-prayoridad ang sustainability sa kanilang mga desisyon sa pabahay. Ipinapakita 
        ng mga kamakailang survey na 68% ng mga residente ng London na wala pang 40 taong gulang ay 
        handang magbayad ng premium para sa mga energy-efficient na tahanan na may minimal na epekto 
        sa kapaligiran. Ang pagbabagong ito sa mga kagustuhan ng mamimili ay bumubuo muli sa merkado, 
        na nag-iiwan sa mga may-ari ng mga tradisyonal na ari-arian na nagsisikap na umangkop o harapin 
        ang pagbaba ng halaga ng ari-arian at mga pinahabang panahon ng bakante.
      `,
      futureTitle: "Ang Hinaharap: Isang Paglipat Patungo sa Sustainable na Real Estate",
      netZeroTitle: "1. Pag-usbong ng Net-Zero at Zero-Emission na Gusali",
      netZeroContent: `
        Sa susunod na limang taon, makikita natin ang mga zero-emission na development na magiging 
        gold standard sa merkado ng real estate sa London. Ang mga gusaling ito ay bumubuo ng lahat 
        ng kinakailangang enerhiya sa site sa pamamagitan ng mga renewable na mapagkukunan tulad ng 
        solar at geothermal, na nagpapanatili ng neutral o positibong balanse ng enerhiya. Ang advanced 
        na insulasyon, energy-recovery ventilation, at passive solar design ay magpapababa sa mga 
        pangangailangan sa enerhiya, habang ang mga smart system ay magpapaoptimize sa konsumo. Bago 
        sumapit ang 2027, inaasahan ng mga eksperto na ang mga zero-emission na ari-arian ay magkakaroon 
        ng 15-20% na mas mataas na halaga kaysa sa mga conventional na gusali, na nagbabago mula sa mga 
        luxury outlier patungo sa mga pangangailangan ng merkado.
      `,
      smartHomesTitle: "2. Smart Homes at Mga Teknolohiyang Matipid sa Enerhiya",
      smartHomesContent: `
        Ang mga integrated na smart technology ay magbabago kung paano tayo nakikipag-ugnayan sa ating 
        mga living space. Ang mga system na pinapagana ng AI ay inaasahan at ina-adjust ang mga 
        pangangailangan ng mga naninirahan habang binabawasan ang paggamit ng enerhiya. Ang mga kapaligiran 
        na kinokontrol ng gesture at boses ay mag-aalis ng mga hindi kailangang switch at kontrol, habang 
        ang real-time na pagsubaybay sa enerhiya ay nagbibigay-kapangyarihan sa mga residente na maunawaan 
        at i-optimize ang kanilang konsumo. Ang mga teknolohiyang ito ay magbabawas ng average na paggamit 
        ng enerhiya ng sambahayan ng 30-40%, na naghahatid parehong mga benepisyo sa kapaligiran at 
        makabuluhang matitipid sa gastos para sa mga pamilya.
      `,
      sustainableMaterialsTitle: "3. Mga Sustainable na Materyales at Pamamaraan sa Pagtatayo",
      sustainableMaterialsContent: `
        Ang mga pamamaraan sa konstruksyon ay sasailalim sa radical na pagbabago, na may mga materyales 
        na nag-iipon ng carbon na papalit sa mga tradisyonal na resource-intensive na pagpipilian. Ang 
        mass timber, mycelium-based insulation, at recycled concrete ay makabuluhang magbabawas ng 
        embodied carbon. Ang modular, prefabricated na konstruksyon ay magpapababa ng basura at magpapaikli 
        ng build times, nagbabawas ng kaguluhan sa local na komunidad. Ang mga pagsulong na ito ay magbabawas 
        ng mga emission na may kaugnayan sa konstruksyon ng hanggang 60% habang lumilikha ng mas 
        malusog na panloob na kapaligiran na walang mga volatile organic compound na karaniwan sa mga 
        conventional na materyales ng gusali.
      `,
      greenSpacesTitle: "4. Mga Berdeng Espasyo at Sustainability sa Lungsod",
      greenSpacesContent: `
        Ang mga development sa hinaharap ay isasama ang kalikasan sa buong bahagi, kung saan ang 
        mga rooftop gardens, living walls, at community growing spaces ay magiging mga standard na 
        feature kaysa sa mga luxury addition. Ang mga elementong ito ay lalabanan ang mga epekto ng 
        urban heat island, pagpapabuti ng kalidad ng hangin, at suporta sa biodiversity. Bukod sa 
        mga benepisyo sa kapaligiran, ang mga espasyong ito ay magtataguyod ng pagkakaisa ng komunidad 
        at pagpapabuti ng mental na kalusugan ng mga residente. Ang mga awtoridad sa pagpaplano ng 
        London ay nagrerebisa na ng mga alituntunin upang mangailangan ng makabuluhang integrasyon 
        ng green space sa lahat ng bagong residential development, na kinikilala ang kanilang mahalagang 
        papel sa paglikha ng sustainable na komunidad.
      `,
      policyChangesTitle: "5. Pamumuhay na Nakasentro sa Komunidad",
      policyChangesContent: `
        Ang pinaka-progresibong mga development ay iiral higit pa sa simpleng mga gusali upang maging 
        self-sustaining na micro-communities. Ang mga shared amenities tulad ng workshop spaces, community 
        kitchens, at co-working areas ay magbabawas ng pangangailangan para sa labis na pribadong 
        espasyo habang itinataguyod ang social connections. Ang integrated na solusyon sa transportasyon, 
        kabilang ang EV charging infrastructure at car-sharing services, ay magbabawas ng pag-asa sa 
        private vehicle ownership. Ang mga development na ito ay magpapakita kung paano mapapahusay ng 
        thoughtful design ang kalidad ng buhay habang binabawasan ang epekto sa kapaligiran, na lumilikha 
        ng mga template para sa future urban planning sa buong London at sa labas nito.
      `,
      callToActionTitle: "Pagtanaw sa Hinaharap: Isang Panawagan sa Negosyo at Mga Mamimili",
      callToActionContent: `
        Ang pagbabago ng landscape ng real estate sa London ay kumakatawan sa parehong hamon at 
        pagkakataon. Para sa mga developer at may-ari ng ari-arian, ang pagtangkilik sa sustainability 
        ay hindi lamang tungkol sa pagsunod—ito ay tungkol sa future-proofing ng mga asset at pagtugon 
        sa nagbabagong pangangailangan ng merkado. Para sa mga residente, ang mga pagbabagong ito ay 
        nangangako ng mas malusog na kapaligiran sa pamumuhay, mas mababang gastos sa utility, at mga 
        komunidad na idinisenyo upang mapahusay ang kapakanan.

        Habang tinitingnan natin ang susunod na limang taon, malinaw na ang pinaka-matagumpay na mga 
        proyekto sa real estate ay ang mga tumutugon sa mga suliranin ng kasalukuyan habang inaasahan 
        ang mga pangangailangan ng bukas. Sa pamamagitan ng pagtangkilik sa mga pamantayan ng zero-emission, 
        pagsasama ng mga smart technology, paggamit ng sustainable na materyales, pagsasama ng makabuluhang 
        green spaces, at pagtataguyod ng komunidad, maaari tayong lumikha ng mga kapaligiran sa pamumuhay 
        na kapwa kapaki-pakinabang sa mga tao at planeta.

        Ang hinaharap ng real estate ay hindi lamang tungkol sa mga gusali—ito ay tungkol sa paglikha 
        ng sustainable, malusog, at konektadong mga komunidad na magbibigay-kahulugan sa urban living 
        para sa mga susunod na henerasyon.
      `,
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
          
          <h3>{content[language].issue1Title}</h3>
          <p>{content[language].issue1Content}</p>
          
          <h3>{content[language].issue2Title}</h3>
          <p>{content[language].issue2Content}</p>
          
          <h3>{content[language].issue3Title}</h3>
          <p>{content[language].issue3Content}</p>
          
          <h3>{content[language].issue4Title}</h3>
          <p>{content[language].issue4Content}</p>
          
          <h3>{content[language].issue5Title}</h3>
          <p>{content[language].issue5Content}</p>

          <h2>{content[language].futureTitle}</h2>
          
          <h3>{content[language].netZeroTitle}</h3>
          <p>{content[language].netZeroContent}</p>
          
          <h3>{content[language].smartHomesTitle}</h3>
          <p>{content[language].smartHomesContent}</p>
          
          <h3>{content[language].sustainableMaterialsTitle}</h3>
          <p>{content[language].sustainableMaterialsContent}</p>
          
          <h3>{content[language].greenSpacesTitle}</h3>
          <p>{content[language].greenSpacesContent}</p>
          
          <h3>{content[language].policyChangesTitle}</h3>
          <p>{content[language].policyChangesContent}</p>

          <h2>{content[language].callToActionTitle}</h2>
          <p>{content[language].callToActionContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
