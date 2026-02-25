import SocialIcons from "./SocialIcons";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileCard = () => {
  return (
    <div
      className="bg-card shadow-xl shadow-black/5 dark:shadow-black/20 relative z-10 w-full max-w-[280px] mx-auto animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="p-8 flex flex-col items-center">
        {/* Profile Photo */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-background shadow-lg">
          <img
            src={profilePhoto}
            alt="Sushyam Nagallapati"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="font-serif text-xl font-bold text-center text-foreground leading-tight">
          Sushyam Nagallapati
        </h2>

        {/* Divider */}
        <div className="w-10 h-0.5 bg-primary mt-4 mb-4 rounded-full" />

        {/* Title */}
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-medium">
          SOFTWARE DEVELOPER
        </p>
      </div>

      {/* Social Icons */}
      <div className="border-t border-border/60 py-4">
        <SocialIcons className="justify-center" />
      </div>
    </div>
  );
};

export default ProfileCard;