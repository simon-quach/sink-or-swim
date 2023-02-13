# Sink Or Swim (SOS)
This is a hackathon project for NorCal Spring Hack 2023.

**Contributors:** [@IdkwhatImD0ing](https://github.com/IdkwhatImD0ing) [@simon-quach](https://github.com/simon-quach) [@triquenguyen](https://github.com/triquenguyen)

**The purpose of this project is to practice concepts related to:**

> - Next.js
> - TypeScript
> - Server Side Rendering (SSR)
> - Figma
> - OpenAI GPT-3 Model

## Inspiration 

The inspiration behind this project stems from the captivating tale of the Titanic, one of the most infamous shipwrecks in history. The disaster that occurred on April 15, 1912, took the lives of over 1500 passengers and crew members, leaving a lasting impact on the world. This tragedy has been the subject of numerous books, movies, and even a musical, all of which have kept the memory of the Titanic alive for over a century. Our team was inspired to create a webapp that uses machine learning to predict a passenger's chances of survival based on factors such as their age, gender, and socio-economic class, and then generate a unique story about their experience on the Titanic. This project combines the excitement of exploring historical events with the thrill of using cutting-edge technology to bring the past to life.

## How it works

Our webapp is a unique blend of machine learning and storytelling, offering users an engaging and interactive experience that brings the Titanic to life. The heart of the webapp is a custom trained recurrent neural network, trained on a dataset from Kaggle containing information on Titanic passengers. This machine learning model uses factors such as age, gender, and socio-economic class to predict a user's chances of survival on the Titanic. The user is then prompted to input additional information, such as their name, which is used to generate a personalized story about their experience on the ship. This story is generated using OpenAI's language generation technology, which brings together the user's inputted data and the prediction from the machine learning model to create a unique and compelling narrative. The end result is a captivating and thought-provoking journey through one of the most tragic events in history, offering users a glimpse into what it might have been like to be a passenger on the Titanic.


## How we built it

 - Custom trained recurrent neural network
 - Kaggle Titanic dataset
 - OpenAI language generation technology
 - HTML/Tailwind CSS
 - NextJs14
 - Flask
 - Machine learning libraries such as TensorFlow, PyTorch, and scikit-learn

## Challenges

 - Cleaning and preprocessing the Kaggle Titanic dataset to ensure accurate predictions from the machine learning model
 - Balancing the trade-off between making the machine learning model accurate and keeping it computationally efficient
 - Integrating the machine learning model with the web development framework and language generation technology
 - Learning new Technologies such as NextJs14
 - Ensuring the webapp has a user-friendly interface that is accessible to a wide range of users
 - Axios kept sending post requests multiple times, hit rate limit when we forgot to limit the post request to once per refresh.

## Accomplishments that we're proud of

 - Cleaning and preprocessing the Kaggle Titanic dataset to ensure accurate predictions from the machine learning model
 - Balancing the trade-off between making the machine learning model accurate and keeping it computationally efficient
 - Integrating the machine learning model with the web development framework and language generation technology
 - Ensuring the webapp has a user-friendly interface that is accessible to a wide range of users
 - Dealing with the computational demands of running a machine learning model in real-time for multiple users
 - Securing sensitive user data and ensuring the privacy of users who use the webapp
 - Ensuring the webapp is scalable and can handle a large number of users and requests efficiently
 - Debugging and troubleshooting technical issues that arise during development and deployment.

## What we learned
 - The importance of thorough data cleaning and preprocessing in order to train an accurate machine learning model
 - How to use NextJS 14 to create a webapp with a user-friendly interface
 - Using Framer Motion for animations