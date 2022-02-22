import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadBoard } from "../store/actions/board.actions";
import { BoardHeader } from "../cmps/board/board-header";
import { LoaderCmp } from "../cmps/loader-cmp";
import { CardsList } from "../cmps/list/cards-list";
import { CardsListAdd } from "../cmps/list/cards-list-add";

export const BoardPage = () => {
  const board = useSelector((state) => state.boardReducer.board);
  const params = useParams();
  const dispatch = useDispatch();

  const { boardId } = params;
  useEffect(() => {
    dispatch(loadBoard(boardId));
  }, [dispatch, boardId]);

  if (!board) return <LoaderCmp />;
  return (
    <section className="board-page flex column">
      <BoardHeader board={board} />
      <div className="board-canvas">
        <div className="lists-container">
          {board.lists.map((list) => (
            <CardsList list={list} board={board} key={list.id} />
          ))}
          <CardsListAdd board={board} />
        </div>
      </div>
    </section>
  );
};
