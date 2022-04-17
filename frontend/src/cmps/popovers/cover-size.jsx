import { LoaderCmp } from "../loader-cmp";
export const CoverSize = ({
  onSetCoverMode,
  coverMode,
  isColorWhite,
  currCard,
}) => {
  const getCoverSizeStyle = (SizeStyle) => {
    if (!currCard) return;

    if (!currCard.style.coverMode)
      return {
        background: "#5E6C84",
        opacity: "0.3",
      };

    let coverStyle = {};

    if (SizeStyle === "half") {
      coverStyle = currCard.style.isImage
        ? {
            backgroundImage: `url(${currCard.style.cover})`,
          }
        : {
            backgroundColor: currCard.style.cover,
          };
    } else if (SizeStyle === "full") {
      if (currCard.style.isImage) {
        coverStyle = currCard.style.isColorWhite
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currCard.style.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${currCard.style.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            };
      } else {
        coverStyle = {
          backgroundColor: currCard.style.cover,
        };
      }
    }

    return coverStyle;
  };

  const onRemoveCover = () => {
    onSetCoverMode(null);
  };

  if (!currCard) return <LoaderCmp />;
  return (
    <div className="cover-size-container">
      <div className="cover-size-btns">
        <div
          className={`cover-size-half ${
            coverMode === "half" ? "cover-size-focus" : ""
          }`}
          onClick={() => onSetCoverMode("half")}
        >
          <div className="top-half" style={getCoverSizeStyle("half")}></div>
          <div className="bottom-half">
            <div></div>
            <div></div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
        <div
          className={`cover-size-full ${
            coverMode === "full" ? "cover-size-focus" : ""
          }`}
          style={getCoverSizeStyle("full")}
          onClick={() => onSetCoverMode("full")}
        >
          <div>
            <div
              className={`${isColorWhite ? "color-white" : "color-black"}`}
            ></div>
            <div
              className={`${isColorWhite ? "color-white" : "color-black"}`}
            ></div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-popover btn-remove-cover"
        onClick={onRemoveCover}
      >
        Remove Cover
      </button>
    </div>
  );
};
