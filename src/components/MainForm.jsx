import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Technology from "./Technology";
import Confirmation from "./Confirmation";

class MainForm extends Component {
  state = {
    step: 1,
    firstName: "",
    email: "",
    data: {}
  };

  selected = {};

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  onChange = event => event => {};

  handleChange = (input, optionID = null, param = null) => event => {
    this.setState({ [input]: event.target.value });
    if (input && optionID !== null && param === null) {
      if (event.target.checked) {
        this.selected[input] = input;
      } else {
        delete this.selected[input];
      }

      let data = this.state.data;
      if (optionID !== null) {
        data[optionID] = this.selected[input];
      }
      this.setState({ data: data });
      this.setState({
        answer: {
          question: optionID,
          answers: Object.keys(this.selected)
        }
      });
    } else if (input && param !== null) {
      let data = this.state.data;
      let { value } = event.target;
      data[param] = value;
    }
  };

  render() {
    const { step } = this.state;
    const { firstName, email, data } = this.state;
    const values = {
      firstName,
      email,
      data
    };
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Technology
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default MainForm;
