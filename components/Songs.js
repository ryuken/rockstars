import React, { Fragment, memo } from "react"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

const Songs = ({ songs }) => {

    return (
        <List>
            {songs.map(song => (
                <Fragment key={song.id}>
                    <ListItem>
                        <ListItemText
                            primary={song.name}
                            secondary={`${song.album} - ${song.year} - ${song.genre} - BPM: ${song.bpm}`}
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Fragment>
            ))}
        </List>
    )
}

export default memo(Songs)