const spinner = `
<div style="align-self: center" class="spinner-border" role="status">
  <span id="loading" class="sr-only">
  </span>
</div>`;

let options = `
<!-- UPLOAD -->
<div
  id="upload"
  class="d-flex flex-row"
  style="justify-content: space-around"
>
  <div class="d-flex flex-column">
    <label class="form-label" for="audioFile"
      >Select a file to begin transcription</label
    >
    <input type="file" class="form-control" id="audioFile" />
  </div>
</div>
<!-- UPLOAD -->`;

let record = `<p class="mt-4" style="align-self: start">
Or record an audio file to test real-time
</p>
<!-- Record -->
<div id="controls" class="d-flex flex-row w-100">
<button id="recordButton" class="btn btn-primary w-100 m-2">
  Record
</button>
<button id="stopButton" class="btn btn-primary w-100 m-2" disabled>
  Stop
</button>
</div>
<!-- Record -->`;

$(document).ready(function () {
  $(document).on("change", "#audioFile", function () {
    var file = $("#audioFile")[0].files[0];
    var data = new FormData();
    data.append("file", file);
    predict(data, successClbck, failureClbck);
  });
});

function successClbck(response) {
  $("#transcription").text(response);
  $("#loading").parent().remove();
  $("#options").append(options);
}

function failureClbck() {
  $("$try-now").append(`<p>Something went wrong :(</p>`);
  $("#loading").parent().remove();
  $("#options-container").append(options);
}

function predict(data, success, fail) {
  $("#options").empty();
  $("#options").append(spinner);
  return $.ajax({
    type: "POST",
    enctype: "multipart/form-data",
    url: url,
    crossDomain: true,
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: success,
    fail: fail,
  });
}

const url = "https://d22c-41-237-92-95.ngrok.io/predict";

// //webkitURL is deprecated but nevertheless
// URL = window.URL || window.webkitURL;

// var gumStream; //stream from getUserMedia()
// var rec; //Recorder.js object
// var input; //MediaStreamAudioSourceNode we'll be recording

// // shim for AudioContext when it's not avb.
// var AudioContext = window.AudioContext || window.webkitAudioContext;
// var audioContext; //audio context to help us record

// var recordButton = document.getElementById("recordButton");
// var stopButton = document.getElementById("stopButton");

// //add events to those 2 buttons
// recordButton.addEventListener("click", startRecording);
// stopButton.addEventListener("click", stopRecording);

// function startRecording() {
//   console.log("recordButton clicked");

//   /*
// 		Simple constraints object, for more advanced audio features see
// 		https://addpipe.com/blog/audio-constraints-getusermedia/
// 	*/

//   var constraints = { audio: true, video: false };

//   /*
//     	Disable the record button until we get a success or fail from getUserMedia()
// 	*/

//   recordButton.disabled = true;
//   stopButton.disabled = false;

//   /*
//     	We're using the standard promise based getUserMedia()
//     	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// 	*/

//   navigator.mediaDevices
//     .getUserMedia(constraints)
//     .then(function (stream) {
//       console.log(
//         "getUserMedia() success, stream created, initializing Recorder.js ..."
//       );

//       /*
// 			create an audio context after getUserMedia is called
// 			sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
// 			the sampleRate defaults to the one set in your OS for your playback device
// 		*/
//       audioContext = new AudioContext();

//       /*  assign to gumStream for later use  */
//       gumStream = stream;

//       /* use the stream */
//       input = audioContext.createMediaStreamSource(stream);

//       /*
// 			Create the Recorder object and configure to record mono sound (1 channel)
// 			Recording 2 channels  will double the file size
// 		*/
//       rec = new Recorder(input, { numChannels: 1 });

//       //start the recording process
//       rec.record();

//       console.log("Recording started");
//     })
//     .catch(function (err) {
//       //enable the record button if getUserMedia() fails
//       recordButton.disabled = false;
//       stopButton.disabled = true;
//     });
// }

// function stopRecording() {
//   console.log("stopButton clicked");

//   //disable the stop button, enable the record too allow for new recordings
//   stopButton.disabled = true;
//   recordButton.disabled = false;

//   //tell the recorder to stop the recording
//   rec.stop();

//   //stop microphone access
//   gumStream.getAudioTracks()[0].stop();

//   //create the wav blob and pass it on to createDownloadLink
//   rec.exportWAV(createDownloadLink);
// }

// function createDownloadLink(blob) {
//   var data = new FormData();
//   data.append("file", blob);
//   predict(data, successClbck, failureClbck);
// }
