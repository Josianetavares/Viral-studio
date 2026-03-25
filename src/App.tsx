import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
  Outlet,
} from '@tanstack/react-router'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import DashboardHome from './pages/DashboardHome'
import VideoCreatorScript from './pages/VideoCreatorScript'
import VideoCreatorTheme from './pages/VideoCreatorTheme'
import ReferenceAnalyzer from './pages/ReferenceAnalyzer'
import VoiceLibrary from './pages/VoiceLibrary'
import ProjectsPage from './pages/ProjectsPage'
import TemplatesPage from './pages/TemplatesPage'
import SettingsPage from './pages/SettingsPage'

// Root route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

// Landing
const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
})

// Auth
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
})

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: SignupPage,
})

// Dashboard
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardHome,
})

const scriptRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/create/script',
  component: VideoCreatorScript,
})

const themeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/create/theme',
  component: VideoCreatorTheme,
})

const analyzerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/analyzer',
  component: ReferenceAnalyzer,
})

const voicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/voices',
  component: VoiceLibrary,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/projects',
  component: ProjectsPage,
})

const templatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/templates',
  component: TemplatesPage,
})

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/settings',
  component: SettingsPage,
})

const routeTree = rootRoute.addChildren([
  landingRoute,
  loginRoute,
  signupRoute,
  dashboardRoute,
  scriptRoute,
  themeRoute,
  analyzerRoute,
  voicesRoute,
  projectsRoute,
  templatesRoute,
  settingsRoute,
])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return <RouterProvider router={router} />
}
