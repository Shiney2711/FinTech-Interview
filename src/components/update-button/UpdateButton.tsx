import React, { Component } from 'react';
import { UpdateButtonProps, UpdateButtonState } from '../../Types';
import './UpdateButton.css'

class UpdateButton extends React.Component<UpdateButtonProps, UpdateButtonState> {

    constructor(props: UpdateButtonProps) {
        super(props);
        this.state = { url: 'https://booklist.fgfdev.com.au/books' };//TODO: config file
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
            <button id="updateButton" className="update-button" onClick={() => this.getData()}>Update List</button><br></br>
            {errorMessage}
        </div>
        )
    }
  }

export default UpdateButton