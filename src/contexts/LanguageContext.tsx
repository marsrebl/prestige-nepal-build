
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.team': 'Our Team',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'PRESTIGE DESIGN',
    'hero.subtitle': 'AND BUILDERS',
    'hero.description': 'Creating exceptional spaces with modern Nepali architecture and cutting-edge construction techniques.',
    'hero.tagline': 'Where Innovation Meets Tradition in Construction Excellence',
    'hero.cta': "Let's Talk",

    // About
    'about.title': 'About Us',
    'about.heading': 'Building Dreams with Precision and Passion',
    'about.description1': 'PRESTIGE DESIGN AND BUILDERS is a leading construction company based in Birtamode, Nepal, specializing in modern architectural solutions that blend contemporary design with traditional Nepali aesthetics.',
    'about.description2': 'With over 15 years of experience in the industry, we have established ourselves as pioneers in interior design and iron structure construction, delivering projects that exceed expectations and stand the test of time.',
    'about.projects': 'Projects Completed',
    'about.experience': 'Years Experience',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive construction solutions tailored to your needs',
    'services.learnMore': 'Learn More',
    'services.interior.title': 'Interior Design',
    'services.interior.description': 'Transform your spaces with our expert interior design services that blend functionality with aesthetic appeal.',
    'services.interior.features': '• Modern & Traditional Nepali Designs\n• Space Planning & Optimization\n• Custom Furniture Solutions\n• Lighting & Color Consultation',
    'services.iron.title': 'Iron Structure Construction',
    'services.iron.description': 'Durable and cost-effective iron structures designed to withstand Nepal\'s seismic conditions.',
    'services.iron.features': '• Earthquake-Resistant Designs\n• Pre-Engineered Buildings\n• Industrial Warehouses\n• Commercial Complexes',

    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Showcasing excellence in construction and design across Nepal',
    'projects.viewAll': 'View All Projects',
    'projects.project1.title': 'Modern Corporate Office',
    'projects.project1.location': 'Kathmandu, Nepal',
    'projects.project1.description': 'A state-of-the-art office complex featuring contemporary design and smart building technologies.',
    'projects.project2.title': 'Luxury Residential Interior',
    'projects.project2.location': 'Pokhara, Nepal',
    'projects.project2.description': 'Elegant interior design combining modern amenities with traditional Nepali craftsmanship.',
    'projects.project3.title': 'High-Tech Manufacturing Facility',
    'projects.project3.location': 'Birtamode, Nepal',
    'projects.project3.description': 'Advanced industrial facility with earthquake-resistant iron structure and modern amenities.',

    // Testimonials
    'testimonials.title': 'What Our Clients Say?',
    'testimonials.subtitle': 'Hear from our satisfied clients about their experience with us',
    'testimonials.review1.text': 'PRESTIGE DESIGN transformed our office space beyond our expectations. Their attention to detail and professional approach made the entire process seamless.',
    'testimonials.review1.name': 'Raj Kumar Sharma',
    'testimonials.review1.position': 'CEO, Tech Solutions Nepal',
    'testimonials.review2.text': 'The iron structure they built for our warehouse is incredibly sturdy and was completed ahead of schedule. Excellent quality and service!',
    'testimonials.review2.name': 'Sita Devi Patel',
    'testimonials.review2.position': 'Owner, Patel Industries',
    'testimonials.review3.text': 'Their interior design work for our home is absolutely beautiful. They perfectly balanced modern style with traditional Nepali elements.',
    'testimonials.review3.name': 'Arjun Thapa',
    'testimonials.review3.position': 'Homeowner, Pokhara',

    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the experts behind our success',
    'team.member1.name': 'JC MANBIR RAJBANSI',
    'team.member1.position': 'Managing Director',
    'team.member1.description': 'With over 15 years of experience in construction and project management, JC MANBIR leads our team with vision and expertise, ensuring every project meets the highest standards of quality and innovation.',
    'team.member2.name': 'KRISHNA KHATIWADA',
    'team.member2.position': 'Senior Designer',
    'team.member2.description': 'KRISHNA brings creative excellence to every project with 10+ years of experience in interior design and architectural planning, specializing in blending modern aesthetics with traditional Nepali elements.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for your next construction project',
    'contact.location': 'Birtamode, Jhapa, Nepal',
    'contact.phone': '+977-9800-123456',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'Enter your full name',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'Enter your email',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us about your project...',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',

    // Gallery
    'gallery.title': 'Project Gallery',
    'gallery.subtitle': 'Explore our portfolio of completed projects showcasing excellence in design and construction',
    'gallery.backHome': 'Back to Home',
    'gallery.filterBy': 'Filter by:',
    'gallery.filters.all': 'All Projects',
    'gallery.filters.interior': 'Interior Design',
    'gallery.filters.iron': 'Iron Structure',
    'gallery.noProjects': 'No projects found',
    'gallery.tryDifferentFilter': 'Try selecting a different filter to see more projects.',
    'gallery.projects.modern_office.title': 'Modern Office Complex',
    'gallery.projects.modern_office.location': 'Kathmandu, Nepal',
    'gallery.projects.modern_office.description': 'Contemporary office design with open spaces and modern amenities.',
    'gallery.projects.steel_structure.title': 'Steel Structure Warehouse',
    'gallery.projects.steel_structure.location': 'Birtamode, Nepal',
    'gallery.projects.steel_structure.description': 'Large-scale warehouse with earthquake-resistant steel framework.',
    'gallery.projects.luxury_home.title': 'Luxury Home Interior',
    'gallery.projects.luxury_home.location': 'Pokhara, Nepal',
    'gallery.projects.luxury_home.description': 'Elegant residential interior blending modern and traditional elements.',
    'gallery.projects.commercial_building.title': 'Commercial Building Frame',
    'gallery.projects.commercial_building.location': 'Dharan, Nepal',
    'gallery.projects.commercial_building.description': 'Multi-story commercial building with robust iron structure.',
    'gallery.projects.restaurant_design.title': 'Restaurant Interior Design',
    'gallery.projects.restaurant_design.location': 'Biratnagar, Nepal',
    'gallery.projects.restaurant_design.description': 'Cozy restaurant ambiance with traditional Nepali design elements.',
    'gallery.projects.warehouse.title': 'Industrial Warehouse',
    'gallery.projects.warehouse.location': 'Itahari, Nepal',
    'gallery.projects.warehouse.description': 'Spacious industrial facility with advanced structural engineering.',
    'gallery.projects.hotel_lobby.title': 'Hotel Lobby Design',
    'gallery.projects.hotel_lobby.location': 'Chitwan, Nepal',
    'gallery.projects.hotel_lobby.description': 'Luxurious hotel lobby showcasing Nepali hospitality and modern comfort.',
    'gallery.projects.factory.title': 'Manufacturing Facility',
    'gallery.projects.factory.location': 'Janakpur, Nepal',
    'gallery.projects.factory.description': 'State-of-the-art manufacturing plant with optimized workflow design.',
    'gallery.projects.residential.title': 'Residential Complex',
    'gallery.projects.residential.location': 'Bhaktapur, Nepal',
    'gallery.projects.residential.description': 'Modern residential units with traditional architectural influences.',

    // Footer
    'footer.description': 'Leading construction company in Nepal, specializing in modern architecture and innovative building solutions.',
    'footer.contact': 'Contact Info',
    'footer.follow': 'Follow Us',
    'footer.social.description': 'Stay updated with our latest projects and construction tips.',
    'footer.copyright': '© 2024 PRESTIGE DESIGN AND BUILDERS. All rights reserved.'
  },
  ne: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हाम्रो बारे',
    'nav.services': 'सेवाहरू',
    'nav.projects': 'परियोजनाहरू',
    'nav.team': 'हाम्रो टोली',
    'nav.contact': 'सम्पर्क',

    // Hero
    'hero.title': 'प्रेस्टिज डिजाइन',
    'hero.subtitle': 'एन्ड बिल्डर्स',
    'hero.description': 'आधुनिक नेपाली वास्तुकला र अत्याधुनिक निर्माण प्रविधिको साथ असाधारण स्थानहरू सिर्जना गर्दै।',
    'hero.tagline': 'जहाँ नवाचार र परम्पराको निर्माणमा उत्कृष्टता मिल्छ',
    'hero.cta': 'कुरा गरौं',

    // About
    'about.title': 'हाम्रो बारेमा',
    'about.heading': 'सटिकता र जुनूनका साथ सपनाहरू निर्माण गर्दै',
    'about.description1': 'प्रेस्टिज डिजाइन एन्ड बिल्डर्स बीरतामोड, नेपालमा स्थित एक अग्रणी निर्माण कम्पनी हो, जसले समकालीन डिजाइनलाई परम्परागत नेपाली सौन्दर्यशास्त्रसँग मिलाएर आधुनिक वास्तुकला समाधानहरूमा विशेषज्ञता राख्छ।',
    'about.description2': 'उद्योगमा १५ वर्षभन्दा बढी अनुभवको साथ, हामीले भित्री सज्जा र फलामको संरचना निर्माणमा अग्रणीको रूपमा आफूलाई स्थापना गरेका छौं, अपेक्षाहरू पार गर्ने र समयको परीक्षामा टिक्ने परियोजनाहरू प्रदान गर्दै।',
    'about.projects': 'सम्पन्न परियोजनाहरू',
    'about.experience': 'वर्षको अनुभव',

    // Services
    'services.title': 'हाम्रा सेवाहरू',
    'services.subtitle': 'तपाईंको आवश्यकता अनुसार व्यापक निर्माण समाधानहरू',
    'services.learnMore': 'थप जान्नुहोस्',
    'services.interior.title': 'भित्री सज्जा',
    'services.interior.description': 'कार्यक्षमतालाई सौन्दर्य आकर्षणसँग मिलाउने हाम्रो विशेषज्ञ भित्री सज्जा सेवाहरूद्वारा तपाईंको स्थानहरूलाई रूपान्तरण गर्नुहोस्।',
    'services.interior.features': '• आधुनिक र परम्परागत नेपाली डिजाइनहरू\n• स्थान योजना र अनुकूलन\n• कस्टम फर्निचर समाधानहरू\n• प्रकाश र रंग सल्लाह',
    'services.iron.title': 'फलामको संरचना निर्माण',
    'services.iron.description': 'नेपालको भूकम्पीय अवस्थाहरूको सामना गर्न डिजाइन गरिएको टिकाउ र लागत-प्रभावी फलामको संरचनाहरू।',
    'services.iron.features': '• भूकम्प प्रतिरोधी डिजाइनहरू\n• पूर्व-इन्जिनियर गरिएका भवनहरू\n• औद्योगिक गोदामहरू\n• व्यापारिक परिसरहरू',

    // Projects
    'projects.title': 'हाम्रा परियोजनाहरू',
    'projects.subtitle': 'नेपालभर निर्माण र डिजाइनमा उत्कृष्टता प्रदर्शन गर्दै',
    'projects.viewAll': 'सबै परियोजनाहरू हेर्नुहोस्',
    'projects.project1.title': 'आधुनिक कर्पोरेट कार्यालय',
    'projects.project1.location': 'काठमाडौं, नेपाल',
    'projects.project1.description': 'समकालीन डिजाइन र स्मार्ट बिल्डिंग प्रविधिहरू भएको अत्याधुनिक कार्यालय परिसर।',
    'projects.project2.title': 'लक्जरी आवासीय भित्री सज्जा',
    'projects.project2.location': 'पोखरा, नेपाल',
    'projects.project2.description': 'परम्परागत नेपाली शिल्पकलासँग आधुनिक सुविधाहरू मिलाउने सुरुचिपूर्ण भित्री डिजाइन।',
    'projects.project3.title': 'उच्च-तकनीकी निर्माण सुविधा',
    'projects.project3.location': 'बीरतामोड, नेपाल',
    'projects.project3.description': 'भूकम्प प्रतिरोधी फलामको संरचना र आधुनिक सुविधाहरू भएको उन्नत औद्योगिक सुविधा।',

    // Testimonials
    'testimonials.title': 'हाम्रा ग्राहकहरूले के भन्छन्?',
    'testimonials.subtitle': 'हामीसँगको अनुभवको बारेमा हाम्रा सन्तुष्ट ग्राहकहरूबाट सुन्नुहोस्',
    'testimonials.review1.text': 'प्रेस्टिज डिजाइनले हाम्रो कार्यालयको स्थानलाई हाम्रो अपेक्षाभन्दा बढी रूपान्तरण गर्यो। तिनीहरूको विस्तृत ध्यान र व्यावसायिक दृष्टिकोणले सम्पूर्ण प्रक्रियालाई निर्बाध बनायो।',
    'testimonials.review1.name': 'राज कुमार शर्मा',
    'testimonials.review1.position': 'सीईओ, टेक सोल्युसन्स नेपाल',
    'testimonials.review2.text': 'तिनीहरूले हाम्रो गोदामको लागि बनाएको फलामको संरचना अविश्वसनीय रूपमा बलियो छ र समयभन्दा अगाडि सम्पन्न भयो। उत्कृष्ट गुणस्तर र सेवा!',
    'testimonials.review2.name': 'सीता देवी पटेल',
    'testimonials.review2.position': 'मालिक, पटेल इंडस्ट्रीज',
    'testimonials.review3.text': 'हाम्रो घरको लागि तिनीहरूको भित्री डिजाइन कार्य एकदम सुन्दर छ। तिनीहरूले आधुनिक शैलीलाई परम्परागत नेपाली तत्वहरूसँग पूर्ण रूपमा सन्तुलन मिलाए।',
    'testimonials.review3.name': 'अर्जुन थापा',
    'testimonials.review3.position': 'घर मालिक, पोखरा',

    // Team
    'team.title': 'हाम्रो टोली',
    'team.subtitle': 'हाम्रो सफलताको पछाडिका विशेषज्ञहरूलाई भेट्नुहोस्',
    'team.member1.name': 'जेसी मनबीर राजबंशी',
    'team.member1.position': 'प्रबन्ध निर्देशक',
    'team.member1.description': 'निर्माण र परियोजना व्यवस्थापनमा १५ वर्षभन्दा बढी अनुभवको साथ, जेसी मनबीरले दृष्टिकोण र विशेषज्ञताका साथ हाम्रो टोलीको नेतृत्व गर्छन्, प्रत्येक परियोजनाले गुणस्तर र नवाचारको उच्चतम मापदण्डहरू पूरा गर्ने सुनिश्चित गर्दै।',
    'team.member2.name': 'कृष्ण खतिवडा',
    'team.member2.position': 'वरिष्ठ डिजाइनर',
    'team.member2.description': 'कृष्णले भित्री डिजाइन र वास्तुकला योजनामा १०+ वर्षको अनुभवका साथ प्रत्येक परियोजनामा रचनात्मक उत्कृष्टता ल्याउँछन्, आधुनिक सौन्दर्यशास्त्रलाई परम्परागत नेपाली तत्वहरूसँग मिलाउनमा विशेषज्ञता राख्छन्।',

    // Contact
    'contact.title': 'सम्पर्क गर्नुहोस्',
    'contact.subtitle': 'तपाईंको अर्को निर्माण परियोजनाको लागि सम्पर्कमा रहनुहोस्',
    'contact.location': 'बीरतामोड, झापा, नेपाल',
    'contact.phone': '+९७७-९८००-१२३४५६',
    'contact.form.title': 'हामीलाई सन्देश पठाउनुहोस्',
    'contact.form.name': 'पूरा नाम',
    'contact.form.namePlaceholder': 'तपाईंको पूरा नाम प्रविष्ट गर्नुहोस्',
    'contact.form.email': 'इमेल ठेगाना',
    'contact.form.emailPlaceholder': 'तपाईंको इमेल प्रविष्ट गर्नुहोस्',
    'contact.form.message': 'सन्देश',
    'contact.form.messagePlaceholder': 'तपाईंको परियोजनाको बारेमा हामीलाई बताउनुहोस्...',
    'contact.form.send': 'सन्देश पठाउनुहोस्',
    'contact.info.title': 'सम्पर्क जानकारी',

    // Gallery
    'gallery.title': 'परियोजना ग्यालेरी',
    'gallery.subtitle': 'डिजाइन र निर्माणमा उत्कृष्टता प्रदर्शन गर्ने हाम्रा सम्पन्न परियोजनाहरूको पोर्टफोलियो अन्वेषण गर्नुहोस्',
    'gallery.backHome': 'होममा फर्कनुहोस्',
    'gallery.filterBy': 'छान्नुहोस्:',
    'gallery.filters.all': 'सबै परियोजनाहरू',
    'gallery.filters.interior': 'भित्री सज्जा',
    'gallery.filters.iron': 'फलामको संरचना',
    'gallery.noProjects': 'कुनै परियोजना फेला परेन',
    'gallery.tryDifferentFilter': 'थप परियोजनाहरू हेर्न फरक फिल्टर चयन गर्ने प्रयास गर्नुहोस्।',
    'gallery.projects.modern_office.title': 'आधुनिक कार्यालय परिसर',
    'gallery.projects.modern_office.location': 'काठमाडौं, नेपाल',
    'gallery.projects.modern_office.description': 'खुला स्थान र आधुनिक सुविधाहरू भएको समकालीन कार्यालय डिजाइन।',
    'gallery.projects.steel_structure.title': 'स्टिल संरचना गोदाम',
    'gallery.projects.steel_structure.location': 'बीरतामोड, नेपाल',
    'gallery.projects.steel_structure.description': 'भूकम्प प्रतिरोधी स्टिल फ्रेमवर्क भएको ठूलो गोदाम।',
    'gallery.projects.luxury_home.title': 'लक्जरी घर भित्री सज्जा',
    'gallery.projects.luxury_home.location': 'पोखरा, नेपाल',
    'gallery.projects.luxury_home.description': 'आधुनिक र परम्परागत तत्वहरू मिलाउने सुरुचिपूर्ण आवासीय भित्री सज्जा।',
    'gallery.projects.commercial_building.title': 'व्यापारिक भवन फ्रेम',
    'gallery.projects.commercial_building.location': 'धरान, नेपाल',
    'gallery.projects.commercial_building.description': 'बलियो फलामको संरचना भएको बहुतले व्यापारिक भवन।',
    'gallery.projects.restaurant_design.title': 'रेस्टुरेन्ट भित्री डिजाइन',
    'gallery.projects.restaurant_design.location': 'बिराटनगर, नेपाल',
    'gallery.projects.restaurant_design.description': 'परम्परागत नेपाली डिजाइन तत्वहरू भएको आरामदायक रेस्टुरेन्ट वातावरण।',
    'gallery.projects.warehouse.title': 'औद्योगिक गोदाम',
    'gallery.projects.warehouse.location': 'इटहरी, नेपाल',
    'gallery.projects.warehouse.description': 'उन्नत संरचनात्मक इन्जिनियरिङ भएको फराकिलो औद्योगिक सुविधा।',
    'gallery.projects.hotel_lobby.title': 'होटल लबी डिजाइन',
    'gallery.projects.hotel_lobby.location': 'चितवन, नेपाल',
    'gallery.projects.hotel_lobby.description': 'नेपाली आतिथ्य र आधुनिक आराम प्रदर्शन गर्ने लक्जरी होटल लबी।',
    'gallery.projects.factory.title': 'उत्पादन सुविधा',
    'gallery.projects.factory.location': 'जनकपुर, नेपाल',
    'gallery.projects.factory.description': 'अनुकूलित कार्यप्रवाह डिजाइन भएको अत्याधुनिक उत्पादन कारखाना।',
    'gallery.projects.residential.title': 'आवासीय परिसर',
    'gallery.projects.residential.location': 'भक्तपुर, नेपाल',
    'gallery.projects.residential.description': 'परम्परागत वास्तुकला प्रभाव भएका आधुनिक आवासीय एकाइहरू।',

    // Footer
    'footer.description': 'नेपालको अग्रणी निर्माण कम्पनी, आधुनिक वास्तुकला र नवाचार निर्माण समाधानहरूमा विशेषज्ञ।',
    'footer.contact': 'सम्पर्क जानकारी',
    'footer.follow': 'हामीलाई फलो गर्नुहोस्',
    'footer.social.description': 'हाम्रा नवीनतम परियोजनाहरू र निर्माण सुझावहरूबाट अपडेट रहनुहोस्।',
    'footer.copyright': '© २०२४ प्रेस्टिज डिजाइन एन्ड बिल्डर्स। सबै अधिकार सुरक्षित।'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
