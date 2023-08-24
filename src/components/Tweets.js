import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import OpenAI from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

let messages = [
  {
    role: "system",
    content:
      "You have to write a tweet on a topic that is being provided by the user input. Take into consideration the previous conversation with user if there is any. Include proper hashtags in the response",
  },
];

async function getCompletion(emailDetails) {
  let userJSON = {
    role: "user",
    content: `Tweet Topic - ${emailDetails}`,
  };

  messages.push(userJSON);

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 1,
    max_tokens: 300,
  });

  // console.log(completion);
  return completion;
}

class ColdEmails extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Your AI Response will be shown here",
      response: "Provide the topic of your tweet in the box above!",
    };
  }

  onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    this.setState({
      heading: `Here's a tweet by AI on: ${formDataObj.emailDetails}`,
      response: `Hold on...crafting a tweet for you! ⏳`,
    });

    let gptResponse = await getCompletion(formDataObj.emailDetails);
    gptResponse = gptResponse.choices[0].message.content;

    // console.log(completion.choices[0].text);

    this.setState({
      heading: `Here's a product description suggestion by AI for ${formDataObj.emailDetails}`,
      response: `${gptResponse}`,
    });

    let assistantJSON = {
      role: "assistant",
      content: `${gptResponse}`,
    };

    messages.push(assistantJSON);
    console.log(messages);
  };

  render() {
    return (
      <div>
        <Container>
          <br />

          <br />
          <h1> 🐤 Generate Tweets 🐤</h1>
          <br />

          <h4>
            Start generating tweet ideas with hashtags for your online social
            media campaigns on twitter.
          </h4>

          <br />
          <br />

          <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>What would you like to tweet about?</Form.Label>
              <div
                className="mx-auto border border-1 rounded-3"
                style={{ width: "30%" }}
              >
                <Form.Control
                  type="text"
                  name="emailDetails"
                  placeholder="Enter a topic"
                  className="text-center"
                />
              </div>
            </Form.Group>

            <Button variant="success" type="submit">
              Get AI Suggestions!
            </Button>
          </Form>

          <br />
          <br />

          <Card>
            <Card.Body>
              <Card.Title>
                <h3>{this.state.heading}</h3>
              </Card.Title>
              <hr />
              <br />
              <Card.Text>
                <p className="bg-red">{this.state.response}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>

        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ColdEmails;
