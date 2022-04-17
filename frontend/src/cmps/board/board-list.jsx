import { BoardPreview } from "./board-preview.jsx";

export function BoardList({ boards, filterBy = null }) {
  return (
    <section className="board-list">
      <ul className="board-list-container flex justify-start wrap clean-list">
        {filterBy
          ? boards
              .filter((board) => board[filterBy])
              .map((board) => (
                <BoardPreview
                  key={board._id}
                  board={board}
                  isStarredContainer={true}
                />
              ))
          : boards.map((board) => (
              <BoardPreview key={board._id} board={board} />
            ))}
      </ul>
    </section>
  );
}
