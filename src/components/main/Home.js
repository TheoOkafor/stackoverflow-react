import React, { Component } from 'react';
import Card from './Card';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://stackoverflow-by-theo1.herokuapp.com/v1/questions')
      .then(response => response.json())
      .then(result => {
        // Reverse the array before mapping {Credit: AdamCooper86 - StackOverflow}
        let data = result.data.slice(0).reverse();

        // creates an div element called card and maps the questions to it.
        let questions = data.map( question => {
          let i = 0;
          let answer = '';
          let time = '';
          let username = '';
          let answersUserid = '';
          let currAnswers = question.answers;
          let numAnswers = question.numAnswers || 0;

          // To display accepted answer or any random answer.
          let acceptedAnswer = currAnswers.filter( answer => {
            return answer.accepted;
          });
          if (acceptedAnswer.length > 0){
            answer = acceptedAnswer[0].body;
            time =  new Date(acceptedAnswer[0].timesubmitted).toDateString();
            username = acceptedAnswer[0].username;
            answersUserid = acceptedAnswer[0].userid;
          } else if (numAnswers > 0) {
            let randomIndex = Math.floor(Math.random() * currAnswers.length);
            answer = currAnswers[randomIndex].body;
            time = new Date(currAnswers[randomIndex].timesubmitted)
              .toDateString();
            username = currAnswers[randomIndex].username;
            answersUserid = currAnswers[randomIndex].userid;
          } else {
              answer = 'No answers yet';
              time = '';
              username = '';
          }
          return(
          <Card  key={question.id}>
            <div>
              <h3 className="qs-title">
                <a href={`${window.location.href.split('/')[0]}/questions/${question.id}`} 
                className="question">{question.title}</a></h3>
              <div>
                <h5 className="person-answer"><a className="inherit"
                href={`${location.href.split('/')[0]}/users/${answersUserid}`}>
                {username}</a><br />
                  <small>Answered: 	<span>{time}</span></small>
                </h5>
              </div>
              <p className="answer">
                {answer}
              </p>
              <h6>Answers: <span>{numAnswers}</span></h6>
            </div>
          </Card>
          );
        });
        this.setState({ data: questions });
      });

  }
  render() {
    return (
    <div>
      {this.state.data}
    </div>
    );
  }
}

export default Home;
