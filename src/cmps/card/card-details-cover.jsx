import { useDispatch } from "react-redux";
import { openPopover } from "../../store/actions/app.actions";

export const CardDetailsCover = ({
  currCard,
  currList,
  board,
  dominantColor,
  isLightMode,
}) => {
  const dispatch = useDispatch();

  const getCoverStyle = () => {
    if (!currCard) return;

    if (!currCard.style.cover)
      return {
        display: "none",
      };

    const coverStyle = currCard.style.isImage
      ? {
          backgroundColor: dominantColor,
          backgroundImage: `url(${currCard.style.cover})`,
          height: "152px",
          minHeight: "152px",
          backgroundSize: "contain",
          backgroundOrigin: "content-box",
          padding: "0px",
          backgroundPosition: "center center",
        }
      : {
          height: "116px",
          minHeight: "116px",
          backgroundSize: "initial",
          padding: "0px",
          backgroundPosition: "left center",
          backgroundColor: currCard.style.cover,
        };

    return coverStyle;
  };

  const onOpenPopver = (ev) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { currCard, board };
    dispatch(openPopover("COVER", elPos, popoverProps));
  };

  return (
    <div className="card-details-cover" style={getCoverStyle()}>
      <div className="window-cover-menu">
        <button
          className={`btn window-cover-menu-btn ${
            isLightMode ? "" : "cover-btn-light"
          }`}
          onClick={(ev) => onOpenPopver(ev)}
        >
          <span className="icon-sm trl icon-card-cover"></span>
          Cover
        </button>
      </div>
    </div>
  );
};
