import React, { Component } from 'react';
import TopQuestions from './TopQuestions';
class AsideRight extends Component {

  render() {
    return (
      <div className="sd-margin-12 d-margin-5">
        { this.props.children }
        <h3 className="side-title">Top Questions with Most Answers</h3>
        <div>
          <TopQuestions />
        </div>
      </div>
    );
  }
}

export default AsideRight;
