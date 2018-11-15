import React, { Component } from 'react';
import Button from './Button';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      title: {
        length: 0,
        content: '',
        message: '',
      },
      description: {
        length: 0,
        content: '',
        message: '',
      },
      serverResponse: {
        message: '',
      }
    };
    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.descChangeHandler = this.descChangeHandler.bind(this);
    this.postQuestionHandler = this.postQuestionHandler.bind(this);

  }

  titleChangeHandler(event) {
    let newTitle = event.target.value;
    let newLength = event.target.value.trim().length;
    this.setState({
      title: {
        length: newLength,
        content: newTitle,
        message: `${newLength} characters (title)`,
      },
    });
  }

  descChangeHandler(event) {
    let newTitle = event.target.value;
    let newLength = event.target.value.trim().length;
    this.setState({
      title: {
        length: newLength,
        content: newTitle,
        message: `${newLength} characters (title)`,
      }
    });
  }
  
  postQuestionHandler(event) {
    event.preventDefault();
    const { title, description } = this.state;
    fetch (`https://stackoverflow-by-theo1.herokuapp.com/v1/questions`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTQxMzU5OTU4LCJleHAiOjE1NDE5NjQ3NTh9.mQg6f4wEcLJfQZcbgWubf2ZIH9eeLpRS3PmyLMLk-hU'
      }),
      body: JSON.stringify({
        'title': title.content,
        'body': description.content,
      }),
    })
    .then( (response) => {
      console.log(response);
      return response.json();
    })
    .then( (result) => {
      console.log(result);
      // this.setState({});
    })
    .catch(error =>{
      console.log(error);
    });
  }


  // componentDidMount() {
  //   let titleInput = document.getElementById('title');
  //   let description = document.getElementById('description');
  //   let mssgDisp = document.getElementById('server-message');
  //   let askBtn = document.getElementById('send-btn');
  //   let lengthDisp = document.getElementById('server-message');

  //   askBtn.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     const token = window.localStorage.getItem('x-access-token');
  //     // Activate the extra small loader
  //     activateLoaderXs();

  //     fetch (url, {
  //       method: 'post',
  //       headers: new Headers({
  //         'Content-Type': 'application/json',
  //         'x-access-token': token
  //       }),
  //       body: JSON.stringify({
  //         'title': titleInput.value,
  //         'body': description.value 
  //       }),
  //     })
  //     .then( (response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then( (result) => {
  //       mssgDisp.nextElementSibling.style.display = 'none';
  //       if (result.statusCode === 201) {
  //         mssgDisp.setAttribute('class', 'text-success');
  //         mssgDisp.innerHTML = result.message;

  //         setTimeout(location.reload(true), 3000); //Reload the page from server
  //       } else if(result.statusCode === 401) {
  //         mssgDisp.setAttribute('class', 'text-danger');
  //         mssgDisp.innerHTML = 'You need to Sign in';
  //         logout();
  //       } else {
  //         mssgDisp.setAttribute('class', 'text-danger');
  //         mssgDisp.innerHTML = result.error;
  //       }
  //     })
  //     .catch(error =>{
  //       console.log(error);
  //     });
  //   });

  //   // Check post character length
  //   const titleCharLength = () => {
  //     lengthDisp.innerHTML = `${titleInput.value.length} Characters (title)`;
  //     if (titleInput.value.trim().length <= 50) {
  //       lengthDisp.setAttribute('class', 'text-success');
  //     } else {
  //       lengthDisp.setAttribute('class', 'text-danger');
  //     }
  //   }

  //   // Description
  //   const bodyCharLength = () => {
  //     lengthDisp.innerHTML = `${description.value.length} Characters (description)`;
  //     if (description.value.trim().length <= 250) {
  //       lengthDisp.setAttribute('class', 'text-success');
  //     } else {
  //       lengthDisp.setAttribute('class', 'text-danger');
  //     }
  //   }
  // }

  render() {
    return (
      <div className="card margin-top-15">
        <h5><span  id="username"> </span> <small>(you)</small></h5>
        <div className="message-display">
          <p id="server-message">{ this.state.title.message || this.state.description.message }</p>
          <div className="loader-xs" id="post-question-loader"></div>
        </div>
        <div className="question-form">
          <input type="text" name="question-input" placeholder="What is your question?" id="title" 
            onInput={this.titleChangeHandler} />
          <textarea placeholder="Description" id="description" onInput={this.bodyChangeHandler}></textarea>
          <div className="btn-group">
            <Button styleName="primary question-btn" id="send-btn" send={this.postQuestionHandler}>Ask Question</Button>
            <input type="reset" value="Cancel" />
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionForm;
