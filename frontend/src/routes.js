import { HomePage } from "./pages/home-page.jsx";
import { LoginSignup } from "./pages/login-signup";
import { WorkspacePage } from "./pages/workspace-page.jsx";
import { BoardPage } from "./pages/board-page";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    label: "Homepage",
  },
  {
    path: "/auth/:mode",
    element: <LoginSignup />,
    label: "LoginSignup",
  },
  {
    path: "/workspace",
    element: <WorkspacePage />,
    label: "Workspace",
  },
  {
    path: "/board/:boardId/*",
    element: <BoardPage />,
    label: "Boards",
  },
];

export default routes;
