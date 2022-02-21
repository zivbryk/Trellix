import { Link } from "react-router-dom";
import { LoaderCmp } from "../../cmps/loader-cmp";

export function BoardPreview({ board }) {
  if (!board) return <LoaderCmp />;
  return (
    <li className="board-preview">
      <Link to={`/board/${board._id}`} key={board._id}>
        <div
          className="board-tile"
          style={{ background: `${board.style.cover} center center / cover ` }}
        >
          <div className="board-title">
            {/* {board.style.isImage && <img src={board.style.cover} alt="cover" />} */}
            <h3>{board.title}</h3>
          </div>
        </div>
      </Link>
    </li>
  );
}
