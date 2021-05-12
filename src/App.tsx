import React, { Component } from 'react';
import './App.css';
import BookList from './components/book-list/BookList';
import UpdateButton from './components/update-button/UpdateButton'
import { AppState } from './Types';

class App extends React.Component<{}, AppState> {


  constructor(props: Object) {
    super(props);
    this.state = {
      gotError: false,
      data: [{
        Title: '',
        Cost: 0,
        BookCategory: ''
      }],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  // App contains the fetch method
  fetchData(url: string) {
    fetch(url)
      .then(res => res.json())

      .then(data =>  {
        this.setState({gotError: false})
        this.setState({ data })
      })
      .catch(err => {
        this.setState({gotError: true})
        //TODO: logger class
        //TODO: error handling class
        console.log("Error!", err)
      })
  }

  render() {
    const { data } = this.state;
    const { gotError } = this.state
    return (
      <div className="app-container">
        <BookList data={data} gotError={gotError}/>
        <UpdateButton fetchData={this.fetchData} gotError={gotError} />
      </div>
    )
  }
}

export default App