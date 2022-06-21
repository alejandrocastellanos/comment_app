import uvicorn

if __name__ == "__main__":
    uvicorn.run("social_network:app", host="0.0.0.0", port=81, reload=True)
