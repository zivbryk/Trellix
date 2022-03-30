// import { useState, useEffect } from "react";
// import analyze from "rgbaster";

import { cloudinaryService } from "../../services/cloudinary-service";

export const CoverAttachments = ({
  currCard,
  onSetCoverImage,
  imageUrl,
  onSaveNewAttachment,
}) => {
  ////////////////////////////////////////////////////////////
  /* This code allows img dominant color detection but slows execution due to multiple async calls */
  //   const [dominantColors, setDominantColors] = useState([]);

  //   useEffect(() => {
  //     (async () => {
  //       let colors = [];
  //       await currCard.attachments.forEach(async (attachment) => {
  //         const colorPalette = await analyze(attachment.url);
  //         const dominantColor = colorPalette[1].color;
  //         colors.push(dominantColor);
  //         if (currCard.attachments.length === colors.length) {
  //           setDominantColors(colors);
  //         }
  //       });
  //     })();
  //   }, [currCard]);
  ////////////////////////////////////////////////////////////

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
    }
  };

  const getStyle = (url, idx) => {
    return {
      //   backgroundColor: `${dominantColors[idx]}`,
      backgroundImage: `url(${url})`,
      backgroundSize: "contain",
    };
  };

  return (
    <div className="cover-attachments">
      <div className="attachments-container">
        {currCard.attachments.map((attachment, idx) => (
          <button
            key={attachment._id}
            style={getStyle(attachment.url, idx)}
            className={`btn ${imageUrl === attachment.url ? "focus" : ""}`}
            onClick={() => onSetCoverImage(attachment.url)}
          ></button>
        ))}
      </div>
      <div className="upload-container">
        <label className="btn btn-popover upload-btn">
          <input
            type="file"
            onChange={(ev) => onUploadImg(ev)}
            accept="img/*"
            id="file-upload"
          />{" "}
          Upload a cover image
        </label>
      </div>
    </div>
  );
};
