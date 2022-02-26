// import { ReactComponent as adminChevron } from "../assets/img/badges/admin-chevron.png";

export const MemberAvatar = ({ size, member }) => {
  const getMemberTypeStyle = () => {
    if (!member.isAdmin) return {};

    const coverStyle = {
      backgroundImage:
        'url("https://res.cloudinary.com/zivcloud555/image/upload/v1645888489/Trellis%20permanent%20img/Badges/admin-chevron_hnoxmk.png")',

      backgroundSize: "cover",
    };

    return coverStyle;
  };

  return (
    <div
      className="member-avatar"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <img
        src={member.imgUrl}
        alt={
          "https://res.cloudinary.com/zivcloud555/image/upload/v1633605060/Trellis%20permanent%20img/Avatars/guest_funut6.png"
        }
        title={`${member.fullname} (${member.username})`}
        style={{ height: `${size}px`, width: `${size}px` }}
      />
      <span
        className="member-type"
        title={member.isAdmin ? "This member is an admin of this board." : ""}
        style={getMemberTypeStyle()}
      ></span>
    </div>
  );
};
