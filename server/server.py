from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS
from infer import Inferrer
import os
import openai

bot = ChatGPT()
response = bot.ask("Hello, world")
print(response)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
inferrer = Inferrer()

@app.route("/")
def home():
    return "Sink or Swim"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    processedData = inferrer.processData(data)
    prediction = inferrer.infer(processedData)
    return jsonify({"prediction": prediction})

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    prompt = "Write me an emotional and meaningful story about someone who " + data["survived"] + " on the Titanic with the following information: "
    prompt += "Name: " + data["name"] + " Number of Siblings Aboard: " + data["siblings"] + " Number of Spouses Aboard: " + data["spouse"] + " Number of Children Aboard: " + data["children"]
    prompt += " Number of Parents Aboard: " + data["parents"] + " Fare Paid: " + data["fare"] + "Embarked: " + data["embarked"] + " Gender: " + data["gender"] + " Age: " + data["age"] + " Passenger Class: " + data["class"]
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=0.7,
        max_tokens=1000,
        top_p=1,
        frequency_penalty=0.5,
        presence_penalty=0.5)

    return jsonify({"response": response["choices"][0]["text"]})

if __name__ == "__main__":
    app.run(host="localhost", port=5000)