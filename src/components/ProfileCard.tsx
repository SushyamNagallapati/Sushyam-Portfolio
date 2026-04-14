import SocialIcons from "./SocialIcons";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileCard = () => {
  return (
    <div
      className="animate-fade-in flex flex-col items-center"
      style={{ animationDelay: "0.2s" }}
    >
      {/* Profile Photo */}
      <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/30 ring-1 ring-border/30">
        <img
          src={profilePhoto}
          alt="Sushyam Nagallapati"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Social Icons */}
      <div className="mt-5">
        <SocialIcons />
      </div>
    </div>
  );
};

export default ProfileCard;
