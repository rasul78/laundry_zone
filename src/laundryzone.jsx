import React, { useState } from 'react';
import { ChevronDown, Clock, MapPin, Phone, Mail, Loader2, Check, Store, User, Timer, Wind, ShoppingBag } from 'lucide-react';
// Импортируем иконки из react-icons
import { GiClothes } from 'react-icons/gi';
import { FaBed, FaShoePrints, FaCouch } from 'react-icons/fa';
import { MdLocalLaundryService } from 'react-icons/md';
import { RiTShirtLine } from 'react-icons/ri';
import { BiPackage } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { IoBedOutline } from 'react-icons/io5';

export default function LaundryZone() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const FORM_ID = '1FAIpQLSdVFfSTKyzyCtIEm4FVqS-RVhgcjAMXieBzOQkZLaNT5f5MEw';
    const ENTRY_NAME = 'entry.36369091';
    const ENTRY_PHONE = 'entry.656409197';
    const ENTRY_EMAIL = 'entry.2087289980';
    const ENTRY_MESSAGE = 'entry.898663109';

    const formUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

    const params = new URLSearchParams();
    params.append(ENTRY_NAME, formData.name);
    params.append(ENTRY_PHONE, formData.phone);
    params.append(ENTRY_EMAIL, formData.email || '');
    params.append(ENTRY_MESSAGE, formData.message || '');

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
      });

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 5000);

    } catch (error) {
      console.error('❌ Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Как рассчитать вес стирки белья?",
      answer: "Очень просто! Загружаете вместимости машинки. Принцип такой же, как у домашней стиральки - не трамбуя, чтобы белье свободно крутилось."
    },
    {
      question: "Машинки чистые после других клиентов?",
      answer: "Да. После каждой стирки машинки проходят автоматическую очистку. При желании можно дополнительно включить режим очистки барабана."
    },
    {
      question: "Нужно ли приносить порошок?",
      answer: "Не обязательно. У нас на месте продаются качественные порошки и капсулы. Также можно принести свой."
    },
    {
      question: "Необходимо ли ожидать завершения стирки?",
      answer: "Не обязательно. Вы можете: • подождать в зоне ожидания • выйти по своим делам • вернуться к окончанию стирки"
    },
    {
      question: "Вы гладите вещи?",
      answer: "Нет. Laundry Zone — это прачечная самообслуживания. Но после профессиональной сушки многие вещи выходят ровными и мягкими."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-blue-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #2E5EFF 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-gradient::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }

        .hero-gradient::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(46,94,255,0.3) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .btn-primary {
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(255,107,53,0.4);
        }

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

        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
{/* Header */}
      <header className="bg-gradient-to-r from-white via-blue-50/30 to-white fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="9" y="11" width="18" height="14" rx="2.5" stroke="white" strokeWidth="2.5" fill="none"/>
                    <circle cx="13" cy="16" r="1.5" fill="white"/>
                    <circle cx="18" cy="16" r="1.5" fill="white"/>
                    <circle cx="23" cy="16" r="1.5" fill="white"/>
                    <path d="M13 20h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-lg sm:text-2xl font-bold tracking-tight">
                  <span className="text-blue-700 drop-shadow-sm">Laundry</span>
                  <span className="text-orange-500 drop-shadow-sm">zone</span>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-semibold tracking-wide">Прачечная</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-1 items-center bg-white/60 backdrop-blur-md rounded-full px-2 py-2 shadow-md border border-gray-100">
              <a href="#home" className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                Главная
                <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity"></span>
              </a>
              <a href="#about" className="px-6 py-2.5 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300">
                О нас
              </a>
              <a href="#services" className="px-6 py-2.5 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300">
                Услуги
              </a>
              <a href="#pricing" className="px-6 py-2.5 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300">
                Цены
              </a>
              <a href="/locations" className="px-6 py-2.5 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300">
                Филиалы
              </a>
              <a href="/equipment" className="px-6 py-2.5 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300">
                Оборудование
              </a>
              <a href="#faq" className="px-6 py-2.5 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300">
                FAQ
              </a>
              <a href="#contact" className="px-6 py-2.5 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300">
                Контакты
              </a>
            </nav>

            {/* Desktop Contact Button */}
            <a href="#contact" className="hidden lg:block relative group ml-6">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transform group-hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Связаться
              </div>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all z-[60] relative"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-white z-[45] shadow-2xl animate-slideIn">
            <nav className="flex flex-col p-4 space-y-2 h-full overflow-y-auto">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-center shadow-lg"
              >
                Главная
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 rounded-xl text-gray-700 font-medium hover:bg-blue-50 transition-all text-center"
              >
                О нас
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 rounded-xl text-gray-700 font-medium hover:bg-blue-50 transition-all text-center"
              >
                Услуги
              </a>
              <a 
                href="#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 rounded-xl text-gray-700 font-medium hover:bg-blue-50 transition-all text-center"
              >
                Цены
              </a>
              <a 
                href="/locations" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 rounded-xl text-gray-700 font-medium hover:bg-blue-50 transition-all text-center"
              >
                Филиалы
              </a>
              <a 
                href="/equipment" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 rounded-xl text-gray-700 font-medium hover:bg-blue-50 transition-all text-center"
              >
                Оборудование
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 rounded-xl text-gray-700 font-medium hover:bg-blue-50 transition-all text-center"
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 rounded-xl text-white bg-gradient-to-r from-orange-500 to-orange-600 font-bold text-center shadow-lg"
              >
                Связаться
              </a>
            </nav>
          </div>
        </>
      )}

      {/* Spacer для компенсации fixed header */}
      <div className="h-[72px]"></div>

      {/* Hero Section */}
      <section id="home" className="hero-gradient py-12 sm:py-16 md:py-24 relative min-h-[calc(100vh-72px)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 min-h-[calc(100vh-120px)] md:min-h-0">
            <div className="text-white animate-slideUp">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Clock className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Открыто 08:00-00:00
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-shadow mb-4 sm:mb-6 leading-tight">
                Прачечная<br />
                самообслуживания
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Компания, оказывающая услуги прачечной самообслуживания мирового уровня по всей стране
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#pricing" className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-2xl hover:bg-gray-50 transition-all hover:scale-105 text-center text-sm sm:text-base">
                  Информация о ценах
                </a>
                <a href="/locations" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white/30 transition-all text-center text-sm sm:text-base">
                  Где мы находимся
                </a>
              </div>
            </div>
            <div className="animate-scaleIn delay-200 hidden md:block">
              <div className="glass-effect rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="w-full aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl flex items-center justify-center p-4">
                  <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">Laundryzone</span>
                </div>
                <div className="mt-4 sm:mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sm:p-6 rounded-2xl">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-white/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm opacity-90">Работаем</div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold">Каждый день 08:00 - 24:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-orange-100 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-blue-800 font-bold mb-4 sm:mb-6 text-sm sm:text-base">
              с 2025 года
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
              Домашняя машинка не справляется с объемом?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2">
              Laundry Zone в Алматы - профессиональные машинки 20-30кг. Стирка и сушка всего за 1 час
            </p>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                { number: '4', label: 'филиала в Алматы', delay: 'delay-100' },
                { number: '', label: '', delay: 'delay-200', isPrice: true },
                { number: '10K+', label: 'Довольных клиентов', delay: 'delay-300' }
              ].map((stat, idx) => (
                <div key={idx} className={`card-hover bg-gradient-to-br from-blue-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg animate-slideUp ${stat.delay} flex flex-col items-center justify-center`}>
                  {stat.isPrice ? (
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                        Стирка
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-2 sm:mb-4">
                        от 3000₸
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                        Сушка
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
                        от 3000₸
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                        {stat.number}
                      </div>
                      <div className="text-sm sm:text-base text-gray-700 font-semibold text-center">{stat.label}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

   <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slideUp">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 sm:mb-4 leading-tight">Наши услуги</h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600">Обязательно посетите филиалы LAUNDRYZONE</p>
    </div>
    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
      {[
        {
          title: 'Как это работает?',
          icon: Store,
          description: 'Постирайте, высушите и очистите!',
          features: [
            { text: 'Пришли', icon: User },
            { text: 'Загрузили вещи', icon: BiPackage },
            { text: 'Постирали - 30 минут', icon: Timer },
            { text: 'Высушили — 30–40 минут', icon: Wind },
            { text: 'Забрали чистые вещи', icon: ShoppingBag }
          ],
          delay: 'delay-100'
        },
        {
           title: 'Что можно стирать?',
          icon: MdLocalLaundryService,
          description: 'Профессиональная стирка любых вещей',
          features: [
            { text: 'повседневная одежда', icon: RiTShirtLine },
            { text: 'одеяла', icon: FaBed },
            { text: 'пледы', icon: FaCouch },              // ← ИЗМЕНЕНО
            { text: 'подушки', icon: IoBedOutline },        // ← ИЗМЕНЕНО
            { text: 'куртки', icon: GiClothes },
            { text: 'кроссовки', icon: FaShoePrints },
            { text: 'шторы', icon: AiOutlineHome },
            { text: 'тюли', icon: AiOutlineHome },
            { text: 'большие объёмы до 30 кг', icon: BiPackage }
          ],
          delay: 'delay-200'
        },
      ].map((service, idx) => (
        <div key={idx} className={`card-hover bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl animate-slideUp ${service.delay}`}>
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
            <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">{service.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
          <ul className="space-y-2 sm:space-y-3">
            {service.features.map((feature, fidx) => (
              <li key={fidx} className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base text-gray-700">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Pricing Section with Price List Images */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slideUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 sm:mb-4 leading-tight px-2">Информация о стоимости услуги</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Все виды услуг в прачечной по сниженным ценам</p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Прайс-лист 1 - Русский */}
              <div className="card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl animate-slideUp delay-100">
                <img 
                  src="/images/price-list_rus.png" 
                  alt="Прайс-лист на русском языке"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full aspect-[3/4] bg-gradient-to-br from-purple-100 to-blue-100 flex-col items-center justify-center p-6 sm:p-8">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">📋</div>
                  <p className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Прайс-лист</p>
                  <p className="text-sm sm:text-base text-gray-600 text-center">Русский язык</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 text-center">
                    Загрузите IMG_8382.PNG в /public/images/
                  </p>
                </div>
              </div>

              {/* Прайс-лист 2 - Казахский */}
              <div className="card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl animate-slideUp delay-200">
                <img 
                  src="/images/price-list_kaz.png" 
                  alt="Прайс-лист на казахском языке"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full aspect-[3/4] bg-gradient-to-br from-blue-100 to-orange-100 flex-col items-center justify-center p-6 sm:p-8">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">📋</div>
                  <p className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Бағалар тізімі</p>
                  <p className="text-sm sm:text-base text-gray-600 text-center">Казахский язык</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 text-center">
                    Загрузите IMG_8383.PNG в /public/images/
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slideUp">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
              <span className="text-3xl sm:text-4xl">❓</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 sm:mb-4 leading-tight">Вопросы и ответы</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Ответы на ваши вопросы</p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`card-hover bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden animate-slideUp delay-${idx + 1}00`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900 pr-2">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-orange-600 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base text-gray-700 leading-relaxed animate-slideUp">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФИКСИРОВАННЫЕ Социальные кнопки - Telegram и Instagram */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 sm:gap-4">
        {/* Telegram */}
        <a
          href="https://t.me/laundryzonekz"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#229ED9] rounded-full flex items-center justify-center 
                     shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,158,217,0.6)]"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/laundryzone.kz?igsh=MTZwdXpqZ3k3emk4bw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#FFB000] via-[#FF008E] to-[#8E24AA] 
                     rounded-full flex items-center justify-center shadow-2xl hover:scale-110 
                     transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,142,0.6)]"
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6 sm:w-7 sm:h-7"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Левая сторона - Контактная информация */}
              <div className="animate-slideUp">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white text-shadow leading-tight">Связаться с нами</h2>
                <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
                  Свяжитесь с нами для получения дополнительной информации или оставьте заявку
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg mb-1">Адрес</div>
                      <div className="text-sm sm:text-base text-blue-100">Алматы, Казахстан</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg mb-1">Телефон</div>
                      <a 
                        href="tel:+77079092528" 
                        className="text-sm sm:text-base text-blue-100 hover:text-white transition-colors"
                      >
                        +7 (707) 909 25 28
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg mb-1">Email</div>
                      <a 
                        href="mailto:info@laundryzone.kz" 
                        className="text-sm sm:text-base text-blue-100 hover:text-white transition-colors break-all"
                      >
                        info@laundryzone.kz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Правая сторона - Форма */}
              <div className="glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl animate-scaleIn delay-200">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                      Имя <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-900 text-sm sm:text-base"
                      placeholder="Ваше имя"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-900 text-sm sm:text-base"
                      placeholder="+7 (XXX) XXX-XX-XX"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Сообщение</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none text-gray-900 text-sm sm:text-base"
                      placeholder="Ваше сообщение..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                        Отправить сообщение
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-100 border-2 border-green-500 text-green-800 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-3 animate-slideUp text-sm sm:text-base">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="font-semibold">Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border-2 border-red-500 text-red-800 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-3 animate-slideUp text-sm sm:text-base">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="font-semibold">Ошибка отправки. Пожалуйста, попробуйте позже или свяжитесь по телефону.</span>
                    </div>
                  )}
                </form>
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
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <div className="w-5 h-4 sm:w-6 sm:h-5 border-3 border-white rounded-md"></div>
                </div>
                <div className="text-xl sm:text-2xl font-bold">Laundryzone</div>
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
                <li>📍 Алматы, Казахстан</li>
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