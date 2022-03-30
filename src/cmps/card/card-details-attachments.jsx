import { useDispatch } from "react-redux";
import { AttachmentThumbnail } from "./attachment-thumbnail";
import { LoaderCmp } from "../loader-cmp";

import { openPopover } from "../../store/actions/app.actions";

export const CardDetailsAttachments = ({ currCard, board }) => {
  const dispatch = useDispatch();

  const onOpenPopover = (ev, popoverName) => {
    ev.preventDefault();
    const elPos = ev.target.getBoundingClientRect();
    elPos.y = 550;
    const popoverProps = { board, currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  if (!currCard) return <LoaderCmp mode={"full"} />;
  return (
    <div className="card-details-attachments ">
      <div className="card-details-title">
        <span className="trl icon-attachment icon-lg card-details-title-icon"></span>

        <h3>Attachments</h3>
      </div>

      <div className="attachments-container">
        <div className="attachments-list">
          {currCard.attachments.map((attachment) => (
            <AttachmentThumbnail
              key={attachment._id}
              attachment={attachment}
              currCard={currCard}
              board={board}
            />
          ))}
        </div>

        <div>
          <button
            className="btn btn-sub"
            onClick={(ev) => onOpenPopover(ev, "ATTACHMENT")}
          >
            Add an attachment
          </button>
        </div>
      </div>
    </div>
  );
};
