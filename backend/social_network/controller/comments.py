import uuid

from social_network.client.client import MClient


class Comments:

    _mongo_client = MClient()

    def __init__(self):
        self.comments_collection = None

    async def _get_collection(self):
        self.comments_collection = await self._mongo_client.comments_collection()

    async def get(self, id: str = None):
        await self._get_collection()
        if id:
            return await self.comments_collection.find_one({'_id': id})
        docs = []
        async for doc in self.comments_collection.find():
            docs.append(doc)
        return docs

    async def create(self, data: dict):
        await self._get_collection()
        data['_id'] = str(uuid.uuid4())
        await self.comments_collection.insert_one(data)
        response = await self.get(id=data['_id'])
        return {'ok': True, 'id': response.get('_id')}

    async def delete(self, id: str):
        await self._get_collection()
        try:
            await self.comments_collection.delete_one({'_id': id})
            return {'ok': True}
        except Exception:
            return {'ok': False}
