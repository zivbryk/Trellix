export const AttachmentThumbnail = ({ attachment }) => {
  const getStyle = () => {
    return {
      backgroundImage: `url(${attachment.url})`,
      backgroundSize: "cover",
    };
  };

  return (
    <div className="attachment-thumbnail">
      <div className="thumbnail-preview" style={getStyle()}></div>

      <p className="thumbnail-details">
        <span className="thumbnail-name">{attachment.filename}</span>

        <a href={attachment.url}>
          <span className="icon-sm icon-external-link"></span>
        </a>

        <span className="thumbnail-details quiet">
          <span>
            Added
            <span className="date-passed">Added Feb 17 at 1:59 PM</span>
          </span>

          <span> - Delete</span>
        </span>
      </p>
    </div>
  );
};
