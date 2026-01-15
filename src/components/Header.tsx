import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "ABOUT ME", href: "/", active: location.pathname === "/" },
    { label: "RESUME", href: "#resume", active: false },
    { label: "PROJECTS", href: "/projects", active: location.pathname === "/projects" },
    { label: "CONTACT", href: "#contact", active: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-sm" />
            <span className="font-semibold text-lg">Sushyam Nagallapati</span>
            <span className="text-muted-foreground text-sm hidden sm:inline">/ web apps, AI/ML works</span>
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
