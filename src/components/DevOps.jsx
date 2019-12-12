import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

import Slide from "react-reveal/Slide";
class DevOps extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const data = {
      content: "What is your current level of DevOps?",
      body: [
        {
          id: "myCheckbox1",
          value: "Beginner",
          uniqueid: 1,
          component: "A : Beginner"
        },
        {
          id: "myCheckbox2",
          value: "Intermediate",
          uniqueid: 2,
          component: "B: Intermediate"
        },
        {
          id: "myCheckbox3",
          value: "Advanced",
          uniqueid: 3,
          component: "C: Advanced"
        }
      ]
    };
    let result = false;
    if (
      Object.values(this.props.values.data).indexOf("Beginner") > -1 ||
      Object.values(this.props.values.data).indexOf("Intermediate") > -1 ||
      Object.values(this.props.values.data).indexOf("Advanced") > -1
    ) {
      result = true;
    }
    const listItems = data.body.map(d => (
      <li key={d.uniqueid}>
        <input
          name="devops"
          type="radio"
          id={d.id}
          value={d.value}
          onChange={this.props.handleChange(d.value, null, 1)}
        />
        <label htmlFor={d.id}>{d.component}</label>
      </li>
    ));
    return (
      <Form color="blue">
        <Slide bottom>
          <Form.Field>
            <label>
              <span
                color="#3C3C3C"
                className="question-header__CounterContent-z8zey9-0 aLOsH"
              >
                <div
                  data-qa="question-header-counter"
                  className="text___Text-sc-1t2ribu-0-div cLiylc"
                >
                  3
                </div>
                <div className="spacer__Spacer-sc-11bdvt0-0 iCbFsn">
                  <div
                    color="#3C3C3C"
                    className="icon__Boundary-sc-2r3yc0-0 idMKjL"
                  >
                    <svg height="10" width="11">
                      <path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path>
                      <path d="M8 4v2H0V4z"></path>
                    </svg>
                  </div>
                </div>
              </span>
              {data.content}
            </label>
            <div className="row radiobox devOps-ul">
              <div className="col-md-6">
                <ul>{listItems}</ul>
              </div>
            </div>
            {result === true && (
              <Button onClick={this.saveAndContinue}>Ok </Button>
            )}
          </Form.Field>
        </Slide>
      </Form>
    );
  }
}

export default DevOps;
