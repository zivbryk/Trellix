import { useDispatch } from "react-redux";
import { ImagePalette } from "../popovers/image-palette";

import { openPopover } from "../../store/actions/app.actions";

export const CoverUnsplashImages = ({
  onSetCoverImage,
  currCard,
  board,
  PopoverCoverPos,
}) => {
  const dispatch = useDispatch();

  const onOpenPopver = (ev) => {
    const elPos = PopoverCoverPos;
    const popoverProps = { currCard, board, onSetCoverImage };
    dispatch(openPopover("PHOTO-SEARCH", elPos, popoverProps));
  };

  return (
    <div className="cover-unsplash-images">
      <ImagePalette onSetCoverImage={onSetCoverImage} perPage={"6"} />
      <button className="btn btn-popover" onClick={(ev) => onOpenPopver(ev)}>
        Search for photos
      </button>
    </div>
  );
};
