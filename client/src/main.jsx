import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ShowBookList from './components/ShowBookList.jsx'
import CreateBook from './components/CreateBook.jsx'
import ShowBookDetails from './components/ShowBookDetails.jsx'
import UpdateBookInfo from './components/UpdateBookInfo.jsx'


const router = createBrowserRouter([
  {path : '/', element: <ShowBookList/>},
  {path : '/create-book', element: <CreateBook/>},
  {path : '/show-book/:id', element: <ShowBookDetails/>},
  {path : '/edit-book/:id', element: <UpdateBookInfo/>},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}/>
  </StrictMode>,
)
