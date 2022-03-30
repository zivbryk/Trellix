import { useState } from "react";
import { useDispatch } from "react-redux";
import isURL from "validator/lib/isURL";
import { PopoverCmp } from "../popovers/popover-cmp";

import { cloudinaryService } from "../../services/cloudinary-service";
import { utilService } from "../../services/util.service";
import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverAttachment = ({ elPos, handleClose, currCard, board }) => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [linkName, setLinkName] = useState("");

  const onAttach = () => {
    if (imageUrl === "") return;
    const isValid = isURL(imageUrl);

    const fileName = imageUrl.split("\\").pop().split("/").pop().split("?")[0];
    const format = fileName.split(".")[1];

    const attachment = {
      _id: utilService.makeId(),
      url: imageUrl,
      fileName: linkName !== "" ? `${linkName}.${format}` : fileName,
      format,
      uploadedAt: Date.now(),
    };

    if (isValid) saveNewAttachment(attachment);
    dispatch(closePopover());
  };

  const saveNewAttachment = (attachment) => {
    const updatedCard = { ...currCard };
    updatedCard.attachments.push(attachment);
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  const onSaveNewAttachment = (url, fileName, format) => {
    setImageUrl(url);
    const attachment = {
      _id: utilService.makeId(),
      url,
      fileName: `${fileName}.${format.toLowerCase()}`,
      format,
      uploadedAt: Date.now(),
    };

    saveNewAttachment(attachment);
    dispatch(closePopover());
  };

  const onUploadImg = async (ev) => {
    try {
      const {
        secure_url: url,
        format,
        original_filename: fileName,
      } = await cloudinaryService.uploadImg(
        ev.target.files[0],
        "card-attachments"
      );
      //Add a check here that the img is valid
      onSaveNewAttachment(url, fileName, format);
    } catch (err) {
      console.log("url faild to arrive from cloudinary:", err);
      //TODO:display error message window
    }
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    const { name } = target;
    name === "link-url" ? setImageUrl(value) : setLinkName(value);
  };

  return (
    <PopoverCmp title="Attach from..." handleClose={handleClose} elPos={elPos}>
      <div className="popover-attachment-content">
        <ul className="clean-list">
          <li className="uploader">
            <label htmlFor="file-upload" className="computer-upload">
              <input
                type="file"
                onChange={(ev) => onUploadImg(ev)}
                accept="img/*"
                id="file-upload"
              />
              Computer
            </label>
          </li>
        </ul>

        <hr />

        <label htmlFor="link-url">Attach a link</label>
        <input
          id="link-url"
          name="link-url"
          className="link-url-input"
          type="text"
          placeholder="Paste any link here…"
          autoFocus
          value={imageUrl}
          onChange={handleChange}
        ></input>

        {imageUrl !== "" && (
          <>
            <label htmlFor="link-name">Link name (optional)</label>
            <input
              id="link-name"
              name="link-name"
              className="link-name-input"
              type="text"
              placeholder=""
              value={linkName}
              onChange={handleChange}
            ></input>
          </>
        )}

        <button className="btn btn-popover" onClick={onAttach}>
          Attach
        </button>
      </div>
    </PopoverCmp>
  );
};
