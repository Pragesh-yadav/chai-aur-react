import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'

import { createBrowserRouter, ReactProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Layout /> 
    , children: [
      {
        path: "",
        element: <Home />
      },
      {}
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactProvider router = {router}/>
  </StrictMode>,
)
