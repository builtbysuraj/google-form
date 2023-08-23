import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { createRoot } from "react-dom/client"
import App from "./App"

const theme = createTheme({
  palette: {
    background: {
      default: "#F0EBF8",
    },
  },
})

createRoot(document.querySelector("#root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
