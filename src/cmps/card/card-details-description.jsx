import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { TextareaAutosize } from "@mui/material";
import { LoaderCmp } from "../loader-cmp";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";

export const CardDetailsDescription = ({ currCard, board }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");
  const descTextArea = useRef(null);

  useEffect(() => {
    if (currCard?.description) setDescription(currCard.description);
  }, [currCard]);

  useEffect(() => {
    if (isEditing) {
      descTextArea.current.select();
      descTextArea.current.focus();
    }
  }, [isEditing]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setDescription(value);
  };

  const onCloseEditor = (ev) => {
    if (ev.relatedTarget?.contains(ev.target)) {
      return;
    } else if (
      ev.relatedTarget?.id !== "btn-save" &&
      ev.relatedTarget?.id !== "btn-close" &&
      ev.relatedTarget?.id !== "description-input"
    ) {
      onSaveDescription();
      setIsEditing(false);
    }
  };

  const onSaveDescription = () => {
    const updatedCard = { ...currCard };
    updatedCard.description = description;
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
    setIsEditing(false);
  };

  if (!currCard) return <LoaderCmp mode={"full"} />;
  return (
    <div className="card-details-description" tabIndex="0">
      <div className="flex align-center card-details-title" tabIndex="0">
        <span className="trl icon-description icon-lg card-details-title-icon"></span>

        <h3 tabIndex="0">Description</h3>

        <button
          className={`btn btn-sub ${isEditing ? "transparent" : ""}`}
          onClick={() => setIsEditing(true)}
          tabIndex="0"
        >
          Edit
        </button>
      </div>

      {!isEditing && (
        <p className="pointer" onClick={() => setIsEditing(true)} tabIndex="0">
          {currCard.description}
        </p>
      )}

      {currCard.description === "" && !isEditing && (
        <p
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <div className="description-fake-text">
            Add a more detailed description…
          </div>
        </p>
      )}

      {isEditing && (
        <div className="description-edit" tabIndex="0">
          <TextareaAutosize
            id="description-input"
            dir="auto"
            placeholder="Add a more detailed description…"
            value={description}
            onChange={handleChange}
            autoFocus
            ref={descTextArea}
            onBlur={onCloseEditor}
          />

          <div className="edit-controls flex">
            <button
              id="btn-save"
              className="btn btn-primary"
              onClick={onSaveDescription}
            >
              Save
            </button>

            <button className="btn">
              <span
                id="btn-close"
                className="trl icon-close icon-lg"
                onClick={() => setIsEditing(false)}
                tabIndex="0"
              ></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
