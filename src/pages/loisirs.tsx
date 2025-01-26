import React, { useState, useEffect } from 'react';
import { Facebook, Youtube, Instagram,Linkedin} from 'lucide-react';

const CentreInteret = () => {
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

      {/* Centre d'Intérêt Section */}
      <section className="bg-black text-white py-32 px-24 pt-48">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">Centre d'Intérêt</h2>
          
          {/* Surfing Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="./src/images-videos/surf.jpg" 
                  alt="Surfing in Safi" 
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-xl text-gray-300 leading-relaxed">
                J'ai découvert le surf grâce à mon frère, et depuis, c'est devenu bien plus qu'un simple loisir. dans ma ville natale: safi c'est plus qu'un sport mais une tradition
                </p>
              </div>
            </div>
          </div>

          {/* Guitar Section */}
          <div>
            <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                <video 
                  className="w-full h-[400px] object-cover rounded-lg"
                  controls
                  playsInline
                >
                  <source src="./src/images-videos/video.mp4" type="video/mp4" />
                  {/* Fallback image in case video doesn't load */}
                  <img
                    src="/api/placeholder/800/600"
                    alt="Playing Guitar"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
              <div>
                <p className="text-xl text-gray-300 leading-relaxed">
                Je suis plus jazz fusion maintenant, mais à l’époque, j’étais plutôt rock classique et blues. La vidéo à gauche date de 2016, où je joue ‘The Loner’ de Gary Moore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Contact Section */}
      <section className="bg-black py-32 px-24">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div>
            <h3 className="text-4xl font-light mb-4">Me contacter</h3>
            <p className="text-gray-400 mb-12 text-xl">pour exprimer notre créativité ensemble</p>
            <a 
              href="mailto:mohamed-ali.abouelazz@grenoble-inp.org"
              className="block text-gray-300 hover:text-[#9F8E6D] transition-colors duration-300 mb-4"
            >
              mohamed-ali.abouelazz@grenoble-inp.org
            </a>
            <a 
              href="tel:0769630844"
              className="text-gray-300 hover:text-[#9F8E6D] transition-colors duration-300"
            >
              07 69 63 08 44
            </a>
          </div>
          <div className="w-[200px] flex justify-center items-center">
            <img 
              src="./src/images-videos/profilePic.png" 
              alt="Mohamed Ali Abouelazz Profile"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      
        {/* Footer */}
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
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
            <a href="#" className="text-white/70 hover:text-[#9F8E6D] transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">i am afraid dave</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">my mind is</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">going</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">i can feel it</a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CentreInteret;