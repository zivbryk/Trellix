export const boards = [
    {
        "_id": "b101",
        "title": "Trello Dev Project",
        "createdAt": 1589983468418,
        "createdBy": {
            "_id": "u102",
            "fullname": "may almog",
            "imgUrl": "/avatars/may.png",
        },
        "style": {
            "cover": "#2A7B98",
            "isImage": false
        },
        "labels": [
            {
                "id": "l101",
                "title": "+ Design Team",
                "color": "#61bd4f"
            },
            {
                "id": "l102",
                "title": "For Weekly Meeting",
                "color": "#f2d600"
            },
            {
                "id": "l103",
                "title": "For Monthly meeting",
                "color": "#ff9f1a"
            },
            {
                "id": "l104",
                "title": "Urgent",
                "color": "#eb5a46"
            },
            {
                "id": "l105",
                "title": "Nice to have",
                "color": "#c377e0"
            },
            {
                "id": "l106",
                "title": "Documentation needed",
                "color": "#0079bf"
            }

        ],
        "boardMembers": [
            {
                "_id": "u101",
                "fullname": "Ziv Bryk",
                "username": "zivbryk",
                "imgUrl": "/avatars/ziv.png"
            },
            {
                "_id": "u102",
                "fullname": "May Almog",
                "username": "mayalmog",
                "imgUrl": "/avatars/may.png"
            },
            {
                "_id": "u103",
                "fullname": "Dese Besunech",
                "username": "desebesunech",
                "imgUrl": "/avatars/dese.png"
            },
            {
                "_id": "u104",
                "fullname": "Nadav Nassi",
                "username": "nadavnassi",
                "imgUrl": "/avatars/nadav.png",
            }
        ],
        "lists": [
            {
                "id": "g101",
                "title": "Components",
                "cards": [
                    {
                        "id": "c101",
                        "title": "EditDate Cmp",
                        "style": {
                            "cover": "#7BC86C",
                            "isImage": false
                        },
                        "labelIds": ["l104"],
                        "cardMembers": [
                            {
                                "_id": "u101",
                                "fullname": "Ziv Bryk",
                                "username": "zivbryk",
                                "imgUrl": "/avatars/ziv.png"
                            }
                        ]
                    },
                    {
                        "id": "c102",
                        "title": "EditAttachmet Cmp",
                        "comments": [
                            {
                                "id": "Z2P7x",
                                "txt": "@mayalmog Good job so far, looks great!",
                                "createdAt": 1590995557496.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Ziv Bryk",
                                    "username": "zivbryk",
                                    "imgUrl": "/avatars/ziv.png"
                                }
                            },
                            {
                                "id": "x6P73",
                                "txt": "@zivbryk Thanks, will be finished tommorow",
                                "createdAt": 1590995557566.0,
                                "byMember": {
                                    "_id": "u102",
                                    "fullname": "May Almog",
                                    "username": "mayalmog",
                                    "imgUrl": "/avatars/may.png"
                                }
                            }
                        ],
                        "style": {
                            "cover": "#FFAF3F",
                            "isImage": false
                        },
                        "labelIds": ["l101", "l105"],
                        "cardMembers": [
                            {
                                "_id": "u102",
                                "fullname": "May Almog",
                                "username": "mayalmog",
                                "imgUrl": "/avatars/may.png"
                            }
                        ]
                    },
                    {
                        "id": "c103",
                        "title": "CoverColors Cmp",
                        "style": {
                            "cover": null,
                            "isImage": false
                        },
                        "labelIds": ["l104"],
                        "cardMembers": [
                            {
                                "_id": "u103",
                                "fullname": "Dese Besunech",
                                "username": "desebesunech",
                                "imgUrl": "/avatars/dese.png"
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "CoverColors Todos",
                                "todos": [
                                    {
                                        "id": "216jl",
                                        "title": "Add custom colors hex",
                                        "isDone": true
                                    },
                                    {
                                        "id": "216jx",
                                        "title": "Connect cmp to store",
                                        "isDone": true
                                    },
                                    {
                                        "id": "216jw",
                                        "title": "Add pixel perfect CSS design",
                                        "isDone": false
                                    },
                                    {
                                        "id": "216jk",
                                        "title": "Add MUI Icons",
                                        "isDone": false
                                    }
                                ]
                            }
                        ]
                    }
                ],
            },
            {
                "id": "g137",
                "title": "Pages",
                "cards": [
                    {
                        "id": "p73g",
                        "title": "BoardPage",
                        "description": "Page should render login/logout conditionally",
                        "comments": [
                            {
                                "id": "Z4P7m",
                                "txt": "@mayalmog please redo layout of",
                                "createdAt": 1590995557436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Ziv Bryk",
                                    "username": "zivbryk",
                                    "imgUrl": "/avatars/ziv.png"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YE5mb",
                                "title": "BoardPage Todos",
                                "todos": [
                                    {
                                        "id": "c122X",
                                        "title": "Make basic layout",
                                        "isDone": true
                                    },
                                    {
                                        "id": "f132X",
                                        "title": "Connect to store",
                                        "isDone": false
                                    },
                                    {
                                        "id": "9142X",
                                        "title": "Adjust list container height",
                                        "isDone": true
                                    },
                                    {
                                        "id": "96b2c",
                                        "title": "Adjust font size",
                                        "isDone": false
                                    }
                                    ,
                                    {
                                        "id": "915r8",
                                        "title": "Add img cover feature",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "attachments": [
                            {
                                "id": "HKrvQ",
                                "createdAt": 1632987289278,
                                "name": "star_for_button.png",
                                "type": "img",
                                "url": "http://res.cloudinary.com/zivcloud555/image/upload/v1632990567/dczryta6ewdoeg8vu9wd.png"
                            },
                            {
                                "id": "dK4vF",
                                "createdAt": 1632987289278,
                                "name": "A Complete Guide to Flexbox",
                                "type": "link",
                                "url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                            }
                        ],
                        "cardMembers": [
                            {
                                "_id": "u101",
                                "fullname": "Ziv Bryk",
                                "username": "zivbryk",
                                "imgUrl": "/avatars/ziv.png"
                            },
                            {
                                "_id": "u102",
                                "fullname": "May Almog",
                                "username": "mayalmog",
                                "imgUrl": "/avatars/may.png"
                            },
                            {
                                "_id": "u103",
                                "fullname": "Dese Besunech",
                                "username": "desebesunech",
                                "imgUrl": "/avatars/dese.png"
                            },
                            {
                                "_id": "u104",
                                "fullname": "Nadav Nassi",
                                "username": "nadavnassi",
                                "imgUrl": "/avatars/nadav.png",
                            }
                        ],
                        "labelIds": ["l101", "l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 1615651492,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Ziv Bryk",
                            "username": "zivbryk",
                            "imgUrl": "/avatars/ziv.png"
                        },
                        "style": {
                            "cover": "#EF7564",
                            "isImage": false
                        }
                    },
                    {
                        "id": "f1Gp",
                        "title": "LoginLogout Page",
                        "style": {
                            "cover": null,
                            "isImage": false
                        },
                        "dueDate": 1615600000,
                        "labelIds": ["l101", "l106"],
                        "cardMembers": [
                            {
                                "_id": "u102",
                                "fullname": "May Almog",
                                "username": "mayalmog",
                                "imgUrl": "/avatars/may.png"
                            },
                            {
                                "_id": "u104",
                                "fullname": "Nadav Nassi",
                                "username": "nadavnassi",
                                "imgUrl": "/avatars/nadav.png",
                            }
                        ],
                    },
                    {
                        "id": "f12f",
                        "title": "Workspace Page",
                        "style": {
                            "cover": '#29CCE5',
                            "isImage": false
                        },
                        "labelIds": ["l101"],
                        "cardMembers": [
                            {
                                "_id": "u102",
                                "fullname": "May Almog",
                                "username": "mayalmog",
                                "imgUrl": "/avatars/may.png"
                            },
                            {
                                "_id": "u103",
                                "fullname": "Dese Besunech",
                                "username": "desebesunech",
                                "imgUrl": "/avatars/dese.png"
                            }
                        ],
                    },
                    {
                        "id": "f13N",
                        "title": "CardDetails Page",
                        "style": {
                            "cover": null,
                            "isImage": false
                        },
                        "labelIds": ["l103"],
                        "cardMembers": [
                            {
                                "_id": "u102",
                                "fullname": "May Almog",
                                "username": "mayalmog",
                                "imgUrl": "/avatars/may.png"
                            },
                            {
                                "_id": "u103",
                                "fullname": "Dese Besunech",
                                "username": "desebesunech",
                                "imgUrl": "/avatars/dese.png"
                            }
                        ],
                    }
                ]
            },
            {
                "id": "gH38",
                "title": "Development",
                "cards": [
                    {
                        "id": "f1G2",
                        "title": "CardCentral Cmp",
                        "comments": [
                            {
                                "id": "Z4P7m",
                                "txt": "@mayalmog please pay attention to main layouts here",
                                "createdAt": 1590995557782.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Ziv Bryk",
                                    "username": "zivbryk",
                                    "imgUrl": "/avatars/ziv.png"
                                }
                            }
                        ],
                        "style": {
                            "cover": null,
                            "isImage": false
                        },
                        "cardMembers": [
                            {
                                "_id": "u102",
                                "fullname": "May Almog",
                                "username": "mayalmog",
                                "imgUrl": "/avatars/may.png"
                            }
                        ],
                    },
                    {
                        "id": "pK35",
                        "title": "CopyCard",
                        "description": "Page should render login/logout conditionally",
                        "comments": [
                            {
                                "id": "Z4P7m",
                                "txt": "@mayalmog please redo layout of",
                                "createdAt": 1590995557436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Ziv Bryk",
                                    "username": "zivbryk",
                                    "imgUrl": "/avatars/ziv.png"
                                }
                            }
                        ],
                        "attachments": [
                            {
                                "id": "HKrvQ",
                                "createdAt": 1632987289278,
                                "name": "Crop this to circle.JPG",
                                "type": "img",
                                "url": "http://res.cloudinary.com/zivcloud555/image/upload/v1632987289/sbzhu6amtaxxreqjzbcy.jpg"
                            },
                            {
                                "id": "dK4vF",
                                "createdAt": 1632987289278,
                                "name": "Article about fixing the svg here",
                                "type": "link",
                                "url": "https://css-tricks.com/svg-line-animation-works/"
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YE5mb",
                                "title": "CopyCard Todos",
                                "todos": [
                                    {
                                        "id": "c122X",
                                        "title": "Make basic layout",
                                        "isDone": true
                                    },
                                    {
                                        "id": "f132X",
                                        "title": "Connect to store",
                                        "isDone": true
                                    },
                                    {
                                        "id": "9142X",
                                        "title": "Align Icons",
                                        "isDone": false
                                    },
                                    {
                                        "id": "9152X",
                                        "title": "Adjust font size",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "cardMembers": [
                            {
                                "_id": "u101",
                                "fullname": "Ziv Bryk",
                                "username": "zivbryk",
                                "imgUrl": "/avatars/ziv.png"
                            },
                            {
                                "_id": "u102",
                                "fullname": "May Almog",
                                "username": "mayalmog",
                                "imgUrl": "/avatars/may.png"
                            }
                        ],
                        "labelIds": ["l101", "l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 1615651492,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Ziv Bryk",
                            "username": "zivbryk",
                            "imgUrl": "/avatars/ziv.png"
                        },
                        "style": {
                            "cover": "#6DECA9",
                            "isImage": false
                        }
                    }
                ]
            },
            {
                "id": "g1f0",
                "title": "Done",
                "cards": [
                    {
                        "id": "f149",
                        "title": "Modal Cmp",
                        "style": {
                            "cover": "#F5DD29",
                            "isImage": false
                        },
                        "labelIds": ["l105", "l106"],
                        "cardMembers": [
                            {
                                "_id": "u102",
                                "fullname": "May Almog",
                                "username": "mayalmog",
                                "imgUrl": "/avatars/may.png"
                            },
                            {
                                "_id": "u101",
                                "fullname": "Ziv Bryk",
                                "username": "zivbryk",
                                "imgUrl": "/avatars/ziv.png"
                            }
                        ],
                    },
                    {
                        "id": "p830",
                        "title": "Workspace Page",
                        "description": "Page should render login/logout conditionally",
                        "comments": [
                            {
                                "id": "Z4P7m",
                                "txt": "@mayalmog please redo layout of",
                                "createdAt": 1590995557436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Ziv Bryk",
                                    "username": "zivbryk",
                                    "imgUrl": "/avatars/ziv.png"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YE5mb",
                                "title": "CopyCard Todos",
                                "todos": [
                                    {
                                        "id": "c122X",
                                        "title": "Make basic layout",
                                        "isDone": true
                                    },
                                    {
                                        "id": "f132X",
                                        "title": "Connect to store",
                                        "isDone": true
                                    },
                                    {
                                        "id": "9142X",
                                        "title": "Align Icons",
                                        "isDone": false
                                    },
                                    {
                                        "id": "9752t",
                                        "title": "Adjust font size",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "cardMembers": [
                            {
                                "_id": "u103",
                                "fullname": "Dese Besunech",
                                "username": "desebesunech",
                                "imgUrl": "/avatars/dese.png"
                            }
                        ],
                        "labelIds": ["l101", "l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 1615651492,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Ziv Bryk",
                            "username": "zivbryk",
                            "imgUrl": "/avatars/ziv.png"
                        },
                        "style": {
                            "cover": null,
                            "isImage": false
                        }
                    }
                ]
            }
        ],
        "activities": [
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Ziv Bryk",
                    "username": "zivbryk",
                    "imgUrl": "/avatars/ziv.png"
                },
                "list": {
                    "id": "l14l",
                    "title": "QA checkup"
                },
                "card": {
                    "id": "c101",
                    "title": "Replace Logo"
                }
            }
        ]
    },
    {
        "_id": "b102",
        "title": "Monday dev Project",
        "createdAt": 1589983468400,
        "createdBy": {
            "_id": "u102",
            "fullname": "may almog",
            "imgUrl": "/avatars/may.png",
        },
        "style": {
            "cover": "https://images.unsplash.com/photo-1628191013647-5640e14ded54?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            "isImage": true
        },
        "labels": [
            {
                "id": "l101",
                "title": "+ Design Team",
                "color": "#61bd4f"
            },
            {
                "id": "l102",
                "title": "For Weekly Meeting",
                "color": "#f2d600"
            },
            {
                "id": "l103",
                "title": "For Monthly meeting",
                "color": "#ff9f1a"
            },
            {
                "id": "l104",
                "title": "Urgent",
                "color": "#eb5a46"
            },
            {
                "id": "l105",
                "title": "Nice to have",
                "color": "#c377e0"
            },
            {
                "id": "l106",
                "title": "Documentation needed",
                "color": "#0079bf"
            }

        ],
        "boardMembers": [
            {
                "_id": "u101",
                "fullname": "Ziv Bryk",
                "username": "zivbryk",
                "imgUrl": "/avatars/ziv.png"
            },
            {
                "_id": "u102",
                "fullname": "May Almog",
                "username": "mayalmog",
                "imgUrl": "/avatars/may.png"
            },
            {
                "_id": "u103",
                "fullname": "Dese Besunech",
                "username": "desebesunech",
                "imgUrl": "/avatars/dese.png"
            },
            {
                "_id": "u104",
                "fullname": "Nadav Nassi",
                "username": "nadavnassi",
                "imgUrl": "/avatars/nadav.png",
            }
        ],
        "lists": [
            {
                "id": "g101",
                "title": "List 1",
                "cards": [
                    {
                        "id": "c101",
                        "title": "Replace logo",
                        "labelIds": ["l101", "l102"],
                        "style": {
                            "cover": "/assets/img/ball.jpg",
                            "isImage": true
                        }
                    },
                    {
                        "id": "c102",
                        "title": "Add Samples",
                        "labelIds": ["l101", "l102"],
                        "style": {
                            "cover": "f4f5f7",
                            "isImage": false
                        }
                    }
                ],
            },
            {
                "id": "g102",
                "title": "List 2",
                "cards": [
                    {
                        "id": "c103",
                        "title": "Do that",
                        "labelIds": ["l101", "l102"], "style": {
                            "cover": "/assets/img/ball.jpg",
                            "isImage": true
                        }
                    },
                    {
                        "id": "c104",
                        "title": "Help me",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Ziv Bryk",
                                    "username": "zivbryk",
                                    "imgUrl": "/avatars/ziv.png"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "cardMembers": [
                            {
                                "_id": "u101",
                                "fullname": "Ziv Bryk",
                                "username": "zivbryk",
                                "imgUrl": "/avatars/ziv.png"
                            }
                        ],
                        "labelIds": ["l101", "l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 16156215211,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Ziv Bryk",
                            "username": "zivbryk",
                            "imgUrl": "/avatars/ziv.png"
                        },
                        "style": {
                            "cover": "/assets/img/ball.jpg",
                            "isImage": true
                        }
                    }
                ]
            }
        ],
        "activities": [
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "card": {
                    "id": "c101",
                    "title": "Replace Logo"
                }
            },
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u143",
                    "fullname": "kobi batito",
                    "imgUrl": "http://some-img"
                },
                "card": {
                    "id": "c101",
                    "title": "Replace Logo",

                }
            },
            {
                "id": "a101",
                "txt": "Changed template",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u143",
                    "fullname": "kobi batito",
                    "imgUrl": "http://some-img"
                }
            },
            {

            }
        ],
        "archivedCards": []
    },
    {
        _id: "b103",
        title: "Trellis proj",
        "createdAt": 1589983468400,
        "createdBy": {
            "_id": "u103",
            "fullname": "Dese Besunech",
            "imgUrl": "/avatars/dese.png",
        },
        "style": {
            "cover": "#00AECC",
            "isImage": true
        },
        "labels": [
            {
                "id": "l101",
                "title": "+ Design Team",
                "color": "#61bd4f"
            },
            {
                "id": "l102",
                "title": "For Weekly Meeting",
                "color": "#f2d600"
            },
            {
                "id": "l103",
                "title": "For Monthly meeting",
                "color": "#ff9f1a"
            },
            {
                "id": "l104",
                "title": "Urgent",
                "color": "#eb5a46"
            },
            {
                "id": "l105",
                "title": "Nice to have",
                "color": "#c377e0"
            },
            {
                "id": "l106",
                "title": "Documentation needed",
                "color": "#0079bf"
            }

        ],
        "boardMembers": [
            {
                "_id": "u101",
                "fullname": "Ziv Bryk",
                "username": "zivbryk",
                "imgUrl": "/avatars/ziv.png"
            },
            {
                "_id": "u104",
                "fullname": "Nadav Nassi",
                "username": "nadavnassi",
                "imgUrl": "/avatars/nadav.png",
            }
        ],
        "lists": [
            {
                "id": "g101",
                "title": "List 1",
                "cards": [
                    {
                        "id": "c101",
                        "title": "Replace logo",
                        "labelIds": ["l101", "l102"],
                        "style": {
                            "cover": "/assets/img/ball.jpg",
                            "isImage": true
                        }
                    },
                    {
                        "id": "c102",
                        "title": "Add Samples",
                        "labelIds": ["l101", "l102"],
                        "style": {
                            "cover": "f4f5f7",
                            "isImage": false
                        }
                    }
                ],
            },
            {
                "id": "g102",
                "title": "List 2",
                "cards": [
                    {
                        "id": "c103",
                        "title": "Do that",
                        "labelIds": ["l101", "l102"], "style": {
                            "cover": "/assets/img/ball.jpg",
                            "isImage": true
                        }
                    },
                    {
                        "id": "c104",
                        "title": "Help me",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Ziv Bryk",
                                    "username": "zivbryk",
                                    "imgUrl": "/avatars/ziv.png"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "cardMembers": [
                            {
                                "_id": "u101",
                                "fullname": "Ziv Bryk",
                                "username": "zivbryk",
                                "imgUrl": "/avatars/ziv.png"
                            }
                        ],
                        "labelIds": ["l101", "l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 16156215211,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Ziv Bryk",
                            "username": "zivbryk",
                            "imgUrl": "/avatars/ziv.png"
                        },
                        "style": {
                            "cover": "/assets/img/ball.jpg",
                            "isImage": true
                        }
                    }
                ]
            }
        ],
        "activities": [
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "card": {
                    "id": "c101",
                    "title": "Replace Logo"
                }
            },
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u143",
                    "fullname": "kobi batito",
                    "imgUrl": "http://some-img"
                },
                "card": {
                    "id": "c101",
                    "title": "Replace Logo",

                }
            },
            {
                "id": "a101",
                "txt": "Changed template",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u143",
                    "fullname": "kobi batito",
                    "imgUrl": "http://some-img"
                }
            },
            {

            }
        ],
        "archivedCards": []
    },
    {
        _id: "b104",
        title: "Save the planet",
        "createdAt": 1589983468400,
        "createdBy": {
            "_id": "u101",
            "fullname": "ziv bryk",
            "imgUrl": "/avatars/ziv.png",
        },
        "style": {
            "cover": '#0079BF',
            "isImage": true
        },
        "labels": [
            {
                "id": "l101",
                "title": "+ Design Team",
                "color": "#61bd4f"
            },
            {
                "id": "l102",
                "title": "For Weekly Meeting",
                "color": "#f2d600"
            },
            {
                "id": "l103",
                "title": "For Monthly meeting",
                "color": "#ff9f1a"
            },
            {
                "id": "l104",
                "title": "Urgent",
                "color": "#eb5a46"
            },
            {
                "id": "l105",
                "title": "Nice to have",
                "color": "#c377e0"
            },
            {
                "id": "l106",
                "title": "Documentation needed",
                "color": "#0079bf"
            }

        ],
        "boardMembers": [
            {
                "_id": "u101",
                "fullname": "Ziv Bryk",
                "username": "zivbryk",
                "imgUrl": "/avatars/ziv.png"
            }
        ],
        "lists": [
            {
                "id": "g101",
                "title": "List 1",
                "cards": [
                    {
                        "id": "c101",
                        "title": "Replace logo",
                        "labelIds": ["l101", "l102"],
                        "style": {
                            "cover": "/assets/img/ball.jpg",
                            "isImage": true
                        }
                    },
                    {
                        "id": "c102",
                        "title": "Add Samples",
                        "labelIds": ["l101", "l102"],
                        "style": {
                            "cover": "f4f5f7",
                            "isImage": false
                        }
                    }
                ],
            },
            {
                "id": "g102",
                "title": "List 2",
                "cards": [
                    {
                        "id": "c103",
                        "title": "Do that",
                        "labelIds": ["l101", "l102"], "style": {
                            "cover": "/assets/img/ball.jpg",
                            "isImage": true
                        }
                    },
                    {
                        "id": "c104",
                        "title": "Help me",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Ziv Bryk",
                                    "username": "zivbryk",
                                    "imgUrl": "/avatars/ziv.png"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "cardMembers": [
                            {
                                "_id": "u101",
                                "fullname": "Ziv Bryk",
                                "username": "zivbryk",
                                "imgUrl": "/avatars/ziv.png"
                            }
                        ],
                        "labelIds": ["l101", "l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 16156215211,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Ziv Bryk",
                            "username": "zivbryk",
                            "imgUrl": "/avatars/ziv.png"
                        },
                        "style": {
                            "cover": "/assets/img/ball.jpg",
                            "isImage": true
                        }
                    }
                ]
            }
        ],
        "activities": [
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "card": {
                    "id": "c101",
                    "title": "Replace Logo"
                }
            },
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u143",
                    "fullname": "kobi batito",
                    "imgUrl": "http://some-img"
                },
                "card": {
                    "id": "c101",
                    "title": "Replace Logo",

                }
            },
            {
                "id": "a101",
                "txt": "Changed template",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u143",
                    "fullname": "kobi batito",
                    "imgUrl": "http://some-img"
                }
            }
        ]
    }]
