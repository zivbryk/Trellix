import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDateTimePicker from "@mui/lab/StaticDateTimePicker";
import TextField from "@mui/material/TextField";
import { PopoverCmp } from "../popovers/popover-cmp";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverDate = ({ elPos, handleClose, currCard, board }) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date(Date.now()));
  const [isDueDate, setIsDueDate] = useState(false);

  useEffect(() => {
    if (currCard) {
      setDate(currCard.dueDate);
      date ? setIsDueDate(true) : setIsDueDate(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currCard]);

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  const getFormatedDueDate = () => {
    if (!date) return "";
    if (!isDueDate) return "M/D/YYYY";
    return new Intl.DateTimeFormat("en-GB").format(date);
  };

  const getFormatedDueTime = () => {
    if (!date) return "";
    if (!isDueDate) return "M/D/YYYY";
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  const toggleDueDate = () => {
    setIsDueDate(!isDueDate);
  };

  const saveDueDate = () => {
    const updatedCard = { ...currCard };
    isDueDate ? (updatedCard.dueDate = date) : (updatedCard.dueDate = null);
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
    dispatch(closePopover());
  };

  const removeDueDate = async () => {
    setIsDueDate(false);
    const updatedCard = { ...currCard };
    updatedCard.dueDate = null;
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
    dispatch(closePopover());
  };

  return (
    <PopoverCmp
      title="Dates"
      handleClose={handleClose}
      elPos={elPos}
      releaseWidth={true}
    >
      <div className="popover-date-content">
        <div className="calendar-container">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateTimePicker
              displayStaticWrapperAs="desktop"
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={date}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
              openTo="day"
              toolbarTitle=""
            />
          </LocalizationProvider>
        </div>

        {/* {console.log(date)} */}

        <div className="selected-due">
          <label>Due date</label>
          <div className="date-time-container">
            <button
              className={`btn complete-checkbox  ${
                isDueDate ? "isComplete" : ""
              }`}
              onClick={toggleDueDate}
            >
              <span className="trl icon-check"></span>
            </button>

            <span
              className={`date-container ${isDueDate ? "is-due-date" : ""}`}
            >
              {getFormatedDueDate()}
            </span>

            <span
              className={`time-container ${isDueDate ? "is-due-date" : ""}`}
            >
              {" "}
              {getFormatedDueTime()}
            </span>
          </div>
        </div>

        <div className="date-btns flex column">
          <button className="btn btn-primary" onClick={saveDueDate}>
            Save
          </button>
          <button className="btn btn-popover" onClick={removeDueDate}>
            Remove
          </button>
        </div>
      </div>
    </PopoverCmp>
  );
};
