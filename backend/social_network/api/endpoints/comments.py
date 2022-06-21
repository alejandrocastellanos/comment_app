from fastapi import APIRouter
from fastapi.responses import JSONResponse

from social_network.model.comment import CommentSchema
from social_network.controller.comments import Comments
from social_network.model.generic_response import GenericResponse, ErrorResponse

comments_endpoints = APIRouter()
comments = Comments()


@comments_endpoints.get('/comment')
async def get_comment():
    response = await comments.get()
    return response


@comments_endpoints.post('/comment', response_model=GenericResponse, responses={500: {"model": ErrorResponse}})
async def new_comment(comment: CommentSchema):
    try:
        return await comments.create(dict(comment))
    except Exception as e:
        return JSONResponse(status_code=500, content={"message": e})


@comments_endpoints.delete('/comment/{comment_id}')
async def get_comment(comment_id):
    response = await comments.delete(id=comment_id)
    return response
