import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import App from './App';
import { Home,About, Contact, User, GitHubInfo } from './components';
import GitHub from './components/GitHub';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='User/:id' element={<User/>}/>
      <Route 
      loader={GitHubInfo}
      path='Github' element={<GitHub/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
