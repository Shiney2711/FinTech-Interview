import React, { Component } from 'react';
import { BookListProps, Data } from '../../Types';
import './BookList.css'

//cd C:\Program Files (x86)\Google\Chrome\Application
//chrome.exe --disable-web-security --user-data-dir="C:\Users\gbix9\Desktop\Uni"

class BookList extends React.Component<BookListProps> {

    totalCost: number = 0
    totalTax: number = 0
    totalDiscount: number = 0

    constructor(props: BookListProps) {
        super(props);
    }

    createBookListTable() {
        const { data } = this.props;
        return data.map((dataPoint: Data, i: number) => {
            const { Title, Cost, BookCategory } = dataPoint
            let tax = Cost * 0.1
            let total = Cost * 1.1
            let costRow = <td className="right-align" style={{width: "25%"}}><label>{this.roundAndConvert(Cost)}</label></td>
            let totalRow = <td className="right-align" style={{width: "15%"}}>{this.roundAndConvert(total)}</td>
            
            if (BookCategory === "Crime") {
                let discountedCost = Cost * 0.95
                let savings = Cost - discountedCost
                tax = discountedCost * 0.1
                total = discountedCost * 1.1

                costRow = <td className="right-align" style={{width: "25%"}}>
                    <label className="discounted-cost">{this.roundAndConvert(Cost)}</label><br></br>
                    <label id="categoryDiscount" className="price-update">{this.roundAndConvert(discountedCost)}</label><br></br>
                    <label className="price-update subtext">CRIME CATEGORY DEAL (-{this.roundAndConvert(savings)})</label>
                </td>

                totalRow = <td className="right-align" style={{width: "15%"}}>
                    <label className="discounted-cost">{this.roundAndConvert(total/1.1)}</label><br></br>
                    <label className="price-update">{this.roundAndConvert(total)}</label>
                </td>
            }
            return (
                <tr className="data-row" key={i}>
                    <td style={{width: "15%"}}>
                        <label>{Title}</label><br></br>
                        <label className='subtext'>Category: {BookCategory}</label>
                    </td>
                    {costRow}
                    <td className="right-align" style={{width: "15%"}}>
                        <label id="taxAmount">{this.roundAndConvert(tax)}</label>
                        <label className="subtext"> (10%)</label>
                    </td>
                    {totalRow}
                </tr>
            )
        })
     }

     roundAndConvert(moneyNumber: number) {
        return "$" + moneyNumber.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
     }

     //TODO probs should be its own component
     createSubTotalTable() {
         return (
             <div className="subtotal-container">
                 <table className="subtotal-table">
                     <tbody>
                        <tr className="subtotal-row">
                            <td className="header-text">Total Discount</td>
                            <td id="discountTotal" className="right-align">-{this.roundAndConvert(this.totalDiscount)}</td>
                        </tr>
                        <tr className="subtotal-row">
                            <td className="header-text">Total Tax</td>
                            <td id="taxTotal" className="right-align">+{this.roundAndConvert(this.totalTax)}</td>
                        </tr>
                        <tr className="subtotal-row">
                            <td className="header-text">Subtotal</td>
                            <td id="subtotal" className="right-align">{this.roundAndConvert(this.totalCost)}</td>
                        </tr>
                     </tbody>
                 </table>
             </div>
        )
    }

    calculateTotals(data: Data[]) {
        let tax = 0
        let discount = 0
        let total = 0
        for (var dataPoint of data) {
            let cost = dataPoint.Cost
            if (dataPoint.BookCategory === "Crime") {
                discount+=cost * 0.05
                cost = cost * 0.95
            }
            tax+=cost*0.1
            total+=cost*1.1
        }
        this.totalCost = total
        this.totalTax = tax
        this.totalDiscount = discount
    }

    render() {
        this.totalCost = 0
        this.totalTax = 0
        this.totalDiscount = 0
        const { data } = this.props;
        this.calculateTotals(data)
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