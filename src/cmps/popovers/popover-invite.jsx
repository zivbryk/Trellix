import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { PopoverCmp } from "./popover-cmp";
import { MemberAvatar } from "../member-avatar";

import { loadUsers } from "../../store/actions/user.actions";
import { onEditBoard } from "../../store/actions/board.actions";

export const PopoverInvite = ({ elPos, handleClose }) => {
  const users = useSelector((state) => state.userReducer.users);
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();
  const [filterBy, setFilterBy] = useState({ txt: "" });
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users, board]);

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

  const isBoardMember = (user) => {
    return board.boardMembers.find(
      (boardMember) => boardMember._id === user._id
    );
  };

  const toggleMember = (boardMember) => {
    const clonedBoard = _.cloneDeep(board);
    const memberIdx = clonedBoard.boardMembers.findIndex(
      (member) => member._id === boardMember._id
    );
    if (memberIdx !== -1) clonedBoard.boardMembers.splice(memberIdx, 1);
    else clonedBoard.boardMembers.unshift(boardMember);
    dispatch(onEditBoard(clonedBoard));
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
          <h4>Contacts</h4>
          <ul className="member-list clean-list">
            {filteredUsers.map((user) => (
              <li
                key={user._id}
                className={`${false ? "selected" : ""} `}
                onClick={() => {
                  toggleMember(user);
                }}
              >
                <div title={`${user.fullname} (${user.username})`}>
                  <MemberAvatar size={"32"} member={user} />
                  <span>{`${user.fullname} (${user.username})`}</span>
                  <span
                    className={`icon-sm trl icon-check ${
                      isBoardMember(user) ? "active" : ""
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
