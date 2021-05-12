import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/book-list/BookList';
import UpdateButton from './components/update-button/UpdateButton'
import Spinner from 'react-bootstrap/Spinner'

class App extends React.Component<{}, { data: any, totals: any, gotError: Boolean }> {//TODO types


  constructor(props: any) {//TODO types
    super(props);
    this.state = {
      gotError: false,
      data: [],
      totals: {
        totalCost: 0,
        totalTax: 0,
        totalDiscount: 0
      }
    };
    this.fetchData = this.fetchData.bind(this);
  }

  // App contains the fetch method
  fetchData(url: string) {
    let data = [
      {
        "Title": "Jack the Ripper",
        "BookCategory": "Crime",
        "Cost": 16
      },
      {
        "Title": "Queen of Storms",
        "BookCategory": "Fantasy",
        "Cost": 30.95
      },
      {
        "Title": "Unsolved crimes",
        "BookCategory": "Crime",
        "Cost": 10.99
      },
      {
        "Title": "Clean Code",
        "BookCategory": "Romance",
        "Cost": 45.26
      },
      {
        "Title": "Heresy",
        "BookCategory": "Fantasy",
        "Cost": 6.8
      },
      {
        "Title": "The Murder at the Vicarage",
        "BookCategory": "Crime",
        "Cost": 16.25
      },
      {
        "Title": "The Tolkien Years",
        "BookCategory": "Fantasy",
        "Cost": 22.9
      }
    ]
    
    this.setState({data})
    let totals = {
      totalCost: 0,
      totalTax: 0,
      totalDiscount: 0
    }
    this.setState({totals})
    // fetch(url)
    //   .then(res => res.json())

    //   .then(data =>  {
    //     this.setState({gotError: false})
    //     this.setState({ data })
    //   })
    //   .catch(err => {
    //     this.setState({gotError: true})
    //     //TODO: logger class
    //     //TODO: error handling class
    //     console.log("Error!", err)
    //   })
  }

  render() {
    const { data } = this.state;
    const { totals } = this.state;
    const { gotError } = this.state
    return (
      <div className="app-container">
        <BookList data={data} totals={totals} />
        <UpdateButton fetchData={this.fetchData} gotError={gotError} />
      </div>
    )
  }
}

export default App