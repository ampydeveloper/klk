import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Slide from "react-reveal/Slide";
class UserDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  openForm = e => {
    e.preventDefault();
    document.getElementById("form-start").style.display = "block";
    document.getElementById("get-started").style.display = "none";
  };

  render() {
    const { values } = this.props;
    return (
      <Form id="userDetails" color="green">
        <Slide bottom>
          <div className="kodekloud">
            {" "}
            <img src="../images/kodekloud.png" alt="" />{" "}
          </div>

          <Form.Field id="get-started">
            <label>Not sure where to start your DevOps journey?</label>
            <Button onClick={this.openForm}>Help me get started</Button>
          </Form.Field>

          <Form.Field id="form-start">
            <label>
              <span
                color="#3C3C3C"
                className="question-header__CounterContent-z8zey9-0 aLOsH"
              >
                <div
                  data-qa="question-header-counter"
                  className="text___Text-sc-1t2ribu-0-div cLiylc"
                >
                  1
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
              Great! Now let's grab your contact details so we can get back to
              you. First off, what's your name?
            </label>
            <input
              required
              type="text"
              placeholder="Type your answer here..."
              onChange={this.props.handleChange("firstName")}
              // defaultValue={values.firstName}
              value={values.firstName}
            />
            {values.firstName.length > 0 && (
              <Button onClick={this.saveAndContinue}>OK</Button>
            )}
          </Form.Field>
        </Slide>
      </Form>
    );
  }
}

export default UserDetails;
