import React, { Component } from 'react';

//cd C:\Program Files (x86)\Google\Chrome\Application
//chrome.exe --disable-web-security --user-data-dir="C:\Users\gbix9\Desktop\Uni"

class BookList extends React.Component<{}, { data: any }> {//TODO
    
    constructor(props: any) { //TODO
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        };
        
        fetch('https://booklist.fgfdev.com.au/books')
        .then(response => {
            console.log(response)
            const data = response.json()
            .then(data => {
                console.log(data)
                this.setState({ data: data })
            })
        })
    }

    render() {
        const { data } = this.state;
        return (
            <tbody>

                {data && data.map((dataPoint: any) => {
                    return <tr key={dataPoint.Title}>
                                <td>{dataPoint.Title}</td>
                            </tr>
                })}
            </tbody>
        );
    }
}

export default BookList;