import React, { Component } from 'react';
import './UpdateButton.css'

class UpdateButton extends React.Component<{fetchData: any, gotError: Boolean}, { url: string }> {

    constructor(props: any) {//TODO: types
        super(props);
        this.state = { url: 'https://booklist.fgfdev.com.au/books' };
    }

    componentDidMount () {
        this.getData()
    }

    getData() {
        const { url } = this.state;
        const { fetchData } = this.props;
        fetchData(url)
    }

    render() {
        const { gotError } = this.props
        let errorMessage = null
        if (gotError) {
            errorMessage = <label className="error-message">
              Error Fetching Data! Please Try Again.
            </label>
          }
        return (  
        <div className="button-container">
            <button className="update-button" onClick={() => this.getData()}>Update List</button><br></br>
            {errorMessage}
        </div>
        )
    }
  }

export default UpdateButton