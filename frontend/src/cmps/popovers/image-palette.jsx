import { useState, useEffect, useCallback } from "react";

import { unSplashService } from "../../services/unsplash.service";

export const ImagePalette = ({
  saveCoverImage,
  onSetCoverImage,
  perPage,
  keyword,
  isSearching,
  setIsLoading,
  mod,
}) => {
  const [imgs, setImgs] = useState(null);

  const loadImgs = useCallback(async () => {
    try {
      if (setIsLoading) setIsLoading(true);
      const searchTerm = keyword ? keyword : "16:9";
      const resImages = await unSplashService.getImgs(searchTerm, "1", perPage);
      setImgs(resImages);
      if (setIsLoading) setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [perPage, keyword, setIsLoading]);

  useEffect(() => {
    loadImgs();
  }, [loadImgs]);

  if (!imgs) return <div className="empty"></div>;
  return (
    <>
      <div
        className={`image-palette ${isSearching ? "large-images" : ""} ${
          imgs.length === 0 ? "gallery-scroll" : ""
        } ${mod === "menu" ? "menu-height" : ""}`}
      >
        {imgs.map((img) => (
          <div key={img.id}>
            <button
              className="btn single-image"
              style={{ backgroundImage: `url(${img.small})` }}
              onClick={
                saveCoverImage
                  ? () => saveCoverImage(img.full)
                  : () => onSetCoverImage(img.small)
              }
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

      {imgs.length === 0 && (
        <div className="quiet">
          Sorry, your search didn't return any results. Please try again!
        </div>
      )}
    </>
  );
};
