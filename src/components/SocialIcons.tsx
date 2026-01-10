import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const SocialIcons = ({ className = "", iconClassName = "social-icon" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href="#" aria-label="Facebook">
        <Facebook className={iconClassName} />
      </a>
      <a href="#" aria-label="Twitter">
        <Twitter className={iconClassName} />
      </a>
      <a href="#" aria-label="LinkedIn">
        <Linkedin className={iconClassName} />
      </a>
      <a href="#" aria-label="Instagram">
        <Instagram className={iconClassName} />
      </a>
    </div>
  );
};

export default SocialIcons;
