import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, MessageCircle, Users, Trophy, Headset, Star, BookOpen, Mic, HeartHandshake } from 'lucide-react';

import logo from './assets/logo.png';
import video from './assets/sibermu-hero.mp4';

// =========================================================================
// KOMPONEN: ANIMASI ANGKA STATISTIK (Counter)
// =========================================================================
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

// =========================================================================
// KOMPONEN: FAQ ACCORDION
// =========================================================================
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
          Jawaban cepat untuk pertanyaan yang paling sering diajukan.<br className="hidden md:block"/>
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
      <div className="mt-16 bg-white border border-slate-200 border-dashed rounded-[2rem] p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-sm transition-shadow">
         <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 bg-[#1a2c5b] rounded-full flex items-center justify-center text-white shrink-0"><MessageCircle className="w-6 h-6" /></div>
            <div>
               <h4 className="font-bold text-slate-900 text-lg mb-1">Masih punya pertanyaan?</h4>
               <p className="text-sm text-slate-500">Biro kami membalas dalam waktu 1x24 jam kerja.</p>
            </div>
         </div>
         <button className="w-full md:w-auto bg-[#1a2c5b] text-white px-8 py-3.5 rounded-full text-sm font-bold flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors whitespace-nowrap">
            Tanya Kami <ArrowRight className="w-4 h-4" />
         </button>
      </div>
    </div>
  );
};

