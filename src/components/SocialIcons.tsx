import { Linkedin, Github, Twitter } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const SocialIcons = ({ className = "", iconClassName = "social-icon" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <a
        href="https://www.linkedin.com/in/sushyamnagallapati"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:scale-110 transition-transform duration-300"
      >
        <Linkedin className={iconClassName} />
      </a>
      <a
        href="https://github.com/SushyamNagallapati"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:scale-110 transition-transform duration-300"
      >
        <Github className={iconClassName} />
      </a>
      <a
        href="https://x.com/SushyamR"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:scale-110 transition-transform duration-300"
      >
        <Twitter className={iconClassName} />
      </a>
    </div>
  );
};

export default SocialIcons;