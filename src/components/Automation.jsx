import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Slide from "react-reveal/Slide";

class Automation extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const data = {
      content: "Select the automation technologies you know today",
      body: [
        {
          uniqueid: 6,
          id: 6,
          value: "ansible",
          handleChange: "Ansible",
          component: "A : Ansible"
        },
        {
          id: 7,
          uniqueid: 7,
          value: "chef",
          handleChange: "Chef",
          component: "B: Chef"
        },
        {
          id: 8,
          uniqueid: 8,
          value: "puppet",
          handleChange: "Puppet",
          component: "C: Puppet"
        }
      ]
    };
    let result = true;
    const listItems = data.body.map(d => (
      <div key={d.uniqueid} className="col-md-4">
        <input
          type="checkbox"
          name="automation"
          value={d.value}
          id={d.id}
          onChange={this.props.handleChange(`${d.handleChange}`, d.id)}
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
      <Form
        color="blue"
        className="cc-con"
        style={{ marginTop: "10% !important" }}
        id="automationComponent"
      >
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
                  6
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
            <div className="row check-container">{listItems}</div>
            {result === true && (
              <Button onClick={this.saveAndContinue}>Ok </Button>
            )}
          </Form.Field>
        </Slide>
      </Form>
    );
  }
}

export default Automation;
