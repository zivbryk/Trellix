export const boards = [
  {
    _id: "b101",
    title: "Trello Dev Project",
    createdAt: 1589983468418,
    isStarred: true,
    createdBy: {
      _id: "u102",
      fullname: "May Almog",
      imgUrl:
        "https://res.cloudinary.com/zivcloud555/image/upload/v1633516861/Trellis%20permanent%20img/Avatars/may_jfkenx.png",
    },
    style: {
      cover:
        "url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1536x1920/6f71cac1044c84cb52d37c5b464c70d0/photo-1643037508102-46fb319979c5.jpg')",
      isImage: true,
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
        imgUrl:
          "https://res.cloudinary.com/zivcloud555/image/upload/v1633516871/Trellis%20permanent%20img/Avatars/ziv_f4seir.png",
        isAdmin: true,
      },
      {
        _id: "u102",
        fullname: "May Almog",
        username: "mayalmog",
        imgUrl:
          "https://res.cloudinary.com/zivcloud555/image/upload/v1633516861/Trellis%20permanent%20img/Avatars/may_jfkenx.png",
        isAdmin: false,
      },
      {
        _id: "u103",
        fullname: "Dese Besunech",
        username: "desebesunech",
        imgUrl:
          "https://res.cloudinary.com/zivcloud555/image/upload/v1633516881/Trellis%20permanent%20img/Avatars/dese_zv3kgc.png",
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
              cover:
                "https://res.cloudinary.com/zivcloud555/image/upload/v1633764702/Trellis%20permanent%20img/Card%20Images/chart4_sgrvtg.png",
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
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516871/Trellis%20permanent%20img/Avatars/ziv_f4seir.png",
                isAdmin: true,
              },
              {
                _id: "u102",
                fullname: "May Almog",
                username: "mayalmog",
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516861/Trellis%20permanent%20img/Avatars/may_jfkenx.png",
              },
              {
                _id: "u103",
                fullname: "Dese Besunech",
                username: "desebesunech",
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516881/Trellis%20permanent%20img/Avatars/dese_zv3kgc.png",
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
                  imgUrl: "/avatars/ziv.png",
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
                  imgUrl: "/avatars/may.png",
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
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516861/Trellis%20permanent%20img/Avatars/may_jfkenx.png",
              },
              {
                _id: "u103",
                fullname: "Dese Besunech",
                username: "desebesunech",
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516881/Trellis%20permanent%20img/Avatars/dese_zv3kgc.png",
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
              cover:
                "https://res.cloudinary.com/zivcloud555/image/upload/v1634026001/Trellis%20permanent%20img/Card%20Images/launch_kucwit.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            labelIds: ["tp301", "yh703"],
            cardMembers: [
              {
                _id: "u103",
                fullname: "Dese Besunech",
                username: "desebesunech",
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516881/Trellis%20permanent%20img/Avatars/dese_zv3kgc.png",
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
                  imgUrl: "/avatars/ziv.png",
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
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516881/Trellis%20permanent%20img/Avatars/dese_zv3kgc.png",
              },
            ],
            labelIds: ["tp301", "yh703"],
            createdAt: 1590999730348,
            dueDate: 1615651492000,
            byMember: {
              _id: "u101",
              fullname: "Ziv Bryk",
              username: "zivbryk",
              imgUrl: "/avatars/ziv.png",
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
              cover: null,
              isImage: false,
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
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516861/Trellis%20permanent%20img/Avatars/may_jfkenx.png",
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
              cover:
                "https://res.cloudinary.com/zivcloud555/image/upload/v1647277624/Trellis%20permanent%20img/Card%20Images/saveit1_zxmm4s.jpg",
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
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516861/Trellis%20permanent%20img/Avatars/may_jfkenx.png",
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
              cover:
                "https://res.cloudinary.com/zivcloud555/image/upload/v1633700384/Trellis%20permanent%20img/Card%20Images/dnd_vtt3tn.png",
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
                  imgUrl: "/avatars/ziv.png",
                  isAdmin: true,
                },
              },
            ],
            cardMembers: [
              {
                _id: "u102",
                fullname: "May Almog",
                username: "mayalmog",
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516861/Trellis%20permanent%20img/Avatars/may_jfkenx.png",
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
                  imgUrl: "/avatars/ziv.png",
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
                imgUrl:
                  "https://res.cloudinary.com/zivcloud555/image/upload/v1633516871/Trellis%20permanent%20img/Avatars/ziv_f4seir.png",
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
              imgUrl: "/avatars/ziv.png",
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
                  imgUrl: "/avatars/ziv.png",
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
              imgUrl: "/avatars/ziv.png",
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
          imgUrl: "/avatars/ziv.png",
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
    _id: "b102",
    title: "Monday dev Project",
    createdAt: 1589983468400,
    isStarred: false,
    createdBy: {
      _id: "u102",
      fullname: "may almog",
      imgUrl: "/avatars/may.png",
    },
    style: {
      cover: "#2A7B98",
      isImage: false,
    },
    labels: [
      {
        id: "l101",
        title: "+ Design Team",
        color: "#61bd4f",
      },
      {
        id: "l102",
        title: "For Weekly Meeting",
        color: "#f2d600",
      },
      {
        id: "l103",
        title: "For Monthly meeting",
        color: "#ff9f1a",
      },
      {
        id: "l104",
        title: "Urgent",
        color: "#eb5a46",
      },
      {
        id: "l105",
        title: "Nice to have",
        color: "#c377e0",
      },
      {
        id: "l106",
        title: "Documentation needed",
        color: "#0079bf",
      },
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/avatars/ziv.png",
        isAdmin: true,
      },
      {
        _id: "u102",
        fullname: "May Almog",
        username: "mayalmog",
        imgUrl: "/avatars/may.png",
        isAdmin: false,
      },
      {
        _id: "u103",
        fullname: "Dese Besunech",
        username: "desebesunech",
        imgUrl: "/avatars/dese.png",
        isAdmin: false,
      },
      {
        _id: "u104",
        fullname: "Nadav Nassi",
        username: "nadavnassi",
        imgUrl: "/avatars/nadav.png",
        isAdmin: false,
      },
    ],
    lists: [
      {
        id: "j937",
        title: "List 1",
        cards: [
          {
            id: "rv76a",
            title: "Replace logo",
            labelIds: ["yh703"],
            style: {
              cover: "/assets/img/ball.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
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
            id: "993gl",
            title: "Add Samples",
            labelIds: ["tp301", "yh703"],
            style: {
              cover: "f4f5f7",
              isImage: false,
              coverMode: "half",
              isColorWhite: true,
            },
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
        id: "v037",
        title: "List 2",
        cards: [
          {
            id: "200nl",
            title: "Do that",
            labelIds: ["tp301", "yh703"],
            style: {
              cover: "/assets/img/ball.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            attachments: [],
            isWatched: false,
            isComplete: false,
            archiveData: {
              isArchived: false,
              sourceBoardId: null,
              sourceListId: null,
            },
          },
          {
            id: "39cl9",
            title: "Help me",
            description: "description",
            style: {
              cover: "/assets/img/ball.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            comments: [
              {
                id: "ZdPnm",
                txt: "also @yaronb please CR this",
                createdAt: 1590999817436.0,
                byMember: {
                  _id: "u101",
                  fullname: "Ziv Bryk",
                  username: "zivbryk",
                  imgUrl: "/avatars/ziv.png",
                  isAdmin: true,
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "To Do 1",
                    isDone: false,
                  },
                ],
              },
            ],
            cardMembers: [],
            labelIds: ["tp301"],
            createdAt: 1590999730348,
            dueDate: 16156215211,
            byMember: {
              _id: "u101",
              fullname: "Ziv Bryk",
              username: "zivbryk",
              imgUrl: "/avatars/ziv.png",
              isAdmin: true,
            },
            attachments: [],
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
    ],
    activities: [
      {
        id: "a101",
        txt: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Abi Abambi",
          imgUrl: "http://some-img",
        },
        card: {
          id: "c101",
          title: "Replace Logo",
        },
      },
      {
        id: "a101",
        txt: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u143",
          fullname: "kobi batito",
          imgUrl: "http://some-img",
        },
        card: {
          id: "c101",
          title: "Replace Logo",
        },
      },
      {
        id: "a101",
        txt: "Changed template",
        createdAt: 154514,
        byMember: {
          _id: "u143",
          fullname: "kobi batito",
          imgUrl: "http://some-img",
        },
      },
      {},
    ],
    archivedCards: [],
  },
  {
    _id: "b103",
    title: "Trellis proj",
    createdAt: 1589983468400,
    isStarred: false,
    createdBy: {
      _id: "u103",
      fullname: "Dese Besunech",
      imgUrl: "/avatars/dese.png",
    },
    style: {
      cover: "#00AECC",
      isImage: true,
    },
    labels: [
      {
        id: "l101",
        title: "+ Design Team",
        color: "#61bd4f",
      },
      {
        id: "l102",
        title: "For Weekly Meeting",
        color: "#f2d600",
      },
      {
        id: "l103",
        title: "For Monthly meeting",
        color: "#ff9f1a",
      },
      {
        id: "l104",
        title: "Urgent",
        color: "#eb5a46",
      },
      {
        id: "l105",
        title: "Nice to have",
        color: "#c377e0",
      },
      {
        id: "l106",
        title: "Documentation needed",
        color: "#0079bf",
      },
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/avatars/ziv.png",
        isAdmin: true,
      },
      {
        _id: "u104",
        fullname: "Nadav Nassi",
        username: "nadavnassi",
        imgUrl: "/avatars/nadav.png",
        isAdmin: false,
      },
    ],
    lists: [
      {
        id: "s580",
        title: "List 1",
        cards: [
          {
            id: "csl88",
            title: "Replace logo",
            labelIds: ["yh703"],
            style: {
              cover: "/assets/img/ball.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            attachments: [],
            isWatched: false,
            checklists: [],
            isComplete: false,
          },
          {
            id: "20ngl",
            title: "Add Samples",
            labelIds: ["tp301", "yh703"],
            style: {
              cover: "f4f5f7",
              isImage: false,
              coverMode: "half",
              isColorWhite: true,
            },
            attachments: [],
            isWatched: false,
            checklists: [],
            isComplete: false,
          },
        ],
      },
      {
        id: "d003",
        title: "List 2",
        cards: [
          {
            id: "2sgcl",
            title: "Do that",
            labelIds: [],
            style: {
              cover: "/assets/img/ball.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            attachments: [],
            isWatched: false,
            checklists: [],
            isComplete: false,
          },
          {
            id: "78ndh",
            title: "Help me",
            description: "description",
            style: {
              cover: "/assets/img/ball.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            comments: [
              {
                id: "ZdPnm",
                txt: "also @yaronb please CR this",
                createdAt: 1590999817436.0,
                byMember: {
                  _id: "u101",
                  fullname: "Ziv Bryk",
                  username: "zivbryk",
                  imgUrl: "/avatars/ziv.png",
                  isAdmin: true,
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "To Do 1",
                    isDone: false,
                  },
                ],
              },
            ],
            cardMembers: [],
            labelIds: ["tp301", "yh703"],
            createdAt: 1590999730348,
            dueDate: 16156215211,
            byMember: {
              _id: "u101",
              fullname: "Ziv Bryk",
              username: "zivbryk",
              imgUrl: "/avatars/ziv.png",
              isAdmin: true,
            },
            attachments: [],
            isWatched: false,
            isComplete: false,
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
          fullname: "Abi Abambi",
          imgUrl: "http://some-img",
        },
        card: {
          id: "c101",
          title: "Replace Logo",
        },
      },
      {
        id: "a101",
        txt: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u143",
          fullname: "kobi batito",
          imgUrl: "http://some-img",
        },
        card: {
          id: "c101",
          title: "Replace Logo",
        },
      },
      {
        id: "a101",
        txt: "Changed template",
        createdAt: 154514,
        byMember: {
          _id: "u143",
          fullname: "kobi batito",
          imgUrl: "http://some-img",
        },
      },
      {},
    ],
    archivedCards: [],
  },
  {
    _id: "b104",
    title: "Save the planet",
    createdAt: 1589983468400,
    isStarred: false,
    createdBy: {
      _id: "u101",
      fullname: "ziv bryk",
      imgUrl: "/avatars/ziv.png",
    },
    style: {
      cover: "#0079BF",
      isImage: true,
    },
    labels: [
      {
        id: "l101",
        title: "+ Design Team",
        color: "#61bd4f",
      },
      {
        id: "l102",
        title: "For Weekly Meeting",
        color: "#f2d600",
      },
      {
        id: "l103",
        title: "For Monthly meeting",
        color: "#ff9f1a",
      },
      {
        id: "l104",
        title: "Urgent",
        color: "#eb5a46",
      },
      {
        id: "l105",
        title: "Nice to have",
        color: "#c377e0",
      },
      {
        id: "l106",
        title: "Documentation needed",
        color: "#0079bf",
      },
    ],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/avatars/ziv.png",
        isAdmin: true,
      },
    ],
    lists: [
      {
        id: "h806",
        title: "List 1",
        cards: [
          {
            id: "c477h",
            title: "Replace logo",
            labelIds: [],
            style: {
              cover: "/assets/img/ball.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            isWatched: false,
            checklists: [],
            attachments: [],
            isComplete: false,
          },
          {
            id: "120ca",
            title: "Add Samples",
            labelIds: ["tp301", "yh703"],
            style: {
              cover: "f4f5f7",
              isImage: false,
              coverMode: "half",
              isColorWhite: true,
            },
            attachments: [],
            isWatched: false,
            checklists: [],
            isComplete: false,
          },
        ],
      },
      {
        id: "f662",
        title: "List 2",
        cards: [
          {
            id: "39cgj",
            title: "Do that",
            labelIds: [],
            style: {
              cover: "/assets/img/ball.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            attachments: [],
            isWatched: false,
            checklists: [],
            isComplete: false,
          },
          {
            id: "ak5oc",
            title: "Help me",
            description: "description",
            style: {
              cover: "/assets/img/ball.jpg",
              isImage: true,
              coverMode: "half",
              isColorWhite: true,
            },
            comments: [
              {
                id: "ZdPnm",
                txt: "also @yaronb please CR this",
                createdAt: 1590999817436.0,
                byMember: {
                  _id: "u101",
                  fullname: "Ziv Bryk",
                  username: "zivbryk",
                  imgUrl: "/avatars/ziv.png",
                  isAdmin: true,
                },
              },
            ],
            checklists: [
              {
                id: "YEhmF",
                title: "Checklist",
                todos: [
                  {
                    id: "212jX",
                    title: "To Do 1",
                    isDone: false,
                  },
                ],
              },
            ],
            cardMembers: [],
            labelIds: ["tp301", "yh703"],
            createdAt: 1590999730348,
            dueDate: 16156215211,
            byMember: {
              _id: "u101",
              fullname: "Ziv Bryk",
              username: "zivbryk",
              imgUrl: "/avatars/ziv.png",
              isAdmin: true,
            },
            attachments: [],
            isWatched: false,
            isComplete: false,
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
          fullname: "Abi Abambi",
          imgUrl: "http://some-img",
        },
        card: {
          id: "c101",
          title: "Replace Logo",
        },
      },
      {
        id: "a101",
        txt: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u143",
          fullname: "kobi batito",
          imgUrl: "http://some-img",
        },
        card: {
          id: "c101",
          title: "Replace Logo",
        },
      },
      {
        id: "a101",
        txt: "Changed template",
        createdAt: 154514,
        byMember: {
          _id: "u143",
          fullname: "kobi batito",
          imgUrl: "http://some-img",
        },
      },
    ],
  },
  {
    _id: "b105",
    title: "Test",
    createdAt: 1589983468420,
    isStarred: false,
    createdBy: {
      _id: "u101",
      fullname: "ziv bryk",
      imgUrl: "/avatars/ziv.png",
    },
    style: {
      cover: "#0079BF",
      isImage: false,
    },
    labels: [],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/avatars/ziv.png",
        isAdmin: true,
      },
    ],
    lists: [],
    activities: [],
  },
  {
    _id: "b106",
    title: "Test",
    createdAt: 1589983468421,
    isStarred: false,
    createdBy: {
      _id: "u101",
      fullname: "ziv bryk",
      imgUrl: "/avatars/ziv.png",
    },
    style: {
      cover: "#0079BF",
      isImage: false,
      coverMode: "half",
    },
    labels: [],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/avatars/ziv.png",
        isAdmin: true,
      },
    ],
    lists: [],
    activities: [],
  },
  {
    _id: "b107",
    title: "Test",
    createdAt: 1589983468422,
    isStarred: false,
    createdBy: {
      _id: "u101",
      fullname: "ziv bryk",
      imgUrl: "/avatars/ziv.png",
    },
    style: {
      cover: "#0079BF",
      isImage: false,
      coverMode: "half",
    },
    labels: [],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/avatars/ziv.png",
        isAdmin: true,
      },
    ],
    lists: [],
    activities: [],
  },
  {
    _id: "b108",
    title: "Test",
    createdAt: 1589983468423,
    isStarred: false,
    createdBy: {
      _id: "u101",
      fullname: "ziv bryk",
      imgUrl: "/avatars/ziv.png",
    },
    style: {
      cover: "#0079BF",
      isImage: false,
      coverMode: "half",
    },
    labels: [],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/avatars/ziv.png",
        isAdmin: true,
      },
    ],
    lists: [],
    activities: [],
  },
  {
    _id: "b109",
    title: "Test",
    createdAt: 1589983468424,
    isStarred: false,
    createdBy: {
      _id: "u101",
      fullname: "ziv bryk",
      imgUrl: "/avatars/ziv.png",
    },
    style: {
      cover: "#0079BF",
      isImage: false,
      coverMode: "half",
    },
    labels: [],
    boardMembers: [
      {
        _id: "u101",
        fullname: "Ziv Bryk",
        username: "zivbryk",
        imgUrl: "/avatars/ziv.png",
        isAdmin: true,
      },
    ],
    lists: [],
    activities: [],
  },
];
