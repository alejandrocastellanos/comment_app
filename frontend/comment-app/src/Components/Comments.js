import React from 'react';
import {NewComment} from "./NewComment";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";


function Comments(){
    document.body.style.backgroundColor = "#1B2430";
    return (
        <Box sx={{ flexGrow: 1 }} style={{ padding: "10em" }}>
            <Grid container spacing={2}>
                <NewComment />
            </Grid>
        </Box>
    );
}

export { Comments };