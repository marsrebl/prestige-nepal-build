
import React from 'react';
import { ArrowLeft, Building, Shield, Zap, DollarSign, CheckCircle, Facebook, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const IronStructure = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Earthquake Resistance",
      description: "Superior seismic performance crucial for Nepal's geological conditions"
    },
    {
      icon: Zap,
      title: "Speed of Construction",
      description: "Faster assembly and installation compared to traditional methods"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Lower long-term costs with minimal maintenance requirements"
    },
    {
      icon: Building,
      title: "Design Flexibility",
      description: "Adaptable to various architectural styles and requirements"
    }
  ];

  const benefits = [
    "High strength-to-weight ratio",
    "Excellent durability and longevity",
    "Fire resistant with proper treatment",
    "Sustainable and recyclable material",
    "Precision engineering and quality control",
    "Wide span capabilities without columns"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center text-amber-600 hover:text-amber-700 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Iron Structure Construction</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Iron Structure Excellence</h1>
          <p className="text-xl mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            "Building Strong Foundations for Nepal's Future"
          </p>
          <div className="flex justify-center">
            <Building size={64} className="text-amber-400 animate-fade-in" style={{animationDelay: '0.6s'}} />
          </div>
        </div>
      </section>

      {/* Why Choose Steel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Steel Over Concrete or Wood?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In Nepal's unique seismic environment, steel structures offer unmatched advantages for safety, 
              durability, and cost-effectiveness. Here's why steel is the smart choice for modern construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center">
                    <advantage.icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{advantage.title}</h3>
                <p className="text-gray-600 text-center">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steel Framework Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Steel Frameworks in Nepal</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop"
                  alt="Steel Construction Framework"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Industrial Complex Framework</h3>
                <p className="text-gray-600">Heavy-duty steel framework designed for industrial applications in Nepal's challenging terrain.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
                  alt="Modern Steel Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Commercial Steel Structure</h3>
                <p className="text-gray-600">Modern commercial building with earthquake-resistant steel framework and contemporary design.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop"
                  alt="Steel Construction Site"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Precision Steel Assembly</h3>
                <p className="text-gray-600">Expert craftsmanship in steel structure assembly ensuring quality and safety standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Benefits of Steel Construction</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CheckCircle className="text-green-600 mr-4 flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="Steel Construction Benefits"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Steel for Nepal */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Perfect for Nepal's Conditions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nepal's unique geographical and seismic conditions make steel construction the ideal choice for modern buildings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Seismic Safety</h3>
              <p className="text-gray-600">
                Superior earthquake resistance crucial for Nepal's high seismic activity zones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Weather Resilience</h3>
              <p className="text-gray-600">
                Excellent performance in monsoons, temperature variations, and harsh mountain conditions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainable Choice</h3>
              <p className="text-gray-600">
                Environmentally friendly, recyclable, and supports Nepal's sustainable development goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Build with Steel?</h2>
          <p className="text-xl mb-8">Experience the strength, safety, and efficiency of modern steel construction in Nepal.</p>
          <Link
            to="/#contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Quote Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-amber-400">PRESTIGE</span>
                <span className="block text-lg">DESIGN & BUILDERS</span>
              </h3>
              <p className="text-gray-400 mb-4">Building Nepal's Future with Excellence</p>
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
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://tiktok.com/@prestigedesignbuilders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 p-3 rounded-full transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Prestige Design and Builders. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IronStructure;
