import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopoverCmp } from "./popover-cmp";
import { MemberAvatar } from "../member-avatar";

import { loadUsers } from "../../store/actions/user.actions";
import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";

export const PopoverInvite = ({ elPos, handleClose, board }) => {
  const users = useSelector((state) => state.UserReducer.users);
  const dispatch = useDispatch();
  const [filterBy, setFilterBy] = useState({ txt: "" });
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(board.BoardMembers);
  }, [board]);

  useEffect(() => {
    const filteredList = board.boardMembers.filter(
      (boardMember) =>
        boardMember.fullname
          .toLowerCase()
          .includes(filterBy.txt.toLowerCase()) &&
        boardMember.username.toLowerCase().includes(filterBy.txt.toLowerCase())
    );
    setFilteredUsers(filteredList);
  }, [filterBy.txt, board.boardMembers]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterBy({ txt: value });
  };

  const isBoardMember = (member) => {
    return board.boardMembers.find(
      (boardMember) => boardMember._id === member._id
    );
  };

  const toggleMember = (boardMember) => {
    // const updatedCard = { ...currCard };
    // const memberIdx = updatedCard.cardMembers.findIndex(
    //   (cardMember) => cardMember._id === boardMember._id
    // );
    // if (memberIdx !== -1) updatedCard.cardMembers.splice(memberIdx, 1);
    // else updatedCard.cardMembers.unshift(boardMember);
    // const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    // dispatch(onEditBoard(updatedBoard));
  };

  return (
    <PopoverCmp title="Invite to board" handleClose={handleClose} elPos={elPos}>
      <div className="popover-members-content">
        <input
          type="text"
          placeholder="Enter name..."
          value={filterBy.txt}
          onChange={handleChange}
          autoFocus
        />

        <div className="board-members">
          <h4>Users</h4>
          <ul className="member-list clean-list">
            {filteredUsers.map((member) => (
              <li
                key={member._id}
                className={`${false ? "selected" : ""} `}
                onClick={() => {
                  toggleMember(member);
                }}
              >
                <div title={`${member.fullname} (${member.username})`}>
                  <MemberAvatar size={"32"} member={member} />
                  <span>{`${member.fullname} (${member.username})`}</span>
                  <span
                    className={`icon-sm trl icon-check ${
                      isBoardMember(member) ? "active" : ""
                    }`}
                  ></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PopoverCmp>
  );
};
