import React, { useState, useEffect } from 'react';
import { Download, Facebook, Youtube, Instagram } from 'lucide-react';

const DownloadsPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setScrollPosition(currentScroll);
      setNavVisible(currentScroll < lastScroll || currentScroll < 50);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
      e.preventDefault();
  
      // Scroll to bottom after short delay
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    };
    
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollPosition > 50 
          ? 'bg-black/90 backdrop-blur-sm' 
          : 'bg-transparent'
        } ${
          navVisible 
            ? 'transform translate-y-0' 
            : 'transform -translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-light tracking-wide">Ali Abouelazz</h1>
          </div>
          <div className="flex gap-12 text-sm font-light tracking-wider">
          <a href="/home" className="hover:text-[#9F8E6D] transition-colors duration-300">ACCUEIL</a>
            <a href="/educationExperience" className="hover:text-[#9F8E6D] transition-colors duration-300">EDUCATION ET EXPERIENCES</a>
            <a href="/downloadsPage" className="hover:text-[#9F8E6D] transition-colors duration-300">CV+PORTFOLIO TECHNIQUE</a>
            <a href="/competencesPage" className="hover:text-[#9F8E6D] transition-colors duration-300">COMPÉTENCES</a>
            <a href="/loisirs" className="hover:text-[#9F8E6D] transition-colors duration-300">LOISIRS</a>
            <a href='#'  onClick={handleContactClick} className="hover:text-[#9F8E6D] transition-colors duration-300">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Video Banner */}
      <div className="w-full h-[120vh] relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/src/images-videos/23.mp4" type="video/mp4" />
            {/* Fallback image in case video doesn't load */}
            <img
              src="/api/placeholder/2400/800"
              alt="Background video fallback"
              className="w-full h-full object-cover"
            />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
        </div>

        {/* Downloads Content */}
        <div className="relative h-full flex items-center justify-center px-24 pt-15">
          <div className="w-full max-w-4xl">
            <h2 className="text-4xl font-light mb-12 text-white mt-16">Téléchargements</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/10 border border-white/20 rounded-lg p-8 flex flex-col items-center">
                <h3 className="text-2xl mb-6">Mon CV</h3>
                <p className="text-gray-300 mb-8 text-center">
                  Consultez mon parcours professionnel et académique détaillé
                </p>
                <a 
                  href="./src/downloads/cv.pdf" 
                  download 
                  className="flex items-center gap-2 bg-[#9F8E6D] px-8 py-3 hover:bg-[#8F7E5D] transition-colors duration-300 text-white/90 rounded-md"
                >
                  <Download className="w-5 h-5" />
                  Télécharger CV
                </a>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-lg p-8 flex flex-col items-center">
                <h3 className="text-2xl mb-6">Portfolio Technique</h3>
                <p className="text-gray-300 mb-8 text-center">
                  Explorez mes projets techniques et réalisations détaillées
                </p>
                <a 
                  href="./src/downloads/portfolio-technique.pdf" 
                  download 
                  className="flex items-center gap-2 bg-[#9F8E6D] px-8 py-3 hover:bg-[#8F7E5D] transition-colors duration-300 text-white/90 rounded-md"
                >
                  <Download className="w-5 h-5" />
                  Télécharger Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <section className="bg-black py-12 px-24">
        <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-white/10 flex justify-between items-center">
          <div className="flex gap-8">
            <a href="#" className="text-white/70 hover:text-[#9F8E6D] transition-colors duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-[#9F8E6D] transition-colors duration-300">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-[#9F8E6D] transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Termes et conditions</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Politique de confidentialité</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Mentions légales</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Politique de cookies</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadsPage;