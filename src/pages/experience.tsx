import React, { useState, useEffect } from 'react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const ExperienceEducationPage = () => {
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
      {/* Navigation - identical to main page */}
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

      {/* Hero Section with Experience & Education */}
      <header className="relative min-h-screen pt-24" style={{ top: "2rem"}}>
        <div className="max-w-7xl mx-auto px-24">

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-light mb-8 border-b border-white/20 pb-4">Éducation</h3>
            
            {/* Grenoble INP Degree */}
            <div className="flex mb-10">
              <div className="mr-4">
                  <img 
                    src="/src/images-videos/inp.png" 
                    alt="Small thumbnail" 
                    style={{ width: '120px', height: '40px'}}
                  />
              </div>
              <div className="mb-12">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl mb-2">Diplôme d'ingénieur Grenoble-inp</h4>
                    <p className="text-gray-400 mb-4">2021-2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#9F8E6D]">Ingénierie Mécanique</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Formation approfondie en systèmes mécaniques, propriétés des matériaux, et processus de fabrication. 
                  Maîtrise des outils de conception assistée par ordinateur (Creo, Solidworks) et de simulation numérique 
                  (ANSYS Fluent, Static Structural, Thermal, Nastran) et Mathlab Simulink pour l'implémentation de 
                  systèmes d'asservissement.
                </p>
              </div>
            </div>
            {/* Preparatory Classes */}
            <div className="flex mb-10">
              <div className="mr-4">
                    <img 
                      src="/src/images-videos/prepa.jpg" 
                      alt="Small thumbnail" 
                      style={{ width: '50px', height: '45px'}}
                    />
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl mb-2">Classes préparatoires</h4>
                    <p className="text-gray-400 mb-4">2019-2021</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#9F8E6D]">Maths sup, Maths spé</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Deux années intensives en mathématiques, physique et ingénierie de base, développant 
                  une compréhension solide des principes fondamentaux scientifiques.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="relative min-h-screen pt-15" style={{ top: "4rem" }}>
            <h3 className="text-3xl font-light mb-8 border-b border-white/20 pb-4">Expériences Professionnelles</h3>
            
            {/* General Electric Internship */}
            <div className="flex mb-10">
              <div className="mr-4">
                <img 
                  src="/src/images-videos/ge.png" 
                  alt="Small thumbnail" 
                  style={{ width: '170px', height: '60px'}}
                />
              </div>
              <div className="mb-12">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl mb-2">Stage Assistant Ingénieur</h4>
                    <p className="text-gray-400 mb-4">2023-2024 | General Electric Vernova, Lyon</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#9F8E6D]">Conception & Développement</p>
                  </div>
                </div>
                  <p>
                    Conception d'une station de contrôle de conformité pour disjoncteurs haute tension, 
                    avec focus sur la vérification des doigts de couronnes de contact.
                    Implémentation d'une interface graphique en C++ et développement d'un système 
                    d'enregistrement de données avec Django et MySQL.
                    Réalisation de calculs statiques et simulations ANSYS pour vérification et 
                    dimensionnement de composants mécaniques.
                  </p>
              </div>
            </div>
            {/* Alstom School Project */}
            <div className="flex mb-10">
              <div className="mr-4">
                  <img 
                    src="/src/images-videos/alstom.png" 
                    alt="Small thumbnail" 
                    style={{ width: '130px', height: '20px'}}
                  />
              </div>
              <div className="mb-12">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl mb-2">Projet d'École</h4>
                    <p className="text-gray-400 mb-4">10/04/2023-15/05/2023 | Alstom</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#9F8E6D]">Simulation & Conception</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  En équipe de 4, configuration d'une simulation de fatigue sous ANSYS pour évaluer 
                  un roulement dans une nouvelle gamme de générateurs. Conception d'une plateforme 
                  de test reproduisant les contraintes radiales et axiales pour estimer la durée de 
                  vie des roulements.
                </p>
              </div>
            </div>

            {/* Sabca Internship */}
            <div className="flex mb-12">
              <div className="mr-4">
                  <img 
                    src="/src/images-videos/sabca.png" 
                    alt="Small thumbnail" 
                    style={{ width: '100px', height: '30px'}}
                  />
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl mb-2">Stage Opérateur</h4>
                    <p className="text-gray-400 mb-4">25/07/2022-05/08/2022 | Sabca</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#9F8E6D]">Assemblage Aéronautique</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Suivi du plan d'aménagement d'outillage, surveillance du placement des gabarits, 
                  structures de levage, tables et matériel pour garantir une exécution précise du lay-out 
                  sur la chaîne d'assemblage de l'avion Pilatus PC-12.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="bg-black py-40 px-24 mt-20">
        <div className="max-w-7xl mx-auto flex justify-between items-start" style={{ top: "10px" }}>
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

export default ExperienceEducationPage;