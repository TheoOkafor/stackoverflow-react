import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './Footer';
import Main from './main/Main';
import Home from './main/Home';
import AsideRight from './Aside/AsideRight';
import QuestionForm from './main/QuestionForm';
class App extends Component {

  render() {
    return (
    <div>
      <Header />
        <div className="row-container home">
          <Main>
            <h1>This is how it goes</h1>
            <QuestionForm />
            <Home />
          </Main>
          <AsideRight />
          </div>
      <Footer />
    </div>
    );
  }
}

export default App;
