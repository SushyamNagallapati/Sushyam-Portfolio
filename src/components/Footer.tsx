import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-6">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground order-last sm:order-first">
            © {new Date().getFullYear()} Sushyam Nagallapati
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 text-xs sm:text-sm">
            <div className="text-center">
              <p className="font-medium text-foreground text-[10px] sm:text-xs tracking-wide uppercase mb-0.5 sm:mb-1">Call</p>
              <a
                href="tel:2269756863"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                226 975 6863
              </a>
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground text-[10px] sm:text-xs tracking-wide uppercase mb-0.5 sm:mb-1">Write</p>
              <a
                href="mailto:s2nagall@uwaterloo.ca"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-[11px] sm:text-sm"
              >
                s2nagall@uwaterloo.ca
              </a>
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground text-[10px] sm:text-xs tracking-wide uppercase mb-0.5 sm:mb-1">Follow</p>
              <SocialIcons
                className="mt-1"
                iconClassName="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground hover:text-primary transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
