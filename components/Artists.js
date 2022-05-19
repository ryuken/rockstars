import React, { Fragment, memo } from "react"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

import Divider from "@mui/material/Divider"

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"

const Artists = ({ artists }) => {

    return (
        <List>
            {artists.map(artist => (
                <Fragment key={artist.id}>
                    <ListItem>
                        <ListItemButton component="a" href={`/artist/${artist.name}`}>
                            <ListItemText
                                primary={artist.name}
                            />
                            <KeyboardDoubleArrowRightIcon />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Fragment>
            ))}
        </List>
    )
}

export default memo(Artists)