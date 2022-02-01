import { HomePage } from './pages/home-page.jsx'
import { BoardPage } from './pages/board-page.jsx'
import { WorkspacePage } from './pages/workspace-page.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/board/:boardId',
        component: BoardPage,
        label: 'Boards'
    },
    {
        path: '/workspace',
        component: WorkspacePage,
        label: 'Workspace'
    },
    {
        path: '/',
        component: HomePage,
        label: 'Home',
    },
    // {
    //     path: '/car',
    //     component: CarApp,
    //     label: 'Cars'
    // },
]

export default routes;