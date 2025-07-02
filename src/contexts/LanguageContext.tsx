
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
    
    // Hero Section
    'hero.title': 'PRESTIGE',
    'hero.subtitle': 'DESIGN & BUILDERS',
    'hero.description': 'Crafting Excellence in Interior Design & Iron Structure Construction',
    'hero.tagline': 'Building Nepal\'s Future with Innovation and Precision',
    'hero.cta': 'Let\'s Talk',
    
    // About Section
    'about.title': 'About Us',
    'about.heading': 'Building Dreams, Creating Legacies',
    'about.description1': 'At Prestige Design and Builders, we are committed to transforming spaces and structures across Nepal with our expertise in Interior Design and Iron Structure Construction. Our mission is to deliver exceptional quality while honoring the rich architectural heritage of Nepal.',
    'about.description2': 'With years of experience in the construction industry, we specialize in creating modern, earthquake-resistant structures that blend seamlessly with Nepal\'s unique landscape and culture. From residential interiors to commercial iron frameworks, we bring innovation to every project.',
    'about.projects': 'Projects Completed',
    'about.experience': 'Years Experience',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Excellence in Design and Construction',
    'services.interior.title': 'Interior Design',
    'services.interior.description': 'Transform your spaces with our expert interior design services. We blend modern aesthetics with traditional Nepali elements to create unique, functional, and beautiful interiors.',
    'services.interior.features': '• Residential & Commercial Design\n• Traditional Nepali Interiors\n• Modern & Minimalist Styles\n• Space Planning & Optimization',
    'services.iron.title': 'Iron Structure Construction',
    'services.iron.description': 'Build strong, durable, and earthquake-resistant structures with our specialized iron construction expertise. Perfect for Nepal\'s seismic conditions.',
    'services.iron.features': '• Earthquake Resistant Design\n• Industrial & Commercial Buildings\n• Prefabricated Structures\n• Cost-Effective Solutions',
    'services.learnMore': 'Learn More',
    
    // Projects Section
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Showcasing Excellence Across Nepal',
    'projects.project1.title': 'Corporate Office Complex',
    'projects.project1.location': 'Kathmandu, Nepal',
    'projects.project1.description': 'Modern office space with traditional Nepali architectural elements and earthquake-resistant iron structure.',
    'projects.project2.title': 'Luxury Residential Interior',
    'projects.project2.location': 'Pokhara, Nepal',
    'projects.project2.description': 'Elegant interior design blending modern comfort with traditional Nepali craftsmanship.',
    'projects.project3.title': 'High-Tech Industrial Facility',
    'projects.project3.location': 'Birtamode, Nepal',
    'projects.project3.description': 'State-of-the-art industrial building with advanced iron framework and modern design.',
    
    // Team Section
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the Experts Behind Our Success',
    'team.member1.name': 'JC MANBIR RAJBANSI',
    'team.member1.position': 'Managing Director',
    'team.member1.description': 'With over 15 years of experience in construction and design, JC Manbir leads our team with vision and expertise in delivering exceptional projects across Nepal.',
    'team.member2.name': 'KRISHNA KHATIWADA',
    'team.member2.position': 'Senior Designer',
    'team.member2.description': 'Krishna brings creativity and technical expertise to every interior design project, specializing in blending modern aesthetics with traditional Nepali elements.',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s Build Something Amazing Together',
    'contact.form.title': 'Get In Touch',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us about your project...',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.location': 'Birtamode, Nepal',
    'contact.phone': '+977-9800-123456',
    
    // Footer
    'footer.description': 'Building Nepal\'s Future with Excellence. We specialize in Interior Design and Iron Structure Construction, creating spaces that blend modern innovation with traditional Nepali heritage.',
    'footer.contact': 'Contact Information',
    'footer.follow': 'Follow Us',
    'footer.social.description': 'Stay updated with our latest projects and construction insights',
    'footer.copyright': '© 2024 Prestige Design and Builders. All rights reserved. | Building Excellence Since 2009'
  },
  ne: {
    // Navigation
    'nav.home': 'गृह',
    'nav.about': 'हाम्रो बारे',
    'nav.services': 'सेवाहरू',
    'nav.projects': 'परियोजनाहरू',
    'nav.team': 'हाम्रो टोली',
    'nav.contact': 'सम्पर्क',
    
    // Hero Section
    'hero.title': 'प्रेस्टिज',
    'hero.subtitle': 'डिजाइन र बिल्डर्स',
    'hero.description': 'भित्री डिजाइन र फलामी संरचना निर्माणमा उत्कृष्टता सिर्जना',
    'hero.tagline': 'नवाचार र सटिकताका साथ नेपालको भविष्य निर्माण',
    'hero.cta': 'कुरा गरौं',
    
    // About Section
    'about.title': 'हाम्रो बारे',
    'about.heading': 'सपनाहरू निर्माण, विरासत सिर्जना',
    'about.description1': 'प्रेस्टिज डिजाइन र बिल्डर्समा, हामी भित्री डिजाइन र फलामी संरचना निर्माणमा हाम्रो विशेषज्ञताका साथ नेपालभरका स्थानहरू र संरचनाहरू रूपान्तरण गर्न प्रतिबद्ध छौं। नेपालको समृद्ध वास्तुकला सम्पदालाई सम्मान गर्दै असाधारण गुणस्तर प्रदान गर्नु हाम्रो मिशन हो।',
    'about.description2': 'निर्माण उद्योगमा वर्षौंको अनुभवका साथ, हामी नेपालको अनूठो भूगोल र संस्कृतिसँग मिल्ने आधुनिक, भूकम्प प्रतिरोधी संरचनाहरू सिर्जना गर्नमा विशेषज्ञ छौं। आवासीय भित्री डिजाइनदेखि व्यावसायिक फलामी ढाँचासम्म, हामी हरेक परियोजनामा नवाचार ल्याउँछौं।',
    'about.projects': 'सम्पन्न परियोजनाहरू',
    'about.experience': 'वर्षको अनुभव',
    
    // Services Section
    'services.title': 'हाम्रा सेवाहरू',
    'services.subtitle': 'डिजाइन र निर्माणमा उत्कृष्टता',
    'services.interior.title': 'भित्री डिजाइन',
    'services.interior.description': 'हाम्रो विशेषज्ञ भित्री डिजाइन सेवाहरूसँग आफ्ना स्थानहरूलाई रूपान्तरण गर्नुहोस्। हामी अनूठो, कार्यात्मक र सुन्दर भित्री डिजाइन सिर्जना गर्न आधुनिक सौन्दर्यशास्त्रलाई परम्परागत नेपाली तत्वहरूसँग मिसाउँछौं।',
    'services.interior.features': '• आवासीय र व्यावसायिक डिजाइन\n• परम्परागत नेपाली भित्री डिजाइन\n• आधुनिक र न्यूनतम शैलीहरू\n• स्थान योजना र अनुकूलन',
    'services.iron.title': 'फलामी संरचना निर्माण',
    'services.iron.description': 'हाम्रो विशेष फलामी निर्माण विशेषज्ञताका साथ बलियो, टिकाउ र भूकम्प प्रतिरोधी संरचनाहरू निर्माण गर्नुहोस्। नेपालको भूकम्पीय अवस्थाका लागि उत्तम।',
    'services.iron.features': '• भूकम्प प्रतिरोधी डिजाइन\n• औद्योगिक र व्यावसायिक भवनहरू\n• पूर्व-निर्मित संरचनाहरू\n• लागत-प्रभावी समाधानहरू',
    'services.learnMore': 'थप जान्नुहोस्',
    
    // Projects Section
    'projects.title': 'हाम्रा परियोजनाहरू',
    'projects.subtitle': 'नेपालभर उत्कृष्टता प्रदर्शन',
    'projects.project1.title': 'कर्पोरेट कार्यालय परिसर',
    'projects.project1.location': 'काठमाडौं, नेपाल',
    'projects.project1.description': 'परम्परागत नेपाली वास्तुकला तत्वहरू र भूकम्प प्रतिरोधी फलामी संरचनासहित आधुनिक कार्यालय स्थान।',
    'projects.project2.title': 'लक्जरी आवासीय भित्री डिजाइन',
    'projects.project2.location': 'पोखरा, नेपाल',
    'projects.project2.description': 'आधुनिक आरामलाई परम्परागत नेपाली शिल्पकलासँग मिसाउने सुरुचिपूर्ण भित्री डिजाइन।',
    'projects.project3.title': 'उच्च प्रविधि औद्योगिक सुविधा',
    'projects.project3.location': 'बिर्तामोड, नेपाल',
    'projects.project3.description': 'उन्नत फलामी ढाँचा र आधुनिक डिजाइनसहित अत्याधुनिक औद्योगिक भवन।',
    
    // Team Section
    'team.title': 'हाम्रो टोली',
    'team.subtitle': 'हाम्रो सफलताको पछाडिका विशेषज्ञहरूलाई भेट्नुहोस्',
    'team.member1.name': 'जे.सी. मनबिर राजवंशी',
    'team.member1.position': 'प्रबन्ध निर्देशक',
    'team.member1.description': 'निर्माण र डिजाइनमा १५ वर्षभन्दा बढी अनुभवका साथ, जे.सी. मनबिरले नेपालभर असाधारण परियोजनाहरू प्रदान गर्नमा दृष्टिकोण र विशेषज्ञताका साथ हाम्रो टोलीको नेतृत्व गर्छन्।',
    'team.member2.name': 'कृष्ण खतिवडा',
    'team.member2.position': 'वरिष्ठ डिजाइनर',
    'team.member2.description': 'कृष्णले हरेक भित्री डिजाइन परियोजनामा रचनात्मकता र प्राविधिक विशेषज्ञता ल्याउँछन्, आधुनिक सौन्दर्यशास्त्रलाई परम्परागत नेपाली तत्वहरूसँग मिसाउनमा विशेषज्ञ छन्।',
    
    // Contact Section
    'contact.title': 'सम्पर्क गर्नुहोस्',
    'contact.subtitle': 'सँगै केहि अद्भुत निर्माण गरौं',
    'contact.form.title': 'सम्पर्कमा रहनुहोस्',
    'contact.form.name': 'पूरा नाम',
    'contact.form.namePlaceholder': 'तपाईंको नाम',
    'contact.form.email': 'इमेल ठेगाना',
    'contact.form.emailPlaceholder': 'तपाईंको@इमेल.कम',
    'contact.form.message': 'सन्देश',
    'contact.form.messagePlaceholder': 'हामीलाई तपाईंको परियोजनाको बारेमा भन्नुहोस्...',
    'contact.form.send': 'सन्देश पठाउनुहोस्',
    'contact.info.title': 'सम्पर्क जानकारी',
    'contact.location': 'बिर्तामोड, नेपाल',
    'contact.phone': '+९७७-९८००-१२३४५६',
    
    // Footer
    'footer.description': 'उत्कृष्टताका साथ नेपालको भविष्य निर्माण। हामी भित्री डिजाइन र फलामी संरचना निर्माणमा विशेषज्ञ छौं, आधुनिक नवाचारलाई परम्परागत नेपाली सम्पदासँग मिसाउने स्थानहरू सिर्जना गर्छौं।',
    'footer.contact': 'सम्पर्क जानकारी',
    'footer.follow': 'हामीलाई फलो गर्नुहोस्',
    'footer.social.description': 'हाम्रा पछिल्ला परियोजनाहरू र निर्माण अन्तरदृष्टिहरूसँग अपडेट रहनुहोस्',
    'footer.copyright': '© २०२४ प्रेस्टिज डिजाइन र बिल्डर्स। सबै अधिकार सुरक्षित। | २००९ देखि उत्कृष्टता निर्माण'
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
