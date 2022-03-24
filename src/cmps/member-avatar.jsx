// import { ReactComponent as adminChevron } from "../assets/img/badges/admin-chevron.png";

export const MemberAvatar = ({
  size,
  member = null,
  isBadge = false,
  idx = "",
  txt = "",
  onOpenPopover,
  isInAppHeader = false,
}) => {
  const guestImgUrl =
    "https://res.cloudinary.com/zivcloud555/image/upload/v1633605060/Trellis%20permanent%20img/Avatars/guest_funut6.png";

  const getMemberTypeStyle = () => {
    if (!member.isAdmin) return {};

    const coverStyle = {
      backgroundImage:
        'url("https://res.cloudinary.com/zivcloud555/image/upload/v1645888489/Trellis%20permanent%20img/Badges/admin-chevron_hnoxmk.png")',

      backgroundSize: "cover",
    };

    return coverStyle;
  };

  const onClickAvatar = (ev) => {
    ev.preventDefault();
    if (!onOpenPopover) return;
    if (isInAppHeader) onOpenPopover(ev, "ACCOUNT", member);
    else onOpenPopover(ev, "PROFILE", member);
  };

  return (
    <div
      className={`${
        !member ? "txt" : "pointer"
      } member-avatar flex align-center justify-center`}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        zIndex: `${idx}`,
      }}
      onClick={(ev) => onClickAvatar(ev)}
    >
      {member && (
        <img
          src={`${member.imgUrl ? member.imgUrl : guestImgUrl}`}
          alt=""
          title={`${member.fullname} (${member.username})`}
          style={{ height: `${size}px`, width: `${size}px` }}
        />
      )}

      {isBadge && (
        <span
          className="member-type"
          title={member.isAdmin ? "This member is an admin of this board." : ""}
          style={getMemberTypeStyle()}
        ></span>
      )}

      {!member && (
        <>
          <span className="trl icon-add flex"></span>
          <span className="avatar-txt">{`${txt}`}</span>
        </>
      )}
    </div>
  );
};
