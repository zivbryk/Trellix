import { BoardPreview } from "./board-preview.jsx";

export function BoardList({ boards }) {
  return (
    <section className="board-list">
      <ul className="board-list-container flex justify-start wrap clean-list">
        {boards.map((board) => (
          <BoardPreview key={board._id} board={board} />
        ))}
      </ul>
    </section>
  );
}
