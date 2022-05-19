import React, { useState, useEffect } from "react"

import { withRouter } from "next/router"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import Songs from "../../components/Songs"

const ArtistSongs = ({ router }) => {
    
    const [songs, setSongs] = useState([])

    useEffect(() => {

        if("undefined" === typeof router.query.id)
            return

        fetch("http://localhost:3000/api/songs?artist=" + router.query.id)
            .then(res => res.json())
            .then(data => setSongs(data))

    }, [router.query.id])

    return (
        <Grid container spacing={2} justifyContent="center" padding="2rem">
            <Grid item xs={10}>
                <Typography variant="h4" mb={3}>
                    {router.query.id} - {songs.length} songs
                </Typography>

                <Songs songs={songs} />
            </Grid>
        </Grid>
    )
}

export default withRouter(ArtistSongs)