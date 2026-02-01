import React, { useState } from 'react';
import { Settings, Zap, Shield, ThermometerSun, Menu, X } from 'lucide-react';

export default function Equipment() {
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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .rotate-slow {
          animation: rotate 20s linear infinite;
        }

        .equipment-placeholder {
          background: linear-gradient(135deg, #E8F4F8 0%, #F5F5F5 100%);
          border: 3px dashed #CBD5E0;
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
              src="/images/logo.jpg" 
              alt="Laundryzone Logo" 
              className="h-25 sm:h-40 w-auto object-contain"
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
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-3 px-4 hover:bg-orange-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Филиалы и Адреса
            </a>
            <a 
              href="/equipment" 
              className="text-orange-600 font-bold py-3 px-4 bg-orange-50 rounded-lg"
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
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <a href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Главная</a>
              <a href="/locations" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Филиалы и Адреса</a>
              <a href="/equipment" className="text-orange-600 font-bold">Оборудование</a>
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
              <Settings className="w-8 h-8 sm:w-10 sm:h-10 rotate-slow" />
            </div>
            <h1 className="section-title text-white mb-4 sm:mb-6 px-4">Оборудование</h1>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 px-4">
              Самое современное оборудование для обеспечения профессиональных результатов коммерции в ванной комнате
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Intro */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <h2 className="section-title text-gray-900 mb-6 sm:mb-8 px-4">Стиральная машина</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 px-4">
              Наш специализированный сервис, стиральная машина и передовые технологии для уборки
            </p>
          </div>
        </div>
      </section>

  {/* Equipment Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Equipment cards with real images */}
            {[
              { 
                title: 'Стиральная машина 1', 
                capacity: '30 кг',
                image: '/images/washer1.png',
                alt: 'Стиральная машина 30 кг'
              },
              { 
                title: 'Стиральная машина 2', 
                capacity: '20 кг',
                image: '/images/washer2.png',
                alt: 'Стиральная машина 20 кг'
              },
              { 
                title: 'Сушильная машина 1', 
                capacity: '25 кг',
                image: '/images/driver1.jpeg',
                alt: 'Сушильная машина 25 кг'
              },
              { 
                title: 'Сушильная машина 2', 
                capacity: '25 кг',
                image: '/images/driver2.jpeg',
                alt: 'Сушильная машина 25 кг'
              }
            ].map((item, idx) => (
              <div key={idx} className={`card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl animate-slideUp delay-${idx}00`}>
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                    <div className="text-center">
                      <Settings className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 text-gray-400" />
                      <p className="text-sm sm:text-base text-gray-500 font-semibold">Фото оборудования</p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-2">Загрузите {item.image}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm sm:text-base">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Вместимость: {item.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Features Section */}
<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-30">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16 animate-slideUp">
        <div className="inline-block mb-4">
        </div>
        <h2 className="section-title text-gray-900 mb-3 sm:mb-4 px-4">
          Преимущества нашего оборудования
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 px-4">
          Технологии мирового класса для вашего комфорта
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12" />,
            title: 'Энергоэффективность',
            description: 'Современные машины потребляют минимум электроэнергии и воды, экономя ваши средства',
            color: 'from-yellow-400 to-orange-500',
            bgColor: 'from-yellow-50 to-orange-50',
            shadowColor: 'shadow-yellow-200/50'
          },
          {
            icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
            title: 'Безопасность',
            description: 'Все оборудование сертифицировано и проходит регулярное техническое обслуживание',
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'from-blue-50 to-indigo-50',
            shadowColor: 'shadow-blue-200/50'
          },
          {
            icon: <ThermometerSun className="w-10 h-10 sm:w-12 sm:h-12" />,
            title: 'Разные режимы',
            description: 'Множество программ стирки и сушки для разных типов тканей и загрязнений',
            color: 'from-red-500 to-pink-600',
            bgColor: 'from-red-50 to-pink-50',
            shadowColor: 'shadow-pink-200/50'
          }
        ].map((feature, idx) => (
          <div 
            key={idx} 
            className={`group card-hover bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl ${feature.shadowColor} transition-all duration-300 animate-slideUp delay-${idx + 1}00 border border-gray-100 hover:border-transparent relative overflow-hidden`}
          >
            {/* Subtle background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}></div>
            
            <div className="relative z-10">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${feature.color} transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Decorative corner element */}
            <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<style jsx>{`
  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`}</style>

      {/* Technical Specs */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-hover bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl animate-slideUp">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">Технические характеристики</h2>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Washing Machines */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Стиральные машины</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Машина 30 кг:</p>
                      <ul className="space-y-1 text-gray-700 text-xs sm:text-sm">
                        <li>• Вместимость: 30 кг</li>
                        <li>• Режимы: горячая/холодная вода</li>
                        <li>• Время цикла: 35-45 минут</li>
                        <li>• Энергопотребление: класс A++</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Машина 20 кг:</p>
                      <ul className="space-y-1 text-gray-700 text-xs sm:text-sm">
                        <li>• Вместимость: 20 кг</li>
                        <li>• Режимы: горячая/холодная вода</li>
                        <li>• Время цикла: 30-40 минут</li>
                        <li>• Энергопотребление: класс A++</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dryers */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 sm:mb-4">Сушильные машины</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Сушка 25 кг:</p>
                      <ul className="space-y-1 text-gray-700 text-xs sm:text-sm">
                        <li>• Вместимость: 25 кг</li>
                        <li>• Время: 20-30 минут</li>
                        <li>• Температура: регулируемая</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Особенности:</p>
                      <ul className="space-y-1 text-gray-700 text-xs sm:text-sm">
                        <li>• Система контроля влажности</li>
                        <li>• Защита от перегрева</li>
                        <li>• Бережная сушка</li>
                        <li>• Быстрый цикл</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Special Equipment */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-3 sm:mb-4">Специализированное оборудование</h3>
                  <div className="space-y-2 text-gray-700 text-xs sm:text-sm">
                    <p>• <strong>Машина для обуви:</strong> Бережная стирка и сушка обуви (1-6 пар)</p>
                    <p>• <strong>Система дезинфекции:</strong> УФ-обработка для дополнительной чистоты</p>
                    <p>• <strong>Автоматы:</strong> Продажа моющих средств и кондиционеров</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl">
              <Settings className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rotate-slow" />
              <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">Техническое обслуживание</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-4">
                Все наше оборудование проходит регулярное профилактическое обслуживание и чистку.<br className="hidden sm:block" />
                Мы гарантируем исправность и чистоту каждой машины.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <p className="font-bold text-xl sm:text-2xl mb-1 sm:mb-2">Ежедневно</p>
                  <p className="text-xs sm:text-sm">Чистка и дезинфекция</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <p className="font-bold text-xl sm:text-2xl mb-1 sm:mb-2">Еженедельно</p>
                  <p className="text-xs sm:text-sm">Проверка систем</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <p className="font-bold text-xl sm:text-2xl mb-1 sm:mb-2">Ежемесячно</p>
                  <p className="text-xs sm:text-sm">Полное ТО</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img 
                  src="/images/logo.png" 
                  alt="Laundryzone Logo" 
                  className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 w-auto object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Первая в Казахстане прачечная самообслуживания
              </p>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Навигация</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <li><a href="/" className="text-gray-400 hover:text-orange-400 transition-colors">Главная</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">О нас</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Услуги</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-orange-400 transition-colors">Цены</a></li>
                <li><a href="/locations" className="text-gray-400 hover:text-orange-400 transition-colors">Филиалы</a></li>
                <li><a href="/equipment" className="text-gray-400 hover:text-orange-400 transition-colors">Оборудование</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-orange-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Контакты</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-400">
                <li>📞 +7 (707) 909 25 28</li>
                <li className="break-all">✉️ laundryzonekazakhstan@gmail.com</li>
                <li>⏰ 08:00-00:00 Открыто</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2019-2026 Laundryzone. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}