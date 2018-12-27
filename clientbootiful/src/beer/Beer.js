import * as React from 'react';


class Beer extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "default",
      isGood: false
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
    });
  }

  render(){

    return <div key={this.state.id}>
      {this.state.name}
    </div>
  }
}

export default Beer;
