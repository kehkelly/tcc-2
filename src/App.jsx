import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home"
import { Historia } from "./pages/Historia"
import { Funcionamento } from "./pages/Funcionamento"
import { Comprovacao } from "./pages/Comprovacao"
import { Componentes } from "./pages/Componentes"
import { Sobre_nos } from "./pages/Sobre_nos"
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

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
      path: "/funcionamento",
      element: <Funcionamento />
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle/>
    </ThemeProvider>
  )
}
