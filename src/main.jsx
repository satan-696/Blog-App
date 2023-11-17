import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import Signup from './pages/Signup.jsx'
import AddPost from './pages/AddPost.jsx'
import AllPosts from './pages/AllPosts.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import MyPost from './pages/MyPost.jsx'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }, 
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            {""}
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>
            {""}
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path: '/my-posts',
        element: (
          <AuthLayout authentication>
            {""}
            <MyPost/>
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {""}
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: <Post/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </Provider>
  </React.StrictMode>,
)
