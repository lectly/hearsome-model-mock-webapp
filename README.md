<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/lectly/hearsome-model-mock-webapp">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Hearsome Web App</h3>

  <p align="center">
    This repository contains a simple full-stack web application, made with Flask (Python) for the Backend and HTML, CSS and JQuery for the frontend, with the purpose of testing the model in case of deployment.
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

This project is a simple web application that is made with the sole purpose of testing our state-of-the-art [Egyptian Arabic Speech-to-Text Deep Learning Model](https://huggingface.co/omarxadel/hubert-large-arabic-egyptian) that is based on fine-tuning [HuBERT Arabic Large](https://huggingface.co/asafaya/hubert-large-arabic). The project consists of a web server that loads the model and takes an audio file as a request, returning the transcription as the response. The client app is made to serve as a terminal to try the server app in a more humane way.

### Built With

Server:

- [Flask](https://flask.palletsprojects.com/en/2.2.x/)

Client:

- [JQuery](https://jquery.com/)
- HTML, CSS and JS

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Make sure you have Flask installed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lectly/hearsome-model-mock-webapp.git
   ```
2. Download the model
   ```sh
   cd server/model
   git lfs clone https://huggingface.co/omarxadel/hubert-large-arabic-egyptian
   ```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Omar Adel - omarxadel21@gmail.com

Project Link: [https://github.com/lectly/hearsome-model-mock-webapp](https://github.com/lectly/hearsome-model-mock-webapp)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

This project is part of Bachelor's Senior Project in Faculty of Engineering, Alexandria University. It covers the topics:

- Deep Learning
- Software Engineering
- DevOps
- MLOps
- Cloud Applications Engineering
