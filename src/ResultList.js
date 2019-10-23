import React from 'react';
import ResultItem from './ResultItem'

class ResultList extends React.Component{
  
    render(){   
        if (this.props.results) {
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
                 <div>loading</div>
             )
         }
      
    }
}

ResultList.defaultProps = {
    results: {}
}

export default ResultList;

