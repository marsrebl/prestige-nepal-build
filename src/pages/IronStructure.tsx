
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, DollarSign, Zap, Hammer, Building, Wrench, CheckCircle, Star } from 'lucide-react';

const IronStructure = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Earthquake Resistance",
      description: "Steel structures are highly flexible and can withstand seismic forces, making them ideal for Nepal's geological conditions.",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Lower construction costs, faster assembly, and reduced foundation requirements make steel structures economically advantageous.",
      color: "text-green-600"
    },
    {
      icon: Zap,
      title: "Quick Construction",
      description: "Prefabricated steel components allow for rapid assembly, significantly reducing construction time and labor costs.",
      color: "text-yellow-600"
    },
    {
      icon: Hammer,
      title: "Durability",
      description: "Steel structures have exceptional longevity, resisting weather, pests, and wear better than traditional materials.",
      color: "text-purple-600"
    }
  ];

  const benefits = [
    "Superior strength-to-weight ratio",
    "Excellent resistance to seismic activity",
    "Faster construction timeline",
    "Minimal foundation requirements",
    "100% recyclable material",
    "Precise manufacturing quality",
    "Flexible design possibilities",
    "Lower long-term maintenance",
    "Fire resistant when properly treated",
    "Pest and termite proof"
  ];

  const applications = [
    {
      title: "Commercial Buildings",
      description: "Office complexes, shopping centers, and commercial facilities",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      title: "Industrial Facilities",
      description: "Warehouses, factories, and manufacturing plants",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop"
    },
    {
      title: "Residential Structures",
      description: "Modern homes and multi-story residential buildings",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop"
    }
  ];

  const whyChooseSteel = [
    {
      title: "vs. Concrete",
      points: [
        "50% faster construction time",
        "30% lighter structural weight",
        "Better earthquake performance",
        "No curing time required"
      ]
    },
    {
      title: "vs. Wood",
      points: [
        "Fire resistant properties",
        "Termite and pest proof",
        "Higher load bearing capacity",
        "Longer structural lifespan"
      ]
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
      <section className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Building size={64} className="text-amber-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Iron Structure Construction</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Build stronger, faster, and safer with our expert iron structure construction services. 
              Engineered for Nepal's unique challenges, designed for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Steel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Steel Over Traditional Materials?</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Superior performance in every aspect</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Steel: The Smart Choice for Nepal</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                In a country prone to earthquakes and extreme weather conditions, steel structures offer 
                unmatched safety, durability, and performance. Our iron structure construction services 
                provide the perfect solution for modern building challenges in Nepal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Steel's flexibility allows it to bend without breaking during seismic events, making it 
                the ideal choice for earthquake-resistant construction. Combined with faster build times 
                and cost effectiveness, steel structures represent the future of construction in Nepal.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Steel Structure Construction"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseSteel.map((comparison, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Steel {comparison.title}</h3>
                <div className="space-y-3">
                  {comparison.points.map((point, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle size={20} className="text-green-600 mr-3" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Advantages of Steel Construction</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Engineered for excellence in every aspect</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${advantage.color} bg-gray-100 rounded-full mb-4`}>
                  <advantage.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Benefits of Steel Structure Construction</h2>
            <p className="text-xl text-amber-100">Comprehensive advantages for your construction project</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Star size={20} className="text-amber-300 mr-3 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Steel Structure Applications</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Versatile solutions for every construction need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iron Framework Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Steel Framework Excellence</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Precision engineering for Nepal's construction industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop"
                alt="Steel Framework Construction"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">Steel Frame Assembly</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop"
                alt="Modern Steel Building"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">Modern Steel Architecture</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop"
                alt="High-rise Steel Construction"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">High-rise Steel Structure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Construction Process</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">From design to completion - every step perfected</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Design & Planning", icon: Building },
              { step: "02", title: "Fabrication", icon: Hammer },
              { step: "03", title: "Assembly", icon: Wrench },
              { step: "04", title: "Quality Check", icon: Shield }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <div className="mb-4">
                  <process.icon size={32} className="text-amber-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600">Professional execution at every stage</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build with Steel?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Experience the advantages of steel structure construction. Contact us today to discuss 
            your project and discover how we can build your vision with strength, speed, and precision.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/#contact"
              className="inline-block bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              to="/"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-800 transition-colors"
            >
              View Our Projects
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
          <p className="text-gray-400">Building Nepal's Future with Steel Excellence</p>
        </div>
      </footer>
    </div>
  );
};

export default IronStructure;
