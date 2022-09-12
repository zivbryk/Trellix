import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import _ from "lodash";

import { BoardHeader } from "../cmps/board/board-header";
import { LoaderCmp } from "../cmps/loader-cmp";
import { CardsList } from "../cmps/list/cards-list";
import { CardDetails } from "../pages/card-details";
import { ListAddCmp } from "../cmps/list/list-add-cmp";
import { BoardDashboard } from "../pages/board-dashboard";

import { onEditBoard } from "../store/actions/board.actions";
import { loadBoard } from "../store/actions/board.actions";
import { closePopover } from "../store/actions/app.actions";

export const BoardPage = () => {
  const board = useSelector((state) => state.boardReducer.board);
  const params = useParams();
  const dispatch = useDispatch();

  const { boardId } = params;
  useEffect(() => {
    dispatch(loadBoard(boardId));
  }, [dispatch, boardId]);

  const onDeleteList = async (list) => {
    console.log("Deleting List!");
    const clonedBoard = await _.cloneDeep(board);
    const listIdx = clonedBoard.lists.findIndex(
      (boardList) => boardList.id === list.id
    );
    clonedBoard.lists.splice(listIdx, 1);
    dispatch(onEditBoard(clonedBoard));
    dispatch(closePopover());
  };

  const onDragEnd = (result) => {
    const { destination, source, type } = result;
    let boardToEdit = { ...board };
    const { lists } = boardToEdit;
    if (!destination) return;
    const droppableIdStart = source.droppableId;
    const droppableIdEnd = destination.droppableId;
    const droppableIdxStart = source.index;
    const droppableIdxEnd = destination.index;
    // Dragging lists around (Must be the first option, for other "if" statments not to happen)
    if (type === "list") {
      const list = lists.splice(droppableIdxStart, 1);
      lists.splice(droppableIdxEnd, 0, ...list);
      boardToEdit.lists = lists;
      dispatch(onEditBoard(boardToEdit));
      return;
    }
    //In the same list
    if (droppableIdStart === droppableIdEnd) {
      const list = lists.find((list) => droppableIdStart === list.id);
      const card = list.cards.splice(droppableIdxStart, 1);
      list.cards.splice(droppableIdxEnd, 0, ...card);
      const listIdx = lists.indexOf(list);
      lists[listIdx] = list;
    }
    //Other list
    if (droppableIdStart !== droppableIdEnd) {
      // Find the list where drag happend
      const listStart = lists.find((list) => droppableIdStart === list.id);
      //Pull out the card from the list
      const card = listStart.cards.splice(droppableIdxStart, 1);
      //find the list where the drag ended
      const listEnd = lists.find((list) => droppableIdEnd === list.id);
      //Put the card in the new list
      listEnd.cards.splice(droppableIdxEnd, 0, ...card);
      const listStartIdx = lists.indexOf(listStart);
      const listEndIdx = lists.indexOf(listEnd);
      lists[listStartIdx] = listStart;
      lists[listEndIdx] = listEnd;
    }

    boardToEdit.lists = lists;
    dispatch(onEditBoard(boardToEdit));
  };

  if (!board) return <LoaderCmp mode={"full-page"} />;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className="board-page flex column">
        <BoardHeader board={board} />
        <div className="board-canvas">
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <div
                className="lists-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {board.lists.map((list, idx) => (
                  <CardsList
                    list={list}
                    board={board}
                    key={list.id}
                    listIdx={idx}
                    onDeleteList={onDeleteList}
                  />
                ))}
                <ListAddCmp board={board} />
                <span style={{ display: "none" }}>{provided.placeholder}</span>
              </div>
            )}
          </Droppable>
        </div>
      </section>

      <section className="nested-routes">
        <Routes>
          <Route path=":listId/:cardId" element={<CardDetails />} />
          <Route path="/dashboard" element={<BoardDashboard />} />
        </Routes>
      </section>
    </DragDropContext>
  );
};
