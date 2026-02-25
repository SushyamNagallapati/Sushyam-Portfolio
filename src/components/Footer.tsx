import { useEffect, useRef, useState } from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-background/80 backdrop-blur-xl border-t border-border/50 py-4 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sushyam Nagallapati
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 text-sm">
            <div className="text-center">
              <p className="font-medium text-foreground text-xs tracking-wide uppercase mb-1">Call</p>
              <a
                href="tel:2269756863"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                226 975 6863
              </a>
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground text-xs tracking-wide uppercase mb-1">Write</p>
              <a
                href="mailto:s2nagall@uwaterloo.ca"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                s2nagall@uwaterloo.ca
              </a>
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground text-xs tracking-wide uppercase mb-1">Follow</p>
              <SocialIcons
                className="mt-1.5"
                iconClassName="w-4 h-4 text-foreground hover:text-primary transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
