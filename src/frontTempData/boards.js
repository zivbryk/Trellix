export const boards = [
  {
    _id: "b101",
    title: "Trello Dev Project",
    createdAt: 1641459447000,
    dueDate: 1654502247000,
    isStarred: true,
    createdBy: {
      _id: "u102",
      fullname: "May Almog",
      imgUrl: "/assets/images/avatars/may.png",
    },
    style: {
      cover: "/assets/images/board-bg/black-future.jpg",
      isImage: true,
      boardCoverAttachments: [],
    },
    labels: [
      {
        id: "tp301",
        title: "+Design Team",
        color: "green",
      },
      {
        id: "yh703",
        title: "For Weekly Meeting",
        color: "yellow",
      },
      {
        id: "up003",
        title: "For Monthly meeting",
        color: "orange",
      },
      {
        id: "dd204",
        title: "Urgent",
        color: "red",
      },
      {
        id: "sn306",
        title: "Nice to have",
        color: "purple",
      },
      {
        id: "mq552",
        title: "Documentation needed",
        color: "blue",
      },
      {
        id: "pc309",
        title: "Documentation needed",
        color: "sky",
      },
      {
        id: "ib492",
        title: "Documentation needed",
        color: "lime",
      },
      {
        id: "vm941",
        title: "Documentation needed",
        color: "pink",
      },
      {
        id: "dl995",
        title: "Documentation needed",
        color: "black",
      },
      {
        id: "gc041",
        title: "Documentation needed",
        color: "none",
      },
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/assets/images/avatars/ziv.png",
        isAdmin: true,
      },
      {
        _id: "u102",
        fullname: "May Almog",
        username: "mayalmog",
        imgUrl: "/assets/images/avatars/may.png",
        isAdmin: false,
      },
      {
        _id: "u103",
        fullname: "Dese Besunech",
        username: "desebesunech",
        imgUrl: "/assets/images/avatars/dese.png",
        isAdmin: false,
      },
      {
        _id: "u104",
        fullname: "Nadav Nassi",
        username: "nadavnassi",
        imgUrl:
          "https://res.cloudinary.com/zivcloud555/image/upload/v1633516865/Trellis%20permanent%20img/Avatars/nadav_tvf8ny.png",
        isAdmin: false,
      },
      {
        _id: "u105",
        fullname: "Elon Musk",
        username: "elonmusk",
        imgUrl:
          "https://res.cloudinary.com/zivcloud555/image/upload/v1633520249/Trellis%20permanent%20img/Avatars/elon_e1n2uc.png",
        isAdmin: false,
      },
      {
        _id: "u106",
        fullname: "Mark Zuckerberg",
        username: "markzuckerberg",
        imgUrl:
          "https://res.cloudinary.com/zivcloud555/image/upload/v1633520259/Trellis%20permanent%20img/Avatars/mark_hpl8ht.png",
        isAdmin: false,
      },
      {
        _id: "u107",
        fullname: "Alon Dai",
        username: "alondai",
        imgUrl:
          "https://res.cloudinary.com/zivcloud555/image/upload/v1633520265/Trellis%20permanent%20img/Avatars/alon_rl32jy.png",
        isAdmin: false,
      },
    ],
    lists: [
      {
        id: "g101",
        title: "Components",
        cards: [
          {
            id: "l7v4x",
            title: "EditDate Cmp",
            style: {
              // cover:
              //   "https://res.cloudinary.com/zivcloud555/image/upload/v1633764702/Trellis%20permanent%20img/Card%20Images/chart4_sgrvtg.png",
              cover: "/assets/images/card-cover/chart4.png",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            description: "create EditDate Cmp",
            labelIds: [
              "tp301",
              "yh703",
              "up003",
              "dd204",
              "sn306",
              "mq552",
              "pc309",
              "ib492",
              "vm941",
              "dl995",
              "gc041",
            ],
            cardMembers: [
              {
                _id: "u101",
                fullname: "Ziv Bryk",
                username: "zivbryk",
                imgUrl: "/assets/images/avatars/ziv.png",
                isAdmin: true,
              },
              {
                _id: "u102",
                fullname: "May Almog",
                username: "mayalmog",
                imgUrl: "/assets/images/avatars/may.png",
              },
              {
                _id: "u103",
                fullname: "Dese Besunech",
                username: "desebesunech",
                imgUrl: "/assets/images/avatars/dese.png",
              },
            ],
            isWatched: true,
            dueDate: 1645902408000,
            attachments: [
              {
                _id: "0b4F",
                url: "https://res.cloudinary.com/zivcloud555/image/upload/v1633764702/Trellis%20permanent%20img/Card%20Images/chart4_sgrvtg.png",
                fileName: "test1",
                format: "test1",
                uploadedAt: 1645907805000,
              },
              {
                _id: "S9lD",
                url: "https://res.cloudinary.com/zivcloud555/image/upload/v1633790626/Trellis%20permanent%20img/Card%20Images/reactPdf_timefn.png",
                fileName: "test2",
                format: "test2",
                uploadedAt: 1645902408033,
              },
            ],
            checklists: [
              {
                id: "YEhs8",
                title: "Test1",
                todos: [
                  {
                    id: "2120xl",
                    title: "Add custom colors hex",
                    isDone: true,
                  },
                  {
                    id: "036jx",
                    title: "Connect cmp to store",
                    isDone: true,
                  },
                  {
                    id: "20mjw",
                    title: "Add pixel perfect CSS design",
                    isDone: false,
                  },
                ],
              },
              {
                id: "Ychd0",
                title: "Test2",
                todos: [
                  {
                    id: "2126mg",
                    title: "Add custom colors hex",
                    isDone: true,
                  },
                  {
                    id: "03p9x",
                    title: "Connect cmp to store",
                    isDone: true,
                  },
                  {
                    id: "2p4cw",
                    title: "Add pixel perfect CSS design",
                    isDone: false,
                  },
                ],
              },
            ],
            isComplete: true,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
          {
            id: "49mlh",
            title: "EditAttachmet Cmp",
            comments: [
              {
                id: "Z2P7x",
                txt: "@mayalmog Good job so far, looks great!",
                createdAt: 1590995557496.0,
                byMember: {
                  _id: "u101",
                  fullname: "Ziv Bryk",
                  username: "zivbryk",
                  imgUrl: "/assets/images/avatars/ziv.png",
                  isAdmin: true,
                },
              },
              {
                id: "x6P73",
                txt: "@zivbryk Thanks, will be finished tommorow",
                createdAt: 1590995557566.0,
                byMember: {
                  _id: "u102",
                  fullname: "May Almog",
                  username: "mayalmog",
                  imgUrl: "/assets/images/avatars/may.png",
                },
              },
            ],
            style: {
              cover: "#7BC86C",
              isImage: false,
              coverMode: "half",
              isColorWhite: true,
            },
            description: null,
            labelIds: ["tp301", "yh703"],
            cardMembers: [
              {
                _id: "u102",
                fullname: "May Almog",
                username: "mayalmog",
                imgUrl: "/assets/images/avatars/may.png",
              },
              {
                _id: "u103",
                fullname: "Dese Besunech",
                username: "desebesunech",
                imgUrl: "/assets/images/avatars/dese.png",
              },
            ],
            dueDate: 1645779952000,
            isComplete: false,
            attachments: [],
            isWatched: true,
            checklists: [],
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
          {
            id: "ckk0g",
            title: "CoverColors Cmp",
            style: {
              cover: "/assets/images/card-cover/launch.jpg",
              isImage: true,
              coverMode: "full",
              isColorWhite: true,
            },
            labelIds: ["tp301", "yh703"],
            cardMembers: [
              {
                _id: "u103",
                fullname: "Dese Besunech",
                username: "desebesunech",
                imgUrl: "/assets/images/avatars/dese.png",
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "CoverColors Todos",
                todos: [
                  {
                    id: "216jl",
                    title: "Add custom colors hex",
                    isDone: true,
                  },
                  {
                    id: "216jx",
                    title: "Connect cmp to store",
                    isDone: true,
                  },
                  {
                    id: "216jw",
                    title: "Add pixel perfect CSS design",
                    isDone: false,
                  },
                  {
                    id: "216jk",
                    title: "Add MUI Icons",
                    isDone: false,
                  },
                ],
              },
            ],
            attachments: [],
            isWatched: false,
            isComplete: true,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
        ],
      },
      {
        id: "g137",
        title: "Pages",
        cards: [
          {
            id: "ksg7z",
            title: "BoardPage",
            description: "Page should render login/logout conditionally",
            style: {
              cover: "#EF7564",
              isImage: false,
              coverMode: "half",
              isColorWhite: true,
            },
            comments: [
              {
                id: "Z4P7m",
                txt: "@mayalmog please redo layout of",
                createdAt: 1590995557436.0,
                byMember: {
                  _id: "u101",
                  fullname: "Ziv Bryk",
                  username: "zivbryk",
                  imgUrl: "/assets/images/avatars/ziv.png",
                  isAdmin: true,
                },
              },
            ],
            checklists: [
              {
                id: "YE5mb",
                title: "BoardPage Todos",
                todos: [
                  {
                    id: "c122X",
                    title: "Make basic layout",
                    isDone: true,
                  },
                  {
                    id: "f132X",
                    title: "Connect to store",
                    isDone: false,
                  },
                  {
                    id: "9142X",
                    title: "Adjust list container height",
                    isDone: true,
                  },
                  {
                    id: "96b2c",
                    title: "Adjust font size",
                    isDone: false,
                  },
                  {
                    id: "915r8",
                    title: "Add img cover feature",
                    isDone: true,
                  },
                ],
              },
            ],
            attachments: [
              {
                _id: "HKrvQ",
                createdAt: 1632987289278,
                type: "img",
                url: "http://res.cloudinary.com/zivcloud555/image/upload/v1632990567/dczryta6ewdoeg8vu9wd.png",
                fileName: "test2",
                format: "test2",
                uploadedAt: 1645902408033,
              },
              {
                _id: "dK4vF",
                createdAt: 1632987289278,
                type: "link",
                url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
                fileName: "test2",
                format: "test2",
                uploadedAt: 1645902408033,
              },
            ],
            cardMembers: [
              {
                _id: "u103",
                fullname: "Dese Besunech",
                username: "desebesunech",
                imgUrl: "/assets/images/avatars/dese.png",
              },
            ],
            labelIds: ["tp301", "yh703"],
            createdAt: 1590999730348,
            dueDate: 1615651492000,
            byMember: {
              _id: "u101",
              fullname: "Ziv Bryk",
              username: "zivbryk",
              imgUrl: "/assets/images/avatars/ziv.png",
              isAdmin: true,
            },
            isWatched: false,
            isComplete: false,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
          {
            id: "kl488",
            title: "LoginLogout Page",
            style: {
              cover: "/assets/images/card-cover/formik.png",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            dueDate: 1645787152000,
            labelIds: ["tp301", "yh703"],
            cardMembers: [
              {
                _id: "u102",
                fullname: "May Almog",
                username: "mayalmog",
                imgUrl: "/assets/images/avatars/may.png",
              },
            ],
            attachments: [],
            isWatched: false,
            checklists: [],
            isComplete: false,
            archiveData: {
              sourceBoardId: null,
              sourceListId: null,
            },
          },
          {
            id: "sgv54",
            title: "Workspace Page",
            style: {
              cover: "#29CCE5",
              isImage: false,
              coverMode: "half",
              isColorWhite: true,
            },
            labelIds: ["yh703"],
            cardMembers: [],
            attachments: [],
            isWatched: true,
            checklists: [],
            isComplete: false,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
          {
            id: "lo937",
            title: "CardDetails Page",
            style: {
              cover: "/assets/images/card-cover/css-tricks.png",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            labelIds: ["tp301", "vm941"],
            cardMembers: [
              {
                _id: "u102",
                fullname: "May Almog",
                username: "mayalmog",
                imgUrl: "/assets/images/avatars/may.png",
              },
            ],
            attachments: [],
            isWatched: false,
            checklists: [],
            isComplete: false,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
        ],
      },
      {
        id: "gH38",
        title: "Development",
        cards: [
          {
            id: "57jdv",
            title: "CardCentral Cmp",
            style: {
              cover: "/assets/images/card-cover/dnd.png",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            comments: [
              {
                id: "Z4P7m",
                txt: "@mayalmog please pay attention to main layouts here",
                createdAt: 1590995557782.0,
                byMember: {
                  _id: "u101",
                  fullname: "Ziv Bryk",
                  username: "zivbryk",
                  imgUrl: "/assets/images/avatars/ziv.png",
                  isAdmin: true,
                },
              },
            ],
            cardMembers: [
              {
                _id: "u102",
                fullname: "May Almog",
                username: "mayalmog",
                imgUrl: "/assets/images/avatars/may.png",
              },
            ],
            attachments: [],
            isWatched: true,
            checklists: [],
            isComplete: false,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
          {
            id: "78kvm",
            title: "CopyCard",
            description: "Page should render login/logout conditionally",
            style: {
              cover: "#6DECA9",
              isImage: false,
              coverMode: "half",
              isColorWhite: true,
            },
            comments: [
              {
                id: "Z4P7m",
                txt: "@mayalmog please redo layout of",
                createdAt: 1590995557436.0,
                byMember: {
                  _id: "u101",
                  fullname: "Ziv Bryk",
                  username: "zivbryk",
                  imgUrl: "/assets/images/avatars/ziv.png",
                  isAdmin: true,
                },
              },
            ],
            attachments: [
              {
                _id: "HKrvQ",
                createdAt: 1632987289278,
                type: "img",
                url: "http://res.cloudinary.com/zivcloud555/image/upload/v1632987289/sbzhu6amtaxxreqjzbcy.jpg",
                fileName: "test2",
                format: "test2",
                uploadedAt: 1645902408033,
              },
              {
                _id: "dK4vF",
                createdAt: 1632987289278,
                type: "link",
                url: "https://css-tricks.com/svg-line-animation-works/",
                fileName: "test2",
                format: "test2",
                uploadedAt: 1645902408033,
              },
            ],
            checklists: [
              {
                id: "YE5mb",
                title: "CopyCard Todos",
                todos: [
                  {
                    id: "c122X",
                    title: "Make basic layout",
                    isDone: true,
                  },
                  {
                    id: "f132X",
                    title: "Connect to store",
                    isDone: true,
                  },
                  {
                    id: "9142X",
                    title: "Align Icons",
                    isDone: false,
                  },
                  {
                    id: "9152X",
                    title: "Adjust font size",
                    isDone: true,
                  },
                ],
              },
            ],
            cardMembers: [
              {
                _id: "u101",
                fullname: "Ziv Bryk",
                username: "zivbryk",
                imgUrl: "/assets/images/avatars/ziv.png",
                isAdmin: true,
              },
            ],
            labelIds: ["tp301", "yh703"],
            createdAt: 1590999730348,
            dueDate: 1615651492000,
            byMember: {
              _id: "u101",
              fullname: "Ziv Bryk",
              username: "zivbryk",
              imgUrl: "/assets/images/avatars/ziv.png",
              isAdmin: true,
            },
            isWatched: false,
            isComplete: false,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
        ],
      },
      {
        id: "g1f0",
        title: "Done",
        cards: [
          {
            id: "3486x",
            title: "Modal Cmp",
            style: {
              cover: "#F5DD29",
              isImage: false,
              coverMode: "half",
              isColorWhite: true,
            },
            labelIds: ["tp301", "yh703"],
            cardMembers: [],
            attachments: [],
            isWatched: false,
            checklists: [],
            isComplete: false,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
          {
            id: "538nl",
            title: "Workspace Page",
            description: "Page should render login/logout conditionally",
            style: {
              cover: null,
              isImage: false,
              coverMode: "half",
              isColorWhite: true,
            },
            comments: [
              {
                id: "Z4P7m",
                txt: "@mayalmog please redo layout of",
                createdAt: 1590995557436.0,
                byMember: {
                  _id: "u101",
                  fullname: "Ziv Bryk",
                  username: "zivbryk",
                  imgUrl: "/assets/images/avatars/ziv.png",
                  isAdmin: true,
                },
              },
            ],
            checklists: [
              {
                id: "YE5mb",
                title: "CopyCard Todos",
                todos: [
                  {
                    id: "c122X",
                    title: "Make basic layout",
                    isDone: true,
                  },
                  {
                    id: "f132X",
                    title: "Connect to store",
                    isDone: true,
                  },
                  {
                    id: "9142X",
                    title: "Align Icons",
                    isDone: false,
                  },
                  {
                    id: "9752t",
                    title: "Adjust font size",
                    isDone: true,
                  },
                ],
              },
            ],
            cardMembers: [],
            labelIds: ["tp301", "yh703"],
            createdAt: 1590999730348,
            dueDate: 1615651492000,
            byMember: {
              _id: "u101",
              fullname: "Ziv Bryk",
              username: "zivbryk",
              imgUrl: "/assets/images/avatars/ziv.png",
              isAdmin: true,
            },
            attachments: [],
            isWatched: true,
            isComplete: false,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
        ],
      },
    ],
    activities: [
      {
        id: "a101",
        txt: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Ziv Bryk",
          username: "zivbryk",
          imgUrl: "/assets/images/avatars/ziv.png",
          isAdmin: true,
        },
        list: {
          id: "l14l",
          title: "QA checkup",
        },
        card: {
          id: "c101",
          title: "Replace Logo",
        },
      },
    ],
  },
  {
    _id: "fk94gv",
    title: "Test board",
    createdAt: 1641459447000,
    dueDate: 1654502247000,
    isStarred: false,
    createdBy: {
      _id: "u102",
      fullname: "May Almog",
      imgUrl: "/assets/images/avatars/may.png",
    },
    style: {
      cover:
        "https://res.cloudinary.com/zivcloud555/image/upload/v1633802046/Trellis%20permanent%20img/Card%20Images/beach_xnpfn0.jpg",
      isImage: true,
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
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/assets/images/avatars/ziv.png",
        isAdmin: true,
      },
      {
        _id: "u102",
        fullname: "May Almog",
        username: "mayalmog",
        imgUrl: "/assets/images/avatars/may.png",
        isAdmin: false,
      },
    ],
    lists: [],
    activities: [],
  },
  {
    _id: "h0lx46",
    title: "Test board",
    createdAt: 1641459447000,
    dueDate: 1654502247000,
    isStarred: false,
    createdBy: {
      _id: "u102",
      fullname: "May Almog",
      imgUrl: "/assets/images/avatars/may.png",
    },
    style: {
      cover:
        "https://res.cloudinary.com/zivcloud555/image/upload/v1633801650/Trellis%20permanent%20img/Card%20Images/redmountain_hlsgmg.jpg",
      isImage: true,
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
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/assets/images/avatars/ziv.png",
        isAdmin: true,
      },
      {
        _id: "u102",
        fullname: "May Almog",
        username: "mayalmog",
        imgUrl: "/assets/images/avatars/may.png",
        isAdmin: false,
      },
    ],
    lists: [],
    activities: [],
  },
  {
    _id: "df9m4c",
    title: "Test board",
    createdAt: 1641459447000,
    dueDate: 1654502247000,
    isStarred: false,
    createdBy: {
      _id: "u102",
      fullname: "May Almog",
      imgUrl: "/assets/images/avatars/may.png",
    },
    style: {
      cover:
        "https://res.cloudinary.com/zivcloud555/image/upload/v1633802376/Trellis%20permanent%20img/Card%20Images/forest_aqdjpw.jpg",
      isImage: true,
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
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/assets/images/avatars/ziv.png",
        isAdmin: true,
      },
      {
        _id: "u102",
        fullname: "May Almog",
        username: "mayalmog",
        imgUrl: "/assets/images/avatars/may.png",
        isAdmin: false,
      },
    ],
    lists: [],
    activities: [],
  },
  {
    _id: "7lcg32",
    title: "Test board",
    createdAt: 1641459447000,
    dueDate: 1654502247000,
    isStarred: false,
    createdBy: {
      _id: "u102",
      fullname: "May Almog",
      imgUrl: "/assets/images/avatars/may.png",
    },
    style: {
      cover:
        "https://res.cloudinary.com/zivcloud555/image/upload/v1633801647/Trellis%20permanent%20img/Card%20Images/galaxy_kuuw2l.jpg",
      isImage: true,
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
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/assets/images/avatars/ziv.png",
        isAdmin: true,
      },
      {
        _id: "u102",
        fullname: "May Almog",
        username: "mayalmog",
        imgUrl: "/assets/images/avatars/may.png",
        isAdmin: false,
      },
    ],
    lists: [],
    activities: [],
  },
  {
    _id: "6bk9d4",
    title: "Test board",
    createdAt: 1641459447000,
    dueDate: 1654502247000,
    isStarred: false,
    createdBy: {
      _id: "u102",
      fullname: "May Almog",
      imgUrl: "/assets/images/avatars/may.png",
    },
    style: {
      cover:
        "https://res.cloudinary.com/zivcloud555/image/upload/v1649159732/Trellis%20permanent%20img/Card%20Images/react-bg_bbnh7b.jpg",
      isImage: true,
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
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/assets/images/avatars/ziv.png",
        isAdmin: true,
      },
      {
        _id: "u102",
        fullname: "May Almog",
        username: "mayalmog",
        imgUrl: "/assets/images/avatars/may.png",
        isAdmin: false,
      },
    ],
    lists: [],
    activities: [],
  },
  {
    _id: "ds360v",
    title: "Test board",
    createdAt: 1641459447000,
    dueDate: 1654502247000,
    isStarred: false,
    createdBy: {
      _id: "u102",
      fullname: "May Almog",
      imgUrl: "/assets/images/avatars/may.png",
    },
    style: {
      cover:
        "https://res.cloudinary.com/zivcloud555/image/upload/v1649159888/Trellis%20permanent%20img/Card%20Images/snow-bg_sscwzl.jpg",
      isImage: true,
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
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/assets/images/avatars/ziv.png",
        isAdmin: true,
      },
      {
        _id: "u102",
        fullname: "May Almog",
        username: "mayalmog",
        imgUrl: "/assets/images/avatars/may.png",
        isAdmin: false,
      },
    ],
    lists: [],
    activities: [],
  },
];
