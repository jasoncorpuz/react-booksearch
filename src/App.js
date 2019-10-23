import React from 'react';
import Searchbox from './SearchBox';
import ResultList from './ResultList'
import STORE from './STORE';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: STORE,
      books: {},
      query: null,
      q: 'harry%20potter',
      search: 'harry potter',
      printType: '',
      bookType: ''
    }
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value })
  }

  updatePrintType = (event) => {
    console.log(event.target.value)
    this.setState({ printType: event.target.value })
  }

  updateBookType = (event) => {
    console.log(event.target.value)
    this.setState({ bookType: event.target.value })
  }

  

  componentDidMount() {
    const params = {
      "q": 'harry potter',
      "key": "AIzaSyDfsnqQT7_iTbnibRhMT6LToDhvWgeAVdc"
    }

    function formatQueryString(params) {
      const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      return queryItems.join('&');
    }
    const bookUrl = 'https://www.googleapis.com/books/v1/volumes/?'
    const url = bookUrl + formatQueryString(params)
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
        books: resJson.items
      }))
   
      .catch(err => {
        'error'
      })
  }
  // API call happens here but how?
  // callback props
  render() {
    const results = this.state.data
    ? <ResultList results ={this.state.data}/>
    : <div>nothing</div>
    console.log(this.state.books)
    return (
      <main className='App'>
        <h1>Hello world!</h1>
        <Searchbox
          search={this.state.search}
          bookType={this.state.bookType}
          printType={this.state.print}
          updateSearch={this.updateSearch}
          updatePrintType={this.updatePrintType}
          updateBookType={this.updateBookType}
        />
        
      {results}
      
      </main>
    );
  }
}

export default App;