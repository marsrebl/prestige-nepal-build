
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      category: 'interior',
      image: '/images/int1.jpg',
      title: t('gallery.projects.modern_office.title'),
      location: t('gallery.projects.modern_office.location'),
      description: t('gallery.projects.modern_office.description')
    },
    {
      id: 2,
      category: 'iron',
      image: '/images/int2.jpg',
      title: t('gallery.projects.steel_structure.title'),
      location: t('gallery.projects.steel_structure.location'),
      description: t('gallery.projects.steel_structure.description')
    },
    {
      id: 3,
      category: 'interior',
      image: '/images/int3.jpg',
      title: t('gallery.projects.luxury_home.title'),
      location: t('gallery.projects.luxury_home.location'),
      description: t('gallery.projects.luxury_home.description')
    },
    {
      id: 4,
      category: 'iron',
      image: '/images/int4.jpg',
      title: t('gallery.projects.commercial_building.title'),
      location: t('gallery.projects.commercial_building.location'),
      description: t('gallery.projects.commercial_building.description')
    },
    {
      id: 5,
      category: 'interior',
      image: '/images/int5.jpg',
      title: t('gallery.projects.restaurant_design.title'),
      location: t('gallery.projects.restaurant_design.location'),
      description: t('gallery.projects.restaurant_design.description')
    },
    {
      id: 6,
      category: 'iron',
      image: '/images/int6.jpg',
      title: t('gallery.projects.warehouse.title'),
      location: t('gallery.projects.warehouse.location'),
      description: t('gallery.projects.warehouse.description')
    },
    {
      id: 7,
      category: 'interior',
      image: '/images/int7.jpg',
      title: t('gallery.projects.hotel_lobby.title'),
      location: t('gallery.projects.hotel_lobby.location'),
      description: t('gallery.projects.hotel_lobby.description')
    },
    {
      id: 8,
      category: 'iron',
      image: '/images/int8.jpg',
      title: t('gallery.projects.factory.title'),
      location: t('gallery.projects.factory.location'),
      description: t('gallery.projects.factory.description')
    },
    {
      id: 9,
      category: 'interior',
      image: '/images/int9.jpg',
      title: t('gallery.projects.residential.title'),
      location: t('gallery.projects.residential.location'),
      description: t('gallery.projects.residential.description')
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: t('gallery.filters.all') },
    { id: 'interior', label: t('gallery.filters.interior') },
    { id: 'iron', label: t('gallery.filters.iron') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center text-amber-600 hover:text-amber-700 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                {t('gallery.backHome')}
              </Link>
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-800">
                <span className="text-amber-600">{t('hero.title')}</span>
                <span className="block text-sm font-medium text-gray-600 leading-tight">{t('hero.subtitle')}</span>
              </h1>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('gallery.title')}
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center text-gray-600 mr-4">
              <Filter size={20} className="mr-2" />
              <span className="font-medium">{t('gallery.filterBy')}</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === 'interior' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {project.category === 'interior' ? t('gallery.filters.interior') : t('gallery.filters.iron')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-amber-600 font-medium mb-3">{project.location}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {t('gallery.noProjects')}
              </h3>
              <p className="text-gray-500">
                {t('gallery.tryDifferentFilter')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-amber-400">{t('hero.title')}</span>
                <span className="block text-lg">{t('hero.subtitle')}</span>
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                {t('footer.description')}
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-gray-300">{t('contact.location')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300">{t('contact.phone')}</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.follow')}</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/prestigedesignbuilders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
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
                {t('footer.social.description')}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
