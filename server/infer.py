import tensorflow as tf
import numpy as np


class Inferrer:

    def __init__(self):
        self.saved_path = 'model'
        self.model = tf.saved_model.load(self.saved_path)

        self.predict = self.model.signatures['serving_default']

    def processData(self, data):
        ageMean = 29.3186
        ageStd = 13.2811
        fareMean = 32.2042
        fareStd = 49.6934

        data['age'] = int(data['age'])
        data['siblings'] = int(data['siblings'])
        data['spouses'] = int(data['spouses'])
        data['children'] = int(data['children'])
        data['parents'] = int(data['parents'])
        data['fare'] = float(data['fare'])
        data['passengerClass'] = int(data['passengerClass'])

        array = []
        array.append((data['age'] - ageMean) / ageStd)  # Normalized age
        array.append(data['siblings'] + data['spouses'])
        array.append(data['children'] + data['parents'])
        array.append((data['fare'] - fareMean) / fareStd)  # Normalized fare
        if (data['passengerClass'] == 1
            ):  # I swear there is a better way to do this
            array.append(1)
            array.append(0)
            array.append(0)
        elif (data['passengerClass'] == 2):
            array.append(0)
            array.append(1)
            array.append(0)
        else:
            array.append(0)
            array.append(0)
            array.append(1)

        if (data['sex'] == 'male'):
            array.append(1)
            array.append(0)
        else:
            array.append(0)
            array.append(1)

        if (data['embarkingLocation'] == 'Cherbourg'):
            array.append(1)
            array.append(0)
            array.append(0)
        elif (data['embarkingLocation'] == 'Queenstown'):
            array.append(0)
            array.append(1)
            array.append(0)
        else:
            array.append(0)
            array.append(0)
            array.append(1)
        # Conver to numpy array
        nparray = np.asarray(array, dtype=np.float32)
        nparray = nparray.reshape(1, 12, 1)
        return tf.convert_to_tensor(nparray)

    def infer(self, data):
        prediction = self.predict(data)['dense_110']
        prediction = tf.math.round(prediction)
        # Convert to numpy array
        prediction = prediction.numpy()
        # Convert to int
        prediction = float(prediction[0][0])
        return prediction