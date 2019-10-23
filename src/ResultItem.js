import React from 'react';

class ResultItem extends React.Component{


    render(){
        const forSale = this.props.saleInfo !== "NOT_FOR_SALE" ? 
        <p>{this.props.salePrice.listPrice.amount}</p> : <p>this isn't for sale</p>
        return(
            <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.printType}</p>
            {forSale}
            </div>
        )
    }
}

ResultItem.defaultProps = {
    title:'',
    printType:'',
    saleInfo:''
}

export default ResultItem;

// "saleInfo": {
//     "country": "US",
//     "saleability": "FOR_SALE",
//     "isEbook": true,
//     "listPrice": {
//         "amount": 8.99,
//         "currencyCode": "USD"
//     },

// "saleInfo": {
//     "country": "US",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
// },