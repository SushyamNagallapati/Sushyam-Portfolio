import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "About", href: "/", active: location.pathname === "/" },
    { label: "Resume", href: "#resume", active: false },
    { label: "Projects", href: "/projects", active: location.pathname === "/projects" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sushyamnagallapati",
      active: false,
      isExternal: true,
      icon: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Glass panel */}
      <div className="mx-4 mt-3 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/40 shadow-lg shadow-black/10">
        <div className="px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary/60 to-indigo-500/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={profilePhoto}
                alt="Sushyam Nagallapati"
                className="relative w-8 h-8 rounded-full object-cover border-2 border-border/60 group-hover:border-primary/50 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-sm tracking-tight text-foreground">
                Sushyam Nagallapati
              </span>
              <span className="text-muted-foreground text-[10px] tracking-wide hidden sm:block">
                Web · AI/ML Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link-pill ${item.active ? "nav-link-pill-active" : ""}`}
                >
                  {item.label}
                </Link>
              ) : item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-pill"
                  aria-label={item.label}
                >
                  {item.icon ? <Linkedin className="w-4 h-4" /> : item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link-pill ${item.active ? "nav-link-pill-active" : ""}`}
                >
                  {item.label}
                </a>
              )
            )}
            <div className="ml-2 pl-2 border-l border-border/40">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-5 pb-4 border-t border-border/30">
            <div className="flex flex-col gap-1 pt-3">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`nav-link-pill ${item.active ? "nav-link-pill-active" : ""}`}
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
                    className="nav-link-pill flex items-center gap-2"
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
                    className={`nav-link-pill ${item.active ? "nav-link-pill-active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <div className="pt-2 pl-1">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
