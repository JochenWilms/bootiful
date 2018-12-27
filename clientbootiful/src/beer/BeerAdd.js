import * as React from 'react';


class BeerAdd extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      isGood: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      console.log(event.target.value)
      this.setState({[name]: value});
  }

  handleSubmit(event) {
    fetch('http://localhost:8080/add-beers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        isGood: this.state.isGood
      })
    });
    console.log(JSON.stringify({
      name: this.state.name,
      isGood: this.state.isGood
    }) );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br/>
        <br/>
        <label>
          is it a good beer?:
          <br/>
          <select name="isGood" value={this.state.isGood} onChange={this.handleChange}>
           <option value="true">delicious</option>
           <option value="false">just crap</option>
         </select>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BeerAdd;
