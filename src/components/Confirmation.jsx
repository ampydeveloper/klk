import React, { Component } from "react";
import { Form } from "semantic-ui-react";
var Loader = require("react-loader");

class Confirmation extends Component {
  state = {
    loader: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loader: true });
    }, 2000);
  }
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  clean = obj => {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj;
  };
  render() {
    const data = {
      "Intermediate,TotalDevOps,Kubernetes,OpenShift,Ansible,Chef,Git,JSON": [
        "Kubernetes",
        "OpenShift",
        "Ansible",
        "Chef",
        "Git",
        "JSON"
      ]
    };
    const {
      values: { answer }
    } = this.props;
    let items = "";
    if (data[Object.values(this.clean(this.props.values.data)).toString()]) {
      items = data[
        Object.values(this.clean(this.props.values.data)).toString()
      ].map((item, key) => (
        <div key={key} className="solution-answers">
          <div className="img-outer">
            <img
              key={item}
              src={require(`../images/${item}.png`)}
              className="img-responsive result-images"
              alt={item}
            />
          </div>
          <div className="goes-to">
            <span className="line"></span>
            <span className="gt">&gt;</span>
          </div>
        </div>
      ));
    }
    return (
      <Loader loaded={this.state.loader} className="oval">
        <div className="confirmation">
          <Form.Field>
            <div className="confirmation-row">{items}</div>
          </Form.Field>
        </div>
      </Loader>
    );
  }
}

export default Confirmation;
