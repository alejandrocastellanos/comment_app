from motor.motor_asyncio import AsyncIOMotorClient


class MClient:

    _instance = None
    _client = AsyncIOMotorClient()
    _db = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        self._client = AsyncIOMotorClient('mongodb://root:12345@mongo:27018/', serverSelectionTimeoutMS=5000) # nombre del contenedor de mongo después del @
        self._db = self._client.social_network

    async def comments_collection(self):
        return self._client.social_network.comments
