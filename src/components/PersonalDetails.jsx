import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Fade from "react-reveal/Fade";

class PersonalDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    function IsMatch(v) {
      //basically build your regex here
      var re = /\S+@\S+\.\S+/;
      return re.test(v);
    }
    const { values } = this.props;
    let result = false;
    if (values.email.length >= 1 && IsMatch(values.email) === true) {
      result = true;
    }
    const errorColor = {
      position: "relative",
      bottom: "8px",
      left: "19px",
      backgroundColor: "rgba(153, 0, 0, 0.6)",
      color: "#ffffff",
      borderRadius: "3px",
      padding: "3px 8px 4px 8px",
      lineHeight: "26px"
    };
    return (
      <Form color="blue">
        <Fade bottom>
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
                  2
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
              And finally, could you let me know your email address,
              {values.firstName} ?{" "}
            </label>
            <input
              type="email"
              placeholder="Type your email here ...."
              onChange={this.props.handleChange("email")}
              value={values.email}
            />
            {result === false && values.email.length >= 1 && (
              <span style={errorColor}>Hmm…that email doesn't look valid.</span>
            )}
            {result === true && (
              <Button onClick={this.saveAndContinue}>OK</Button>
            )}
          </Form.Field>
        </Fade>
      </Form>
    );
  }
}

export default PersonalDetails;
