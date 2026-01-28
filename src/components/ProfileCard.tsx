import SocialIcons from "./SocialIcons";
import profilePhoto from "@/assets/profile-photo.jpg";
const ProfileCard = () => {
  return <div className="bg-card shadow-lg relative z-10 w-full max-w-xs mx-auto animate-fade-in" style={{
    animationDelay: "0.2s"
  }}>
      <div className="p-8 flex flex-col items-center">
        {/* Profile Photo */}
        <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-background shadow-md">
          <img src={profilePhoto} alt="Sushyam Nagallapati" className="w-full h-full object-cover" />
        </div>

        {/* Name */}
        <h2 className="font-serif text-2xl font-bold text-center text-foreground">
          Sushyam Nagallapati
        </h2>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-primary mt-4 mb-4" />

        {/* Title */}
        <p className="text-sm tracking-widest text-muted-foreground uppercase">SOFTWARE DEVELOPER</p>
      </div>

      {/* Social Icons */}
      <div className="border-t border-border py-4">
        <SocialIcons className="justify-center" />
      </div>
    </div>;
};
export default ProfileCard;