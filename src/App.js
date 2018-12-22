import React, { Component } from 'react';
import './App.css';

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book, written by the Displayed Author</p>
      </div>
    </div>
  );
}

function Turn({ author, books }) {
  return (
    <div className="row turn">
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map(title => (
          <p>{title}}</p>
        ))}
      </div>
    </div>
  );
}

function Continue() {
  return <div />;
}

function Footer() {
  return (
    <div className="row">
      <div className="col-12">
        <p className="text-muted credit">
          Images from{' '}
          <a href="https://commons.wikimedia.org/">Wikimedia Commons</a>
        </p>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default App;
