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
      "You have to write a concise and professional email for some purpose that is being provided by the user input. If the user mentions the tone, try to maintain it in the response insted of sticking to a professional mail. Stick to the token limit strictly. Also, take into consideration the previous conversation with user if there is any. Use proper indendation and linebreaks in the response",
  },
];

async function getCompletion(emailDetails) {
  let userJSON = {
    role: "user",
    content: `Email Details - ${emailDetails}`,
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
      response: "Give your email details in the box above!",
    };
  }

  onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    this.setState({
      heading: `Here's an email by AI for ${formDataObj.emailDetails}`,
      response: `Hold on...crafting the best possible email for you! ⏳`,
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
          <h1> 📧 Cold Email Template 📧</h1>
          <br />

          <h4>
            Perfect for marketing agents or companies who need fresh ideas daily
            on cold email content
          </h4>

          <br />
          <br />

          <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                What would you like to write an email about?
              </Form.Label>
              <div
                className="mx-auto border border-1 rounded-3"
                style={{ width: "40%" }}
              >
                <Form.Control
                  type="text"
                  name="emailDetails"
                  placeholder="Enter the purpose of email"
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