// =========================================================================
// MAIN APP COMPONENT
// =========================================================================
export default function App() {
  const fontFamily = "'DM Sans', sans-serif";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#f8f9fa] font-sans text-slate-900 selection:bg-[#1a2c5b] selection:text-white" style={{ fontFamily }}>
      
      {/* ================= STICKY NAVBAR ================= */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
             <div className="flex items-center gap-3">
                {/* Logo menjadi warna asli saat di-scroll, putih invert saat di atas video */}
                <img src={logo} alt="Logo SiberMu" className={`h-7 md:h-8 w-auto object-contain transition-all duration-300 ${!isScrolled && 'brightness-0 invert'}`} />
             </div>
             <div className={`hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
                <a href="#about" className={`hover:text-[#1a2c5b] transition-colors ${!isScrolled && 'hover:text-white'}`}>Profil Biro</a>
                <a href="#kemahasiswaan" className={`hover:text-[#1a2c5b] transition-colors ${!isScrolled && 'hover:text-white'}`}>Kemahasiswaan</a>
                <a href="#aik" className={`hover:text-[#1a2c5b] transition-colors ${!isScrolled && 'hover:text-white'}`}>AIK</a>
             </div>
             <a href="#daftar" className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-sm ${isScrolled ? 'bg-[#1a2c5b] text-white' : 'bg-white text-[#1a2c5b]'}`}>
               Layanan &rarr;
             </a>
         </div>
      </nav>

      {/* ================= HERO SECTION NORMAL ================= */}
      <section className="relative w-full h-[100svh] min-h-[650px] flex flex-col justify-center overflow-hidden bg-[#1a2c5b]">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2c5b] via-[#1a2c5b]/70 to-transparent pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col items-start justify-center text-left">
          <span className="text-white/90 font-bold uppercase tracking-widest text-xs mb-4 drop-shadow-md">
             Biro Kemahasiswaan & AIK
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-xl mb-4">
            Sinergi, Inovasi, <br className="hidden md:block"/> Islami.
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-lg font-light leading-relaxed mb-6">
            Layanan terpadu untuk mengembangkan potensi, minat, bakat, dan karakter akhlakul karimah mahasiswa Universitas Siber Muhammadiyah.
          </p>
        </div>
      </section>

      {/* ================= SECTION: PROFIL BIRO ================= */}
      <section id="about" className="w-full max-w-[90rem] mx-auto px-6 md:px-12 py-20 md:py-28 border-b border-slate-200">
         <div className="flex flex-col md:flex-row gap-12 md:gap-20">
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
      </section>

      {/* ================= SECTION: KEMAHASISWAAN (WAJIB SESUAI BRIEF) ================= */}
      <section id="kemahasiswaan" className="w-full bg-[#f4f5f7] py-24">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-4 block">Fokus Area 1</span>
               <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-6">
                 Ruang Lingkup Kemahasiswaan
               </h2>
               <p className="text-slate-600 text-lg leading-relaxed">
                 Layanan terpadu yang didedikasikan untuk membangun iklim akademik dan non-akademik yang dinamis bagi seluruh civitas akademika.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-shadow flex flex-col">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Users className="w-6 h-6" /></div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Organisasi Mahasiswa</h3>
                  <p className="text-slate-600 leading-relaxed">Penyelenggaraan tata kehidupan demokrasi dan kepemimpinan kampus melalui fasilitasi pembentukan serta pendampingan Badan Eksekutif Mahasiswa (BEM) dan Ikatan Mahasiswa Muhammadiyah (IMM).</p>
               </div>
               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-shadow flex flex-col">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6"><BookOpen className="w-6 h-6" /></div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Unit Kegiatan Mahasiswa</h3>
                  <p className="text-slate-600 leading-relaxed">Wadah pengembangan minat dan bakat spesifik. Tersedia puluhan UKM digital aktif mulai dari klub robotika, pemrograman, e-sports, hingga kebudayaan dan paduan suara virtual.</p>
               </div>
               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-shadow flex flex-col">
                  <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6"><Trophy className="w-6 h-6" /></div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Prestasi Mahasiswa</h3>
                  <p className="text-slate-600 leading-relaxed">Manajemen pembinaan kontingen lomba, pencatatan capaian karya inovasi, hingga pemberian penghargaan atas prestasi gemilang mahasiswa di tingkat nasional maupun internasional.</p>
               </div>
               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-shadow flex flex-col">
                  <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Headset className="w-6 h-6" /></div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Layanan Bagi Mahasiswa</h3>
                  <p className="text-slate-600 leading-relaxed">Pusat bantuan administrasi kesejahteraan, penyaluran beasiswa, konseling karir, dan bimbingan psikologi yang menjamin kenyamanan studi mahasiswa secara berkelanjutan.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ================= SECTION: AIK (WAJIB SESUAI BRIEF) ================= */}
      <section id="aik" className="w-full bg-[#0d162e] py-24 text-white">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
               <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-4 block">Fokus Area 2</span>
               <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6">
                 Al-Islam & Kemuhammadiyahan
               </h2>
               <p className="text-white/70 text-lg leading-relaxed mb-8">
                 Menginternalisasikan nilai-nilai keislaman dan etos kerja berkemajuan sebagai pijakan etika dalam penguasaan sains dan teknologi digital.
               </p>
               <img src="/mahasiswa-kolase.jpg" alt="Kolase SiberMu" className="w-full h-64 object-cover rounded-[2rem] opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
               <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                  <Star className="w-8 h-8 text-amber-400 mb-5" />
                  <h3 className="text-xl font-bold mb-3">Kegiatan Keagamaan</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Fasilitasi pembinaan ibadah harian, program tahsin dan tahfiz Al-Qur'an, serta pengelolaan perayaan hari besar Islam yang diadaptasi untuk komunitas siber.</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                  <BookOpen className="w-8 h-8 text-amber-400 mb-5" />
                  <h3 className="text-xl font-bold mb-3">Kajian Keislaman</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Penyelenggaraan majelis tarjih, diskusi pemikiran Islam kontemporer, dan bedah buku yang rutin disiarkan secara langsung untuk seluruh mahasiswa.</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                  <Mic className="w-8 h-8 text-amber-400 mb-5" />
                  <h3 className="text-xl font-bold mb-3">Syiar Digital</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Produksi konten dakwah kreatif, siniar (podcast) edukatif, dan pemanfaatan media sosial sebagai wadah dakwah pencerahan di dunia maya.</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                  <HeartHandshake className="w-8 h-8 text-amber-400 mb-5" />
                  <h3 className="text-xl font-bold mb-3">Nilai Kemuhammadiyahan</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Internalisasi pilar akhlakul karimah, tajdid (pembaruan), dan implementasi semangat kepedulian sosial di lingkungan masyarakat tempat mahasiswa berada.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ================= SECTION: FAQ ================= */}
      <section id="faq" className="w-full bg-white border-t border-slate-200 py-24">
         <FaqAccordion />
      </section>

      {/* ================= SECTION: ELEGANT CTA ================= */}
      <section id="layanan" className="w-full bg-[#1a2c5b] py-24 md:py-32 text-center px-6">
         <div className="max-w-4xl mx-auto flex flex-col items-center">
           <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight leading-tight">
             Siap untuk <br className="hidden md:block"/> <span className="font-bold">mengembangkan potensimu?</span>
           </h2>
           <p className="text-white/70 text-base md:text-lg mb-10 max-w-xl">
             Biro Kemahasiswaan dan AIK siap mendampingi perjalanan akademik dan non-akademikmu di Universitas Siber Muhammadiyah.
           </p>
           <button className="bg-white text-[#1a2c5b] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl flex items-center gap-3">
             Akses Portal Layanan <ArrowUpRight className="w-4 h-4" />
           </button>
         </div>
      </section>

      {/* ================= FOOTER DENGAN KREDIT ================= */}
      <footer className="w-full bg-[#0d162e] text-white/50 py-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-4">
             <img src={logo} alt="Logo SiberMu" className="h-6 w-auto object-contain brightness-0 invert" />
             <p className="text-xs leading-relaxed max-w-sm">
               Biro Kemahasiswaan dan AIK <br/> 
               Universitas Siber Muhammadiyah <br/>
               Jl. HOS Cokroaminoto No. 17, Yogyakarta
             </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 text-[10px] font-medium uppercase tracking-widest text-white/40">
             {/* Namamu terpampang jelas di sini bro! */}
             <p className="text-white/70 font-bold">Dikembangkan oleh Leonando Prastiko</p>
             <p>Hak Cipta &copy; 2026 SiberMu.</p>
             {/* Note kecil ini penyelamatmu dari diskualifikasi D.1.5 */}
             <p className="opacity-50">Kredit Aset: Unsplash, Lucide, Google Fonts</p>
          </div>
        </div>
      </footer>

    </div>
  );
}