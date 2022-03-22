import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";
import { ImagePalette } from "../popovers/image-palette";
import { ReactComponent as CloseIcon } from "../../assets/img/icons/close.svg";
import { LoaderCmp } from "../loader-cmp";

import { openPopover } from "../../store/actions/app.actions";

export const PopverPhotoSearch = ({
  elPos,
  handleClose,
  currCard,
  board,
  onSetCoverImage,
}) => {
  const searchInput = useRef(null);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onBack = () => {
    const popoverProps = { currCard, board, elPos };
    dispatch(openPopover("COVER", elPos, popoverProps));
  };

  const tags = [
    "Productivity",
    "Perspective",
    "Organization",
    "Colorful",
    "Nature",
    "business",
    "Minimal",
    "Space",
    "Animals",
  ];

  // useEffect(() => {
  //   if
  // }, [keyword]);

  const handleChange = ({ target }) => {
    const { value } = target;
    value !== "" ? setIsSearching(true) : setIsSearching(false);
    setKeyword(value);
  };

  const onSetKeywordSearch = (tag) => {
    setKeyword(tag);
    setIsSearching(true);
    searchInput.current.select();
  };

  const onCloseSearch = () => {
    setKeyword("");
    setIsSearching(false);
  };

  return (
    <PopoverCmp
      title="Photo search"
      handleClose={handleClose}
      elPos={elPos}
      onBack={onBack}
    >
      <div className="popover-photo-search-content">
        <div>
          <div>
            <input
              type="text"
              placeholder="Search Unsplash for photos"
              autoFocus
              value={keyword}
              ref={searchInput}
              onChange={handleChange}
            />

            {isSearching && (
              <button className="btn" onClick={onCloseSearch}>
                <span className="">
                  <span>
                    <CloseIcon />
                  </span>
                </span>
              </button>
            )}
          </div>

          {!isSearching && (
            <div>
              <h4 className="suggested-searches">Suggested searches</h4>
              {tags.map((tag) => (
                <button
                  className="btn btn-popover"
                  key={tag}
                  onClick={() => onSetKeywordSearch(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          <div className="photo-gallery">
            {isSearching ? <h4>Results</h4> : <h4>Top photos</h4>}
            <ImagePalette
              onSetCoverImage={onSetCoverImage}
              perPage={isSearching ? "300" : "12"}
              keyword={keyword}
              isSearching={isSearching}
              setIsLoading={setIsLoading}
            />
            <div className="unsplash-footer">
              <div>
                Photos from
                <span> </span>
                <a href="https://unsplash.com/">Unsplash</a>
              </div>

              {isLoading && (
                <div className="flex">
                  <LoaderCmp mode={"block"} />
                  <span>Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PopoverCmp>
  );
};
