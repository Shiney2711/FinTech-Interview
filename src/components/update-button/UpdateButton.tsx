import React, { Component } from 'react';
import './UpdateButton.css'

class UpdateButton extends React.Component<{fetchData: any}, { url: string }> {

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
        return (  
        <div>
            <button onClick={() => this.getData()}>Update List</button>
        </div>
        )
    }
  }

export default UpdateButton