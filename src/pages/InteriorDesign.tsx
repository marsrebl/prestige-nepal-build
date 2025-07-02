
import React, { useState } from 'react';
import { ArrowLeft, Palette, Home, Lightbulb, CheckCircle, XCircle, Facebook, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteriorDesign = () => {
  const [activeTab, setActiveTab] = useState('modern');

  const styles = {
    modern: {
      title: "Modern Design",
      description: "Clean lines, minimalist approach with contemporary Nepali touches",
      features: ["Open floor plans", "Natural lighting", "Smart home integration", "Sustainable materials"]
    },
    traditional: {
      title: "Traditional Nepali",
      description: "Authentic Nepali architecture with carved wooden elements",
      features: ["Hand-carved wooden details", "Traditional brass fixtures", "Natural stone elements", "Cultural motifs"]
    },
    minimalist: {
      title: "Minimalist",
      description: "Less is more - functional beauty with maximum impact",
      features: ["Clutter-free spaces", "Neutral color palettes", "Multi-functional furniture", "Hidden storage solutions"]
    }
  };

  const myths = [
    {
      myth: "Interior design is only about decoration",
      reality: "It's about creating functional, beautiful spaces that improve quality of life"
    },
    {
      myth: "Good design is always expensive",
      reality: "Smart design can be achieved on any budget with proper planning"
    },
    {
      myth: "You need to follow trends exactly",
      reality: "The best interiors blend personal style with timeless principles"
    }
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
            <h1 className="text-xl font-bold text-gray-800">Interior Design Services</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Interior Design Excellence</h1>
          <p className="text-xl mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            "Spaces that Reflect You"
          </p>
          <div className="flex justify-center">
            <Palette size={64} className="text-amber-200 animate-fade-in" style={{animationDelay: '0.6s'}} />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Creating Beautiful, Functional Spaces</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Prestige Design and Builders, we believe that great interior design goes beyond aesthetics. 
              We create spaces that tell your story, reflect your personality, and enhance your daily life. 
              Our designs blend modern functionality with Nepal's rich cultural heritage.
            </p>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Project Gallery</h2>

    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[
        { title: 'Modern TV Showcase', file: '../images/int1.jpg' },
        { title: 'Modern Kitchen', file: '../images/int2.jpg' },
        { title: 'Modern Kitchen', file: '../images/int3.jpg' },
        { title: 'Attractive Living room', file: '../images/int4.jpg' },
        { title: 'Modern Kitchen', file: '../images/int5.jpg' },
        { title: 'Modern Celling', file: '../images/int6.jpg' },
        { title: 'TV Showcase', file: '../images/int7.jpg' },
        { title: 'Modern Celling', file: '../images/int8.jpg' },
        { title: 'Modern celling', file: '../images/int9.jpg' },
        { title: 'Attractive Stairs', file: '../images/int10.jpg' },
        { title: 'Modern showcase', file: '../images/int11.jpg' },
        { title: 'Modern Bedroom', file: '../images/int12.jpg' },
        { title: 'Modern Bedroom', file: '../images/int13.jpg' },
        { title: 'Modern Kitchen', file: '../images/int14.jpg' },
        { title: 'Modern wardrobe', file: '../images/int15.jpg' },
        { title: 'Modern TV showcase', file: '../images/int16.jpg' },
        { title: 'Modern Interior', file: '../images/int17.jpg' },
        { title: 'Attrative Lobby', file: '../images/int18.jpg' },
        { title: 'Modern Kitchen', file: '../images/int19.jpg' },
        // Add more entries here
      ].map((img, index) => (
        <div key={index} className="overflow-hidden rounded-xl shadow-md bg-gray-100">
          <img
            src={`/images/${img.file}`}
            alt={img.title}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-800">{img.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Design Styles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Design Styles</h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              {Object.keys(styles).map((style) => (
                <button
                  key={style}
                  onClick={() => setActiveTab(style)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === style
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-amber-600'
                  }`}
                >
                  {styles[style].title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{styles[activeTab].title}</h3>
                <p className="text-gray-600 mb-6">{styles[activeTab].description}</p>
                <ul className="space-y-3">
                  {styles[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-amber-600 mr-3" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src={`https://images.unsplash.com/photo-${
                    activeTab === 'modern' ? '1586023492125-27b2c045efd7' :
                    activeTab === 'traditional' ? '1493663284031-064e1d1a3b73' :
                    '1560448204-e02f11c3d0e2'
                  }?w=600&h=400&fit=crop`}
                  alt={styles[activeTab].title}
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Interior Design Do's and Don'ts</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-green-50 rounded-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <CheckCircle className="mr-3" size={28} />
                Do's
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-green-800">Plan your space layout before buying furniture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-green-800">Invest in good lighting - natural and artificial</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-green-800">Choose a cohesive color palette throughout</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-green-800">Mix textures and materials for depth</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <XCircle className="mr-3" size={28} />
                Don'ts
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-red-800">Don't overcrowd spaces with too much furniture</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-red-800">Avoid using too many bold patterns together</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-red-800">Don't ignore the importance of scale and proportion</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-red-800">Don't forget about storage and functionality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Myths vs Reality */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Common Design Myths vs Reality</h2>
          
          <div className="space-y-8">
            {myths.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h4 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                      <XCircle className="mr-2" size={20} />
                      Myth
                    </h4>
                    <p className="text-red-700">{item.myth}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                      <CheckCircle className="mr-2" size={20} />
                      Reality
                    </h4>
                    <p className="text-green-700">{item.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8">Let's create an interior that truly reflects your personality and lifestyle.</p>
          <Link
            to="/#contact"
            className="inline-block bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
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

export default InteriorDesign;
