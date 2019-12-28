import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
import questionsOptionsArray from "../questions_options_array.json";

class Technology extends Component {
  quesData = questionsOptionsArray;
  changeQuesData = this.quesData;
  currentTechString = 0;
  handleRadioValue1 = null;
  answerArr = this.quesData;
  questionCount = 3;

  saveAndContinue = e => {
    e.preventDefault();
    this.currentTechString = this.handleRadioValue1;
    this.setState({ state: this.state });
    if (
      typeof document === "object" &&
      document.getElementsByTagName("button").length > 0
    ) {
      document.getElementsByTagName("button")[0].classList.add("hidden");
    }
  };
  handleRadioChange = selectVal => {
    this.handleRadioValue1 = selectVal;
    if (
      typeof document === "object" &&
      document.getElementsByClassName("hidden").length > 0
    ) {
      document.getElementsByClassName("hidden")[0].classList.remove("hidden");
    }
    this.answerArrFunc(this.answerArr, selectVal);

    localStorage["answerArr"] = JSON.stringify(this.answerArr);
  };
  answerArrFunc = (answerArr, selectVal) => {
    for (var j = 0; j < answerArr.length; j++) {
      if (typeof answerArr[j].select === "undefined") {
        if (answerArr[j].name === selectVal) {
          answerArr[j].select = true;
        } else if (answerArr[j]["name"] !== selectVal) {
          answerArr[j].select = false;
          delete answerArr[j].children;
        }
      } else if (answerArr[j].select === true) {
        this.answerArrFunc(answerArr[j].children, selectVal);
      }
    }
  };

  questionRender = answerOptions => {
    if (typeof answerOptions.body === "object") {
      return answerOptions.body.map(d => (
        <div key={d.idunique} className="col-md-4">
          <input
            type="radio"
            name={d.fieldname}
            value={d.name}
            id={d.idd}
            onChange={() => this.handleRadioChange(d.name)}
          />
          <label htmlFor={d.idd}>
            <img src={d.img} alt={d.name} />
          </label>
          {d.name}
        </div>
      ));
    } else {
      this.props.nextStep();
    }
  };

  nextStepTr = (string, ques) => {
    let nextAns = "";
    if (string === 0) {
      return {
        body: ques
      };
    } else if (string !== 0) {
      const quesLength = Object.keys(ques).length;
      for (var i = 0; i <= quesLength; i++) {
        for (var key in ques[i]) {
          if (
            ques[i]["name"] === string &&
            typeof ques[i]["children"] === "object"
          ) {
            nextAns = ques[i]["children"];
            break;
          } else if (typeof ques[i]["children"] === "undefined") {
            break;
          }
        }
      }
      return {
        body: nextAns
      };
    }
  };
  componentDidMount() {
    document.getElementsByTagName("button")[0].classList.add("hidden");
  }

  render() {
    const data = {
      content: "What technologies you know?"
    };
    const answerOptions = this.nextStepTr(
      this.currentTechString,
      this.changeQuesData
    );
    const listQuesOptions = this.questionRender(answerOptions);
    this.changeQuesData = answerOptions.body;
    return (
      <Form color="blue" className="cc-con">
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
                  {++this.questionCount}
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
            <div className="row check-container">{listQuesOptions}</div>
            <div className="row radiobox"></div>

            <Button className="hidden" onClick={this.saveAndContinue}>
              Ok{" "}
            </Button>
          </Form.Field>
        </Fade>
      </Form>
    );
  }
}

export default Technology;
