import tensorflow as tf

class Inferrer:

    def __init__(self):
        self.saved_path = 'model'
        self.model = tf.saved_model.load(self.saved_path)

        self.predict = self.model.signatures['serving_default']

    def processData(self, data):
        ageMean = 29.3186
        ageStd = 13.2811
        fareMean - 32.2042
        fareStd = 49.6934

        array = []
        array.append(data['age'] - ageMean / ageStd) # Normalized age
        array.append(data['siblings'] + data['spouse'])
        array.append(data['children'] + data['parents'])
        array.append(data['fare'] - fareMean / fareStd) # Normalized fare
        if(data['Pclass'] == 1): # I swear there is a better way to do this
            array.append(1)
            array.append(0)
            array.append(0)
        elif(data['Pclass'] == 2):
            array.append(0)
            array.append(1)
            array.append(0)
        else:
            array.append(0)
            array.append(0)
            array.append(1)

        if(data['sex'] == 'male'):
            array.append(1)
            array.append(0)
        else:
            array.append(0)
            array.append(1)

        if(data['embarked'] == 'C'):
            array.append(1)
            array.append(0)
            array.append(0)
        elif(data['embarked'] == 'Q'):
            array.append(0)
            array.append(1)
            array.append(0)
        else:
            array.append(0)
            array.append(0)
            array.append(1)
        
        return array

    def infer(self, data):
        prediction = self.predict(data)['dense_5']
        prediction = prediction.numpy()
        percentage = prediction.max()
        prediction = prediction.argmax()
        return [int(prediction), float(percentage)]