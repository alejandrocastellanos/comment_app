import React, {useContext} from 'react';
import {AppContext} from "../AppContext";
import {CommentsList} from "./CommentsList";
import {Grid, IconButton, InputAdornment, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


function NewComment(){

    const {
        comment,
        AddNewComment,
        commentOnChange,
        loading
    } = useContext(AppContext);

    return (
        <>
            <Grid item xs={6} md={1}/>
            <Grid item xs={6}
                  md={4}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
            >
                <h1 style={{ color: "#F9F9F9", textAlign: "center"}}>New Comment</h1>
                <div style={{ textAlign: "center"}}>
                    <TextField
                        id="outlined-basic"
                        disabled={loading}
                        variant="outlined"
                        type="text"
                        placeholder="New Comment"
                        value={comment}
                        onChange={commentOnChange}
                        style={{ color: "#D6D5A8"}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end" style={{ color: "#1B2430"}} onClick={AddNewComment}>
                                        <AddIcon/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                            style: { color: "#1B2430", backgroundColor:"#F9F9F9"}
                        }}
                    />
                </div>

            </Grid>

            <Grid
                item
                xs={6}
                md={6}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <CommentsList />
            </Grid>
            <Grid item xs={6} md={1}/>
        </>
    );
}

export { NewComment };