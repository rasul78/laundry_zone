import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Locations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-blue-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
        
        .logo-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 2rem;
          background: linear-gradient(135deg, #2E5EFF 0%, #FF6B35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 3rem;
          line-height: 1.2;
        }

        .glass-effect {
          background: rgba(37, 150, 190);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
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

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .pulse-dot {
          animation: pulse 2s ease-in-out infinite;
        }

        .kazakhstan-map {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        .map-marker {
          position: absolute;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .map-marker:hover {
          transform: scale(1.2);
        }

        .almaty-marker {
          top: 70%;
          left: 80%;
        }
      `}</style>

      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-8 h-6 border-4 border-white rounded-md"></div>
              </div>
              <div>
                <div className="logo-text">Laundryzone</div>
                <div className="text-xs text-orange-600 font-semibold">Наши адреса</div>
              </div>
            </div>
            <nav className="hidden md:flex gap-8 items-center">
              <a href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Главная</a>
              <a href="/locations" className="text-orange-600 font-bold">Филиалы и Адреса</a>
              <a href="/equipment" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Оборудование</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <MapPin className="w-10 h-10" />
            </div>
            <h1 className="section-title text-white mb-6">Наши филиалы</h1>
            <p className="text-xl text-orange-100 mb-8">
              Местонахождение адресного поля службы по Казахстану
            </p>
          </div>
        </div>
              {/* Map Section */}
   {/* Kazakhstan Map */}
<div className="kazakhstan-map animate-slideUp delay-200 relative">

  {/* Map image */}
  <img
    src="/images/map.png"
    alt="Карта Казахстана"
    className="w-full h-auto drop-shadow-2xl rounded-3xl"
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
    <span className="absolute w-10 h-10 bg-orange-500 rounded-full animate-ping opacity-70"></span>
    <span className="relative w-5 h-5 bg-orange-600 border-4 border-white rounded-full shadow-lg"></span>
  </div>

  {/* Map Legend */}
  <div className="mt-8 flex justify-center">
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full px-6 py-3 shadow-lg">
      <div className="w-4 h-4 bg-orange-600 rounded-full animate-pulse"></div>
      <span className="font-bold text-gray-900">
        Алматы — наш филиал
      </span>
    </div>
  </div>

</div>

      </section>

      {/* Branches Grid Section */}
<section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16 animate-slideUp">
      <h2 className="section-title text-gray-900 mb-4">Филиалы Laundryzone</h2>
      <p className="text-xl text-gray-600">4 филиала в Алматы для вашего удобства</p>
    </div>

    {/* Branches Cards - 2x2 Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Branch 1 */}
      <div className="card-hover bg-white rounded-3xl overflow-hidden shadow-xl animate-slideUp">
        <div className="relative h-64">
          <img 
            src="/images/philial1.jpg" 
            alt="Филиал №1 - Центр Алматы" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            ОТКРЫТО
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Филиал №1</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Адрес:</p>
                <p className="text-sm">г. Алматы, ул. Ашимова, 1/5 блок 2</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Часы работы:</p>
                <p className="text-sm">08:00 - 24:00 (Ежедневно)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Телефон:</p>
                <p className="text-sm">+7 (707) 909 25 28</p>
              </div>
            </div>
          </div>
          <a 
            href="https://2gis.kz/almaty/geo/70000001110459101" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all block text-center"
          >
            2 ГИС
          </a>
        </div>
      </div>

      {/* Branch 2 */}
      <div className="card-hover bg-white rounded-3xl overflow-hidden shadow-xl animate-slideUp delay-100">
        <div className="relative h-64">
          <img 
            src="/images/philial2.jpg" 
            alt="Филиал №2" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            ОТКРЫТО
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Филиал №2</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Адрес:</p>
                <p className="text-sm">ТД Таугуль, ул. Пятницкого, 15/16</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Часы работы:</p>
                <p className="text-sm">08:00 - 24:00 (Ежедневно)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Телефон:</p>
                <p className="text-sm">+7 (707) 909 25 28</p>
              </div>
            </div>
          </div>
          <a 
            href="https://2gis.kz/almaty/geo/70000001110333840" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all block text-center"
          >
            2 ГИС
          </a>
        </div>
      </div>

      {/* Branch 3 */}
      <div className="card-hover bg-white rounded-3xl overflow-hidden shadow-xl animate-slideUp delay-200">
        <div className="relative h-64">
          <img 
            src="/images/philial3.jpg" 
            alt="Филиал №3" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            ОТКРЫТО
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Филиал №3</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Адрес:</p>
                <p className="text-sm">г. Алматы, ул. Саина, 16а</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Часы работы:</p>
                <p className="text-sm">08:00 - 24:00 (Ежедневно)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Телефон:</p>
                <p className="text-sm">+7 (707) 909 25 28</p>
              </div>
            </div>
          </div>
          <a 
            href="https://2gis.kz/almaty/geo/70000001103587913" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all block text-center"
          >
            2 ГИС
          </a>
        </div>
      </div>

      {/* Branch 4 */}
      <div className="card-hover bg-white rounded-3xl overflow-hidden shadow-xl animate-slideUp delay-300">
        <div className="relative h-64">
          <img 
            src="/images/philial4.jpg" 
            alt="Филиал №4" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            ОТКРЫТО
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Филиал №4</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Адрес:</p>
                <p className="text-sm">Magnum Cash&Carry, ул. Радостовца, 292</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Часы работы:</p>
                <p className="text-sm">08:00 - 24:00 (Ежедневно)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Телефон:</p>
                <p className="text-sm">+7 (707) 909 25 28</p>
              </div>
            </div>
          </div>
          <a 
            href="https://2gis.kz/almaty/geo/70000001110586927" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all block text-center"
          >
            2 ГИС
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Location Details */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-hover bg-white rounded-3xl p-12 shadow-2xl animate-slideUp">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-4">Филиал в Алматы</h2>
                <p className="text-xl text-gray-600">Современная прачечная самообслуживания</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Address Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Адрес</h3>
                      <p className="text-gray-700 leading-relaxed">
                        г. Алматы, Казахстан<br />
                        улица Примерная, дом 123<br />
                        район Медеуский
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Часы работы</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Понедельник - Воскресенье<br />
                        08:00 - 24:00<br />
                        <span className="text-green-600 font-semibold">Работаем каждый день!</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Контакты</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Телефон: +7 (707) 909 25 28<br />
                        Email: almaty@laundryzone.kz<br />
                        WhatsApp: +7 (707) 909 25 28
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши преимущества</h3>
                  <ul className="space-y-4">
                    {[
                      'Современное оборудование',
                      'Удобная парковка',
                      'Зона ожидания с Wi-Fi',
                      'Система безопасности 24/7',
                      'Автоматическая оплата',
                      'Консультации персонала',
                      'Детергенты в продаже',
                      'Чистота и комфорт'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map Button */}
              <div className="mt-12 text-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Navigation className="w-6 h-6" />
                  Открыть в Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-5 border-3 border-white rounded-md"></div>
                </div>
                <div className="text-2xl font-bold">Laundryzone</div>
              </div>
              <p className="text-gray-400">
                Первая в Казахстане прачечная самообслуживания
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-orange-400 transition-colors">Главная</a></li>
                <li><a href="/locations" className="text-orange-400 font-semibold">Филиалы и Адреса</a></li>
                <li><a href="/equipment" className="text-gray-400 hover:text-orange-400 transition-colors">Оборудование</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
            <li>📍 Алматы, Казахстан</li>
                <li>📞 +7 (707) 909 25 28</li>
                <li>✉️ laundryzonekazakhstan@gmail.com</li>
                <li>⏰ 08:00-00:00 Открыто</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2019-2026 Laundryzone. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}