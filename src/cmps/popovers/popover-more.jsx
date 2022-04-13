import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { PopoverCmp } from "./popover-cmp";
import { ReactComponent as IconForward } from "../../assets/img/icons/forward-icon.svg";

import { closePopover } from "../../store/actions/app.actions";
import { openPopover } from "../../store/actions/app.actions";

export const PopoverMore = ({ elPos, handleClose, onDeleteCard }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onGoToWorkspace = () => {
    navigate("/");
    dispatch(closePopover());
  };

  const onOpenPopover = (ev, popoverName) => {
    const popoverProps = { mod: "menu" };
    // if (popoverName === "STARRED-BOARDS") {
    //   popoverProps = { mod: "menu" };
    // }
    // else if (popoverName === "CREATE") {
    //   popoverProps = {};
    // }

    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <PopoverCmp title={`More`} handleClose={handleClose} elPos={elPos}>
      <div className="popover-more-content">
        <div className="button-wrapper" onClick={onGoToWorkspace}>
          <button className="btn flex align-center">
            <span>Workspace</span>

            <span>
              <span>
                <IconForward />
              </span>
            </span>
          </button>
        </div>

        <div
          className="button-wrapper"
          onClick={(ev) => onOpenPopover(ev, "STARRED-BOARDS")}
        >
          <button className="btn flex align-center">
            <span>Starred</span>

            <span>
              <span>
                <IconForward />
              </span>
            </span>
          </button>
        </div>

        <div
          className="button-wrapper"
          onClick={(ev) => onOpenPopover(ev, "CREATE")}
        >
          <button className="btn flex align-center">
            <span>Create</span>

            <span>
              <span>
                <IconForward />
              </span>
            </span>
          </button>
        </div>
      </div>
    </PopoverCmp>
  );
};
