import { useDispatch } from "react-redux";

import { PopoverCmp } from "../popovers/popover-cmp";
import { BoardColorPalette } from "../popovers/board-color-palette";

import { openPopover } from "../../store/actions/app.actions";

export const PopoverBoardBgColors = ({
  elPos,
  handleClose,
  board,
  onSetCoverColor,
}) => {
  const dispatch = useDispatch();

  const onBack = () => {
    const popoverProps = { board, elPos };
    dispatch(openPopover("CHANGE-BACKGROUND", elPos, popoverProps));
  };

  if (!board) return <div></div>;

  return (
    <PopoverCmp
      title={"Colors"}
      handleClose={handleClose}
      elPos={elPos}
      mod={"menu"}
      onBack={onBack}
      menuType={"colors"}
    >
      <div className="popover-board-bg-colors-content">
        <BoardColorPalette onSetCoverColor={onSetCoverColor} />
      </div>
    </PopoverCmp>
  );
};
