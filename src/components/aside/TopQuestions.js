import React, { Component } from 'react';

class TopQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let url = `https://stackoverflow-by-theo1.herokuapp.com/v1/questions`
    fetch (url)
      .then( response => {
        return response.json();
      })
      .then ( result => {
        let questionSummary = [];
        let hasAccepted;
        let data =result.data.slice(0).reverse();

        //creates an div element called card and maps the questions to it.
        data.forEach( question => {
          let i = 0;
          let answer = '';
          let time = '';
          let username = '';
          let currAnswers = question.answers;
          let numAnswers = question.numAnswers || 0;

          //Makes an array of only accepted answer
          let acceptedAns = currAnswers.filter(answer => {
            if(answer.accepted){
              return true;
            }
          })
          if (acceptedAns.length > 0){
              hasAccepted = true;
          } else {
              hasAccepted = false;
          }

          questionSummary.push({
            id: question.id,
            numAnswers: question.numAnswers,
            title: question.title,
            hasAccepted: hasAccepted,
          });		
        });

        
        questionSummary.sort((a, b) => { 
          return b.numAnswers - a.numAnswers
        });
        const topQuestions = [];
        for (let i=0; i < 6; i++) {
          topQuestions.push(
            <tr key={questionSummary[i].id}>
              <td><p className={ `num-answer ${ questionSummary[i].hasAccepted?'selected': '' }` }>
                { questionSummary[i].numAnswers }</p></td>
              <td><p><a href={ `${ location.href.split('/')[0]}/questions/${questionSummary[i].id }` }>
                { questionSummary[i].title }</a></p></td>
            </tr>
          );
        }
        this.setState({ data: topQuestions });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <table className="table" id="top-questions">
        <tbody>
          { this.state.data }
        </tbody>
      </table>
    );
  }
}

export default TopQuestions;
