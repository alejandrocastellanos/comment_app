# Base image
FROM python:3.10-slim-buster

WORKDIR /code

COPY requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY .. /code/app

WORKDIR /code/app

CMD ["uvicorn", "social_network:app", "--host", "0.0.0.0", "--port", "80"]