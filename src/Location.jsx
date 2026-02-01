import React, { useState } from 'react';
import { MapPin, Clock, Phone, Menu, X } from 'lucide-react';

export default function Locations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-blue-50">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
        
        .logo-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          background: linear-gradient(135deg, #2E5EFF 0%, #FF6B35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (min-width: 768px) {
          .logo-text {
            font-size: 2rem;
          }
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 2rem;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem;
          }
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .pulse-dot {
          animation: pulse 2s ease-in-out infinite;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 280px;
          background: white;
          box-shadow: -4px 0 20px rgba(0,0,0,0.2);
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          z-index: 100;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
          z-index: 99;
        }

        .menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }
      `}</style>

      {/* Menu Overlay */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <img 
              src="/images/logo.png" 
              alt="Laundryzone Logo" 
              className="h-8 w-auto object-contain"
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <a 
              href="/" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-3 px-4 hover:bg-orange-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </a>
            <a 
              href="/locations" 
              className="text-orange-600 font-bold py-3 px-4 bg-orange-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Филиалы и Адреса
            </a>
            <a 
              href="/equipment" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-3 px-4 hover:bg-orange-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Оборудование
            </a>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/images/logo.jpg" 
                alt="Laundryzone Logo" 
                className="h-20 sm:h-30 w-auto object-contain"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <a href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Главная</a>
              <a href="/locations" className="text-orange-600 font-bold">Филиалы и Адреса</a>
              <a href="/equipment" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Оборудование</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h1 className="section-title text-white mb-4 sm:mb-6">Наши филиалы</h1>
            <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 px-4">
              Местонахождение адресного поля службы по Казахстану
            </p>
          </div>
        </div>

        {/* Kazakhstan Map */}
        <div className="animate-slideUp delay-200 relative px-4 sm:px-6 max-w-4xl mx-auto">
          {/* Map image */}
          <img
            src="/images/map.png"
            alt="Карта Казахстана"
            className="w-full h-auto drop-shadow-2xl rounded-xl sm:rounded-3xl"
          />

          {/* Almaty marker */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              top: "63%",
              left: "77%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full animate-ping opacity-70"></span>
            <span className="relative w-4 h-4 sm:w-5 sm:h-5 bg-orange-600 border-2 sm:border-4 border-white rounded-full shadow-lg"></span>
          </div>

          {/* Map Legend */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-600 rounded-full animate-pulse"></div>
              <span className="font-bold text-gray-900 text-sm sm:text-base">
                Алматы — наш филиал
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-slideUp">
            <h2 className="section-title text-gray-900 mb-3 sm:mb-4 px-4">Филиалы Laundryzone</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">4 филиала в Алматы для вашего удобства</p>
          </div>

          {/* Branches Cards - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Branch 1 */}
            <div className="card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl animate-slideUp">
              <div className="relative h-48 sm:h-64">
                <img 
                  src="/images/philial4.jpg" 
                  alt="Филиал №1 - Центр Алматы" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                  ОТКРЫТО
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Филиал №1</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-700">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Адрес:</p>
                      <p className="text-xs sm:text-sm">г. Алматы, ул. Ашимова, 1/5 блок 2</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Часы работы:</p>
                      <p className="text-xs sm:text-sm">08:00 - 24:00 (Ежедневно)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Телефон:</p>
                      <p className="text-xs sm:text-sm">+7 (707) 909 25 28</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://2gis.kz/almaty/geo/70000001110459101" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-2.5 sm:py-3 rounded-xl font-bold hover:shadow-lg transition-all block text-center text-sm sm:text-base"
                >
                  2 ГИС
                </a>
              </div>
            </div>

            {/* Branch 2 */}
            <div className="card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl animate-slideUp delay-100">
              <div className="relative h-48 sm:h-64">
                <img 
                  src="/images/philial1.jpg" 
                  alt="Филиал №2" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                  ОТКРЫТО
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Филиал №2</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-700">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Адрес:</p>
                      <p className="text-xs sm:text-sm">ТД Таугуль, ул. Пятницкого, 15/16</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Часы работы:</p>
                      <p className="text-xs sm:text-sm">08:00 - 24:00 (Ежедневно)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Телефон:</p>
                      <p className="text-xs sm:text-sm">+7 (707) 909 25 28</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://2gis.kz/almaty/geo/70000001110333840" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-2.5 sm:py-3 rounded-xl font-bold hover:shadow-lg transition-all block text-center text-sm sm:text-base"
                >
                  2 ГИС
                </a>
              </div>
            </div>

            {/* Branch 3 */}
            <div className="card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl animate-slideUp delay-200">
              <div className="relative h-48 sm:h-64">
                <img 
                  src="/images/philial2.jpg" 
                  alt="Филиал №3" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                  ОТКРЫТО
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Филиал №3</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-700">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Адрес:</p>
                      <p className="text-xs sm:text-sm">г. Алматы, ул. Саина, 16а</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Часы работы:</p>
                      <p className="text-xs sm:text-sm">08:00 - 24:00 (Ежедневно)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Телефон:</p>
                      <p className="text-xs sm:text-sm">+7 (707) 909 25 28</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://2gis.kz/almaty/geo/70000001103587913" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-2.5 sm:py-3 rounded-xl font-bold hover:shadow-lg transition-all block text-center text-sm sm:text-base"
                >
                  2 ГИС
                </a>
              </div>
            </div>

            {/* Branch 4 */}
            <div className="card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl animate-slideUp delay-300">
              <div className="relative h-48 sm:h-64">
                <img 
                  src="/images/philial2.jpg" 
                  alt="Филиал №4" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                  ОТКРЫТО
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Филиал №4</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-700">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Адрес:</p>
                      <p className="text-xs sm:text-sm">Magnum Cash&Carry, ул. Радостовца, 292</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Часы работы:</p>
                      <p className="text-xs sm:text-sm">08:00 - 24:00 (Ежедневно)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Телефон:</p>
                      <p className="text-xs sm:text-sm">+7 (707) 909 25 28</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://2gis.kz/almaty/geo/70000001110586927" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-2.5 sm:py-3 rounded-xl font-bold hover:shadow-lg transition-all block text-center text-sm sm:text-base"
                >
                  2 ГИС
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-hover bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl animate-slideUp">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 sm:mb-4">Филиал в Алматы</h2>
                <p className="text-lg sm:text-xl text-gray-600">Современная прачечная самообслуживания</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Address Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Адрес</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        г. Алматы, Казахстан<br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Часы работы</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Понедельник - Воскресенье<br />
                        08:00 - 24:00<br />
                        <span className="text-green-600 font-semibold">Работаем каждый день!</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Контакты</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Телефон: +7 (707) 909 25 28<br />
                        Email: laundryzonekazakhstan@gmail.com<br />
                        WhatsApp: +7 (707) 909 25 28
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Наши преимущества</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      'Современное оборудование',
                      'Удобная парковка',
                      'Система безопасности 24/7',
                      'Консультации персонала',
                      'Детергенты в продаже',
                      'Чистота и комфорт'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm sm:text-base">✓</span>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img 
                  src="/images/logo.jpg" 
                  alt="Laundryzone Logo" 
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Первая в Казахстане прачечная самообслуживания
              </p>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm sm:text-base text-gray-400 hover:text-orange-400 transition-colors">Главная</a></li>
                <li><a href="/locations" className="text-sm sm:text-base text-orange-400 font-semibold">Филиалы и Адреса</a></li>
                <li><a href="/equipment" className="text-sm sm:text-base text-gray-400 hover:text-orange-400 transition-colors">Оборудование</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>📍 Алматы, Казахстан</li>
                <li>📞 +7 (707) 909 25 28</li>
                <li>✉️ laundryzonekazakhstan@gmail.com</li>
                <li>⏰ 08:00-00:00 Открыто</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
            <p>&copy; 2019-2026 Laundryzone. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}