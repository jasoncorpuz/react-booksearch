import React from 'react';
import ResultItem from './ResultItem'

class ResultList extends React.Component{
  
    render(){   
        console.log(this.props.results)
        if (this.props.results.length !== 0) {
        const resultItems = this
            .props
            .results
            .items
            .map((result, i) => 
               <ResultItem
               title={result.volumeInfo.title}
               printType={result.volumeInfo.printType}
               saleInfo={result.saleInfo.saleability}
               salePrice={result.saleInfo}
               key={i}
               >
               </ResultItem>
                )
                return(
                    <>
                    {resultItems}
                    </>
                )
         } else {
             return(
                 <div>search for something!</div>
             )
         }
      
    }
}

ResultList.defaultProps = {
    results: {}
}

export default ResultList;

