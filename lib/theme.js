import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
    shadows: Array(25).fill("none"),
    palette: {
        primary: {
            main: "#FFE000",
        },
        secondary: {
            main: "#232323",
            darker: "#000000",
        },
        white: {
            main: "#FFFFFF",
        }
    },
})

export default theme