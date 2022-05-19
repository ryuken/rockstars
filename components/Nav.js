import React from "react"

import { styled } from "@mui/material/styles"

import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const Logo = styled("img")({
    height: "96px",
    padding: "0.5rem",
})

const AppTitle = styled(Typography)({
    "textDecoration": "none",
    ":visited": {
        color: "inherit",
        
    }
})

export default function Nav() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <a href="/">
                            <Logo src="/img/logo.svg" />
                        </a>
                        <AppTitle
                            variant="h6"
                            noWrap
                            href="/"
                            component="a"
                            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                        >
                            Music Management
                        </AppTitle>

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}