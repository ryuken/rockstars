import React, { useState, useEffect } from "react"

import Swal from "sweetalert2"
import store from "store"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"

import Artists from "../components/Artists"

const ArtistsOverview = () => {

    const [filter, setFilter] = useState("")
    const [artists, setArtists] = useState(store.get("artists", []))

    const updateFilter = (e) => {
        setFilter(e.target.value)
    }

    const fetchData = (e) => {

        // only filter when there is no event or Enter is pressed
        if("undefined" !== typeof e && e.key !== "Enter")
            return

        const storedArtists = store.get("artists", [])
        // when not filtering, don't fetch if there are already artists stored
        if(filter.length === 0 && storedArtists.length > 0)
            return storedArtists

        fetch("http://localhost:3000/api/artists?q=" + filter)
            .then(res => res.json())
            .then(data => {

                // only store data when there is no localstorage yet and we're not filtering data
                if(filter.length === 0 && store.get("artists", []).length === 0)
                    store.set("artists", data)

                setArtists(data)
            })
            .catch(err => {

                Swal.fire({
                    title: "Error!",
                    text: "Couldn't load data. Please refresh the page",
                    icon: "error",
                })
            })
    }

    useEffect(() => {

        fetchData()

    }, [])

    return (
        <Grid container spacing={2} justifyContent="center" padding="2rem">
            <Grid item xs={10}>
                <Typography variant="h4" mb={3}>
                    {artists.length} Artists 
                </Typography>
                
                <TextField
                    id="filter"
                    label="Filter artist name"
                    value={filter}
                    onChange={updateFilter}
                    onKeyUp={fetchData}
                    fullWidth
                    variant="filled"
                />

                <Artists artists={artists} />
            </Grid>
        </Grid>
    )
}

export default ArtistsOverview