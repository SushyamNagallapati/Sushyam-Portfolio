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
    { label: "RESUME", href: "https://drive.google.com/file/d/1-PDWDhiBfAXudIomRhcSvbpQiifRZ1pj/view?usp=sharing", active: false, isExternal: true },
    { label: "PROJECTS", href: "/projects", active: location.pathname === "/projects" },
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/sushyamnagallapati",
      active: false,
      isExternal: true,
      icon: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
          <img
            src={profilePhoto}
            alt="Sushyam Nagallapati"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-border group-hover:border-primary/40 transition-all duration-300 flex-shrink-0"
          />
          <span className="font-semibold text-sm sm:text-base tracking-tight text-foreground truncate">
            Sushyam Nagallapati
          </span>
          <span className="text-muted-foreground text-xs sm:text-sm hidden md:inline whitespace-nowrap">
            / Web · AI / ML
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) =>
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
                className="nav-link hover:text-primary"
                aria-label={item.label}
              >
                {item.icon ? <Linkedin className="w-4 h-4" /> : item.label}
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
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile: Theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 pb-5 border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 pt-4">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link py-2.5 text-base ${item.active ? "nav-link-active" : ""}`}
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
                  className="nav-link py-2.5 text-base flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={item.label}
                >
                  {item.icon && <Linkedin className="w-4 h-4" />}
                  <span>{item.label}</span>
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link py-2.5 text-base ${item.active ? "nav-link-active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
