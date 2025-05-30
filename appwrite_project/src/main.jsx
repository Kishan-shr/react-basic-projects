import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { AuthLayout } from './components/index.js'
import Login from './components/Login.jsx'
import Home from './pages/Home.jsx'
import PostCard from './components/postCard.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[{
    path:'/',
    element:<Home/>,
  },
  {
    path:'/login',
    element:(<AuthLayout authentication={false}> 
<Login/>
</AuthLayout>
    ),
  },
{
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
]
}])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
