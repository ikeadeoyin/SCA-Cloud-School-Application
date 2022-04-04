# SCA Cloud School Application

This repository contains a technical assesment based on exercise 2.
This project was built with
- Node.js
- Express
- Docker

## Test Processs
- I created a node.js server that serves a text to a web page
- Created a Dockerfile with instructions
- To build the image, run docker `build . -t  push pixels06/sca-cloud-app`
- After buiding the image, I ran the image with `docker run -p 49160:8080 -d pixels06/sca-cloud-app`.
- To test the app, I got the port that was mapped to Docker `49160->8080` and navigate to localhost:49160 on a web browser.

## Instructions to run the project locally
- To get the Docker image from Docker Hub, run the Docker pull command: `pixels06/sca-cloud-app`
- To run this Docker container: `pixels06/sca-cloud-app`
