from typing import Union
# from tensorflow.python.keras.models import load_model
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
# import tensorflow as tf
import os
import numpy as np
# import tensorflow.python.keras as kr
from tensorflow import keras
import tensorflow as tf
app = FastAPI()


# It can be used to reconstruct the model identically.

model = keras.models.load_model("./nn_models/Model.h5")       #keras.models.load_model("my_model.keras")
@app.get("/api/{message}")
def read_root(message):
    return {"Hello": message}

@app.post("/api/upload-image")
async def upload_image(file: UploadFile = File(...)):
    contents = await file.read()
    with open(f"./uploads/{file.filename}", "wb") as f:
        f.write(contents)
    # Load the image
    img = tf.io.read_file(f"./uploads/{file.filename}")
    img = tf.image.decode_image(img, channels=3)

    # Resize the image to 28x28 pixels
    img = tf.image.resize(img, [28, 28])
    print(img.shape)
    # Normalize the image
    img = img / 255.0
    input_shape = 2352
    reshaped = tf.reshape(img, [-1,2352])
    # print(reshaped.shape)
    prediction = model.predict(reshaped)
    classesDict = {
'IntraEpithelial':0, 'Basal':0,
'Benign':0, 'Dermatofibroma':0,
'Melanoma':0, 'Melanocytic':0,
'Vascular':0
}
    temp = prediction.tolist()[0]
    i = 0
    for key in classesDict.keys():
        classesDict[key] = round(temp[i],2)
        i = i+1

    print(classesDict)
    res = classesDict
    print()
    return JSONResponse(content = res)