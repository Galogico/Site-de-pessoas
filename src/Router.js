import PessoasPage from "./pages/PessoasPage"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <PessoasPage/>,
    }
])