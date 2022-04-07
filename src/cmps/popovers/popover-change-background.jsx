import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { PopoverCmp } from "../popovers/popover-cmp";

import { openPopover } from "../../store/actions/app.actions";
import { cloudinaryService } from "../../services/cloudinary-service";
import { onEditBoard } from "../../store/actions/board.actions";
import { utilService } from "../../services/util.service";

export const PopoverChangeBackground = ({ elPos, handleClose }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();

  const onBack = () => {
    const popoverProps = { board, elPos };
    dispatch(openPopover("MENU", elPos, popoverProps));
  };

  const onOpenPopover = (ev, popoverName) => {
    const elPos = ev.target.getBoundingClientRect();
    let popoverProps = {};
    if (popoverName === "UNSPLASH-PHOTOS") {
      popoverProps = { board, saveCoverImage };
    } else if (popoverName === "BOARD-BG-COLORS") {
      popoverProps = { board, onSetCoverColor };
    } else {
      popoverProps = { board };
    }
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  //Images//
  const saveCoverImage = (url) => {
    const clonedBoard = _.cloneDeep(board);
    clonedBoard.style.cover = url;
    clonedBoard.style.isImage = true;
    dispatch(onEditBoard(clonedBoard));
  };

  //Colors//
  const onSetCoverColor = (colorCode) => {
    saveCoverColor(colorCode);
  };

  const saveCoverColor = (colorCode) => {
    const clonedBoard = _.cloneDeep(board);
    clonedBoard.style.cover = colorCode;
    clonedBoard.style.isImage = false;
    dispatch(onEditBoard(clonedBoard));
  };

  //Attachments//
  const saveNewAttachment = (attachment) => {
    const clonedBoard = _.cloneDeep(board);
    clonedBoard.style.cover = attachment.url;
    clonedBoard.style.isImage = true;
    clonedBoard.style.boardCoverAttachments.push(attachment);
    dispatch(onEditBoard(clonedBoard));
  };

  const onSaveNewAttachment = (url, fileName, format) => {
    const attachment = {
      _id: utilService.makeId(),
      url,
      fileName: `${fileName}.${format.toLowerCase()}`,
      format,
      uploadedAt: Date.now(),
    };

    saveNewAttachment(attachment);
  };

  const onDeleteAttachment = (ev, attachmentId) => {
    ev.stopPropagation();
    const clonedBoard = _.cloneDeep(board);
    const attachmentIdx = clonedBoard.style.boardCoverAttachments.findIndex(
      (attachment) => attachment._id === attachmentId
    );
    clonedBoard.style.boardCoverAttachments.splice(attachmentIdx, 1);
    dispatch(onEditBoard(clonedBoard));
  };
  const onUploadImg = async (ev) => {
    try {
      const {
        secure_url: url,
        format,
        original_filename: fileName,
      } = await cloudinaryService.uploadImg(
        ev.target.files[0],
        "board-attachments"
      );
      //Add a check here that the img is valid
      onSaveNewAttachment(url, fileName, format);
    } catch (err) {
      console.log("url faild to arrive from cloudinary:", err);
      //TODO:display error message window
    }
  };

  if (!board) return <div></div>;
  return (
    <PopoverCmp
      title="Change background"
      handleClose={handleClose}
      elPos={elPos}
      mod={"menu"}
      onBack={onBack}
      menuType={""}
    >
      <div className="popover-change-background-content">
        <div className="change-background-tiles">
          <div
            className="change-background-tile"
            onClick={(ev) => onOpenPopover(ev, "UNSPLASH-PHOTOS")}
          >
            <div
              className="image"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/zivcloud555/image/upload/v1649321941/Trellis%20permanent%20img/Background/change-bg-photos_wt2lvi.jpg)`,
              }}
            ></div>

            <div className="title flex justify-center">Photos</div>
          </div>

          <div
            className="change-background-tile"
            onClick={(ev) => onOpenPopover(ev, "BOARD-BG-COLORS")}
          >
            <div
              className="image"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/zivcloud555/image/upload/v1649322021/Trellis%20permanent%20img/Background/change-bg-colors_tk5qcd.jpg)`,
              }}
            ></div>

            <div className="title flex justify-center">Colors</div>
          </div>
        </div>

        <hr />

        <h2>Custom</h2>

        <div className="custom-list">
          <div className="background-select background-select-upload">
            <label htmlFor="file-upload" className="background-box">
              <span className="icon-lg trl icon-add"></span>
              <input
                type="file"
                onChange={(ev) => onUploadImg(ev)}
                accept="img/*"
                id="file-upload"
              />
            </label>
          </div>

          {board.style.boardCoverAttachments.map((attachment) => (
            <div key={attachment._id} className="background-select">
              <span
                className="background-box"
                style={{
                  backgroundImage: `url(${attachment.url})`,
                  backgroundSize: "100%",
                }}
                onClick={() => {
                  saveCoverImage(attachment.url);
                }}
              >
                <button className="btn bg-options">
                  <span className="icon-sm trl icon-close"></span>
                  <span
                    className="text"
                    onClick={(ev) => onDeleteAttachment(ev, attachment._id)}
                  >
                    Delete
                  </span>
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </PopoverCmp>
  );
};
