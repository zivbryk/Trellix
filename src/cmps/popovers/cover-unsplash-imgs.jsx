import { useState, useEffect } from "react";

import { unSplashService } from "../../services/unsplash.service";

export const CoverUnsplashImages = () => {
  const [imgs, setImgs] = useState(null);
  const [keyword, setKeyword] = useState(null);

  useEffect(() => {
    loadImgs();
  }, []);

  const loadImgs = async () => {
    try {
      const resImages = await unSplashService.getTenImgs();
      setImgs(resImages);
    } catch (err) {
      console.log(err);
    }
  };

  if (!imgs) return <div></div>;
  return (
    <div className="cover-unsplash-images">
      <div>
        {imgs.map((img) => (
          <div key={img.id}>
            <button
              className="btn"
              style={{ backgroundImage: `url(${img.small})` }}
            ></button>
          </div>
        ))}
      </div>
      <button></button>
    </div>
  );
};
