
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, Palette, Home as HomeIcon, Star } from 'lucide-react';

const InteriorDesign = () => {
  const designStyles = [
    {
      name: "Modern Minimalist",
      description: "Clean lines, neutral colors, and functional spaces that emphasize simplicity and elegance.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      features: ["Open spaces", "Minimal furniture", "Natural light"]
    },
    {
      name: "Traditional Nepali",
      description: "Rich cultural elements, warm woods, and intricate carvings that celebrate Nepal's heritage.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      features: ["Carved woodwork", "Traditional patterns", "Warm colors"]
    },
    {
      name: "Contemporary Fusion",
      description: "Perfect blend of modern functionality with traditional Nepali aesthetic elements.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      features: ["Mixed materials", "Cultural accents", "Modern comfort"]
    }
  ];

  const dosDonts = [
    {
      type: "do",
      title: "Plan for Natural Light",
      description: "Maximize natural light to create bright, welcoming spaces that feel larger and more inviting."
    },
    {
      type: "do",
      title: "Choose Quality Materials",
      description: "Invest in durable, high-quality materials that will stand the test of time and daily use."
    },
    {
      type: "do",
      title: "Consider Functionality",
      description: "Design with purpose - every element should serve both aesthetic and practical functions."
    },
    {
      type: "dont",
      title: "Overcrowd Spaces",
      description: "Avoid cramming too much furniture or decor into a room - less is often more effective."
    },
    {
      type: "dont",
      title: "Ignore Scale & Proportion",
      description: "Don't choose furniture that's too large or small for your space - proper scaling is crucial."
    },
    {
      type: "dont",
      title: "Follow Trends Blindly",
      description: "Don't sacrifice your personal style for fleeting trends - create timeless, personal spaces."
    }
  ];

  const myths = [
    {
      myth: "Interior design is only about decoration",
      reality: "Interior design involves space planning, functionality, safety, and creating environments that enhance quality of life."
    },
    {
      myth: "Good design is always expensive",
      reality: "Smart design choices and creative solutions can achieve beautiful results on any budget."
    },
    {
      myth: "You need to redesign everything at once",
      reality: "Interior design can be done in phases, allowing you to spread costs and make thoughtful decisions over time."
    },
    {
      myth: "Small spaces can't be stylish",
      reality: "Small spaces offer unique opportunities for creative, efficient design that can be incredibly stylish and functional."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-amber-600 hover:text-amber-700 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">
              <span className="text-amber-600">PRESTIGE</span> DESIGN & BUILDERS
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Palette size={64} className="text-amber-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Interior Design Excellence</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your spaces into beautiful, functional environments that reflect your personality 
              and enhance your lifestyle. Our expert designers blend creativity with practicality to 
              create interiors that inspire and delight.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Interior Design?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Interior design is the art and science of enhancing interior spaces to create healthier, 
                more aesthetically pleasing environments. It involves the strategic planning and design 
                of interior spaces, considering factors like functionality, safety, and the well-being 
                of occupants.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Prestige Design and Builders, we approach interior design as a holistic discipline 
                that combines creativity with technical knowledge to solve problems and improve quality 
                of life through thoughtful space planning and design.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">500+</div>
                  <div className="text-gray-600 text-sm">Spaces Designed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">98%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                alt="Beautiful Interior Design"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Interior Design Styles</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Discover the perfect style for your space</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designStyles.map((style, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{style.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{style.description}</p>
                  <div className="space-y-2">
                    {style.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star size={16} className="text-amber-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Slogans */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Spaces That Inspire</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Lightbulb size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">"Spaces that Reflect You"</h3>
              <p className="text-amber-100">Every design tells a story - let us help tell yours</p>
            </div>
            <div className="space-y-4">
              <HomeIcon size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">"Home is Where Design Lives"</h3>
              <p className="text-amber-100">Creating environments that nurture and inspire</p>
            </div>
            <div className="space-y-4">
              <Palette size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">"Design with Purpose"</h3>
              <p className="text-amber-100">Beautiful spaces that work as hard as they look</p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Interior Design Do's & Don'ts</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Essential guidelines for successful interior design</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-6 flex items-center">
                <CheckCircle size={24} className="mr-2" />
                Do's
              </h3>
              <div className="space-y-4">
                {dosDonts.filter(item => item.type === 'do').map((item, index) => (
                  <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
                <XCircle size={24} className="mr-2" />
                Don'ts
              </h3>
              <div className="space-y-4">
                {dosDonts.filter(item => item.type === 'dont').map((item, index) => (
                  <div key={index} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myths vs Reality */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Interior Design: Myths vs Reality</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Debunking common misconceptions about interior design</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {myths.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center">
                    <XCircle size={20} className="mr-2" />
                    Myth
                  </h3>
                  <p className="text-gray-700 italic">"{item.myth}"</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2 flex items-center">
                    <CheckCircle size={20} className="mr-2" />
                    Reality
                  </h3>
                  <p className="text-gray-700">{item.reality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Let our expert designers help you create the interior of your dreams. 
            Contact us today for a consultation and bring your vision to life.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/#contact"
              className="inline-block bg-white text-amber-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-amber-400">PRESTIGE</span> DESIGN & BUILDERS
          </h3>
          <p className="text-gray-400">Creating Beautiful Interiors Across Nepal</p>
        </div>
      </footer>
    </div>
  );
};

export default InteriorDesign;
