# syntax=docker/dockerfile:1

FROM python:3.10-slim-buster

WORKDIR /sinkorswim

# Install dependencies
RUN apt-get update
RUN apt-get install -y python3-opencv libgl1-mesa-glx libgl1 

# Copy your certificate, private key, and CA files
COPY cert.pem /etc/ssl/certs/cert.pem
COPY private.pem /etc/ssl/private/private.pem
COPY ca.pem /etc/ssl/certs/ca.pem

# Copy the Flask app and requirements
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 4000

# Run the application
CMD ["gunicorn", "--workers", "1", "--bind", "0.0.0.0:4000", "app:app", "--timeout", "300"]
