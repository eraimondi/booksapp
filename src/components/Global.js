import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component{
  constructor(props){
    super(props);
    this.state={
      query:'',
      items: []
    }
  }

  async search(){
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    const res = await fetch(`${BASE_URL}${this.state.query}`,{method:'GET'});
    const json = await res.json();
    this.setState({items: json.items});
    console.log(this.state.items);
    //.then(response => response.json())
    //.then(json => console.log(json);
  }

  render(){
    return (
      <div className="Global">
        <h2>Book Explorer!</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
            type="text"
            placeholder="search for a book"
            onChange={(e) => this.setState({query:e.target.value})}
            onKeyPress={event => {
              if(event.key==='Enter') {this.search()};
            }}/>
            <button onClick={() => this.search()}>Search</button>
            </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items}></Gallery>
      </div>
    )
  }
}

export default Global;
