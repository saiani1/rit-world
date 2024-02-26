import profileImage from "../../../assets/aibao.jpg";

const ProfileImage = () => {
  return (
    <div className="w-full h-[200px] overflow-hidden rounded-md border border-gray-300">
      <img src={profileImage} />
    </div>
  );
};

export default ProfileImage;
