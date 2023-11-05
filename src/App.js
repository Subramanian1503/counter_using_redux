import { addCounter, minusCounter } from "./actions";
import "./index.css";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    // Suscribe the current component to the store
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  handlePlusButtonClick = () => {
    const { store } = this.props;
    store.dispatch(addCounter(store.getState()));
  };

  handleMinusButtonClick = () => {
    const { store } = this.props;
    store.dispatch(minusCounter(store.getState()));
  };

  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <h1>Count: {store.getState()}</h1>
        <h2>
          <button onClick={this.handlePlusButtonClick}>+</button>
          <button onClick={this.handleMinusButtonClick}>-</button>
        </h2>
      </div>
    );
  }
}

export default App;
