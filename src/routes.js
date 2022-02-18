import { HomePage } from "./pages/home-page.jsx";
import { BoardPage } from "./pages/board-page.jsx";
import { WorkspacePage } from "./pages/workspace-page.jsx";

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/board/:boardId",
    element: <BoardPage />,
    label: "Boards",
  },
  {
    path: "/workspace",
    element: <WorkspacePage />,
    label: "Workspace",
  },
  // {
  //   path: "/",
  //   element: HomePage,
  //   label: "Home",
  // },
  // {
  //     path: '/car',
  //     component: CarApp,
  //     label: 'Cars'
  // },
];

export default routes;
