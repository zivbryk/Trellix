import { useDispatch } from "react-redux";
import { openPopover } from "../../store/actions/app.actions";

export const AttachmentThumbnail = ({ attachment, currCard, board }) => {
  const dispatch = useDispatch();

  const getStyle = () => {
    return {
      backgroundImage: `url(${attachment.url})`,
      backgroundSize: "contain",
    };
  };

  const getFormatedDueDate = () => {
    if (!attachment.uploadedAt) return "";
    return (
      " " +
      new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(attachment.uploadedAt) +
      " at " +
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
      }).format(attachment.uploadedAt)
    );
  };

  const onOpenPopover = (ev, popoverName) => {
    ev.preventDefault();
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { board, currCard, attachment };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <div className="attachment-thumbnail">
      <a href={attachment.url} className="thumbnail-preview" style={getStyle()}>
        {" "}
      </a>

      <a href={attachment.url}>
        <p className="thumbnail-details">
          <span className="thumbnail-name">{attachment.fileName}</span>

          <span>
            <span className="icon-sm trl icon-external-link"></span>
          </span>

          <span className="thumbnail-options quiet">
            <span>
              Added
              <span className="date-passed">{getFormatedDueDate()}</span>
            </span>

            <span>
              <span onClick={(ev) => onOpenPopover(ev, "DELETE-ATTACHMENT")}>
                Delete
              </span>
            </span>
          </span>
        </p>
      </a>
    </div>
  );
};
