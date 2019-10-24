import React from 'react';

//this component needs to fetch JSON from google in component will mount and use filters to filter out options.
// where to pass parameters? how to pass filters to parameters?
// needs to send data backup using a callback function

class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {    
                searchInput:''
            }
            
        };
    
    updateSearch = (event) => {
        this.setState({
            searchInput: event.target.value 
        });
      }
 
    render(){
        const { handleSearch } = this.props
        const { searchInput } = this.state
        return(
            <div>
                <form className='search-box'
                      onSubmit={ event => handleSearch(event, searchInput)}>
                    <label htmlFor='search-bar'>Book Search:</label>
                    <input 
                        type='text' 
                        name='title' 
                        id='title' 
                        placeholder='search a book...' 
                        value={this.state.searchInput}
                        onChange={this.updateSearch}
                        >        
                    </input>
                    <select 
                        name='filter-print' 
                        id='print-type' 
                        placeholder='all' 
                        value={this.props.printType}
                        onChange={this.props.updatePrintType}
                        >
                        <option >all</option>
                        <option value='partial'>partial</option>
                        <option value='all'>all</option>
                        <option value='ebooks'>ebooks</option>
                    </select>
                    <select 
                        name='filter-book' 
                        id='book-type' 
                        placeholder='No Filter' 
                        value={this.props.bookType}
                        onChange={this.props.updateBookType}
                        >
                        <option>No Filter</option>
                        <option value='free-ebooks'>Free</option>
                        <option value='paid-ebooks'>Paid</option>
                    </select>
                        <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default SearchBox;