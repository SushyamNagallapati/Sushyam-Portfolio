import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>© 2025 by Sushyam Nagallapati</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <p className="font-medium text-foreground">Call</p>
              <p className="text-muted-foreground">226 9756863</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground">Write</p>
              <a href="mailto:s2nagall@uwaterloo.ca" className="text-muted-foreground hover:text-foreground transition-colors">s2nagall@uwaterloo.ca</a>
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground">Follow</p>
              <SocialIcons className="mt-1" iconClassName="w-4 h-4 text-foreground hover:text-primary transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
