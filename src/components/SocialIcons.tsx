import { Linkedin, Github } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const SocialIcons = ({ className = "", iconClassName = "social-icon" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href="#" aria-label="LinkedIn">
        <Linkedin className={iconClassName} />
      </a>
      <a href="#" aria-label="GitHub">
        <Github className={iconClassName} />
      </a>
    </div>
  );
};

export default SocialIcons;
