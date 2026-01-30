import React from 'react';
import { Settings, Zap, Shield, ThermometerSun } from 'lucide-react';

export default function Equipment() {
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
          background: rgba(255, 255, 255, 0.7);
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

        .rotate-slow {
          animation: rotate 20s linear infinite;
        }

        .equipment-placeholder {
          background: linear-gradient(135deg, #E8F4F8 0%, #F5F5F5 100%);
          border: 3px dashed #CBD5E0;
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
                <div className="text-xs text-orange-600 font-semibold">Оборудование</div>
              </div>
            </div>
            <nav className="hidden md:flex gap-8 items-center">
              <a href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Главная</a>
              <a href="/locations" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Филиалы и Адреса</a>
              <a href="/equipment" className="text-orange-600 font-bold">Оборудование</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Settings className="w-10 h-10 rotate-slow" />
            </div>
            <h1 className="section-title text-white mb-6">Оборудование</h1>
            <p className="text-xl text-green-100 mb-8">
              Самое современное оборудование для обеспечения профессиональных результатов коммерции в ванной комнате
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <h2 className="section-title text-gray-900 mb-8">Стиральная машина</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Наш специализированный сервис, стиральная машина и передовые технологии для уборки
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Placeholder cards for equipment images */}
            {[
              { title: 'Стиральная машина 1', capacity: '30 кг' },
              { title: 'Стиральная машина 2', capacity: '20 кг' },
              { title: 'Сушильная машина 1', capacity: '25 кг' },
              { title: 'Сушильная машина 2', capacity: '25 кг' }
            ].map((item, idx) => (
              <div key={idx} className={`card-hover bg-white rounded-3xl overflow-hidden shadow-xl animate-slideUp delay-${idx}00`}>
                <div className="equipment-placeholder aspect-square flex items-center justify-center p-8">
                  <div className="text-center">
                    <Settings className="w-20 h-20 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Фото оборудования</p>
                    <p className="text-sm text-gray-400 mt-2">Администратор добавит изображение</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-orange-600 font-semibold">
                    <Zap className="w-5 h-5" />
                    <span>Вместимость: {item.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-blue-100 border-2 border-blue-400 rounded-2xl px-6 py-4 max-w-2xl">
              <p className="text-blue-900 font-semibold">
                📸 Администратор: Добавьте реальные фотографии оборудования, заменив placeholder'ы в коде
              </p>
              <p className="text-blue-800 text-sm mt-2">
                Рекомендуемый формат: JPG или PNG, размер: 800x800px (квадрат)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slideUp">
              <h2 className="section-title text-gray-900 mb-4">Преимущества нашего оборудования</h2>
              <p className="text-xl text-gray-600">Технологии мирового класса</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: 'Энергоэффективность',
                  description: 'Современные машины потребляют минимум электроэнергии и воды, экономя ваши средства',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: 'Безопасность',
                  description: 'Все оборудование сертифицировано и проходит регулярное техническое обслуживание',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: <ThermometerSun className="w-12 h-12" />,
                  title: 'Разные режимы',
                  description: 'Множество программ стирки и сушки для разных типов тканей и загрязнений',
                  color: 'from-red-500 to-pink-500'
                }
              ].map((feature, idx) => (
                <div key={idx} className={`card-hover bg-white rounded-3xl p-8 shadow-xl animate-slideUp delay-${idx + 1}00`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-hover bg-white rounded-3xl p-12 shadow-2xl animate-slideUp">
              <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Технические характеристики</h2>
              
              <div className="space-y-6">
                {/* Washing Machines */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Стиральные машины</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Машина 30 кг:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Вместимость: 30 кг</li>
                        <li>• Режимы: горячая/холодная вода</li>
                        <li>• Время цикла: 35-45 минут</li>
                        <li>• Энергопотребление: класс A++</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Машина 20 кг:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Вместимость: 20 кг</li>
                        <li>• Режимы: горячая/холодная вода</li>
                        <li>• Время цикла: 30-40 минут</li>
                        <li>• Энергопотребление: класс A++</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dryers */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">Сушильные машины</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Сушка 25 кг:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Вместимость: 25 кг</li>
                        <li>• Режимы: деликатный/стандартный</li>
                        <li>• Время: 20-30 минут</li>
                        <li>• Температура: регулируемая</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Особенности:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Система контроля влажности</li>
                        <li>• Защита от перегрева</li>
                        <li>• Бережная сушка</li>
                        <li>• Быстрый цикл</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Special Equipment */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Специализированное оборудование</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• <strong>Машина для обуви:</strong> Бережная стирка и сушка обуви (1-6 пар)</p>
                    <p>• <strong>Система дезинфекции:</strong> УФ-обработка для дополнительной чистоты</p>
                    <p>• <strong>Весы:</strong> Точное взвешивание белья перед стиркой</p>
                    <p>• <strong>Автоматы:</strong> Продажа моющих средств и кондиционеров</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 shadow-2xl">
              <Settings className="w-16 h-16 mx-auto mb-6 rotate-slow" />
              <h2 className="text-4xl font-black mb-6">Техническое обслуживание</h2>
              <p className="text-xl text-white/90 mb-8">
                Все наше оборудование проходит регулярное профилактическое обслуживание и чистку.<br />
                Мы гарантируем исправность и чистоту каждой машины.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <p className="font-bold text-2xl mb-2">Ежедневно</p>
                  <p className="text-sm">Чистка и дезинфекция</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <p className="font-bold text-2xl mb-2">Еженедельно</p>
                  <p className="text-sm">Проверка систем</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <p className="font-bold text-2xl mb-2">Ежемесячно</p>
                  <p className="text-sm">Полное ТО</p>
                </div>
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
                <li><a href="/locations" className="text-gray-400 hover:text-orange-400 transition-colors">Филиалы и Адреса</a></li>
                <li><a href="/equipment" className="text-orange-400 font-semibold">Оборудование</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Алматы, Казахстан</li>
                <li>📞 +7 (XXX) XXX-XX-XX</li>
                <li>✉️ info@laundryzone.kz</li>
                <li>⏰ 08:00 - 24:00</li>
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