import { useDispatch } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverDeleteAttachment = ({
  elPos,
  handleClose,
  currCard,
  board,
  attachment,
}) => {
  const dispatch = useDispatch();

  const onDeleteAttachment = () => {
    const updatedCard = { ...currCard };
    const cardAttachmentIdx = updatedCard.attachments.findIndex(
      (cardAttachment) => cardAttachment._id === attachment._id
    );
    updatedCard.attachments.splice(cardAttachmentIdx, 1);
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
    dispatch(closePopover());
  };

  return (
    <PopoverCmp
      title="Delete attachment?"
      handleClose={handleClose}
      elPos={elPos}
    >
      <div className="popover-delete-attachment-content">
        <p>Deleting an attachment is permanent. There is no undo.</p>

        <button className="btn btn-danger" onClick={onDeleteAttachment}>
          Delete
        </button>
      </div>
    </PopoverCmp>
  );
};
