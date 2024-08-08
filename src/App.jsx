import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home"
import { Historia } from "./pages/Historia"
import { Funcionalidade } from "./pages/Funcionalidade"
import { Comprovacao } from "./pages/Comprovacao"
import { Componentes } from "./pages/Componentes"
import { Sobre_nos } from "./pages/Sobre_nos"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
      path: "/historia",
      element: <Historia />
    },

    {
      path: "/funcionalidade",
      element: <Funcionalidade />
    },

    {
      path: "/comprovacao",
      element: <Comprovacao />
    },

    {
      path: "/componentes",
      element: <Componentes />
    },

    {
      path: "/sobre-nos",
      element: <Sobre_nos />
    },
])


export function App() {
  return (
    <RouterProvider router={router} />
  )
}
