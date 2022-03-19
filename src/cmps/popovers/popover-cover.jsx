import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";
import { CoverSize } from "../popovers/cover-size";
import { ColorPalette } from "./color-palette";
import { CoverTextColor } from "../popovers/cover-text-color";
import { CoverAttachments } from "../popovers/cover-attachments";
import { CoverUnsplashImages } from "../popovers/cover-unsplash-imgs";

import { boardService } from "../../services/board.service";
import { utilService } from "../../services/util.service";
import { onEditBoard } from "../../store/actions/board.actions";

export const PopoverCover = ({ elPos, handleClose, currCard, board }) => {
  const [coverMode, setCoverMode] = useState(null);
  const [coverColor, setCoverColor] = useState(null);
  const [isColorWhite, setIsColorWhite] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currCard.style.isImage) setCoverColor(currCard.style.cover);
    setCoverMode(currCard.style.coverMode);
    setIsColorWhite(currCard.style.isColorWhite);
    if (currCard.style.isImage) setImageUrl(currCard.style.cover);
  }, [currCard]);

  const onSetCoverMode = (mode) => {
    setCoverMode(mode);
    saveCoverMode(mode);
  };

  const onSetCoverColor = (colorCode) => {
    setCoverColor(colorCode);
    saveCoverColor(colorCode);
  };

  const onSetTxtColor = (isWhite) => {
    setIsColorWhite(isWhite);
    saveTxtColor(isWhite);
  };

  const onSetCoverImage = (url) => {
    setImageUrl(url);
    saveCoverImage(url);
  };

  const onSaveNewAttachment = (url, fileName, format) => {
    setImageUrl(url);
    const attachment = {
      _id: utilService.makeId(),
      url,
      fileName,
      format,
      uploadedAt: Date.now(),
    };
    saveNewAttachment(attachment);
  };

  const saveCoverMode = (mode) => {
    const updatedCard = { ...currCard };
    updatedCard.style.coverMode = mode;
    saveUpdatedBoard(updatedCard);
  };

  const saveCoverColor = (colorCode) => {
    const updatedCard = { ...currCard };
    updatedCard.style.cover = colorCode;
    updatedCard.style.isImage = false;
    saveUpdatedBoard(updatedCard);
  };

  const saveTxtColor = (isWhite) => {
    const updatedCard = { ...currCard };
    updatedCard.style.isColorWhite = isWhite;
    saveUpdatedBoard(updatedCard);
  };

  const saveCoverImage = (url) => {
    const updatedCard = { ...currCard };
    updatedCard.style.cover = url;
    updatedCard.style.isImage = true;
    saveUpdatedBoard(updatedCard);
  };

  const saveNewAttachment = (attachment) => {
    const updatedCard = { ...currCard };
    updatedCard.attachments.push(attachment);
    updatedCard.style.cover = attachment.url;
    updatedCard.style.isImage = true;
    saveUpdatedBoard(updatedCard);
  };

  const saveUpdatedBoard = (updatedCard) => {
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

        <h4>Text color</h4>
        <CoverTextColor
          currCard={currCard}
          isColorWhite={isColorWhite}
          onSetTxtColor={onSetTxtColor}
        />

        <h4>Colors</h4>
        <ColorPalette
          onSetCoverColor={onSetCoverColor}
          coverColor={coverColor}
        />

        <h4>Attachments</h4>
        <CoverAttachments
          currCard={currCard}
          onSetCoverImage={onSetCoverImage}
          imageUrl={imageUrl}
          onSaveNewAttachment={onSaveNewAttachment}
        />

        <h4>Photos from Unsplash</h4>
        <CoverUnsplashImages />
      </div>
    </PopoverCmp>
  );
};
