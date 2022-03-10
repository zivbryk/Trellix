import { HomePage } from "./pages/home-page.jsx";
import { LoginSignup } from "./pages/login-signup";
import { WorkspacePage } from "./pages/workspace-page.jsx";
import { BoardPage } from "./pages/board-page.jsx";

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/",
    element: <HomePage />,
    label: "Homepage",
  },
  {
    path: "/auth/:mode",
    element: <LoginSignup />,
    label: "Workspace",
  },
  {
    path: "/workspace",
    element: <WorkspacePage />,
    label: "Workspace",
  },
  {
    path: "/board/:boardId",
    element: <BoardPage />,
    label: "Boards",
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
