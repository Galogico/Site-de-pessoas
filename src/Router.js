import { Children } from "react"
import HomePage from "./pages/HomePage"
import PessoasPage from "./pages/PessoasPage"
import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path:'/pessoas',
        element:<PessoasPage/>
    },
    {
        path: '/*',
        element:<ErrorPage/>
    }

    // {
    //     path: "/pessoas",
    //     element: <PessoasPage/>
    // },
    // {
    //     path: '/pessoas/:id'
    //     element: <PessoasInformation/>,
    // }
])