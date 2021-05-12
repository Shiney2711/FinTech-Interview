import React, { Component } from 'react';
import './BookList.css'

//cd C:\Program Files (x86)\Google\Chrome\Application
//chrome.exe --disable-web-security --user-data-dir="C:\Users\gbix9\Desktop\Uni"

class BookList extends React.Component<{data: any, totals: any}> {

    constructor(props: any) {//TODO: types
        super(props);
    }

    createBookListTable() {
        const { data } = this.props;
        return data.map((dataPoint: any, i: number) => {//TODO
            const { Title, Cost, BookCategory } = dataPoint
            let costRow = <td className="right-align" style={{width: "25%"}}><label>{this.roundAndConvert(Cost)}</label></td>
            let tax = Cost * 0.1
            let total = Cost * 1.1
            let totalRow = <td className="right-align" style={{width: "15%"}}>{this.roundAndConvert(total)}</td>
            if (BookCategory === "Crime") {
                let discountedCost = Cost * 0.95
                let savings = Cost - discountedCost
                this.props.totals.totalDiscount+=savings
                tax = discountedCost * 0.1
                total = discountedCost * 1.1
                costRow = <td className="right-align" style={{width: "25%"}}>
                    <label className="discounted-cost">{this.roundAndConvert(Cost)}</label><br></br>
                    <label className="price-update">{this.roundAndConvert(discountedCost)}</label><br></br>
                    <label className="price-update subtext">CRIME CATEGORY DEAL (-{this.roundAndConvert(savings)})</label>
                </td>

                totalRow = <td className="right-align" style={{width: "15%"}}>
                    <label className="discounted-cost">{this.roundAndConvert(total/1.1)}</label><br></br>
                    <label className="price-update">{this.roundAndConvert(total)}</label>
                </td>
            }
            this.props.totals.totalTax+=tax
            this.props.totals.totalCost+=total
            return (

                <tr className="data-row" key={i}>
                    <td style={{width: "15%"}}>
                        <label>{Title}</label><br></br>
                        <label className='subtext'>Category: {BookCategory}</label>
                    </td>
                    {costRow}
                    <td className="right-align" style={{width: "15%"}}>{this.roundAndConvert(tax)} <span className="subtext">(10%)</span></td>
                    {totalRow}
                </tr>
            )
        })
     }

     roundAndConvert(moneyNumber: number) {
        return "$" + moneyNumber.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
     }

     createSubTotalTable() {
         return (
             <div className="subtotal-container">
                 <table className="subtotal-table">
                     <tbody>
                        <tr className="subtotal-row">
                            <td className="header-text">Total Discount</td>
                            <td className="right-align price-update">-{this.roundAndConvert(this.props.totals.totalDiscount)}</td>
                        </tr>
                        <tr className="subtotal-row">
                            <td className="header-text">Total Tax</td>
                            <td className="right-align price-update">+{this.roundAndConvert(this.props.totals.totalTax)}</td>
                        </tr>
                        <tr className="subtotal-row">
                            <td className="header-text">Subtotal</td>
                            <td className="right-align">{this.roundAndConvert(this.props.totals.totalCost)}</td>
                        </tr>
                     </tbody>
                 </table>
             </div>
         )
     }

    render() {
        const { data } = this.props;
        console.log('data', data)
        return (
            <div>
                <div className="page-header">
                    <h3 className="title">FinTech Service Australia</h3>
                </div>
                <div>
                    <h2 className="sub-title">Fair Go Books</h2>
                </div>
                <table className='book-list-table'>
                    <thead>
                        <tr className="header-row">
                            <th className="left-align header-text">Book</th>
                            <th className="right-align header-text">Price</th>
                            <th className="right-align header-text">Tax</th>
                            <th className="right-align header-text">Total</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {this.createBookListTable()}
                    </tbody>
                </table>
                <div className="buffer"></div>
                <div>
                    {this.createSubTotalTable()}
                </div>
            </div>
            
        )
    }
}

export default BookList