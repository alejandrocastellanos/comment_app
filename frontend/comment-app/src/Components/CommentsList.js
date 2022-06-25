import React, {useContext} from 'react';
import {AppContext} from "../AppContext";
import {CircularProgress, Divider, IconButton, List, ListItem, ListItemText} from "@mui/material";
import Fade from '@mui/material/Fade';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";


function CommentsList(){

    const {
        commentList,
        removeComment,
        loading
    } = useContext(AppContext);

    return (
        <>
            <h1 style={{ color: "#F9F9F9", textAlign: "center"}} >Comments</h1>
            <Box
                backgroundColor="white"
                sx={{ borderRadius: '16px' }}
            >
                {
                    !loading ? (
                        <List
                            direction="column"
                          alignItems="center"
                          justifyContent="center"
                        >
                            {commentList.map((item) => (
                                <>
                                    <ListItem key={item.id}
                                              secondaryAction={
                                                  <IconButton edge="end" aria-label="delete" onClick={() => removeComment(item._id)}>
                                                      <DeleteIcon type="button" />
                                                  </IconButton>
                                              }
                                    >
                                        <ListItemText
                                            primary={item.comment}
                                            style={{ textAlign: "center"}}
                                        />
                                    </ListItem>
                                    <Divider component="li" style={{  backgroundColor: "#D6D5A8"}}/>
                                </>
                            ))}
                        </List>

                    ) : (
                    <Fade
                        in={loading}
                        style={{
                            transitionDelay: loading ? '50ms' : '0ms',
                        }}
                        unmountOnExit
                    >
                        <div style={{display: 'flex', justifyContent: 'center', padding:'100px'}}>
                            <CircularProgress style={{ color: "#816797" }} size="5rem" />
                        </div>
                    </Fade>
                )}

            </Box>
        </>
    );
}

export { CommentsList };