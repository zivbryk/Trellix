import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";
import { CoverSize } from "../popovers/cover-size";
import { ColorPallete } from "../popovers/color-pallete";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";

export const PopoverCover = ({ elPos, handleClose, currCard, board }) => {
  const [coverMode, setCoverMode] = useState(currCard.style.coverMode);
  const [coverColor, setCoverColor] = useState(null);
  const [isColorWhite] = useState(currCard.style.isColorWhite);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!currCard.style.isImage) setCoverColor(currCard.style.cover);
  // }, [currCard.style.isImage, currCard.style.cover]);

  useEffect(() => {
    saveCover();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverMode, coverColor]);

  const onSetCoverMode = async (mode) => {
    setCoverMode(mode);
  };

  const onSetCoverColor = async (colorCode) => {
    console.log(colorCode);
    setCoverColor(colorCode);
  };

  const saveCover = async () => {
    const updatedCard = { ...currCard };
    updatedCard.style.coverMode = coverMode;
    // TODO: this line makes an error.
    //if a color is chosen => change isImage to false and set cover to the color code!
    // if (!currCard.style.isImage) updatedCard.style.cover = coverColor;
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  return (
    <PopoverCmp title="Cover" handleClose={handleClose} elPos={elPos}>
      <div className="popover-cover-content">
        <h4 className="size-title">Size</h4>
        <CoverSize
          onSetCoverMode={onSetCoverMode}
          coverMode={coverMode}
          isColorWhite={isColorWhite}
          currCard={currCard}
        />
        <h4 className="colors-title">Colors</h4>
        <ColorPallete
          onSetCoverColor={onSetCoverColor}
          coverColor={coverColor}
        />
      </div>
    </PopoverCmp>
  );
};
