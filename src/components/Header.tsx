import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "ABOUT ME", href: "/", active: location.pathname === "/" },
    { label: "RESUME", href: "#resume", active: false },
    { label: "PROJECTS", href: "/projects", active: location.pathname === "/projects" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/sushyamnagallapati", active: false, isExternal: true, icon: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={profilePhoto} 
              alt="Sushyam Nagallapati" 
              className="w-8 h-8 rounded-full object-cover border-2 border-primary/20"
            />
            <span className="font-semibold text-lg">Sushyam Nagallapati</span>
            <span className="text-muted-foreground text-sm hidden sm:inline">/ Web Apps, AI/ML works</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link ${item.active ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              ) : item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link hover:text-primary transition-colors"
                  aria-label={item.label}
                >
                  {item.icon ? <Linkedin className="w-5 h-5" /> : item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link ${item.active ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </a>
              )
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`nav-link ${item.active ? "nav-link-active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : item.isExternal ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link flex items-center gap-2 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={item.label}
                  >
                    {item.icon ? <Linkedin className="w-5 h-5" /> : item.label}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`nav-link ${item.active ? "nav-link-active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
