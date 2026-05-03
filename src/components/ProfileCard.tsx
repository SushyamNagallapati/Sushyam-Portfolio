import SocialIcons from "./SocialIcons";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileCard = () => {
  return (
    <div
      className="animate-fade-in flex flex-col items-center"
      style={{ animationDelay: "0.2s" }}
    >
      {/* Profile Photo with offset accent */}
      <div className="relative group w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
        {/* Decorative offset background */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl -z-10 translate-x-3 translate-y-3 bg-gradient-to-br from-primary/20 to-primary/5 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
        />
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/30 ring-1 ring-border/30">
          <img
            src={profilePhoto}
            alt="Sushyam Nagallapati"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-5">
        <SocialIcons />
      </div>
    </div>
  );
};

export default ProfileCard;
