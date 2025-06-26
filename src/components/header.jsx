import { useState } from "react";
import { Menu, X, Mic } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary text-custom-white shadow-lg sticky top-0 z-50 font-tomarik">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Brand */}
          <a
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                Valentin Lablanche
              </h1>
              <p className="text-xs md:text-sm text-gray-300 leading-tight">
                Chanteur - Comédien - Acteur voix
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/presentation"
              className="text-lg font-medium hover:text-secondary transition-colors duration-200 relative group"
            >
              Présentation
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/portfolio"
              className="text-lg font-medium hover:text-secondary transition-colors duration-200 relative group"
            >
              Portfolio
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
            {/* <a
              href="/contact"
              className="bg-secondary hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
            >
              Contact
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-700">
            <a
              href="/presentation"
              className="text-lg font-medium hover:text-secondary transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Présentation
            </a>
            <a
              href="/portfolio"
              className="text-lg font-medium hover:text-secondary transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Portfolio
            </a>
            {/* <a
              href="/contact"
              className="bg-secondary hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 text-center mt-2"
              onClick={closeMenu}
            >
              Contact
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
