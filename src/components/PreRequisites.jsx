import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Slide from "react-reveal/Slide";

class PreRequisites extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const data = {
      content: "Select the pre-requisites you know today",
      body: [
        {
          uniqueid: 9,
          id: 9,
          value: "yaml",
          handleChange: "YAML",
          component: "A : YAML"
        },
        {
          uniqueid: 10,
          id: 10,
          value: "git",
          handleChange: "Git",
          component: "B: Git"
        },
        {
          uniqueid: 11,
          id: 12,
          value: "json",
          handleChange: "JSON",
          component: "C: JSON"
        },
        {
          uniqueid: 13,
          id: 13,
          value: "linux",
          handleChange: "Linux Basics",
          component: "D: Linux Basics"
        }
      ]
    };
    let result = true;
    const listItems = data.body.map(d => (
      <div key={d.uniqueid} className="col-md-3">
        <input
          type="checkbox"
          name="preRequisites"
          value={d.value}
          id={d.id}
          onChange={this.props.handleChange(`${d.handleChange}`, d.id)}
          // defaultValue={values.devops}
        />
        <label htmlFor={d.id}>
          <img
            src={require(`../images/${d.handleChange}.png`)}
            alt={d.handleChange}
          />
        </label>
        {d.component}
      </div>
    ));
    return (
      <Form color="blue" className="cc-con">
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
                  7
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
            <div className="row prerequisite check-container">{listItems}</div>
            {result === true && (
              <Button onClick={this.saveAndContinue}>Ok </Button>
            )}
          </Form.Field>
        </Slide>
      </Form>
    );
  }
}

export default PreRequisites;
