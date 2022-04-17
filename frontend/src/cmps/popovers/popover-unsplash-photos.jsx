import { useState } from "react";
import { useDispatch } from "react-redux";

import { PopoverCmp } from "../popovers/popover-cmp";
import { ImagePalette } from "../popovers/image-palette";
import { LoaderCmp } from "../loader-cmp";

import { openPopover } from "../../store/actions/app.actions";

export const PopoverUnsplashPhotos = ({
  elPos,
  handleClose,
  board,
  saveCoverImage,
}) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onBack = () => {
    const popoverProps = { board, elPos };
    dispatch(openPopover("CHANGE-BACKGROUND", elPos, popoverProps));
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setKeyword(value);
  };

  if (!board) return <div></div>;
  return (
    <PopoverCmp
      title={
        <span>
          Photos by{" "}
          <a className="unsplash-link" href="https://unsplash.com/">
            Unsplash
          </a>
        </span>
      }
      handleClose={handleClose}
      elPos={elPos}
      mod={"menu"}
      onBack={onBack}
      menuType={"unsplash-photos"}
    >
      <div className="popover-unsplash-photos-content">
        <div className="search-photos">
          <input
            type="text"
            placeholder="Photos"
            value={keyword}
            onChange={handleChange}
          />
          <span className="icon-sm trl icon-search"></span>
        </div>

        <div className="board-background-list">
          {isLoading && (
            <div className="flex">
              <LoaderCmp mode={"block"} />
            </div>
          )}

          <ImagePalette
            saveCoverImage={saveCoverImage}
            perPage={"100"}
            keyword={keyword}
            isSearching={true}
            setIsLoading={setIsLoading}
            mod="menu"
          />
        </div>
      </div>
    </PopoverCmp>
  );
};
