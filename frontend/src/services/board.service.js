import { httpService } from "./http.service";
import { utilService } from "./util.service.js";
import _ from "lodash";

/////// UNCOMMENT FOR FRONTEND DEVELOPMENT ///////
// import { storageService } from "./async-storage.service.js";
// import { showErrorMsg } from "../services/event-bus.service";
// import { boards } from "../frontTempData/boards";
// const STORAGE_KEY = "board";
// storageService.load(STORAGE_KEY, boards);

// const listeners = [];

export const boardService = {
  query,
  getById,
  save,
  remove,
  getEmptyBoard,
  getEmptyList,
  getEmptyCard,
  updateCardInBoard,
  //   subscribe,
};

window.cs = boardService;

async function query(filterBy = { ctg: "" }) {
  try {
    return await httpService.get("board", filterBy);
  } catch (err) {
    throw err;
  }
}

async function getById(boardId) {
  try {
    return await httpService.get(`board/${boardId}`);
  } catch (err) {
    throw err;
  }
}

async function save(board) {
  if (board._id) {
    try {
      return await httpService.put(`board/${board._id}`, board);
    } catch (err) {
      throw err;
    }
  } else {
    try {
      return await httpService.post("board/", board);
    } catch (err) {
      throw err;
    }
  }
}

async function remove(boardId) {
  try {
    return await httpService.delete(`board/${boardId}`);
  } catch (err) {
    throw err;
  }
}

///// Board Utility /////

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

function getEmptyBoard(boardTitle, boardCover, isImage, loggedinUser) {
  return {
    createdAt: null,
    title: boardTitle,
    createdBy: {
      _id: loggedinUser._id,
      fullname: loggedinUser.fullname,
      imgUrl: loggedinUser.imgUrl,
    },
    dueDate: null,
    isStarred: false,
    style: {
      cover: boardCover,
      isImage,
      boardCoverAttachments: [],
    },
    labels: [
      {
        id: "tp301",
        title: "",
        color: "green",
      },
      {
        id: "yh703",
        title: "",
        color: "yellow",
      },
      {
        id: "up003",
        title: "",
        color: "orange",
      },
      {
        id: "dd204",
        title: "",
        color: "red",
      },
      {
        id: "sn306",
        title: "",
        color: "purple",
      },
      {
        id: "mq552",
        title: "",
        color: "blue",
      },
      {
        id: "pc309",
        title: "",
        color: "sky",
      },
      {
        id: "ib492",
        title: "",
        color: "lime",
      },
      {
        id: "vm941",
        title: "",
        color: "pink",
      },
      {
        id: "dl995",
        title: "",
        color: "black",
      },
      {
        id: "gc041",
        title: "",
        color: "none",
      },
    ],
    boardMembers: [
      {
        _id: loggedinUser._id,
        fullname: loggedinUser.fullname,
        username: loggedinUser.username,
        imgUrl: loggedinUser.imgUrl,
        isAdmin: true,
      },
    ],
    lists: [],
    activities: [],
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

/////// UNCOMMENT FOR FRONTEND DEVELOPMENT ///////
/****DEVELOPMENT LOCAL STORAGE FUNCTIONS ****/
// async function query() {
//   try {
//     return await storageService.query(STORAGE_KEY);
//   } catch (err) {
//     showErrorMsg("Cannot rerieve board");
//     console.log("board.service: err @ query", err);
//   }
// }

// function getById(boardId) {
//   try {
//     return storageService.get(STORAGE_KEY, boardId);
//   } catch (err) {
//     showErrorMsg("Cannot find board");
//     console.log("board.service: err @ getById", err);
//   }
// }

// function save(board) {
//   try {
//     if (board._id) {
//       return storageService.put(STORAGE_KEY, board);
//     } else {
//       // board.owner = userService.getLoggedinUser();
//       return storageService.post(STORAGE_KEY, board);
//     }
//   } catch (err) {
//     showErrorMsg("Cannot save board");
//     console.log("board.service: err @ save", err);
//   }
// }

// function remove(boardId) {
//   // return new Promise((resolve, reject) => {
//   //     setTimeout(reject, 2000)
//   // })
//   // return Promise.reject('Not now!');
//   return storageService.remove(STORAGE_KEY, boardId);
// }

//////////////////////////// TODO: Sockets /////////////////////////

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
