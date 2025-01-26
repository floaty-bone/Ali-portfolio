import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const CompetencesPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentSoftwareIndex, setCurrentSoftwareIndex] = useState(0);

  const skills = [
    { 
      name: 'Computer-Aided Design', 
      image: './src/images-videos/skillsImages/1.png',
      description: 'Expertise in advanced design techniques (CNC machined, 3d printed, casting parts)'
    },
    { 
      name: 'Finite Element Analysis', 
      image: './src/images-videos/skillsImages/4.png',
      description: "Simulation avancée et analyse de l'intégrité structurelle"
    },
    { 
      name: 'Écoulements + thermique', 
      image: './src/images-videos/skillsImages/2.png',
      description: ' dynamique des fluides et transfer thermique'
    },
    { 
      name: 'Développement Logiciel', 
      image: './src/images-videos/skillsImages/3.png',
      description: 'Software development in C++, Django, and Python'
    },
    { 
      name: 'Control System Design', 
      image: './src/images-videos/skillsImages/controlSystems.png',
      description: "Conception de systèmes d'automatisation et de contrôle"
    }
  ];

  const software = [
    { name: 'Ansys Workbench', logo: './src/images-videos/softwareImages/ansys.png' },
    { name: 'Matlab Simulink', logo: './src/images-videos/softwareImages/simulink.jpg' },
    { name: 'C++', logo: './src/images-videos/softwareImages/cpp.png' },
    { name: 'Python', logo: './src/images-videos/softwareImages/python.png'},
    { name: 'Django', logo: './src/images-videos/softwareImages/django.svg' },
    { name: 'Creo', logo: './src/images-videos/softwareImages/creo.svg.png' },
    { name: 'SolidWorks', logo: './src/images-videos/softwareImages/solidWorks.png' }
  ];

  const languages = [
    { name: 'Français', level: 'Langue maternelle' },
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'Niveau C2' }
  ];

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

  const handleSkillNext = () => {
    setCurrentSkillIndex((prev) => 
      (prev + 1) % skills.length
    );
  };

  const handleSkillPrev = () => {
    setCurrentSkillIndex((prev) => 
      prev === 0 ? skills.length - 1 : prev - 1
    );
  };

  const handleSoftwareNext = () => {
    setCurrentSoftwareIndex((prev) => 
      (prev + 1) % software.length
    );
  };

  const handleSoftwarePrev = () => {
    setCurrentSoftwareIndex((prev) => 
      prev === 0 ? software.length - 1 : prev - 1
    );
  };

  
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
      <div className="w-full h-[200vh] relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 h-[120vh]">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/src/images-videos/24.mp4" type="video/mp4" />
            <img
              src="/api/placeholder/2400/800"
              alt="Background video fallback"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
        </div>

        {/* Compétences Content */}
        <div className="relative h-full flex flex-col justify-center px-24 pt-32">
          <div className="w-full max-w-6xl mx-auto">
            {/* Skills Section */}
            <section className="mb-16">
              <h2 className="text-4xl font-light mb-12 text-white">Compétences Techniques</h2>
              <div className="relative flex items-center justify-center">
                <button 
                  onClick={handleSkillPrev}
                  className="absolute left-0 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <div className="flex items-center justify-center w-full">
                  <div className="w-full max-w-4xl grid grid-cols-2 gap-8 items-center">
                    <div className="bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                      <img 
                        src={skills[currentSkillIndex].image} 
                        alt={skills[currentSkillIndex].name} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl mb-4">{skills[currentSkillIndex].name}</h3>
                      <p className="text-gray-300">{skills[currentSkillIndex].description}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleSkillNext}
                  className="absolute right-0 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              </div>
            </section>

            {/* Software Section */}
            <section className="mb-16">
              <h2 className="text-4xl font-light mb-12 text-white">Outils et Logiciels</h2>
              <div className="grid grid-cols-6 gap-4">
                {software.map((item, index) => (
                  <div 
                    key={item.name} 
                    className="flex flex-col items-center bg-white/10 p-4 rounded-lg"
                  >
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className="w-19 h-16 mb-3"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </section>
            {/*softskills*/}
            <section>
              <h2 className="text-4xl font-light mb-12 text-white">Softskills</h2>
              <div className="grid grid-cols-3 gap-8 mb-12">
                <p>on passe du temps à mettre en valuer nos softskills quand on a pas de skills</p>
              </div>
            </section>
            {/* Languages Section */}
            <section>
              <h2 className="text-4xl font-light mb-12 text-white">Langues</h2>
              <div className="grid grid-cols-3 gap-8">
                {languages.map((lang) => (
                  <div 
                    key={lang.name} 
                    className="bg-white/10 border border-white/20 rounded-lg p-6 text-center"
                  >
                    <h3 className="text-2xl mb-2">{lang.name}</h3>
                    <p className="text-gray-300">{lang.level}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

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

export default CompetencesPage;