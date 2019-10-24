import React from 'react';
import Searchbox from './SearchBox';
import ResultList from './ResultList'
import STORE from './STORE';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: STORE,
      books: [],
      q: 'lion',
      search: 'lion king',
      printType: '',
      bookType: ''
    }
  }

 

  updatePrintType = (event) => {
    console.log(event.target.value)
    this.setState({ printType: event.target.value })
  }

  updateBookType = (event) => {
    console.log(event.target.value)
    this.setState({ bookType: event.target.value })
  }

  

  handleSearch = (event, searchInput) => {
    event.preventDefault();
   
    const bookUrl = 'https://www.googleapis.com/books/v1/volumes/'
    const key ='AIzaSyDfsnqQT7_iTbnibRhMT6LToDhvWgeAVdc'
    const url = this.formatQueryString(bookUrl,searchInput,key)

    console.log(url)

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('error, try again?')
        }
        return res;
      })
      .then(res => res.json())
      .then(resJson => this.setState({
        books: resJson
      }))
   
      .catch(err => {
        'error'
      })
  }
  // API call happens here but how?
  // callback props
  formatQueryString = (bookUrl,searchInput,key) => {
    const {bookType , printType} = this.state
    let formattedQuery;
    if (searchInput !== '') {
      formattedQuery = '?q=' + searchInput;
    }
    if(bookType !== '') {
      formattedQuery = formattedQuery + '&filter=' + bookType
    }
    if(printType !=='') {
      formattedQuery = formattedQuery + '&bookType=' + printType   
    }
    const formattedUrl = bookUrl + formattedQuery + '&key' + key;
    console.log('URL:', formattedUrl);
    return formattedUrl
  } 



  render() {
    const { books } = this.state
    console.log({books})
    const results = this.state.data
    ? <ResultList results ={ books }/> 
    : <div>nothing</div>
    console.log(this.state.data.length)
    return (
      <main className='App'>
        <h1>Hello world!</h1>
        <Searchbox

          bookType={this.state.bookType}
          printType={this.state.print}
          updateSearch={this.updateSearch}
          updatePrintType={this.updatePrintType}
          updateBookType={this.updateBookType}
          handleSearch={this.handleSearch}
        />
        
      {results}
      
      </main>
    );
  }
}

export default App;