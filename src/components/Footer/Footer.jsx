import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B0B1A] text-gray-400 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        {/* Left: Name or Logo */}
        <div className="text-lg font-semibold text-white">
          © {new Date().getFullYear()} Sumil Dholakiya
        </div>

        {/* Center: Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
          <a href="#about" className="hover:text-orange-400 transition">About</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
        </div>

        {/* Right: Socials */}
        <div className="flex space-x-4">
          <a href="https://github.com/sumildholakiya" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-xl hover:text-orange-400 transition"></i>
          </a>
          <a href="https://www.linkedin.com/in/sumil-dholakiya-48aa132a2/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-xl hover:text-orange-400 transition"></i>
          </a>
          <a href="mailto:sumildholakiya06@gmail.com">
            <i className="fas fa-envelope text-xl hover:text-orange-400 transition"></i>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer



