import React, {useEffect, useState} from 'react';

const AppContext = React.createContext(undefined, undefined);

function AppProvider(props) {

    const url = "http://localhost/comment/"
    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState([]);
    const [loading, setLoading] = useState(true);

    const setTime = (isLoading, timeout) => {
        window.setTimeout(() => {
            setLoading(isLoading);
        }, timeout);
    };

    const fetchComments = (url) => {
        fetch(url,{
            method: "GET",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
            .then(res=>res.json())
            .then(
                data => {
                    setCommentList(data);
                    setTime(false, 1500);
                }
            ).catch(
            error => {
                console.log('error: ' + error)
            });
    };

    useEffect(() => {
        fetchComments(url);
    }, [props.commentList]);

    const removeComment = (id) => {
        setLoading(true);
        fetch(url + id, {
            method: "DELETE",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(
                data => {
                    setTime(false, 1000);
                    const newList = commentList.filter((item) => item._id !== id);
                    setCommentList(newList);
                })
            .catch(error => {
                console.log('error: ', error)
            });
    };

    const addComment = () => {
        const newComment = {
            comment: comment
        };
        fetch(url, {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(newComment)
        })
            .then(response => response.json())
            .then(
                data => {
                    setTime(false, 1000);
                    const newList = commentList.concat({
                        'id': data.id,
                        'comment': comment
                    });
                    setCommentList(newList);
                })
            .catch(error => {
                console.log('error: ', error)
            });
    };

    function commentOnChange(event){
        setComment(event.target.value);
    }

    function AddNewComment() {
        setComment("");
        setLoading(true);
        addComment();
    }

    return (
        <AppContext.Provider value={{
            comment,
            commentList,
            fetchComments,
            removeComment,
            addComment,
            commentOnChange,
            AddNewComment,
            loading
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export { AppContext, AppProvider }