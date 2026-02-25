import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/60 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sushyam Nagallapati
          </p>

          {/* Contact Info */}
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