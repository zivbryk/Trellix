import { useState, useEffect, useCallback } from "react";

import { unSplashService } from "../../services/unsplash.service";

export const ImagePalette = ({
  onSetCoverImage,
  perPage,
  keyword,
  isSearching,
}) => {
  const [imgs, setImgs] = useState(null);

  const loadImgs = useCallback(async () => {
    try {
      const searchTerm = keyword ? keyword : "16:9";
      const resImages = await unSplashService.getImgs(searchTerm, "1", perPage);
      setImgs(resImages);
    } catch (err) {
      console.log(err);
    }
  }, [perPage, keyword]);

  useEffect(() => {
    loadImgs();
  }, [loadImgs]);

  if (!imgs) return <div></div>;
  return (
    <div className={`image-palette ${isSearching ? "large-images" : ""}`}>
      {imgs.map((img) => (
        <div key={img.id}>
          <button
            className="btn single-image"
            style={{ backgroundImage: `url(${img.small})` }}
            onClick={() => onSetCoverImage(img.small)}
          >
            <div>
              <a href={img.small} title={img.artistName}>
                {img.artistName}
              </a>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};
