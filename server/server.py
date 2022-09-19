import soundfile as sf
import os
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from prediction import TranscriptionService

# instantiate flask app
app = Flask(__name__)
cors = CORS(app)


def bad_request(msg):
    """
    :param msg: string
    :return:
    """
    return msg, 400


@app.route("/predict", methods=["POST"])
@cross_origin()
def predict():
    """Endpoint to predict keyword
    :return (json): This endpoint returns a json file with the following format:
        {
            file
        }
    """
    model_dir = ["./model/arabic-hubert-eg"]

    file_name = "tmp.wav"
    audio_file = request.files["file"]
    audio_file.save(file_name)

    audio_vector, sampling_rate = sf.read(file_name)

    # instantiate keyword spotting service singleton and get prediction
    ts = TranscriptionService(model_dir)
    transcription = ts.predict(audio_vector)

    # we don't need the audio file any more - let's delete it!
    os.remove(file_name)

    # send back result as a json file
    # result = {"keyword": predicted_keyword}
    return jsonify(transcription)


if __name__ == "__main__":
    app.run(debug=False)
