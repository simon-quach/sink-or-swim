from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS
from infer import Inferrer
from dotenv import load_dotenv
import os
import openai
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address   

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
    return "Sink or Swim"


@app.route("/predict", methods=["POST"])
@limiter.limit("5/hour", methods=["POST"])
def predict():
    data = request.get_json()
    processedData = inferrer.processData(data)
    prediction = inferrer.infer(processedData)
    return jsonify({"prediction": prediction})


@app.route("/generate", methods=["POST"])
@limiter.limit("5/hour", methods=["POST"])
def generate():
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
    response = openai.Completion.create(model="gpt-4",
                                        prompt=prompt,
                                        temperature=0.7,
                                        max_tokens=1000,
                                        top_p=1,
                                        frequency_penalty=0.5,
                                        presence_penalty=0.5)

    return jsonify({"response": response["choices"][0]["text"]})


if __name__ == "__main__":
    app.run(host="localhost", port=3000)