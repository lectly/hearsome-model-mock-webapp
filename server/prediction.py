from transformers import Wav2Vec2Processor, HubertForCTC
import torch
import soundfile as sf


class _TranscriptionService:
    """Singleton class for speech-to-text inference with trained models.
    """

    model = None
    processor = None
    _instance = None

    def model_fn(self, model_dir):
        # Load model from HuggingFace Hub
        self.model = HubertForCTC.from_pretrained(model_dir)
        self.processor = Wav2Vec2Processor.from_pretrained(model_dir)
        return self.model, self.processor

    def predict(self, _data):
        # destruct model and tokenizer
        with torch.no_grad():
            device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

            model = self.model.to(device)
            inputs = self.processor(_data, sampling_rate=16_000, return_tensors="pt", padding=True)

            model.eval()
            logits = model(inputs.input_values.to(device)).logits
            pred_ids = torch.argmax(logits, dim=-1)
            output = self.processor.batch_decode(pred_ids)

        return output


def TranscriptionService(model_dir, hubert=True):
    """Factory function for TranscriptionService class.
    :param model_dir
    :return _TranscriptionService.instance (_TranscriptionService):
    """

    # ensure an instance is created only the first time the factory function is called
    if _TranscriptionService._instance is None:
        _TranscriptionService._instance = _TranscriptionService()
    _TranscriptionService._instance.model_fn(model_dir, hubert)
    return _TranscriptionService._instance


if __name__ == "__main__":
    # create 2 instances of the keyword spotting service
    file_dir = ""
    model_dir_1 = ""
    model_dir_2 = ""
    ts = TranscriptionService(model_dir_1)
    ts1 = TranscriptionService(model_dir_1)

    # check that different instances of the keyword spotting service point back to the same object (singleton)
    assert ts is ts1

    # make a prediction
    data,_ = sf.read(file_dir)
    keyword = ts.predict(data)
    print(keyword)
