import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PopoverProfile } from "../popovers/popover-profile";
import { PopoverAccount } from "../popovers/popover-account";
import { PopoverCover } from "../popovers/popover-cover";
import { PopoverPhotoSearch } from "../popovers/popover-photo-search";
import { PopoverMembers } from "../popovers/popover-members";
import { PopoverEditLabels } from "../popovers/popover-edit-labels";
import { PopoverAddEditLabel } from "../popovers/popover-add-edit-label";
import { PopoverDate } from "../popovers/popover-date";
import { PopoverDeleteAttachment } from "../popovers/Popover-delete-attachment";
import { PopoverAttachment } from "../popovers/popover-attachment";
import { PopoverDeleteChecklist } from "../popovers/popover-delete-checklist";
import { PopoverAddChecklist } from "../popovers/popover-add-checklist";
import { PopoverMove } from "../popovers/popover-move";
import { PopoverDeleteCard } from "../popovers/popover-delete-card";
import { PopoverListActions } from "../popovers/popover-list-actions";
import { PopoverMenu } from "../popovers/popover-menu";
import { PopoverChangeBackground } from "../popovers/popover-change-background";
import { PopoverUnsplashPhotos } from "../popovers/popover-unsplash-photos";
import { PopoverBoardBgColors } from "../popovers/popover-board-bg-colors";
import { PopoverArchive } from "../popovers/popover-archive";
import { PopoverCreate } from "../popovers/popover-create";
import { PopoverCreateBoard } from "../popovers/popover-create-board";
import { PopoverStarredBoards } from "../popovers/popover-starred-boards";
import { PopoverNotifications } from "../popovers/popover-notifications";
import { PopoverInvite } from "../popovers/popover-invite";
import { PopoverMore } from "../popovers/popover-more";
import { PopoverQuickCardEditor } from "../popovers/popover-quick-card-editor";

import { closePopover } from "../../store/actions/app.actions";

export const DynamicPopover = () => {
  const currPopover = useSelector((state) => state.appReducer.currPopover);
  const dispatch = useDispatch();

  const { name, elPos, popoverProps } = currPopover;

  const handleClose = () => {
    dispatch(closePopover());
  };

  switch (name) {
    case "PROFILE":
      return (
        <PopoverProfile
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "ACCOUNT":
      return (
        <PopoverAccount
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "COVER":
      return (
        <PopoverCover
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "PHOTO-SEARCH":
      return (
        <PopoverPhotoSearch
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "MEMBERS":
      return (
        <PopoverMembers
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "LABELS":
      return (
        <PopoverEditLabels
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "ADD-LABEL":
      return (
        <PopoverAddEditLabel
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "DATE":
      return (
        <PopoverDate
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "ATTACHMENT":
      return (
        <PopoverAttachment
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "DELETE-ATTACHMENT":
      return (
        <PopoverDeleteAttachment
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "DELETE-CHECKLIST":
      return (
        <PopoverDeleteChecklist
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "CHECKLIST":
      return (
        <PopoverAddChecklist
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "MOVE":
      return (
        <PopoverMove
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "DELETE-CARD":
      return (
        <PopoverDeleteCard
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "LIST-ACTIONS":
      return (
        <PopoverListActions
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "MENU":
      return (
        <PopoverMenu
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "CHANGE-BACKGROUND":
      return (
        <PopoverChangeBackground
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "UNSPLASH-PHOTOS":
      return (
        <PopoverUnsplashPhotos
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "BOARD-BG-COLORS":
      return (
        <PopoverBoardBgColors
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "ARCHIVE":
      return (
        <PopoverArchive
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "CREATE":
      return (
        <PopoverCreate
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "CREATE-BOARD":
      return (
        <PopoverCreateBoard
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "STARRED-BOARDS":
      return (
        <PopoverStarredBoards
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "NOTIFICATIONS":
      return (
        <PopoverNotifications
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "INVITE":
      return (
        <PopoverInvite
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "MORE":
      return (
        <PopoverMore
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    case "QUICK-CARD-EDITOR":
      return (
        <PopoverQuickCardEditor
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );

    default:
      return "";
  }
};
