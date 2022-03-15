import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";

export const PopoverCover = ({ elPos, handleClose, currCard, board }) => {
  const [coverMode, setCoverMode] = useState(currCard.style.coverMode);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setCoverMode(currCard.style.coverMode);
  // }, []);

  useEffect(() => {
    saveCover();
  }, [coverMode]);

  const saveCover = () => {
    console.log(coverMode);
    const updatedCard = { ...currCard };
    updatedCard.style.coverMode = coverMode;
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  const getCoverSizeStyle = (coverModeSize) => {
    if (!currCard) return;

    if (!currCard.style.cover) return {};

    let coverStyle = {};

    if (coverModeSize === "half") {
      coverStyle = currCard.style.isImage
        ? {
            backgroundImage: `url(${currCard.style.cover})`,
          }
        : {
            backgroundColor: currCard.style.cover,
          };
    } else if (coverModeSize === "full") {
      coverStyle = currCard.style.isImage
        ? {
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currCard.style.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : {
            backgroundColor: currCard.style.cover,
          };
    }

    return coverStyle;
  };
  return (
    <PopoverCmp title="Cover" handleClose={handleClose} elPos={elPos}>
      <div className="popover-cover-content">
        <div className="cover-size-container">
          <h4>Size</h4>
          <div className="cover-size-btns">
            <div
              className={`cover-size-half ${
                coverMode === "half" ? "cover-size-focus" : ""
              }`}
              onClick={() => setCoverMode("half")}
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
              onClick={() => setCoverMode("full")}
            >
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn button btn-remove-cover">Remove Cover</button>
      </div>
    </PopoverCmp>
  );
};
