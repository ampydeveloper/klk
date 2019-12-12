import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import DevOps from "./DevOps";
import Goal from "./Goal";
import Technology from "./Technology";
import Automation from "./Automation";
import Confirmation from "./Confirmation";
import PreRequisites from "./PreRequisites";
import Success from "./Success";

class MainForm extends Component {
  state = {
    step: 1,
    firstName: "",
    devops: "",
    email: "",
    goal: "",
    technology: "",
    automation: "",
    preRequisites: "",
    answer: "",
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
      let { name, value } = event.target;
      data[param] = value;
    }
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      devops,
      email,
      goal,
      technology,
      automation,
      preRequisites,
      answer,
      data
    } = this.state;
    const values = {
      firstName,
      devops,
      email,
      technology,
      goal,
      automation,
      preRequisites,
      answer,
      data
    };
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
          <DevOps
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Goal
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Technology
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Automation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <PreRequisites
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        return <Success />;
    }
  }
}

export default MainForm;
