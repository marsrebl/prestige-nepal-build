
import React, { createContext, useContext, useState } from 'react';

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
    'nav.team': 'Team',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Prestige Design',
    'hero.subtitle': 'Builders & Construction',
    'hero.description': 'Creating exceptional spaces with innovative design and superior construction quality',
    'hero.tagline': 'Where Dreams Meet Reality - Your Vision, Our Expertise',
    'hero.cta': 'Get Started Today',

    // About Section
    'about.title': 'About Us',
    'about.heading': 'Building Excellence Since 2008',
    'about.description1': 'We are a leading construction and design company based in Birtamode, Nepal, specializing in creating exceptional residential and commercial spaces. Our team combines traditional craftsmanship with modern technology to deliver outstanding results.',
    'about.description2': 'From concept to completion, we handle every aspect of your project with meticulous attention to detail, ensuring that your vision becomes reality while maintaining the highest standards of quality and safety.',
    'about.projects': 'Projects Completed',
    'about.experience': 'Years Experience',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive construction and design solutions for all your needs',
    'services.learnMore': 'Learn More',
    'services.getQuote': 'Get Quote',
    
    'services.interior.title': 'Interior Design',
    'services.interior.description': 'Transform your space with our expert interior design services, combining functionality with aesthetic appeal.',
    'services.interior.features': '• Custom furniture design\n• Space planning & optimization\n• Color consultation\n• Lighting design\n• Material selection',
    
    'services.iron.title': 'Iron Structure Construction',
    'services.iron.description': 'Durable and robust iron structures built to last, perfect for industrial and commercial applications.',
    'services.iron.features': '• Structural steel fabrication\n• Warehouse construction\n• Industrial buildings\n• Pre-engineered buildings\n• Maintenance & repair',
    
    'services.residential.title': 'Residential Construction',
    'services.residential.description': 'Complete home construction services from foundation to finishing, creating your dream home.',
    'services.residential.features': '• Custom home design\n• Foundation & framing\n• Electrical & plumbing\n• Finishing & interiors\n• Renovation services',
    
    'services.commercial.title': 'Commercial Construction',
    'services.commercial.description': 'Professional commercial building solutions for offices, retail spaces, and business establishments.',
    'services.commercial.features': '• Office buildings\n• Retail spaces\n• Restaurants & hotels\n• Medical facilities\n• Educational buildings',

    // Projects Section
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Showcasing our finest work across various construction and design projects',
    'projects.viewAll': 'View All Projects',
    'projects.project1.title': 'Modern Office Complex',
    'projects.project1.location': 'Birtamode, Nepal',
    'projects.project1.description': 'A state-of-the-art office building with contemporary design and smart building features.',
    'projects.project2.title': 'Luxury Residential Villa',
    'projects.project2.location': 'Jhapa, Nepal',
    'projects.project2.description': 'Elegant villa design with premium interiors and sustainable construction practices.',
    'projects.project3.title': 'Industrial Warehouse',
    'projects.project3.location': 'Biratnagar, Nepal',
    'projects.project3.description': 'Large-scale warehouse facility with advanced steel structure and modern amenities.',

    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Hear from our satisfied customers about their experience with us',
    'testimonials.review1.text': 'Prestige Design transformed our office space beyond our expectations. Their attention to detail and professional approach made the entire process smooth and enjoyable.',
    'testimonials.review1.name': 'Rajesh Sharma',
    'testimonials.review1.position': 'CEO, Tech Solutions Ltd.',
    'testimonials.review2.text': 'The team delivered our dream home exactly as we envisioned. Quality workmanship, timely completion, and excellent communication throughout the project.',
    'testimonials.review2.name': 'Sunita Devi',
    'testimonials.review2.position': 'Homeowner',
    'testimonials.review3.text': 'Outstanding iron structure work for our warehouse. Professional, reliable, and cost-effective. Highly recommend their services.',
    'testimonials.review3.name': 'Arjun Thapa',
    'testimonials.review3.position': 'Factory Owner',

    // Team Section
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the experts behind our successful projects',
    'team.member1.name': 'Master Craftsmen',
    'team.member1.position': 'Construction Specialists',
    'team.member1.description': 'Our experienced team of craftsmen brings decades of expertise in traditional and modern construction techniques.',
    'team.member2.name': 'Design Experts',
    'team.member2.position': 'Interior & Architecture',
    'team.member2.description': 'Creative professionals who transform your vision into stunning, functional spaces that exceed expectations.',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your project? Get in touch with us today',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'Enter your full name',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'Enter your email address',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us about your project...',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Get in Touch',
    'contact.location': 'Birtamode-6, Jhapa, Nepal',
    'contact.phone': '+977-9800-123456',

    // Gallery
    'gallery.title': 'Project Gallery',
    'gallery.subtitle': 'Explore our portfolio of completed projects and ongoing work',
    'gallery.backHome': 'Back to Home',
    'gallery.filterBy': 'Filter by:',
    'gallery.filters.all': 'All Projects',
    'gallery.filters.interior': 'Interior Design',
    'gallery.filters.iron': 'Iron Structure',
    'gallery.filters.residential': 'Residential',
    'gallery.filters.commercial': 'Commercial',
    'gallery.noProjects': 'No projects found',
    'gallery.tryDifferentFilter': 'Try selecting a different filter to see more projects.',

    // Gallery Projects
    'gallery.projects.modern_office.title': 'Modern Office Interior',
    'gallery.projects.modern_office.location': 'Birtamode, Nepal',
    'gallery.projects.modern_office.description': 'Contemporary office design with ergonomic furniture and smart lighting solutions.',
    
    'gallery.projects.steel_structure.title': 'Steel Frame Construction',
    'gallery.projects.steel_structure.location': 'Jhapa, Nepal',
    'gallery.projects.steel_structure.description': 'Robust steel framework for industrial building with earthquake-resistant design.',
    
    'gallery.projects.luxury_home.title': 'Luxury Villa Interior',
    'gallery.projects.luxury_home.location': 'Biratnagar, Nepal',
    'gallery.projects.luxury_home.description': 'Elegant residential interior with premium materials and sophisticated design elements.',
    
    'gallery.projects.commercial_building.title': 'Commercial Complex',
    'gallery.projects.commercial_building.location': 'Birtamode, Nepal',
    'gallery.projects.commercial_building.description': 'Multi-story commercial building with modern amenities and energy-efficient systems.',
    
    'gallery.projects.restaurant_design.title': 'Restaurant Interior',
    'gallery.projects.restaurant_design.location': 'Jhapa, Nepal',
    'gallery.projects.restaurant_design.description': 'Cozy restaurant ambiance with traditional Nepali elements and modern comfort.',
    
    'gallery.projects.warehouse.title': 'Industrial Warehouse',
    'gallery.projects.warehouse.location': 'Biratnagar, Nepal',
    'gallery.projects.warehouse.description': 'Large-scale storage facility with advanced ventilation and security systems.',
    
    'gallery.projects.hotel_lobby.title': 'Hotel Lobby Design',
    'gallery.projects.hotel_lobby.location': 'Birtamode, Nepal',
    'gallery.projects.hotel_lobby.description': 'Welcoming hotel entrance with luxury finishes and cultural design motifs.',
    
    'gallery.projects.factory.title': 'Manufacturing Plant',
    'gallery.projects.factory.location': 'Jhapa, Nepal',
    'gallery.projects.factory.description': 'Industrial facility construction with specialized equipment housing and safety features.',
    
    'gallery.projects.residential.title': 'Family Home',
    'gallery.projects.residential.location': 'Biratnagar, Nepal',
    'gallery.projects.residential.description': 'Comfortable family residence with modern amenities and traditional architectural elements.',

    // Footer
    'footer.description': 'Leading construction company in Nepal, delivering excellence in residential, commercial, and industrial projects since 2008.',
    'footer.contact': 'Contact Info',
    'footer.follow': 'Follow Us',
    'footer.social.description': 'Stay updated with our latest projects and construction tips.',
    'footer.copyright': '© 2024 Prestige Design Builders & Construction. All rights reserved.',
  },
  
  ne: {
    // Navigation
    'nav.home': 'गृहपृष्ठ',
    'nav.about': 'हाम्रो बारेमा',
    'nav.services': 'सेवाहरू',
    'nav.projects': 'परियोजनाहरू',
    'nav.team': 'हाम्रो टोली',
    'nav.contact': 'सम्पर्क',

    // Hero Section
    'hero.title': 'प्रेस्टिज डिजाइन',
    'hero.subtitle': 'बिल्डर्स एण्ड कन्स्ट्रक्सन',
    'hero.description': 'नवाचार डिजाइन र उत्कृष्ट निर्माण गुणस्तरका साथ असाधारण स्थानहरू सिर्जना गर्दै',
    'hero.tagline': 'जहाँ सपनाहरू वास्तविकतासँग भेट्छन् - तपाईंको दृष्टिकोण, हाम्रो विशेषज्ञता',
    'hero.cta': 'आज नै सुरु गर्नुहोस्',

    // About Section
    'about.title': 'हाम्रो बारेमा',
    'about.heading': '२००८ देखि उत्कृष्टता निर्माण गर्दै',
    'about.description1': 'हामी बिर्तामोड, नेपालमा स्थित एक अग्रणी निर्माण र डिजाइन कम्पनी हौं, जुन असाधारण आवासीय र व्यावसायिक स्थानहरू सिर्जना गर्नमा विशेषज्ञ छ। हाम्रो टोलीले उत्कृष्ट नतिजाहरू प्रदान गर्न पारम्परिक शिल्पकलालाई आधुनिक प्रविधिसँग जोड्छ।',
    'about.description2': 'अवधारणादेखि पूर्णता सम्म, हामी तपाईंको परियोजनाका हरेक पक्षलाई विस्तृत ध्यानका साथ ह्यान्डल गर्छौं, यो सुनिश्चित गर्दै कि तपाईंको दृष्टिकोण वास्तविकता बन्छ भने गुणस्तर र सुरक्षाको उच्च मापदण्डहरू कायम राख्छ।',
    'about.projects': 'सम्पन्न परियोजनाहरू',
    'about.experience': 'वर्षको अनुभव',

    // Services Section
    'services.title': 'हाम्रा सेवाहरू',
    'services.subtitle': 'तपाईंका सबै आवश्यकताहरूको लागि व्यापक निर्माण र डिजाइन समाधानहरू',
    'services.learnMore': 'थप जान्नुहोस्',
    'services.getQuote': 'मूल्य लिनुहोस्',
    
    'services.interior.title': 'भित्री डिजाइन',
    'services.interior.description': 'कार्यक्षमतालाई सौन्दर्य अपीलसँग मिलाउँदै हाम्रो विशेषज्ञ भित्री डिजाइन सेवाहरूसँग तपाईंको स्थान रूपान्तरण गर्नुहोस्।',
    'services.interior.features': '• कस्टम फर्निचर डिजाइन\n• स्थान योजना र अनुकूलन\n• रंग परामर्श\n• प्रकाश डिजाइन\n• सामग्री चयन',
    
    'services.iron.title': 'फलाम संरचना निर्माण',
    'services.iron.description': 'टिकाउ र बलियो फलाम संरचनाहरू दीर्घकालीन रूपमा निर्मित, औद्योगिक र व्यावसायिक अनुप्रयोगहरूको लागि उत्तम।',
    'services.iron.features': '• संरचनात्मक स्टील निर्माण\n• गोदाम निर्माण\n• औद्योगिक भवनहरू\n• पूर्व-इन्जिनियर गरिएका भवनहरू\n• मर्मत र रखरखाव',
    
    'services.residential.title': 'आवासीय निर्माण',
    'services.residential.description': 'जगदेखि परिष्करण सम्म पूर्ण घर निर्माण सेवाहरू, तपाईंको सपनाको घर सिर्जना गर्दै।',
    'services.residential.features': '• कस्टम घर डिजाइन\n• जग र फ्रेमिङ\n• विद्युतीय र प्लम्बिङ\n• परिष्करण र भित्री सजावट\n• नवीकरण सेवाहरू',
    
    'services.commercial.title': 'व्यावसायिक निर्माण',
    'services.commercial.description': 'कार्यालयहरू, खुद्रा स्थानहरू, र व्यापारिक प्रतिष्ठानहरूको लागि व्यावसायिक भवन समाधानहरू।',
    'services.commercial.features': '• कार्यालय भवनहरू\n• खुद्रा स्थानहरू\n• रेस्टुरेन्ट र होटलहरू\n• चिकित्सा सुविधाहरू\n• शैक्षिक भवनहरू',

    // Projects Section
    'projects.title': 'हाम्रा परियोजनाहरू',
    'projects.subtitle': 'विभिन्न निर्माण र डिजाइन परियोजनाहरूमा हाम्रो उत्कृष्ट कामको प्रदर्शन',
    'projects.viewAll': 'सबै परियोजनाहरू हेर्नुहोस्',
    'projects.project1.title': 'आधुनिक कार्यालय कम्प्लेक्स',
    'projects.project1.location': 'बिर्तामोड, नेपाल',
    'projects.project1.description': 'समकालीन डिजाइन र स्मार्ट भवन सुविधाहरूसहितको अत्याधुनिक कार्यालय भवन।',
    'projects.project2.title': 'लक्जरी आवासीय विला',
    'projects.project2.location': 'झापा, नेपाल',
    'projects.project2.description': 'प्रिमियम भित्री सजावट र दिगो निर्माण अभ्यासहरूसहित सुरुचिपूर्ण विला डिजाइन।',
    'projects.project3.title': 'औद्योगिक गोदाम',
    'projects.project3.location': 'विराटनगर, नेपाल',
    'projects.project3.description': 'उन्नत स्टील संरचना र आधुनिक सुविधाहरूसहित ठूलो मापको गोदाम सुविधा।',

    // Testimonials Section
    'testimonials.title': 'हाम्रा ग्राहकहरूले के भन्छन्',
    'testimonials.subtitle': 'हामीसँगको उनीहरूको अनुभवको बारेमा हाम्रा सन्तुष्ट ग्राहकहरूबाट सुन्नुहोस्',
    'testimonials.review1.text': 'प्रेस्टिज डिजाइनले हाम्रो कार्यालय स्थानलाई हाम्रो अपेक्षाभन्दा बढी रूपान्तरण गर्यो। उनीहरूको विस्तारमा ध्यान र व्यावसायिक दृष्टिकोणले सम्पूर्ण प्रक्रियालाई सहज र रमाइलो बनायो।',
    'testimonials.review1.name': 'राजेश शर्मा',
    'testimonials.review1.position': 'सीईओ, टेक सोल्युसन्स लि.',
    'testimonials.review2.text': 'टोलीले हाम्रो सपनाको घरलाई हामीले कल्पना गरे जस्तै प्रदान गर्यो। गुणस्तरीय कारीगरी, समयमै सम्पन्न, र परियोजना भरि उत्कृष्ट संवाद।',
    'testimonials.review2.name': 'सुनिता देवी',
    'testimonials.review2.position': 'घर मालिक',
    'testimonials.review3.text': 'हाम्रो गोदामको लागि उत्कृष्ट फलाम संरचना काम। व्यावसायिक, भरपर्दो, र लागत प्रभावी। उनीहरूको सेवाहरूको अत्यधिक सिफारिस गर्छु।',
    'testimonials.review3.name': 'अर्जुन थापा',
    'testimonials.review3.position': 'कारखाना मालिक',

    // Team Section
    'team.title': 'हाम्रो टोली',
    'team.subtitle': 'हाम्रा सफल परियोजनाहरूको पछाडिका विशेषज्ञहरूलाई भेट्नुहोस्',
    'team.member1.name': 'मास्टर शिल्पकारहरू',
    'team.member1.position': 'निर्माण विशेषज्ञहरू',
    'team.member1.description': 'हाम्रो अनुभवी शिल्पकारहरूको टोलीले पारम्परिक र आधुनिक निर्माण प्रविधिहरूमा दशकौंको विशेषज्ञता ल्याउँछ।',
    'team.member2.name': 'डिजाइन विशेषज्ञहरू',
    'team.member2.position': 'भित्री र वास्तुकला',
    'team.member2.description': 'रचनात्मक पेशेवरहरू जसले तपाईंको दृष्टिकोणलाई अपेक्षाहरू नाघेका आश्चर्यजनक, कार्यात्मक स्थानहरूमा रूपान्तरण गर्छन्।',

    // Contact Section
    'contact.title': 'सम्पर्क गर्नुहोस्',
    'contact.subtitle': 'तपाईंको परियोजना सुरु गर्न तयार हुनुहुन्छ? आज नै हामीसँग सम्पर्क गर्नुहोस्',
    'contact.form.title': 'हामीलाई सन्देश पठाउनुहोस्',
    'contact.form.name': 'पूरा नाम',
    'contact.form.namePlaceholder': 'तपाईंको पूरा नाम प्रविष्ट गर्नुहोस्',
    'contact.form.email': 'इमेल ठेगाना',
    'contact.form.emailPlaceholder': 'तपाईंको इमेल ठेगाना प्रविष्ट गर्नुहोस्',
    'contact.form.message': 'सन्देश',
    'contact.form.messagePlaceholder': 'हामीलाई तपाईंको परियोजनाको बारेमा बताउनुहोस्...',
    'contact.form.send': 'सन्देश पठाउनुहोस्',
    'contact.info.title': 'सम्पर्कमा रहनुहोस्',
    'contact.location': 'बिर्तामोड-६, झापा, नेपाल',
    'contact.phone': '+९७७-९८००-१२३४५६',

    // Gallery
    'gallery.title': 'परियोजना ग्यालेरी',
    'gallery.subtitle': 'हाम्रा सम्पन्न परियोजनाहरू र चलिरहेका कामहरूको पोर्टफोलियो अन्वेषण गर्नुहोस्',
    'gallery.backHome': 'गृहपृष्ठमा फर्कनुहोस्',
    'gallery.filterBy': 'छान्नुहोस्:',
    'gallery.filters.all': 'सबै परियोजनाहरू',
    'gallery.filters.interior': 'भित्री डिजाइन',
    'gallery.filters.iron': 'फलाम संरचना',
    'gallery.filters.residential': 'आवासीय',
    'gallery.filters.commercial': 'व्यावसायिक',
    'gallery.noProjects': 'कुनै परियोजनाहरू फेला परेन',
    'gallery.tryDifferentFilter': 'थप परियोजनाहरू हेर्न फरक फिल्टर छान्न प्रयास गर्नुहोस्।',

    // Gallery Projects
    'gallery.projects.modern_office.title': 'आधुनिक कार्यालय भित्री सजावट',
    'gallery.projects.modern_office.location': 'बिर्तामोड, नेपाल',
    'gallery.projects.modern_office.description': 'एर्गोनोमिक फर्निचर र स्मार्ट प्रकाश समाधानहरूसहित समकालीन कार्यालय डिजाइन।',
    
    'gallery.projects.steel_structure.title': 'स्टील फ्रेम निर्माण',
    'gallery.projects.steel_structure.location': 'झापा, नेपाल',
    'gallery.projects.steel_structure.description': 'भूकम्प प्रतिरोधी डिजाइनसहित औद्योगिक भवनका लागि बलियो स्टील फ्रेमवर्क।',
    
    'gallery.projects.luxury_home.title': 'लक्जरी विला भित्री सजावट',
    'gallery.projects.luxury_home.location': 'विराटनगर, नेपाल',
    'gallery.projects.luxury_home.description': 'प्रिमियम सामग्री र परिष्कृत डिजाइन तत्वहरूसहित सुरुचिपूर्ण आवासीय भित्री सजावट।',
    
    'gallery.projects.commercial_building.title': 'व्यावसायिक कम्प्लेक्स',
    'gallery.projects.commercial_building.location': 'बिर्तामोड, नेपाल',
    'gallery.projects.commercial_building.description': 'आधुनिक सुविधाहरू र ऊर्जा-दक्ष प्रणालीहरूसहित बहुमंजिला व्यावसायिक भवन।',
    
    'gallery.projects.restaurant_design.title': 'रेस्टुरेन्ट भित्री सजावट',
    'gallery.projects.restaurant_design.location': 'झापा, नेपाल',
    'gallery.projects.restaurant_design.description': 'पारम्परिक नेपाली तत्वहरू र आधुनिक आरामसहित आरामदायक रेस्टुरेन्ट वातावरण।',
    
    'gallery.projects.warehouse.title': 'औद्योगिक गोदाम',
    'gallery.projects.warehouse.location': 'विराटनगर, नेपाल',
    'gallery.projects.warehouse.description': 'उन्नत भेन्टिलेसन र सुरक्षा प्रणालीहरूसहित ठूलो मापको भण्डारण सुविधा।',
    
    'gallery.projects.hotel_lobby.title': 'होटल लबी डिजाइन',
    'gallery.projects.hotel_lobby.location': 'बिर्तामोड, नेपाल',
    'gallery.projects.hotel_lobby.description': 'लक्जरी परिष्करण र सांस्कृतिक डिजाइन मोटिफहरूसहित स्वागत योग्य होटल प्रवेशद्वार।',
    
    'gallery.projects.factory.title': 'उत्पादन प्लान्ट',
    'gallery.projects.factory.location': 'झापा, नेपाल',
    'gallery.projects.factory.description': 'विशेष उपकरण आवास र सुरक्षा सुविधाहरूसहित औद्योगिक सुविधा निर्माण।',
    
    'gallery.projects.residential.title': 'पारिवारिक घर',
    'gallery.projects.residential.location': 'विराटनगर, नेपाल',
    'gallery.projects.residential.description': 'आधुनिक सुविधाहरू र पारम्परिक वास्तुकला तत्वहरूसहित आरामदायी पारिवारिक निवास।',

    // Footer
    'footer.description': 'नेपालको अग्रणी निर्माण कम्पनी, २००८ देखि आवासीय, व्यावसायिक र औद्योगिक परियोजनाहरूमा उत्कृष्टता प्रदान गर्दै।',
    'footer.contact': 'सम्पर्क जानकारी',
    'footer.follow': 'हामीलाई फलो गर्नुहोस्',
    'footer.social.description': 'हाम्रा पछिल्ला परियोजनाहरू र निर्माण सुझावहरूको साथ अपडेट रहनुहोस्।',
    'footer.copyright': '© २०२४ प्रेस्टिज डिजाइन बिल्डर्स एण्ड कन्स्ट्रक्सन। सबै अधिकार सुरक्षित।',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
