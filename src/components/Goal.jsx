import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Slide from "react-reveal/Slide";
class Goal extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const data = {
      content: "Whats your goal?",
      body: [
        {
          idunique: 1,
          id: "myCheckbox11",
          value: "TotalDevOps",
          component: "A : Total DevOps"
        },
        {
          idunique: 2,
          id: "myCheckbox22",
          value: "Containers",
          component: "B: Containers"
        },
        {
          idunique: 3,
          id: "myCheckbox33",
          value: "Automation",
          component: "B: Automation"
        }
      ]
    };
    let result = false;
    if (
      Object.values(this.props.values.data).indexOf("Automation") > -1 ||
      Object.values(this.props.values.data).indexOf("Containers") > -1 ||
      Object.values(this.props.values.data).indexOf("TotalDevOps") > -1
    ) {
      result = true;
    }
    const listItems = data.body.map(d => (
      <div key={d.idunique} className="col-md-4">
        <input
          type="radio"
          name="goal"
          value={d.value}
          id={d.id}
          onChange={this.props.handleChange(d.value, null, 2)}
          // defaultValue={values.devops}
        />
        <label htmlFor={d.id}>
          <img src={require(`../images/${d.value}.png`)} alt={d.value} />
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
                  4
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
            <div className="row radiobox"></div>

            {result === true && (
              <Button onClick={this.saveAndContinue}>Ok </Button>
            )}
          </Form.Field>
        </Slide>
      </Form>
    );
  }
}

export default Goal;
