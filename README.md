# Gen-AI Content Generator

This is the project repo for my <a href="https://unstop.com/competitions/techsurf-2023-contentstack-690413">Techsurf 2023</a> submission.

You can find the final deployed web app here: https://genaicontent.netlify.app/

This project aims on using Generative AI via GPT-3.5 API to automate content generation for 3 major use cases:
1. Generating creative Product Descriptions
2. Drafting Cold Email Templates
3. Writing Tweets

## Tech Stack used

HTML, CSS, JS, ReactJS, NodeJS, Bootstrap, React-Bootstrap and OpenAI API

## Code Setup

1. Download the zip file of this code, extract it and open the folder in a code editor (preferably VS Code)
2. Next, check if NodeJS is installed in your machine or not. If not, install it from https://nodejs.org/en/download
3. Open the integrated terminal of the code editor, check if NodeJS is installed by running the command: "node -v" which should give you the version of node installed.
4. Create an account here: https://platform.openai.com/ and generate a secret API key. Copy and note it.
5. Create a .env file in the root directory and add the above generated key with the variable name as 'REACT_APP_OPENAI_API_KEY'
6. Next, from the terminal, run the below commands:
   - "npm init" and press enter for every substep of the initialization to create package.json file
   - "npm install" to install the required dependencies.
   - "npm start" to start the local development server.
7. Open the localhost in the web browser on whichever port the server is running to take a demo and test the code.
   
## Salient features of the project

- The content being generated takes into consideration the previous conversation that has happened between the user and the assisant which is the LLM Model(GPT 3.5). As shown below, I am first initializing the messages array (that we pass as paramter to the API) with the system message (instuctions given to the model based on the specific use case) and then alternatively I append the user and assistant conversation so that the model considers this context while generating the next output.

Initializing with System msg | Adding user prompt | Adding assistant response
:--:|:--:|:--:
![image](https://github.com/Praddyumn16/GenAI-Content-Generator/assets/53634655/c55bd7e6-4f92-4071-9bd8-102f65ae36b9) | ![image](https://github.com/Praddyumn16/GenAI-Content-Generator/assets/53634655/4be7bd07-4807-4e9c-8609-3287aaf2facf) | ![image](https://github.com/Praddyumn16/GenAI-Content-Generator/assets/53634655/253e1612-aa3d-4ec1-adbc-6ea91ec6f33e)

- The temperature parameter of the API call tells how much creative/random or how much consistent you want the model to be with it's response. 1 being the most randomized responses (suitable for creative use case) and 0.1 being the most consistent response (suitable for Drafting mails)
  
Calling API for Drafting mail | Calling API for creative product description/tweets
:--: | :--:
![image](https://github.com/Praddyumn16/GenAI-Content-Generator/assets/53634655/51857e3d-8566-4ae3-8559-0b5c8e7c7f27) | ![image](https://github.com/Praddyumn16/GenAI-Content-Generator/assets/53634655/7f0647f6-bc3a-4d09-9334-5af7480ec48f)

- The GPT 3.5 model is provided with the context of the given title via proper system messages as shown below, enabling it to generate relevant and meaningful content.

System msg. for Generating Tweets | System msg. for Email template | System msg. for Product Descriptions
:--: | :--: | :--:
![image](https://github.com/Praddyumn16/GenAI-Content-Generator/assets/53634655/981685a2-e5bb-4ac4-9718-65385df83d35) | ![image](https://github.com/Praddyumn16/GenAI-Content-Generator/assets/53634655/6ce5f244-9f58-4590-9d77-f724f709f1bd) | ![image](https://github.com/Praddyumn16/GenAI-Content-Generator/assets/53634655/fef84e2f-5539-4ce0-babf-77bb117aec8d)

- I have kept the application interface simple and intuitive with each page denoting their respective use cases via their well defined descriptions.

## Code Organization

I have tried to follow the best code practices with modular and well structured code.

- I have used seperate components (inside the src folder) for every use case viz. ProductDescription.js, ColdEmails.js and Tweets.js
- Navigation.js component is used to develop the navbar for the application.
- Display.js component manages the layout of cards available on the home page.
- In order to keep things as dynamic as possible, I have created a seperate data.json which contains the content for 3 use cards, providing the flexibility to add more use cases as a future scope.
- The App.js file handles the routing of the whole application with each use case having a dedicated landing page.
- A single App.css file is used for making the styling consistent across the whole application. Certain styling specific to some components is done via predefined classes in the libraries that are used.
