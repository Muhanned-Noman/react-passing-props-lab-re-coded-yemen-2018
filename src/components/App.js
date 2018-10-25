import React from 'react';

import FruitBasket from './FruitBasket';

const App = () => <FruitBasket />;

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstFilter: null,
      filters: [],
      fruit: []
    };
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  updateFilter = event => {
    console.log('update filter to: ', event.target.value);
    this.setState({firstFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        firstFilter={this.state.firstFilter}
        onUpdateFilter={this.updateFilter} 
      />
    );
  }
}

export default App;
