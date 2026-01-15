import { Linkedin, Github } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const SocialIcons = ({ className = "", iconClassName = "social-icon" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href="https://www.linkedin.com/in/sushyamnagallapati" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin className={iconClassName} />
      </a>
      <a href="#" aria-label="GitHub">
        <Github className={iconClassName} />
      </a>
    </div>
  );
};

export default SocialIcons;
