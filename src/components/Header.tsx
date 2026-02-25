import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "About", href: "/#about", active: false },
    { label: "Resume", href: "/public/resume.pdf", active: false, isExternal: true },
    { label: "Projects", href: "/projects", active: location.pathname === "/projects" },
  ];

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors duration-150 pb-0.5 ${
      active
        ? "text-[var(--pg-text-primary)] border-b-2 border-[var(--pg-accent)]"
        : "text-[var(--pg-text-muted)] hover:text-[var(--pg-accent)]"
    }`;

  return (
    <header
      style={{
        backgroundColor: "var(--pg-bg)",
        borderBottomColor: "var(--pg-border)",
        boxShadow: scrolled
          ? "0 1px 12px rgba(0,0,0,0.08)"
          : "none",
      }}
      className="sticky top-0 z-50 h-16 w-full bg-opacity-80 backdrop-blur-md border-b transition-shadow duration-200 dark:[box-shadow:0_1px_12px_rgba(0,0,0,0.4)]"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left — logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={profilePhoto}
            alt="Sushyam Nagallapati"
            className="w-7 h-7 rounded-full object-cover"
            style={{ border: "2px solid var(--pg-border)" }}
          />
          <div className="flex flex-col leading-none">
            <span className="font-semibold text-sm" style={{ color: "var(--pg-text-primary)" }}>
              Sushyam Nagallapati
            </span>
            <span className="text-xs hidden sm:block" style={{ color: "var(--pg-text-muted)" }}>
              Web · AI/ML Systems
            </span>
          </div>
        </Link>

        {/* Right — desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.isExternal ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass(item.active)}
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.href} className={linkClass(item.active)}>
                {item.label}
              </Link>
            )
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile — toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="p-1.5 rounded-md transition-colors duration-150"
            style={{ color: "var(--pg-text-muted)" }}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isMenuOpen ? "200px" : "0",
          backgroundColor: "var(--pg-bg)",
          borderBottom: isMenuOpen ? `1px solid var(--pg-border)` : "none",
        }}
      >
        <nav className="px-6 pb-4 flex flex-col gap-0">
          {navItems.map((item) =>
            item.isExternal ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-base font-medium border-b transition-colors duration-150"
                style={{
                  color: "var(--pg-text-muted)",
                  borderBottomColor: "var(--pg-border)",
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-base font-medium border-b transition-colors duration-150"
                style={{
                  color: item.active ? "var(--pg-accent)" : "var(--pg-text-muted)",
                  borderBottomColor: "var(--pg-border)",
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
