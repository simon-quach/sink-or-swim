from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS
from infer import Inferrer
from chatgpt_wrapper import ChatGPT

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

if __name__ == "__main__":
    app.run(host="localhost", port=5000)