import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, MessageCircle, Star, BookOpen, Mic, HeartHandshake, Headset, Menu, X, LogIn } from 'lucide-react';

import logo from './assets/logo.png';
import video from './assets/sibermu-hero.mp4';
import orgImg from './assets/organisasi.jfif';
import prestasiImg from './assets/prestasi.jfif';
import layananImg from './assets/layanan.jfif';
import layananmhsImg from './assets/mahasiswi-layanan.jfif';
import kolaborasimhsImg from './assets/mahasiswa-kolaborasi.jfif';
import prestasimhsImg from './assets/mahasiswa-prestasi.jfif';
import ctaImg from './assets/cta.png';

// Komponen counter animasi untuk angka statistik
const StatCounter = ({ end, suffix = "+", label, textColor = "text-white" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div>
      <h4 className={`text-2xl md:text-3xl font-bold mb-1 ${textColor}`}>
        {count}{suffix}
      </h4>
      <p className="text-[10px] uppercase tracking-wider font-semibold opacity-80">{label}</p>
    </div>
  );
};

// Komponen accordion gambar untuk section kemahasiswaan
const KemahasiswaanAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 'org',
      title: 'Organisasi Mahasiswa',
      fullDesc: 'Penyelenggaraan tata kehidupan demokrasi dan kepemimpinan kampus. Kami memfasilitasi pembentukan serta pendampingan penuh untuk Badan Eksekutif Mahasiswa (BEM) dan Ikatan Mahasiswa Muhammadiyah (IMM) agar mahasiswa dapat mengasah jiwa kepemimpinan transformatif.',
      img: orgImg
    },
    {
      id: 'ukm',
      title: 'Unit Kegiatan Mahasiswa',
      fullDesc: 'Wadah eksplorasi minat dan bakat spesifik. Tersedia puluhan UKM digital aktif mulai dari klub pemrograman, e-sports, desain UI/UX, hingga kebudayaan virtual yang mempertemukan mahasiswa dari seluruh Indonesia.',
      img: layananmhsImg
    },
    {
      id: 'pres',
      title: 'Prestasi Mahasiswa',
      fullDesc: 'Kami mendukung penuh manajemen pembinaan kontingen lomba, pencatatan capaian karya inovasi, hingga pemberian penghargaan dan pendanaan untuk mengapresiasi prestasi gemilang mahasiswa di tingkat nasional maupun internasional.',
      img: prestasiImg
    },
    {
      id: 'lay',
      title: 'Layanan Mahasiswa',
      fullDesc: 'Pusat bantuan administrasi kesejahteraan yang responsif. Menyediakan penyaluran beasiswa, layanan konseling karir, dan bimbingan psikologi profesional untuk menjamin kenyamanan dan kesehatan mental studi mahasiswa secara berkelanjutan.',
      img: layananImg
    }
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-[650px] md:h-[550px] gap-2 md:gap-4 transition-all duration-500">
      {items.map((item, idx) => (
        <div
          key={item.id}
          onClick={() => setActiveIndex(idx)}
          className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${activeIndex === idx ? "flex-[4] md:flex-[5]" : "flex-[1]"}`}
        >
          <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === idx ? 'bg-gradient-to-t from-[#1a2c5b] via-[#1a2c5b]/60 to-transparent opacity-100' : 'bg-[#1a2c5b]/50 hover:bg-[#1a2c5b]/40'}`}></div>

          <div className={`absolute bottom-0 left-0 p-6 md:p-10 transition-all duration-700 ease-out w-full flex flex-col justify-end ${activeIndex === idx ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight drop-shadow-md">
              {item.title}
            </h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-none max-w-2xl drop-shadow-sm">
              {item.fullDesc}
            </p>
          </div>

          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${activeIndex === idx ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {/* Teks Vertikal (Desktop) */}
            <span
              className="hidden md:block text-white font-bold tracking-widest uppercase md:text-lg whitespace-nowrap drop-shadow-lg"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {item.title}
            </span>
            {/* Teks Horizontal (Mobile) */}
            <span className="md:hidden text-white font-bold tracking-widest uppercase text-xs whitespace-nowrap drop-shadow-lg px-4 text-center">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Komponen accordion teks untuk section FAQ
const FaqAccordion = () => {
  const [openId, setOpenId] = useState('q1');

  const faqs = [
    { id: 'q1', q: 'Apakah kegiatan mahasiswa 100% online?', a: 'Sebagian besar kegiatan organisasi dan AIK difasilitasi secara digital. Namun, kami juga mendukung pertemuan luring (kopdar) opsional untuk kegiatan kemahasiswaan skala regional.' },
    { id: 'q2', q: 'Bagaimana cara bergabung dengan Unit Kegiatan Mahasiswa (UKM)?', a: 'Mahasiswa dapat mendaftar UKM melalui portal terpadu kemahasiswaan. Setiap awal semester, kami mengadakan ekspo UKM virtual.' },
    { id: 'q3', q: 'Apakah ada fasilitas bimbingan karir dan beasiswa?', a: 'Ya, Biro Kemahasiswaan menyediakan layanan konseling psikologi, informasi beasiswa, dan inkubator karir yang dapat diakses secara daring.' },
    { id: 'q4', q: 'Bagaimana evaluasi untuk program Al-Islam & Kemuhammadiyahan?', a: 'Evaluasi dilakukan melalui pemahaman kajian sinkronus (webinar), penugasan mandiri, serta portofolio praktik syiar digital yang diunggah mahasiswa.' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-white shadow-sm">FAQ</span>
        <h2 className="text-3xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight">Pertanyaan seputar biro</h2>
        <p className="text-slate-500 text-base md:text-lg">
          Jawaban cepat untuk pertanyaan yang paling sering diajukan.<br className="hidden md:block" />
          Masih bingung? Hubungi <span className="font-semibold text-slate-900">humas@sibermu.ac.id</span>.
        </p>
      </div>
      <div className="flex flex-col border-t border-slate-200">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-slate-200">
            <button onClick={() => setOpenId(openId === faq.id ? null : faq.id)} className="w-full py-6 flex justify-between items-center text-left focus:outline-none">
              <span className="font-bold text-slate-900 text-base md:text-lg pr-4">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-600 leading-relaxed pr-8">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 bg-white border border-slate-200 border-dashed rounded-[2rem] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-4 md:gap-5 text-left">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a2c5b] rounded-full flex items-center justify-center text-white shrink-0">
             <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base md:text-lg mb-1">Masih punya pertanyaan?</h4>
            <p className="text-xs md:text-sm text-slate-500">Biro kami membalas dalam waktu 1x24 jam kerja.</p>
          </div>
        </div>
        <button className="w-full md:w-auto bg-[#1a2c5b] text-white px-8 py-3.5 rounded-full text-sm font-bold flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors whitespace-nowrap">
          Tanya Kami <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Layout utama halaman
export default function App() {
  const fontFamily = "'DM Sans', sans-serif";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek transisi background navbar saat discroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#f8f9fa] font-sans text-slate-900 selection:bg-[#1a2c5b] selection:text-white" style={{ fontFamily }}>

      {/* Navigasi Utama */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo SiberMu" className={`h-7 md:h-8 w-auto object-contain transition-all duration-300 ${!isScrolled && 'brightness-0 invert'}`} />
          </div>
          
          {/* Menu Desktop */}
          <div className={`hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
            <a href="#about" className={`hover:text-[#1a2c5b] transition-colors ${!isScrolled && 'hover:text-white'}`}>Profil Biro</a>
            <a href="#kemahasiswaan" className={`hover:text-[#1a2c5b] transition-colors ${!isScrolled && 'hover:text-white'}`}>Kemahasiswaan</a>
            <a href="#aik" className={`hover:text-[#1a2c5b] transition-colors ${!isScrolled && 'hover:text-white'}`}>AIK</a>
            
            {/* Tombol Login SSO (Layanan dihapus agar lebih clean) */}
            <div className="flex items-center gap-3 ml-4">
               <a href="#login" className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full border transition-all duration-300 shadow-sm hover:scale-105 ${isScrolled ? 'border-[#1a2c5b] text-[#1a2c5b] hover:bg-[#1a2c5b] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#1a2c5b]'}`}>
                 <LogIn className="w-4 h-4" /> Login SSO
               </a>
            </div>
          </div>

          {/* Tombol Menu Mobile */}
          <button 
            className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Drawer Navigasi Mobile */}
      <div className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`absolute bottom-0 inset-x-0 bg-white rounded-t-3xl p-6 pb-10 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-[#1a2c5b] uppercase tracking-widest text-xs">Menu Navigasi</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-widest text-slate-800">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#1a2c5b]" /> Profil Biro</a>
            <a href="#kemahasiswaan" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#1a2c5b]" /> Kemahasiswaan</a>
            <a href="#aik" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#1a2c5b]" /> AIK</a>
            
            {/* Tombol Login SSO Full Width di Mobile */}
            <div className="mt-4">
               <a href="#login" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#1a2c5b] text-white text-center py-4 rounded-2xl shadow-lg flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors">
                 <LogIn className="w-5 h-5" /> Login SSO
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#1a2c5b] pt-32 pb-12 px-6 md:px-12">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0d162e] via-[#1a2c5b]/60 to-[#1a2c5b]/40 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto my-auto flex flex-col items-start justify-center text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-blue-200"></span>
            <span className="text-white/90 font-medium uppercase tracking-[0.25em] text-xs drop-shadow-md">
               Biro Kemahasiswaan & AIK
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-2xl mb-6 max-w-4xl">
            Sinergi, Inovasi, <br className="hidden md:block"/> Islami.
          </h1>
          <p className="text-white/80 text-base md:text-xl max-w-xl font-light leading-relaxed drop-shadow-lg">
            Layanan terpadu untuk mengembangkan potensi, minat, bakat, dan karakter akhlakul karimah mahasiswa Universitas Siber Muhammadiyah.
          </p>
        </div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-7/12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 md:p-6 flex items-center justify-between gap-4 text-white shadow-2xl">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 mb-1">Informasi Utama</span>
              <h4 className="text-sm md:text-base font-bold">Penerimaan Mahasiswa Baru Gelombang 1 Resmi Dibuka</h4>
              <p className="text-xs text-white/70 mt-0.5">Akses pendaftaran terpadu dan beasiswa digital tahun 2026.</p>
            </div>
            <a href="#daftar" className="bg-white/20 hover:bg-white/30 transition-colors p-3 rounded-xl shrink-0 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold shadow-md">
              <Headset className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col text-left pr-6">
              <span className="text-xs font-bold">Layanan Mahasiswa</span>
              <span className="text-[10px] text-white/70 uppercase tracking-wider">Pendampingan Akademik</span>
            </div>
          </div>
        </div>
      </section>

      {/* Profil Singkat */}
      <section id="about" className="w-full max-w-[90rem] mx-auto px-6 md:px-12 py-20 md:py-28 border-b border-slate-200">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-20">
          <div className="md:w-1/2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 block">Peran Strategis</span>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight tracking-tight">
              Memberdayakan mahasiswa, menguatkan nilai-nilai keislaman di era digital.
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10">
              Biro Kemahasiswaan dan AIK SiberMu hadir sebagai katalisator pencapaian visi institusi. Melalui pembinaan organisasi, unit kegiatan, manajemen prestasi, serta pendalaman Al-Islam Kemuhammadiyahan, kami memastikan setiap mahasiswa tumbuh secara holistik meskipun dalam ekosistem siber.
            </p>
            <div className="flex flex-wrap gap-10 md:gap-14">
              <StatCounter end={10} suffix="K+" label="Mahasiswa Terlayani" textColor="text-slate-900" />
              <StatCounter end={50} suffix="+" label="Organisasi & UKM" textColor="text-slate-900" />
              <StatCounter end={98} suffix="%" label="Indeks Kepuasan" textColor="text-slate-900" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 pt-8 border-t border-slate-100">
          <div className="md:w-1/3 order-2 md:order-1">
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 leading-none tracking-tighter mb-2">100%</h3>
            <p className="text-base font-bold text-slate-900 mb-3">Ekosistem Full Digital</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pusat layanan kemahasiswaan daring yang inklusif untuk membuka potensi penuh dari mana saja di seluruh nusantara.
            </p>
          </div>

          <div className="md:w-1/3 order-1 md:order-2 h-[380px] w-full rounded-[2rem] overflow-hidden shadow-lg border border-slate-200/80">
            <img src={prestasimhsImg} alt="Layanan SiberMu" className="w-full h-full object-cover" />
          </div>

          <div className="md:w-1/3 order-3 flex flex-col justify-center">
            <p className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3 mb-5">
              Layanan ramah dan profesional berbasis teknologi informasi.
            </p>
            <div className="space-y-3 text-slate-500 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <p>Pusat bantuan akademik dan konseling daring terintegrasi.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <p>Sistem registrasi beasiswa dan sertifikasi kompetensi cepat.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <p>Pelayanan responsif 24/7 untuk seluruh kebutuhan mahasiswa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kemahasiswaan */}
      <section id="kemahasiswaan" className="w-full bg-[#f4f5f7] py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-6">
              Ruang Lingkup Kemahasiswaan
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Layanan terpadu yang didedikasikan untuk membangun iklim akademik dan non-akademik yang dinamis bagi seluruh civitas akademika.
            </p>
          </div>
          <KemahasiswaanAccordion />
        </div>
      </section>

      {/* AIK */}
      <section id="aik" className="w-full bg-white py-24 md:py-32 border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6 text-slate-900">
              Al-Islam & Kemuhammadiyahan
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Menginternalisasikan nilai-nilai keislaman dan etos kerja berkemajuan sebagai pijakan etika dalam penguasaan sains dan teknologi digital.
            </p>
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 relative group">
              <img
                src={kolaborasimhsImg}
                alt="Syiar Digital SiberMu"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              { 
                id: 'aik1', 
                title: 'Kegiatan Keagamaan', 
                icon: <Star className="w-6 h-6" />, 
                desc: "Mendorong kedisiplinan ibadah harian dan pembentukan karakter Islami secara mandiri melalui panduan materi digital terpadu." 
              },
              { 
                id: 'aik2', 
                title: 'Kajian Keislaman', 
                icon: <BookOpen className="w-6 h-6" />, 
                desc: "Pengkajian materi Al-Islam dan Kemuhammadiyahan secara asinkronus yang diintegrasikan langsung ke dalam mata kuliah wajib di sistem e-learning." 
              },
              { 
                id: 'aik3', 
                title: 'Syiar Digital', 
                icon: <Mic className="w-6 h-6" />, 
                desc: "Implementasi dakwah melalui etika bermedia sosial yang baik, literasi informasi sehat, serta tugas-tugas akademik mahasiswa." 
              },
              { 
                id: 'aik4', 
                title: 'Nilai Kemuhammadiyahan', 
                icon: <HeartHandshake className="w-6 h-6" />, 
                desc: "Internalisasi pilar akhlakul karimah, tajdid, dan etos kerja berkemajuan dalam kedisiplinan belajar di ekosistem siber." 
              }
            ].map((item) => (
              <div key={item.id} className="bg-[#f8f9fa] border border-slate-200 p-8 rounded-[2rem] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white text-[#1a2c5b] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full bg-[#f4f5f7] py-24">
        <FaqAccordion />
      </section>

      {/* Call to Action */}
      <section id="layanan" className="w-full bg-[#edf2f7] pt-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row items-end justify-between">
          <div className="w-full lg:w-7/12 py-10 lg:py-20 flex flex-col justify-center items-center text-center lg:items-start lg:text-left z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Siap untuk mengembangkan potensimu?
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              Biro Kemahasiswaan dan AIK siap mendampingi seluruh perjalanan akademik maupun non-akademikmu di Universitas Siber Muhammadiyah.
            </p>
            <a href="#daftar" className="bg-[#1a2c5b] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-900 hover:scale-105 transition-all shadow-lg flex items-center gap-3">
              Portal Layanan <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div className="w-full lg:w-5/12 flex items-end justify-center lg:justify-end relative self-end mt-10 lg:mt-0">
            <img
              src={ctaImg}
              alt="Mahasiswa SiberMu"
              className="h-[250px] sm:h-[480px] md:h-[500px] lg:h-[580px] xl:h-[620px] object-contain object-bottom block w-[110%] max-w-none lg:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0d162e] text-white/50 py-12 px-6 md:px-12">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
            <img src={logo} alt="Logo SiberMu" className="h-7 w-auto object-contain brightness-0 invert opacity-90" />
            <p className="text-xs md:text-sm leading-relaxed max-w-sm">
              Biro Kemahasiswaan dan AIK <br />
              Universitas Siber Muhammadiyah <br />
              Jl. HOS Cokroaminoto No. 17, Yogyakarta
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2 text-[10px] md:text-xs font-medium uppercase tracking-widest text-white/40 text-center md:text-right">
            <p className="text-white/70 font-bold">Dikembangkan oleh Leonando Prastiko</p>
            <p>Hak Cipta &copy; 2026 Leonp24.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}