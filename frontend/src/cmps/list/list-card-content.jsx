import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { ListCardDetails } from "./list-card-details";
import { openPopover } from "../../store/actions/app.actions";

export const ListCardContent = ({
  // currBoard,
  currList,
  currCard,
  isQuickEdit = false,
}) => {
  const dispatch = useDispatch();
  const [coverMode, setCoverMode] = useState(currCard.style.coverMode);

  useEffect(() => {
    setCoverMode(currCard.style.coverMode);
  }, [currCard]);
  // REMOVE_COMMENT TODO: In order for card cover background img not to get cut, aspect ratio (r=w/h) of the image can be obtained and then height of the cover image is 256/r (width is set to the width of the card 256px). get aspect ratio func here works great but there is a problem whith useEffect - error message that there is a memory leak as the state is updated after the component is unmounted!
  //*When pplying the true aspect ratio of the img, style:background-size: contain should be used.This can result with white edges and require a way to detect the img background color and apply it as the cover div bgc!

  // const [coverStyle, setCoverStyle] = useState(1);

  //ratio = w/h
  // const getAspectRatio = () => {
  //   return new Promise((resolve, reject) => {
  //     let img = new Image();
  //     img.onload = () => resolve(img.width / img.height);
  //     img.onerror = reject;
  //     img.src =
  //       "https://res.cloudinary.com/zivcloud555/image/upload/v1634026001/Trellis%20permanent%20img/Card%20Images/launch_kucwit.jpg";
  //   });
  // };

  const getCardContentStyle = () => {
    if (!coverMode) return {};
    let cardContentStyle = null;

    if (coverMode === "full") {
      cardContentStyle = currCard.style.isImage
        ? {
            minHeight: "170px",
            backgroundImage: `url(${currCard.style.cover})`,
            backgroundSize: "cover",
          }
        : {
            minHeight: "56px",
            backgroundColor: `${currCard.style.cover}`,
          };
    } else if (coverMode === "half") {
      cardContentStyle = {};
    }

    return cardContentStyle;
  };

  const getCoverStyle = () => {
    if (!coverMode) return {};

    let coverStyle = null;

    if (coverMode === "half") {
      coverStyle = currCard.style.isImage
        ? {
            height: "152px",
            backgroundImage: `url(${currCard.style.cover})`,
            backgroundSize: "cover",
          }
        : {
            height: "32px",
            backgroundColor: `${currCard.style.cover}`,
          };
    } else if (coverMode === "full") {
      coverStyle = {
        display: "none",
      };
    }

    return coverStyle;
  };

  const onOpenPopover = (ev, popoverName, currCard) => {
    ev.preventDefault();
    ev.stopPropagation();
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <section
      className={`list-card-content ${
        currCard.style.cover ? "is-covered" : ""
      } ${coverMode === "full" ? "flex" : ""} ${
        isQuickEdit ? "is-quick-edit" : ""
      }`}
      style={getCardContentStyle()}
    >
      <div className={"list-card-cover"} style={getCoverStyle()}></div>

      {!isQuickEdit && (
        <button
          className="btn btn-edit-card"
          onClick={(ev) => {
            onOpenPopover(ev, "QUICK-CARD-EDITOR", currCard, currList);
          }}
        >
          <span className="trl icon-edit icon-sm"></span>
        </button>
      )}

      <ListCardDetails
        currCard={currCard}
        currList={currList}
        coverMode={coverMode}
        isQuickEdit={isQuickEdit}
      />
    </section>
  );
};
