import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";
import { MemberAvatar } from "../member-avatar";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";

export const PopoverMembers = ({ elPos, handleClose, currCard, board }) => {
  const dispatch = useDispatch();
  const [filterBy, setFilterBy] = useState({ txt: "" });
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    setFilteredMembers(board.BoardMembers);
  }, [board]);

  useEffect(() => {
    const filteredList = board.boardMembers.filter((boardMember) => {
      console.log(boardMember);
      return (
        boardMember.fullname
          .toLowerCase()
          .includes(filterBy.txt.toLowerCase()) &&
        boardMember.username.toLowerCase().includes(filterBy.txt.toLowerCase())
      );
    });
    setFilteredMembers(filteredList);
  }, [filterBy.txt, board.boardMembers]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterBy({ txt: value });
  };

  const isCardMember = (member) => {
    return currCard.cardMembers.find(
      (cardMember) => cardMember._id === member._id
    );
  };

  const toggleMember = (boardMember) => {
    const updatedCard = { ...currCard };
    const memberIdx = updatedCard.cardMembers.findIndex(
      (cardMember) => cardMember._id === boardMember._id
    );
    if (memberIdx !== -1) updatedCard.cardMembers.splice(memberIdx, 1);
    else updatedCard.cardMembers.unshift(boardMember);

    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  return (
    <PopoverCmp title="Members" handleClose={handleClose} elPos={elPos}>
      <div className="popover-members-content">
        <input
          type="text"
          placeholder="Search members"
          value={filterBy.txt}
          onChange={handleChange}
          autoFocus
        />

        <div className="board-members">
          <h4>Board members</h4>
          <ul className="member-list clean-list">
            {filteredMembers.map((member) => (
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
                      isCardMember(member) ? "active" : ""
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
