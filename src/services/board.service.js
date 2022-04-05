import { storageService } from "./async-storage.service.js";
import { showErrorMsg } from "../services/event-bus.service";
import { utilService } from "./util.service.js";
import _ from "lodash";
import { boards } from "../frontTempData/boards";

const STORAGE_KEY = "board";
storageService.load(STORAGE_KEY, boards);
// const listeners = [];

export const boardService = {
  // loadDataManual,
  query,
  getById,
  save,
  //   remove,
  //   getEmptyBoard,
  getEmptyList,
  getEmptyCard,
  updateCardInBoard,
  //   subscribe,
};
// window.cs = boardService;

//REMOVE_COMMENT: Remove after connecting Backend
// function loadDataManual(entities) {
//   storageService.load(STORAGE_KEY, entities);
// }

function query() {
  try {
    return storageService.query(STORAGE_KEY);
  } catch (err) {
    showErrorMsg("Cannot rerieve board");
    console.log("board.service: err @ query", err);
  }
}

function getById(boardId) {
  try {
    return storageService.get(STORAGE_KEY, boardId);
  } catch (err) {
    showErrorMsg("Cannot find board");
    console.log("board.service: err @ getById", err);
  }
}

function save(board) {
  try {
    if (board._id) {
      return storageService.put(STORAGE_KEY, board);
    } else {
      // board.owner = userService.getLoggedinUser();
      return storageService.post(STORAGE_KEY, board);
    }
  } catch (err) {
    showErrorMsg("Cannot save board");
    console.log("board.service: err @ save", err);
  }
}

function getEmptyList(listTitle) {
  return {
    id: utilService.makeId(),
    title: listTitle,
    cards: [],
  };
}

function getEmptyCard(cardTtile = "") {
  return {
    id: utilService.makeId(),
    title: cardTtile,
    style: {
      cover: null,
      isImage: true,
    },
    byMember: "loggedinUser",
    description: "",
    labelIds: [],
    cardMembers: [],
    isWatched: false,
    createdAt: Date.now(),
    startDate: 0,
    dueDate: null,
    attachments: [],
    checklists: [],
    comments: [],
    isComplete: false,
    archiveData: {
      isArchived: false,
      sourceBoardId: null,
      sourceListId: null,
    },
  };
}

function updateCardInBoard(board, updatedCard) {
  let boardToSave = _.cloneDeep(board);

  boardToSave.lists.forEach((list) => {
    list.cards.forEach((card, idx) => {
      if (card.id === updatedCard.id) list.cards[idx] = updatedCard;
    });
  });

  return boardToSave;
}

// function remove(boardId) {
//   // return new Promise((resolve, reject) => {
//   //     setTimeout(reject, 2000)
//   // })
//   // return Promise.reject('Not now!');
//   return storageService.remove(STORAGE_KEY, boardId);
// }

// function getEmptyBoard() {
//   return {
//     vendor: "Susita-" + (Date.now() % 1000),
//     price: utilService.getRandomIntInclusive(1000, 9000),
//   };
// }

// function subscribe(listener) {
//   listeners.push(listener);
// }

// function _notifySubscribersBoardsChanged(boards) {
//   console.log("Notifying Listeners");
//   listeners.forEach((listener) => listener(boards));
// }

// window.addEventListener("storage", () => {
//   console.log("Storage Changed from another Browser!");
//   query().then((boards) => {
//     _notifySubscribersBoardsChanged(boards);
//   });
// });

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
