import { AttachmentThumbnail } from "./attachment-thumbnail";
import { LoaderCmp } from "../loader-cmp";

export const CardDetailsAttachments = ({ currCard, board }) => {
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
            <AttachmentThumbnail key={attachment._id} attachment={attachment} />
          ))}
        </div>

        <button className="btn btn-sub">Add an attachment</button>
      </div>
    </div>
  );
};
