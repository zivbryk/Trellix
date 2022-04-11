import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoaderCmp } from "../../cmps/loader-cmp";

export function BoardPreview({ board, isStarredContainer }) {
  const loggedInUser = useSelector((state) => state.userReducer.loggedInUser);

  if (!board || !loggedInUser) return <LoaderCmp />;
  return (
    <li className="board-preview">
      <Link to={`/board/${board._id}`} key={board._id}>
        <div
          className="board-tile"
          style={
            board.style.isImage
              ? {
                  background: `url(${board.style.cover}) center center / cover`,
                }
              : {
                  background: `${board.style.cover}`,
                }
          }
        >
          <span className="board-tile-fade"></span>
          <div className="board-tile-details flex column space-between">
            <div className="board-name">
              <div>{board.title}</div>
            </div>

            <div className="tile-sub-container">
              {isStarredContainer && (
                <>
                  <span className="owner-name">{`${loggedInUser.fullname}'s worlkspace`}</span>
                  <span className="tile-options ">
                    <span className="icon-sm trl icon-starred"></span>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
