import * as React from 'react';
import Beer from './Beer.js';

class BeerList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8080/good-beers')
      .then(response => response.json())
      .then(data => this.setState({beers: data, isLoading: false}));
  }

  render() {
    const {beers, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>Beer List</h2>
        {beers.map(beer =>
          <Beer name={beer.name} id={beer.id} />
        )}
      </div>
    );
  }
}

export default BeerList;
