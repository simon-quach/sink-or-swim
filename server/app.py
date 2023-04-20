from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS
from infer import Inferrer
from dotenv import load_dotenv
import os
import openai
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import asyncio
import aiohttp   

# OpenAi
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

#Flask
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
inferrer = Inferrer()

# Limiter Code
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["25 per day", "5 per hour"],
)


@app.route("/")
@limiter.limit("5/hour", methods=["GET"])
def home():
    html_code = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sink or Swim</title><link rel="stylesheet" href="styles.css"></head><body><header><h1>Sink or Swim</h1><p>A Titanic prediction and storytelling web application.</p></header><section><h2>About the App</h2><p>Sink or Swim is a web application that uses machine learning to make predictions and generate emotional, meaningful stories about Titanic passengers. The app utilizes the OpenAI GPT-3.5-turbo model and the Flask web framework to provide users with a seamless and engaging experience.</p></section><section><h2>Features</h2><ul><li>Predict Titanic passengers\' survival chances based on their personal information.</li><li>Generate personalized stories about Titanic passengers who survived the tragedy.</li></ul></section><section><h2>How to Use</h2><ol><li>Visit the "/predict" endpoint to make predictions using the POST method with a JSON payload containing relevant passenger information.</li><li>Visit the "/generate" endpoint to generate stories using the POST method with a JSON payload containing relevant passenger information and a survival scenario.</li></ol></section><footer><p>&copy; 2023 Sink or Swim. All rights reserved.</p></footer></body></html>'
    return html_code


@app.route("/predict", methods=["POST"])
@limiter.limit("5/hour", methods=["POST"])
def predict():
    data = request.get_json()
    processedData = inferrer.processData(data)
    prediction = inferrer.infer(processedData)
    return jsonify({"prediction": prediction})


@app.route("/generate", methods=["POST"])
@limiter.limit("5/hour", methods=["POST"])
async def generate():
    data = request.get_json()
    prompt = "Write me an emotional and meaningful story about someone who " + data[
        "survived"] + " on the Titanic with the following information: "
    prompt += "Name: " + data["name"] + " Number of Siblings Aboard: " + data[
        "siblings"] + " Number of Spouses Aboard: " + data[
            "spouses"] + " Number of Children Aboard: " + data["children"]
    prompt += " Number of Parents Aboard: " + data[
        "parents"] + " Fare Paid: " + data["fare"] + "Embarked: " + data[
            "embarkingLocation"] + " Gender: " + data[
                "sex"] + " Age: " + data[
                    "age"] + " Passenger Class: " + data["passengerClass"]
    response = await openai.ChatCompletion.acreate(model="gpt-3.5-turbo",
                                        messages=[{"role": "user", "content":prompt}],
                                        temperature=0.7,
                                        max_tokens=1000,
                                        top_p=1,
                                        frequency_penalty=0.5,
                                        presence_penalty=0.5)

    return jsonify({"response": response.choices[0].message.content})


if __name__ == "__main__":
    app.run(host="localhost", port=3050)