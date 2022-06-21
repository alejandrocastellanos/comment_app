from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from social_network.api.endpoints import comments_endpoints

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*']
)

app.include_router(comments_endpoints)


@app.get('/')
def read_root():
    return {'hello': 'world'}
