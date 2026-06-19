import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import HomePage from './pages/DesignEditorPage'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])
