import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, MapPin, Users, Home, ArrowRight, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Our Team' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">
                <span className="text-amber-600">PRESTIGE</span>
                <span className="block text-sm font-medium text-gray-600 leading-tight">DESIGN & BUILDERS</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-amber-600 border-b-2 border-amber-600'
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/int3.jpg')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-amber-400">PRESTIGE</span>
            <span className="block text-3xl md:text-4xl mt-2">DESIGN & BUILDERS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Crafting Excellence in Interior Design & Iron Structure Construction
          </p>
          <p className="text-lg mb-10 text-gray-300 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Building Nepal's Future with Innovation and Precision
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg animate-fade-in"
            style={{animationDelay: '0.9s'}}
          >
            Let's Talk
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Building Dreams, Creating Legacies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Prestige Design and Builders, we are committed to transforming spaces and structures 
                across Nepal with our expertise in <strong>Interior Design</strong> and <strong>Iron Structure Construction</strong>. 
                Our mission is to deliver exceptional quality while honoring the rich architectural heritage of Nepal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in the construction industry, we specialize in creating modern, 
                earthquake-resistant structures that blend seamlessly with Nepal's unique landscape and culture. 
                From residential interiors to commercial iron frameworks, we bring innovation to every project.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/int4.jpg"
                alt="Modern Nepali Architecture"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Excellence in Design and Construction</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Interior Design Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
                  alt="Interior Design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Interior Design</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your spaces with our expert interior design services. We blend modern aesthetics 
                  with traditional Nepali elements to create unique, functional, and beautiful interiors.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>• Residential & Commercial Design</li>
                  <li>• Traditional Nepali Interiors</li>
                  <li>• Modern & Minimalist Styles</li>
                  <li>• Space Planning & Optimization</li>
                </ul>
                <Link
                  to="/interior-design"
                  className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Iron Structure Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=600&h=400&fit=crop"
                  alt="Iron Structure Construction"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Iron Structure Construction</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Build strong, durable, and earthquake-resistant structures with our specialized iron 
                  construction expertise. Perfect for Nepal's seismic conditions.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>• Earthquake Resistant Design</li>
                  <li>• Industrial & Commercial Buildings</li>
                  <li>• Prefabricated Structures</li>
                  <li>• Cost-Effective Solutions</li>
                </ul>
                <Link
                  to="/iron-structure"
                  className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Showcasing Excellence Across Nepal</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
                  alt="Modern Office Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Corporate Office Complex</h3>
                <p className="text-gray-600 mb-3">Kathmandu, Nepal</p>
                <p className="text-gray-600 text-sm">Modern office space with traditional Nepali architectural elements and earthquake-resistant iron structure.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
                  alt="Luxury Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Residential Interior</h3>
                <p className="text-gray-600 mb-3">Pokhara, Nepal</p>
                <p className="text-gray-600 text-sm">Elegant interior design blending modern comfort with traditional Nepali craftsmanship.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
                  alt="High-tech Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">High-Tech Industrial Facility</h3>
                <p className="text-gray-600 mb-3">Birtamode, Nepal</p>
                <p className="text-gray-600 text-sm">State-of-the-art industrial building with advanced iron framework and modern design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced Styling */}
      <section id="team" className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Meet the Experts Behind Our Success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-amber-100">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Users size={48} className="text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">JC MANBIR RAJBANSI</h3>
                  <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
                    Managing Director
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    With over 15 years of experience in construction and design, JC Manbir leads our team 
                    with vision and expertise in delivering exceptional projects across Nepal.
                  </p>
                  <div className="mt-6 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-amber-100">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Home size={48} className="text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">KRISHNA KHATIWADA</h3>
                  <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
                    Senior Designer
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Krishna brings creativity and technical expertise to every interior design project, 
                    specializing in blending modern aesthetics with traditional Nepali elements.
                  </p>
                  <div className="mt-6 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Let's Build Something Amazing Together</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-amber-600 mr-3" size={20} />
                    <span className="text-gray-600">Birtamode, Nepal</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-amber-600 mr-3" size={20} />
                    <span className="text-gray-600">+977-9800-123456</span>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <p>Google Map of Birtamode, Nepal</p>
                    <p className="text-sm">(Interactive map would be embedded here)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-amber-400">PRESTIGE</span>
                <span className="block text-lg">DESIGN & BUILDERS</span>
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Building Nepal's Future with Excellence. We specialize in Interior Design and Iron Structure Construction, 
                creating spaces that blend modern innovation with traditional Nepali heritage.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="text-amber-400 mr-3" size={18} />
                  <span className="text-gray-300">Birtamode, Nepal</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-amber-400 mr-3" size={18} />
                  <span className="text-gray-300">+977-9800-123456</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/prestigedesignbuilders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://tiktok.com/@prestigedesignbuilders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Stay updated with our latest projects and construction insights
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Prestige Design and Builders. All rights reserved. | Building Excellence Since 2009
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
